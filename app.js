const coinForm = document.querySelector(".coin-form");
const coinList = document.querySelector("#coin-list");
const coinInput = document.querySelector("#coin-price");
const addAlarm = document.querySelector("#alarm-btn");
const alarmList = document.querySelector("#alarm-list");

//01. 초기 준비
function handleCoin(e){
    e.preventDefault(); //텍스트 양식 새로고침 방지 입니다.
    const coinListValue = coinList.value;
    const coinInputValue = coinInput.value;
    coinInput.value = ""; //설정 버튼을 클릭시에 텍스트 양식을 비웁니다.
    drawingCoinList(coinListValue , coinInputValue); //02. 입력 부분 함수 불러옴
}

coinForm.addEventListener("submit" , handleCoin);

//02. 입력
function drawingCoinList(coinListValue , coinInputValue){
    const li = document.createElement("li");
    const firstSpan = document.createElement("span");
    const secondSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click" , deleteAlarm);
    deleteBtn.innerText = "삭제";
    firstSpan.innerText = coinListValue;
    secondSpan.innerText = coinInputValue;
    li.appendChild(firstSpan);
    li.appendChild(secondSpan);
    li.appendChild(deleteBtn);
    alarmList.appendChild(li);
}

//03. 삭제
function deleteAlarm(e){
    const deleteLi = e.target.parentElement; //삭제하려는 요소가 어떤 li인지 찾음
    deleteLi.remove(); //li를 삭제함
}

//텍스트 양식에 숫자만 입력을 알림
function textNumber(){
    if(coinInput.value === number){
        handleCoin(e)
    }else {
        alert("숫자만 입력해주세요");
    }
}