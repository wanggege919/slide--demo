let n 
初始化()

var timerId = setTimer()

$('.window').on('mouseenter', function () {
    window.clearInterval(timerId)
})
$('.window').on('mouseleave', function () {
    timerId = setTimer()
})

function setTimer() {
    return setInterval(() => {
        $(`.buttons > span:nth-child(${x(n)})`).removeClass('red')
        $(`.images>img:nth-child(${x(n)})`).removeClass('current').addClass('leave')
            .one('transitionend', (e) => {
                $(e.currentTarget).removeClass('leave').addClass('enter')
            })
        $(`.images>img:nth-child(${x(n + 1)})`).removeClass('enter').addClass('current')
        $(`.buttons > span:nth-child(${x(n + 1)})`).addClass('red')
        n += 1
    }, 2000)
}

function x(n) {
    if (n > 5) {
        n = n % 5
        if (n === 0) {
            n = 5
        }
    }  //n= 1 2 3
    return n
}

function 初始化() {
    n = 1
    $(`.images>img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
    $(`.buttons > span:nth-child(${n})`).addClass('red')  
}



