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
        popup.style.display = 'flex';
        popup.classList.add('show');
    });

    closePopupButton.addEventListener('click', function () {
        popup.style.display = 'none';
        popup.classList.remove('show');
    });



    openPopupButtons_pay_Array.forEach(function (button) {
        button.addEventListener('click', function () {
            popup_pay.style.display = 'flex';
            popup_pay.classList.add('show');
        });
    });

    closePopupButton_pay.addEventListener('click', function () {
        popup_pay.style.display = 'none';
        popup_pay.classList.remove('show');
    });



    openPopupButton_ty.addEventListener('click', function () {
        popup_ty.style.display = 'flex';
        popup.style.display = 'none';
    });

    closePopupButton_ty.addEventListener('click', function () {
        popup_ty.style.display = 'none';
    });

    telegramButton_pay.addEventListener('click', function (){
        // popup_pay.style.display = 'none';
        // alert('плати бабки')
    })


    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.review');
    let touchstartX = 0;
    let touchendX = 0;

    sliderContainer.addEventListener('touchstart', touchStartHandler);
    sliderContainer.addEventListener('touchend', touchEndHandler);

    function touchStartHandler(event) {
        touchstartX = event.touches[0].pageX;
        console.log(touchstartX)
    }

    function touchEndHandler(event) {
        touchendX = event.changedTouches[0].pageX;
        checkSwipeDirection();
        console.log(touchendX)
    }

    function checkSwipeDirection() {
        const activeSlide = getActiveSlide();

        if (!activeSlide) {
            return;
        }
        const activeSlideId = parseInt(activeSlide.classList[2].replace('slide', ''), 10);
        let newSlideId = null;

        if (touchendX < touchstartX) {
            newSlideId = activeSlideId + 1;

            if (newSlideId > slides.length) {
                newSlideId = 1;
            }
        }

        if (touchendX > touchstartX) {
            newSlideId = activeSlideId - 1;

            if (newSlideId < 1) {
                newSlideId = slides.length;
            }
        }

        if (newSlideId) {
            setActiveSlide(newSlideId);
        }
    }
    function getActiveSlide() {
        return document.querySelector('.review.active');
    }

    function setActiveSlide(id) {
        slides.forEach(slide => slide.classList.remove('active'));

        const newActiveSlide = document.querySelector(`.review.slide${id}`);
        if (newActiveSlide) {
            newActiveSlide.classList.add('active');
        }
    }


});


