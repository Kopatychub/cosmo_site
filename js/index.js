trans_block = 0
home_view = 0

document.querySelector(".trans_block").addEventListener("mouseover", function () {
    if (trans_block == 0) {
        document.querySelector(".cont2").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }
    trans_block = 1
    
})

// проверка на зону видимости
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

const btnUp = {
      el: document.querySelector('.express_scroll'),
      show() {
        // удалим у кнопки класс btn-up_hide
        this.el.classList.remove('btn-up_hide');
      },
      hide() {
        // добавим к кнопке класс btn-up_hide
        this.el.classList.add('btn-up_hide');
      },
      addEventListener() {
        // при прокрутке содержимого страницы
        window.addEventListener('scroll', () => {
          // определяем величину прокрутки
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
          scrollY > 400 ? this.show() : this.hide();
        });
        // при нажатии на кнопку .btn-up
        document.querySelector('.express_scroll').onclick = () => {
          // переместим в начало страницы
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
        }
      }
    }
btnUp.addEventListener();

