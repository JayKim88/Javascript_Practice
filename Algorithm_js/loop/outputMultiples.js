// 두 개의 수를 입력받아 두 수를 포함해 두 수 사이의 수 중 2의 배수의 개수를 리턴해야 합니다.

//     반복문(for)문을 사용해야 합니다.
//     num1이 num2보다 작지 않을 수도 있습니다.
//     0은 2의 배수가 아니라고 가정합니다.

function outputMultiples(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
  
      let count = 0;
  
      if (num1 <= num2){
        for(num1; num1<=num2; num1++){
  
            if(num1 !== 0){
              if(num1 % 2 === 0){
                      count++
              } 
            } 
          }
      }
  
      else {
        for(num2; num2<=num1; num2++){
            if(num2 !== 0){
              if(num2 % 2 === 0){
                      count++
              }
            } 
          }
      }
      return count;
  } 

// 크게 if(num1 <= num2), else (num1 > num2) 인 경우로 나누어 진행한다.

// 0은 2의 배수가 아니므로 코드에서 아예 배제해버린다. num1 or num2 !==0 인 경우에만 배수를 확인한다.