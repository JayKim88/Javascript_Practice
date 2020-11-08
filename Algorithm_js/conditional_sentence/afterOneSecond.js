//시, 분, 초를 입력받아 1초를 더한 결과값을 특정 형태의 메시지로 리턴해야 합니다.

function afterOneSecond(hour, minute, second) {
    // TODO: 여기에 코드를 작성합니다.
    
      if (second === 59){
        minute += 1;
        second = 0;
      } else {
        second += 1;
      }
  
      if (minute === 60){
        hour += 1;
        minute = 0;
      } 
        
      if (hour === 24){
        hour = 0;
      }
      return '1초 뒤에 ' + hour + '시 ' + minute + '분 ' + second + '초 입니다'
  }

// 초가 변화하며 분에 영향을 주고 
// 분이 변화하며 시에 영향을 준다. 즉 초->분->시 차례로 순차적으로 코딩을 하는 것이 효율적이다.  