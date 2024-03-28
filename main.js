
const array = ["Mars", "Yupeter", "Saturin", "Venera"];
let long = array.length;
console.log("Arrayning uzunligi 1 = " + long);
alert("Arrayning uzunligi 1 = " + long);

let result = confirm("Siz jarayon davom etishini xohlaysizmi?");


if (result) {
    array.pop();
    let l = array.length;
    alert("Kesilgan arrayning uzunligi 1 = " + 1);
    console.log("Kesilgan arrayning uzunligi 1 =" + 1);
}else{
    let l = array.length;
    alert("Siz jarrayonni to'xtatganinggiz uchun 1 =" + 1);
    console.log("Siz jarrayonni to'xtatganinggiz uchun 1 = " + 1);
}