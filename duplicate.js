let dupli = [56, 78, 90, 23, 90, 76, 43, 56];

dupli.sort(); // sort array

for (let i = 0; i < dupli.length; i++) {
    if (dupli[i] === dupli[i + 1]) {
        console.log("Duplicate num is :",dupli[i]);
    }
}


let dup = [56, 78, 90, 23, 90, 76, 43, 56];
for(let i=0;i<dup.length;i++){
   for(let j=i+1;j<dup.length;j++){
        if(dup[i]===dup[j]){
        console.log(dup[i])

    }
 }
}
