const mtk = 100
const bing = 100
const bind = 100
const ipa = 100
const totaa = mtk + bing + bind + ipa

const rata = totaa / 4
// const rata = 71


if (typeof totaa === 'string' || mtk === null || bind === null || bing === null || ipa === null) {
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

