//1.
for (let i = 1; i <= 10 ; i++) {
    console.log(i);
}

//2.
for (let i = 10; i >= 1 ; i--) {
    console.log(i);
}

//3.
for (let i = 0; i<= 10; i += 2){
    console.log(i);
}

//4.
let str = "JavaScripts";
for(let i = 0; i < str.length; i++){
    console.log(str[i]);
}

//5.
let arr = ["AlmaU", "IITU","KazNU","SDU"];
for(let i=0; i <arr.length; i++){
    console.log(arr[i]);
}

//6.
let names = ["Danial","Ruslan", "Nursultan","Galym","Nurakhmet"];

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

//7.
for (let i = 0; i < names.length; i++) {
    console.log(i+1, names[i]);
}

//8.
for (let i = 0; i < names.length; i++) {
    console.log(names[i] + " !");
}

//9.
for (let i = 0; i < names.length; i++) {
    console.log(names[i].toUpperCase());
}

//10.
let newNames = [];

for (let i = 0; i < names.length; i++) {
    newNames.push(names[i] + "-AlmaU");
}
console.log(newNames);