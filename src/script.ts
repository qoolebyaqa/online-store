const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider .progress");
const price = 0;

priceInput.forEach(input => {
    input.addEventListener("input", e =>{
        const minPrice = parseInt((<HTMLInputElement>priceInput[0]).value),
        maxPrice = parseInt((<HTMLInputElement>priceInput[1]).value);
        
        if((maxPrice - minPrice >= price) && maxPrice <= rangeInput[1].max){
            if((e.target as HTMLElement).className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        const minVal = parseInt((<HTMLInputElement>rangeInput[0]).value),
        maxVal = parseInt((<HTMLInputElement>rangeInput[1]).value);

        if((maxVal - minVal) < price){
            if((e.target as HTMLElement).className === "range-min"){
                rangeInput[0].value = maxVal - price
            }else{
                rangeInput[1].value = minVal + price;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});