// const mtk = 80
// const bing = 90
// const bind = 89
// const ipa = 69

// const total = mtk  + bing + bind + ipa
// // const rata = total / 4

// const rata = 10;



// for(let i = 1; i <= 100; i++  ) {
//    if (  rata === i >=59 ) {
//        console.log("a")
//        break
//    } else if (rata === i >= 100 ) {
//         console.log("b")
//         break
//    } 
//    else {
//        console.log('salah')
//        break
//    }
// }



// function nilai(a,b,c,d) {
//   const penjumlahan = a + b + c + d
//     return penjumlahan / 4
// }

// let i = 0;
// let text = ""
// while (i < 10) {
//     text += "The number is " + i;
    
// }

// console.log(text)


// var grades = [80, 90,89,69];

// var total = 0;
// for (var i = 0; i < grades.length; i++) {
//     total  += grades[i]
    
// }
// var avg = total / grades.length;

// console.log(avg)


const mtk = 100
const bing = 100
const bind = 100
const ipa = null
const totaa = mtk + bing + bind + ipa

const rata = totaa / 4
// const rata = 71


if(typeof totaa  === 'string' ||  mtk === 0 ||  bind === 0 ||  bing === 0 || ipa === 0) {
    console.log("nilai yang di input tidak boleh kosong dan input harus berupa number");
} else {
    if (rata >= 90 && rata <= 100) {
        console.log(`rata rata anda ${rata} dengan grade A`)
    } else if (rata >= 80 && rata < 90) {
        console.log(`rata rata anda ${rata} dengan grade B`)
    } else if (rata >= 70 && rata < 80) {
        console.log(`rata rata anda ${rata} dengan grade C`)
    } else {
        console.log(`rata rata anda ${rata} dengan grade D`)
      
    } 
}

