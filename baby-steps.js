function isNumber(char) {
    if (typeof char !== 'string') {
      return false;
    }
  
    if (char.trim() === '') {
      return false;
    }
  
    return !isNaN(char);
  }
var s=0;
for(var i=0;i<process.argv.length;i++){
    if(isNumber(process.argv[i])==true)
s+=parseInt(process.argv[i]);
}
console.log(s)