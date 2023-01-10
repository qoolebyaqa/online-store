const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
/* const range = document.querySelector(".slider .progress"); */
const price = 0;

priceInput.forEach(input => {
    input.addEventListener("input", e =>{
        const minPrice = parseInt((<HTMLInputElement>priceInput[0]).value),
        maxPrice = parseInt((<HTMLInputElement>priceInput[1]).value);
        
        if((maxPrice - minPrice >= price) && maxPrice <= Number((rangeInput[1] as HTMLInputElement).max)){
            if((e.target as HTMLElement).className === "input-min"){
                (rangeInput[0] as HTMLInputElement).value = minPrice.toString();
                /* if (range) {
                    (range as HTMLElement).style.left = ((minPrice / Number((rangeInput[0] as HTMLInputElement).max)) * 100) + "%";
                } */
            }else{
                (rangeInput[1] as HTMLInputElement).value = maxPrice.toString();
                /* if (range) {
                    (range as HTMLElement).style.right = 100 - (maxPrice / Number((rangeInput[1] as HTMLInputElement).max)) * 100 + "%";                    
                } */
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
                (rangeInput[0] as HTMLInputElement).value = (maxVal - price).toString();
            }else{
                (rangeInput[1] as HTMLInputElement).value = (minVal + price).toString();
            }
        }else{
            (priceInput[0] as HTMLInputElement).value = minVal.toString();
            (priceInput[1] as HTMLInputElement).value = maxVal.toString();
            /* (range as HTMLElement).style.right = 100 - (maxVal / Number((rangeInput[1] as HTMLInputElement).max)) * 100 + "%";
            (range as HTMLElement).style.left = ((minVal / Number((rangeInput[0] as HTMLInputElement).max) * 100) + "%"); */
        }
    });
});