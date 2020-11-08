// 숫자 문자열을 입력받아 문자열을 구성하는 각 숫자 중 가장 큰 수를 나타내는 숫자를 리턴해야 합니다.

// 인자: string 타입의 숫자 문자열

// 출력: string 타입을 리턴해야 합니다.

//     반복문(for)문을 사용해야 합니다.
//     str.split 사용은 금지됩니다.
//     빈 문자열을 입력받은 경우, 0을 리턴해야 합니다.

function returnMaxFromString(str) {
    // TODO: 여기에 코드를 작성합니다.
  
      let maxNumber = 0;
  
      for (i=1; i<=9;i++) {
        for(e=0; e < str.length; e++){
          if(i === Number(str[e])){
            maxNumber = i 
          }
        }
      }
      return String(maxNumber);
  }