
let result, mine;
const timeArr = new Array(31536000, 525600, 8760, 52, 12);
let s_plusNum = 0;
let val, secMoney;

$(document).ready(function($) {
  
  result = document.querySelectorAll(".result")[0];
  mine = document.querySelectorAll('.mine')[0];

  //테베스 연봉 : 47320000000
  const button = document.querySelector('button');
  button.addEventListener("click", resultFunc );
  button.click();

  function resultFunc() {	
    val = document.querySelector('input').value;
    secMoney = val / timeArr[0];
    
    mine.querySelectorAll(".min em")[0].innerText = returnCash(val, timeArr[1]) + "원";
    mine.querySelectorAll(".houre em")[0].innerHTML = returnCash(val, timeArr[2]) + "원";
    mine.querySelectorAll(".week em")[0].innerHTML = returnCash(val, timeArr[3]) + "원";
    mine.querySelectorAll(".month em")[0].innerHTML = returnCash(val, timeArr[4]) + "원";
    
    document.querySelectorAll(".oneThousand em")[0].innerHTML = timeCalc(secMoney, 10000000);
    document.querySelectorAll(".oneMillion em")[0].innerHTML = timeCalc(secMoney, 100000000);
    
    s_plusNum = 0;
    timerStart();
  }
})

var timer;

function timerStart(){
  clearInterval(timer);
  timer = setInterval(function(){ 
    s_plusNum += 0.01;
    result.innerHTML = numberWithCommas(Math.ceil(s_plusNum)) + "초에 " + returnCash(secMoney * s_plusNum, 1) +"원";
  }, 10)
}

function timeCalc(m, target ){
  var tNum = target/ m ;
  var unit = "초";
  
  if(tNum >= 60) { //60초 이상
    tNum = tNum / 60;
    unit = "초";
  }
  if(tNum >= 60) { //60분 이상
    tNum = tNum / 60;
    unit = "시간";
  }
  if(tNum >= 24) { //24시간
    tNum = tNum / 24;
    unit = "일";
  }
  if(tNum >= 365) { //24시간
    tNum = tNum / 365;
    unit = "년";
  }
  //console.log(tNum)
  return tNum.toFixed(1) + unit;
}


function returnCash(money, num){
  return numberWithCommas((money / num).toFixed(0));
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}