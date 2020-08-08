// let row = 5

// for (let i = 1; i < row; i++) {
//     for (let j = 1; j <= (row - i); j++) {
//         document.write("&nbsp")
//     }
//     for (let k = 1; k <= i; k++) {
//    tugas arka 1
let data = ""
for(let i = 5; i >= 1; i--) {
   for(let j = 1; j <= i; j++) {
       data += j
   }

    data += '\n'
} 

console.log(data)