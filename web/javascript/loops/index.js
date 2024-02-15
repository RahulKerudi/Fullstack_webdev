let a=5
for (let i = 0; i < a; i++) {
//   console.log(i)
}

let obj={
    name:"rahul",
    age:20,
    no:456,
}

for (const key in obj) {
    const element = obj[key];
    // console.log(key,":",element)
}

for (const iterator of "Iterator") {
    // console.log(iterator)
}

let i=0
while(i<8){
    // console.log(i)
    i++
}

let c=10
do {
    // console.log(c)
    c++
} while (c<8);