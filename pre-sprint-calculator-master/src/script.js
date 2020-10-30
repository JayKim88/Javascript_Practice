var firstNum, operator, previousKey, previousNum;
// 위의 전역변수를 잘 활용하여, 계산기를 구현합니다.

const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const display = document.querySelector('.calculator__display'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// ! 위 코드(Line 1 - 6)는 수정하지 마세요.

function calculate(n1, operator, n2) {
  let result = "";
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  
  if(operator ==='+'){
      
    result = String(Number(n1) + Number(n2));

  }
  if(operator ==='-'){
      
    result = String(Number(n1) - Number(n2));

  }
  if(operator ==='*'){
      
    result = String(Number(n1) * Number(n2));

  }
  if(operator ==='/'){
      
    result = String(Number(n1) / Number(n2));

  }

  return Number(result);

}

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다. 
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다. 클릭한 수이다.  
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.

  if (target.matches('button')) {
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      
      if(display.textContent === '0'){
        display.textContent = buttonContent;
        console.log('숫자' + buttonContent +'버튼')
        
      } else if (previousKey === 'operator'){
        display.textContent = buttonContent;
        console.log('숫자' + buttonContent +'버튼')
      } else if (display.textContent !== '0' ){
        display.textContent = display.textContent + buttonContent;
        console.log('숫자' + buttonContent +'버튼')
      }
      
      //숫자, 0 , 연산자 
      previousKey = 'number';
    }

    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
      operator = buttonContent;
      firstNum = display.textContent;  //operator 가 찍힌다는 것은 기존 숫자가 있다는 것. 
      previousKey = 'operator';
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
      // if(display.textContent === 0){
      //   display.textContent = 0
      // }
      previousKey = 'decimal';
    }

    if (action === 'clear') {
      console.log('초기화 버튼');

      firstNum = undefined;
      operator = undefined
      display.textContent = '0';

    }

    if (action === 'calculate') {
      // if(previousKey !=='number'){
      //   display.textContent = firstNum;

      // } 9 + = 9  두번째 수의 입력 없이도 결과가 나옴. 수정필요. 
      console.log('계산 버튼');
      display.textContent = calculate(firstNum, operator, display.textContent)
      previousKey = 'calculate';
    }
  }
});
