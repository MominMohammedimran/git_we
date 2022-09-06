let str=naman;
let count=0
for(let i=0;i<str.length;i++){
    if(str[i]==str[str.length-1]){
        count++
    }
}
if(count==str.length){
    console.log("given string ",str, "is palindrome")
}