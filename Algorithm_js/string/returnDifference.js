// 두 수를 입력받아 두 수의 차이를 나타내는 메세지를 리턴해야 합니다.

 

//     문자열 간 덧셈 연산은 금지됩니다.
//     Template string(template literal)을 사용해 풀어야 합니다.
//     점수 간 차이는 절대값(absolute)을 사용합니다.


function returnDifference(num1, num2) {
    // TODO: 여기에 코드를 작성합니다.
    return `${num1}, ${num2}의 차이는 ${String(Math.abs(num1-num2))}입니다.`
  }
  
  /* 
  ` ` 은 기입되는 것들을 문자열로 바꿔준다. 
  템플릿 리터럴의 ${}터표현식 은 처리된 값(데이터)을 문자열로 반환한다.
  Math.abs(): 괄호안 값의 절대값을 구한다. 
  */