const rangeStockInput = document.querySelectorAll(".range-input-stock input");
const stockInput = document.querySelectorAll(".stock-input input");
/* const rangeStock = document.querySelector(".slider-stock .progress-stock"); */
const priceStock = 0;

stockInput.forEach(input => {
    input.addEventListener("input", e =>{
        const minPrice = parseInt((<HTMLInputElement>stockInput[0]).value),
        maxPrice = parseInt((<HTMLInputElement>stockInput[1]).value);
        
        if((maxPrice - minPrice >= priceStock) && maxPrice <= Number((rangeStockInput[1] as HTMLInputElement).max)){
            if((e.target as HTMLElement).className === "input-min"){
                (rangeStockInput[0] as HTMLInputElement).value = minPrice.toString();
                /* if (rangeStock) {
                    (rangeStock as HTMLElement).style.left = ((minPrice / Number((rangeStockInput[0] as HTMLInputElement).max)) * 100) + "%";
                } */
            }else{
                (rangeStockInput[1] as HTMLInputElement).value = maxPrice.toString();
                /* if (rangeStock) {
                    (rangeStock as HTMLElement).style.right = 100 - (maxPrice / Number((rangeStockInput[1] as HTMLInputElement).max)) * 100 + "%";                    
                } */
            }
        }
    });
});

rangeStockInput.forEach(input =>{
    input.addEventListener("input", e =>{
        const minVal = parseInt((<HTMLInputElement>rangeStockInput[0]).value),
        maxVal = parseInt((<HTMLInputElement>rangeStockInput[1]).value);

        if((maxVal - minVal) < priceStock){
            if((e.target as HTMLElement).className === "range-min"){
                (rangeStockInput[0] as HTMLInputElement).value = (maxVal - priceStock).toString();
            }else{
                (rangeStockInput[1] as HTMLInputElement).value = (minVal + priceStock).toString();
            }
        }else{
            (stockInput[0] as HTMLInputElement).value = minVal.toString();
            (stockInput[1] as HTMLInputElement).value = maxVal.toString();
            /* (rangeStock as HTMLElement).style.right = 100 - (maxVal / Number((rangeStockInput[1] as HTMLInputElement).max)) * 100 + "%";
            (rangeStock as HTMLElement).style.left = ((minVal / Number((rangeStockInput[0] as HTMLInputElement).max) * 100) + "%"); */
        }
    });
});