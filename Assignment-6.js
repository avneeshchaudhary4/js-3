function reverseString(avi){
    var newstring ="";
    for(var i=avi.length-1;i>=0;i--){
        newstring += avi[i];
    }
    return newstring;
}
let b=reverseString("avneesh");
console.log(b);