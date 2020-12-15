function convertToRoman(num) {
    let ints = [1000, 900,  500, 400, 100,  90, 50,  40, 10,  9,   5,  4,   1];
    let nums = ['M',  'CM', 'D', 'CD','C', 'XC','L','XL','X','IX','V','IV','I'];

    let res = [];

    for(let i=0; i<ints.length; i++){
        let count = Math.floor(num / ints[i]);
        res.push(nums[i].repeat(count));
        num -= ints[i]*count
    }
 return res.join("");
}

console.log(convertToRoman(36));
