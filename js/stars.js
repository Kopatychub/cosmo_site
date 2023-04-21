const stars = document.querySelector('.stars')
let x = 20
function stars_rad() {
    stars.style.backgroundPositionX = x + 'px'
    x += 1
    setTimeout(() => {
        stars_rad()
    }, 100);
    console.log(x)
}
stars_rad()