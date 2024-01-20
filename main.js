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

    openPopupButton.addEventListener('click', function () {
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
    });

    closePopupButton_ty.addEventListener('click', function () {
        popup_ty.style.display = 'none';
    });
});
