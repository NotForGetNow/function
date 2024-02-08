// const a = +prompt('Input a')
// const b = +prompt('Input b')

// function sum(num1, num2) {
//     alert(num1 + num2)
// }

// sum(a, b)



// const nameUser = prompt('Whats ur name')

// const showMessage = (nameUser) => {
//     alert(`Hello, ${nameUser}`)
// }

// showMessage(nameUser)


// #1
// const a = +prompt('Введите число a')
// const b = +prompt('Введите число b')

// function func(num1, num2) {
//     if (a > b) {
//         alert(`Число ${a}(a) больше числа ${b}(b)`)
//     }
//     else if (a == b) {
//         alert('Числа одинаковы')
//     }
//     else {
//         alert(`Число ${b}(b) больше числа ${a}(a)`)
//     }
// }

// func()


// #2
// const a = +prompt('Введите число')
// const b = +prompt('Введите степень')
// let sum = a

// function step(num1, num2) {
//     for (let i = num2; i > 1; i--) {
//         sum = sum * num1
//         console.log(sum)
//     }
// }

// step(a, b)


// #3
// const a = +prompt('Введите число a')
// const b = +prompt('Введите число b')
// const sign = prompt('Введите знак( +, -, *, /)')

// function calc(num1, num2) {
//     switch(sign) {
//         case '+':
//             alert(num1 + num2)
//             break

//         case '-':
//             alert(num1 - num2)
//             break
            
//         case '/':
//             alert(num1 / num2)
//             break

//         case '*':
//             alert(num1 * num2)
//             break
//     }
    
// }

// calc(a, b)


// #4
// const a = +prompt('Введите число')

// function easy(num) {
//     if ( num % 2 === 0 || num % 3 === 0) {
//         alert(`Число ${num} - составное`)
//     }

//     else {
//         alert(`Число ${num} - простое`)
//     }
// }

// easy(a)


// #5
// const a = +prompt('Введите число')

// function table(num) {
//     let sum = num
//     if (num <= 10){
//         for (let i = 1; i <= 10; i++) {
//         sum = num * i
//         console.log(sum)
//         }
//     }
//     else {
//         return num
//     }
    
// }

// table(a)



// #6
// let a = +prompt('Введите число a')
// let b = +prompt('Введите число b')

// function modul(num1, num2) {
//     let res = num1;
//     while (res >= num2) {
//         res -= num2;
//     }
//     return res;
// }
// alert(modul(a, b));




// #7
// function sum() {
//     let summ = 0
//     for ( let i = 0; i < arguments.length; i++) {
//         summ = summ + arguments[i]
//     }
//     return summ
// }

// console.log(sum(5, 5, 2, 7))


// #8
// function sum() {
//     let res = 0
//     res = arguments[0]
//     for ( let i = 0; i < arguments.length; i++){
//         if (res < arguments[i]) {
//             res = arguments[i]
//         }
//     }
//     return res
// }

// console.log(sum(10, 2, 15, 20, 19))


// #9



// #10
// let year = prompt('Введите год')
// let month = prompt('Введите месяц')
// let day = prompt('Введите день')

// function date(num1, num2, num3) {
//     alert(`${num1}.${num2}.${num3}`)
// }

// function leap(num) {
//     if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
//         alert(`${num} - високосный`)
//     }

//     else{
//         alert(`${num} - не високосный`)
//     }
// }

// date(day, month, year)
// leap(year)