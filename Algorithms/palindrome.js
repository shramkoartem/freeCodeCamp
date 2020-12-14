// Return true if the given string is a palindrome. Otherwise, return false.

function palindrome(str) {
  // clean up the string 
  let regex = /\W|_/g;
  str = str.toLowerCase().replace(regex, '');
  
  // main logic
  for(let i=0; i< Math.floor(str.length/2); i++ ){
    if(str[i] !== str[str.length-1-i]){
      return false;
    }
  }
  return true;
}



console.log(palindrome("eye"));
