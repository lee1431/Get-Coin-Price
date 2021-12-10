//알림 부분
const getCoinForm = document.querySelector("#get-coin");
const getCoinName = document.querySelector("#get-coin-name");
const alarmSetPrice = document.querySelector("#alarm-set-price");
const coinAlarmList = document.querySelector("#coin-alarm-list");

//코인 목록 부분
const coinNameSection = document.querySelector(".coin-name");
const coinOpenPrice = document.querySelector(".open-price");
const coinClosePrice = document.querySelector(".close-price");
const alarmSetBtn = document.querySelector(".alarm-set-btn");

//목록에서 코인 정보 가져오기
function getCoinInfoSend(e){
    const getCoinInfoName = e.target.parentElement.children[0].innerText;
    getCoinName.value = getCoinInfoName;
}
alarmSetBtn.addEventListener("click" , getCoinInfoSend);

//준비단계
function getCoinPriceReady(e){
    e.preventDefault()
    const getCoinNameValue = getCoinName.value;
    const alarmSetPriceValue = alarmSetPrice.value;
    alarmSetPrice.value = "";
    getCoinPriceMakeList(getCoinNameValue , alarmSetPriceValue)
}
getCoinForm.addEventListener("submit" , getCoinPriceReady);

//알림추가
function getCoinPriceMakeList(getCoinNameValue , alarmSetPriceValue){
    const li = document.createElement("li");
    const nameSpan = document.createElement("span");
    const priceSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    deleteBtn.addEventListener("click" , getCoinPriceDeleteList);
    nameSpan.innerText = getCoinNameValue;
    priceSpan.innerText = alarmSetPriceValue;
    deleteBtn.innerText = "삭제";
    li.appendChild(nameSpan);
    li.appendChild(priceSpan);
    li.appendChild(deleteBtn);
    coinAlarmList.appendChild(li);
    if(priceSpan.innerText > coinClosePrice.innerText){
        alert("지정가를 돌파했습니다.");
    }
}

//알림 삭제
function getCoinPriceDeleteList(e){
    const deleteInfo = e.target.parentElement;
    deleteInfo.remove();
}

//빗썸 api
fetch("https://api.bithumb.com/public/ticker/ALL_KRW")
    .then(function(coinData){
        return coinData.json();
    })
    .then(function(coinData){
        const openBTC = coinData.data.BTC.opening_price;
        const closeBTC = coinData.data.BTC.closing_price;
        coinOpenPrice.innerText = openBTC;
        coinClosePrice.innerText = closeBTC;

    });

