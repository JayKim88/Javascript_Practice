    // 만약 주어진 점수가 100을 초과하거나 0 미만인 경우, 문자열 'INVALID SCORE'를 리턴해야 합니다.
    // 각 등급의 최고 점수보다 7점 이하인 경우, 등급과 함께 '-'를 리턴해야 합니다.
    // 각 등급의 최저 점수보다 8점 이상인 경우, 등급과 함께 '+'를 리턴해야 합니다.
    // F+ 와 F- 는 존재하지 않습니다.

    function plusAndMinus(score) {
        const extra = score % 10;
        if (extra <= 2){ //100이라는 특수한 경우가 존재하므로 따로 if조건을 만들어 return 한다. 
          return '-';
        } else if(extra >= 8){ 
          return '+';
        } 
        return '';
      }
      
      function convertScore(score) {
        // TODO: 여기에 코드를 작성합니다.
        let grade;
        if (score > 100 || score < 0){
          return 'INVALID SCORE'; //return으로 결과를 얻는다.
        } 
        if (score === 100){ 
          return 'A+'; //return으로 결과를 얻는다. 더이상 진행될 필요없기 때문이다. 
        }
        if (score >= 90){
          grade = 'A';
        } else if(score >= 80){
          grade = 'B';
        } else if(score >= 70){
          grade = 'C';
        } else if(score >= 60){
          grade = 'D';
        } else {
          grade = 'F';
        }
        if (grade !== 'F'){
          grade = grade + plusAndMinus(score); //F에는 +,-가 없다.
        }
        return grade;
      }