var a = +prompt('Введите первое число ')

var b = +prompt('Введите второе число ')

var c = +prompt('Введите третие число ')



if(a < b && a > c || a > b && a < c) {
    alert('Среднее число ' + a)
} else if(b < a && b > c || b > a && b < c) {
    alert('Среднее число ' + b)
} else if(c > a && c < b || c < a && c > b) {
    alert('Среднее число ' + c)
} else {
    alert('Что-то пошло не так')
}