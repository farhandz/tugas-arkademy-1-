let data = {
    id: 1,
    name: "Leane  Graham",
    username: "Bret",
    email: "sincerre@april@april.biz",
    address: {
        street: "kulas light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "922298-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}


const { address } = data
console.log(`ini street ${address.street} dan ini  city ${address.city}`)

const farhan  = {...data, name: "farhan ammar dzakwan", email: "ammrjoz09@gmail.com", hobby: "fishing"}
console.log(farhan)

// console.log(address.city)
// console.log(address.street)