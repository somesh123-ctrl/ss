var numbers = [2,4,6,8,10]
let length = numbers.length;
for (var i = 0; i < length/2; i++){
  let temp;
  temp=numbers[i];
  numbers[i]= numbers[length-1-i];
   numbers[length-1-i] =temp; 
}

for (var i = 1; i < length; i=i+2){
    let a=numbers[length-i];

    for (var j = length-1; j>i; j--){
     numbers[j] = numbers[j-1];             
        
}
    numbers[i]=a;

}

numbers.forEach(function(entry) {
  console.log(entry);
});
