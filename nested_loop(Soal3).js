
let data = ""
const row  = "tay"
if(typeof row !== "number") {
    console.log("data bukan number")
} else{
    for(let i = 5; i >= 1; i--) {
       for(let j = 1; j <= i; j++) {
           data += j
       }
        data += '\n'
    } 
}

console.log(data)