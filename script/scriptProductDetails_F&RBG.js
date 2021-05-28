
const input = document.querySelector('.right-column .quantity input');
const price = document.querySelector('.right-column .price') ;

    input.addEventListener('change',()=> {
        price.textContent = `INR ${input.value * 7999}/-` ;
    }) ;






