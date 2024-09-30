//ne1306@fayoum.ed.eg
let em = document.getElementById("em");
let firsname = document.getElementById("fn");
let lastname = document.getElementById("ln");
let phone = document.getElementById("ph");
let data = document.getElementById("birth");
let nform = document.querySelector("form");

let fnreg = /^[A-Z][a-zA-Z]{2,}$/;
let lnreg = /^[A-Z][a-zA-Z]{2,}$/;
let phreg = /^(01)[0-9]{9}$/;
let birthreg = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
let emreg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

nform.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!fnreg.test(firsname.value)) {
        swal("Invalid First Name");
        firsname.focus();
    } else if (!lnreg.test(lastname.value)) {
        swal("Invalid Last Name");
        lastname.focus();
    } else if (!phreg.test(phone.value)) {
        swal("Invalid Phone Number");
        phone.focus();
    } else if (!birthreg.test(data.value)) {
        swal("Invalid Date of Birth");
        data.focus();
    } else if (!emreg.test(em.value)) {
        swal("Invalid Email");
        em.focus();
    } else {
        swal("Form Submitted Successfully");
        firsname.value = "";
        lastname.value = "";
        phone.value = "";
        data.value = "";
        em.value = "";
    }
});


// let books=[
// {
//     name:"harry potter",
//     price:100,
//     author:"J.K Rowling",
//     number_of_books:10,
// },
// {
//     name:"prince of persia",
//     price:200,
//     author:"mohamed",
//     number_of_books:15
    
// },
// {
//     name:"the lord of the rings",
//     price:300,
//     author:"mohamed",
//     number_of_books:20   
// },
// {
//     name:"the hobbit",
//     price:400,
//     author:"mohamed",
//     number_of_books:25
  
// }

// ]
// // books.forEach((book)=>{
// //     document.write(`<h1>name book is : ${book.name}</h1>`)
// //     document.write(`<h3>copies of this book is : ${book.number_of_books}</h3>`)
// // });

//  let array=[21,11,10,20,30,40,50,53,1,7,9,12];
// // let mularray=array.reduce((m,n)=>{
// //     return m*n;
    
// // },1)
// // console.log(mularray);
// // let foutput=array.filter((n)=>{
// //     return n%2==0;
// // })
// // console.log(foutput);
// let products =[
//     {
//         name:"shirt",
//         price: 100,
//         category: "clothing"
//     },
//     {
//         name:"blouse",
//         price: 200,
//         category: "clothing"
//     },
//     {
//         name:"mobile",
//         price: 3000,
//         category: "electronics"
//     },
//     {
//         name:"laptop",
//         price: 20000,
//         category: "electronics"
//     },
//     {
//         name:"coat",
//         price: 500,
//         category: "clothing"
//     }
// ]

// let routput=products.reduce((m,n)=>{
//     return m+n.price;
    
// },0);

// document.write(routput);

// let fpro = products.filter((product) => {
//     return product.price < 1000;

// });

// let fproname= fpro.map((product) => {
//     return product.name;
    
// });
// let fpronpric= fpro.map((product) => {
//     return product.price ;
    
// });

// document.write(fproname);
// document.write(fpronpric);

    

