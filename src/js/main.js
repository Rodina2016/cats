'use strict'

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (e) => {
        const target = e.target;
        const square = document.querySelectorAll('.filter-square:checked');
        const services = document.querySelectorAll('.filter-services:checked');
        let priceFrom = document.querySelector('.filter-range-from');
        let priceTo = document.querySelector('.filter-range-to');
        const btnReset = document.querySelector('.filter__btn-reset');
        const allCards = document.querySelectorAll('.card__item');
        const allSortItems = document.querySelectorAll('.sort__item');

        if (target.matches('#send')) {
            e.preventDefault();
            const arrSquare = getArrFilterValue(square);
            const arrServices = getArrFilterValue(services);

            Array.from(allCards).forEach(card => {
                card.classList.remove('hide');

                const cardSquare = +card.querySelector('.square').getAttribute('data-square');
                const cardPrice = +card.querySelector('.price').getAttribute('data-price');
                const cardServices = card.querySelectorAll('.card-services-item');

                const arrCardServices = getServicesValue(cardServices);

                let isServices = 0;
                arrCardServices.forEach(item => {
                    if (arrServices.includes(item)) {
                        isServices++
                    }
                });

                if (arrSquare.length || arrServices.length || priceFrom.value || priceTo.value) {
                    btnReset.classList.add('show');
                    if (!arrSquare.includes(cardSquare) && !arrServices.includes(cardServices) && !isServices
                        && (cardPrice < priceFrom.value || cardPrice > priceTo.value)) {
                        card.classList.add('hide');
                    }
                }

            });

        }

        if(target.matches('#reset')) {
            Array.from(allCards).forEach(card => {
                card.classList.remove('hide');
            });

            clearCheckBox(square);
            clearCheckBox(services);

            priceTo.value = null;
            priceFrom.value = null;

            target.classList.remove('show');
        }

        if(target.matches('#sort')) {
            Array.from(allSortItems).forEach(item => {
                item.classList.add('show');
            })
        }
    });

    const clearCheckBox = (nodeList) => {
        Array.from(nodeList).forEach(item => {
            item.checked = false;
        });
    }

    const getServicesValue = (nodeList) => {
        const arr = [];
        Array.from(nodeList).forEach((elem) => {
            arr.push(elem.getAttribute('data-services'));
        });
        return arr;
    }

    const getArrFilterValue = (nodeList) => {
        const arr = [];
        Array.from(nodeList).forEach((elem) => {
            if (isNaN(elem.value)) {
                arr.push(elem.value);
            } else {
                arr.push(+elem.value);
            }
        });
        return arr;
    }

})