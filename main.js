document.addEventListener('DOMContentLoaded', function () {
    const openPopupButton = document.querySelector('.openPopup');
    const popup = document.querySelector('.popup');
    const closePopupButton = document.querySelector('.closePopup');

    const openPopupButtons_pay = document.querySelectorAll('.openPopup_pay');
    const openPopupButtons_pay_Array = Array.from(openPopupButtons_pay);
    const popup_pay = document.querySelector('.popup_pay');
    const closePopupButton_pay = document.querySelector('.closePopup_pay');

    const openPopupButton_ty = document.querySelector('.openPopup_ty');
    const popup_ty = document.querySelector('.popup_ty');
    const closePopupButton_ty = document.querySelector('.closePopup_ty');

    const telegramButton_pay = document.querySelector('.telegramButton_pay')

    openPopupButton.addEventListener('click', function () {
        console.log('1111111111')
        popup.style.display = 'flex';
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });



    openPopupButtons_pay_Array.forEach(function (button) {
        button.addEventListener('click', function () {
            popup_pay.style.display = 'flex';
        });
    });

    closePopupButton_pay.addEventListener('click', function () {
        popup_pay.style.display = 'none';
    });



    openPopupButton_ty.addEventListener('click', function () {
        popup_ty.style.display = 'flex';
        popup.style.display = 'none';
    });

    closePopupButton_ty.addEventListener('click', function () {
        popup_ty.style.display = 'none';
    });

    telegramButton_pay.addEventListener('click', function (){
        popup_pay.style.display = 'none';
        alert('плати бабки')
    })
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        const newTransformValue = -index * 33.333 + '%';
        slider.style.transform = 'translateX(' + newTransformValue + ')';
    }
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        if (currentIndex === 0 ) {
        }
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    document.querySelector('.nextSlide').addEventListener('click', () =>{
        nextSlide()
    })
    document.querySelector('.prevSlide').addEventListener('click', () =>{
        prevSlide()
    })
});


