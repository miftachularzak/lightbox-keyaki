const pictures = document.querySelectorAll('.picture')

pictures.forEach(picture => {
    picture.addEventListener('click', function () {
        const appear = picture.querySelector('.appear')
        appear.classList.add('now')
    })
})

const closes = document.querySelectorAll('.close')
closes.forEach(close => {
    close.addEventListener('click', function (e) {
        e.target.parentElement.classList.remove('now')
        e.stopPropagation()
        console.log(e)
    })
})