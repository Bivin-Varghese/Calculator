
// darK theme
let icon = document.getElementById('icon')

icon.onclick = function () {
    document.body.classList.toggle('dark-theme')

    if (document.body.classList.contains('dark-theme')) {
        icon.src = 'img/sun.png'

    }
    else {
        icon.src = 'img/moon.png'
    }
}



display = (num) => {
    result.value += num
}


evaluateExp = () => {
    result.value = eval(result.value)
}

clearTxt = () => {
    result.value = ''
}

remove = () => {
    result.value = (result.value).slice(0, -1)
}