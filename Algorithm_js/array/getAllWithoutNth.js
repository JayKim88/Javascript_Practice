// 배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴해야 합니다.
function getAllWithoutNth(arr, n) {
    // TODO: 여기에 코드를 작성합니다.
  
    if(arr.length < n){
      return arr;
    } 
    arr.splice(n, 1)
    return arr;
  }