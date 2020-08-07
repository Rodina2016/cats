'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const target = e.target;

        if(target.matches('#send')) {
            e.preventDefault();
            const square = document.querySelectorAll('.filter-square:checked');
            const services = document.querySelectorAll('.filter-services:checked');
            const priceFromValue = document.querySelector('.filter-range-from').value;
            const priceToValue = document.querySelector('.filter-range-to').value;
            const btnReset = document.querySelector('.filter__btn-reset');

            const allCards = document.querySelectorAll('.card__item');

            const arrSquare = getArrFilterValue(square);
            const arrServices = getArrFilterValue(services);
            const arrPrice = [priceFromValue, priceToValue];

            Array.from(allCards).forEach(card => {
                card.classList.remove('hide');

                const cardSquare = +card.querySelector('.square').getAttribute('data-square');
                const cardServices = card.querySelector('.card-services-item').getAttribute('data-services');
                const cardPrice = +card.querySelector('.price').getAttribute('data-price');

                console.log(arrSquare.length );
                console.log(arrServices.length );

                if(arrSquare.length || arrServices.length || priceFromValue || priceToValue) {
                    btnReset.classList.add('show');
                    if (!arrSquare.includes(cardSquare) && !arrServices.includes(cardServices)
                        && (cardPrice < arrPrice[0] || cardPrice > arrPrice[1])) {
                        card.classList.add('hide');
                    }
                }

            });

        }
    });

    const getArrFilterValue = (nodeList) => {
        const arr = [];
        Array.from(nodeList).forEach((elem) => {
            if(isNaN(elem.value)) {
                arr.push(elem.value);
            } else {
                arr.push(+elem.value);
            }
        });

        return arr;
    }
});