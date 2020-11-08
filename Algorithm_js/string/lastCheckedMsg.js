// 사용자의 이름과 미접속 시간(분)을 입력받아 조건별로 다른 메세지를 리턴해야 합니다.

//     string 타입을 리턴해야 합니다.
//     미접속 시간이 1시간 보다 적을 경우, 분 단위로 표기합니다.
//     미접속 시간이 1시간 보다 크고 24시간 보다 적을 경우, 시간 단위로 내림처리하여 표기합니다.
//     미접속 시간이 24시간 보다 클 경우, 일 단위로 내림처리하여 표기합니다.

function lastCheckedMsg(name, period) {
    // TODO: 여기에 코드를 작성합니다.
    if (period < 60){
      return `${name}: ${period}분 전에 접속함`
    } else if(60 < period && period< 1440){
      return `${name}: ${Math.floor(period/60)}시간 전에 접속함`
    } else if(period > 1440){
      return `${name}: ${Math.floor(period/1440)}일 전에 접속함`
    }
  }
  
  /* 
  a < num < b 을 자바스크립트에서 처리할 때 처음부터 순서대로 처리가 되어서
  (a < num) < b 이런식으로 조건문 처리가 되는데
  (a < num)이 값은 boolean값인 true or false로 출력되어 결국 조건문 전체가
  true or false < 10 이런식으로 되어 
  항상 전체 결과값이 true가 나온다. 따라서 a < num && num << b 로 작성해야 함.
  */