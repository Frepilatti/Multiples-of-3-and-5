function solution(number){
    let list = [];
    for (i = 0; i < number; i++) {
      list.push(i);
    }
  
    let ar = [];
    
    for (i = 0; i <list.length; i++) {
      
      if (list[i] % 3 == 0 || list[i] % 5 == 0) {
        ar.push(list[i]);
      
      }
      
    }
    let result = 0;
    ar.forEach(value =>{
      result += value;
    });
    return result;
  }