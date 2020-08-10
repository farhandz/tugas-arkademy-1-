
let data = ""
const row  = "tayo"
if(typeof row !== "number") {
    console.log("data bukan number")
} else{
    for(let i = row; i >= 1; i--) {
       for(let j = 1; j <= i; j++) {
           data += j
       }
        data += '\n'
    } 
}

console.log(data)