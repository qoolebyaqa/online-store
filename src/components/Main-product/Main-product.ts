import { PRODUCTS } from "../goods";
import { PriceAndCart } from "../Header/Header";
import { IProduct } from "../goods";
import { restartFilters } from "./quantity-counters";
import { urlChanger } from "./location-funcs";
import { cartStorage } from "../Header/Header";
import { CardInfo } from "../../product-info";
import { urlChanger4range } from "./location-funcs";
import { widthChanger } from "./product-top-sort";

export function CardsRender (sources: Array<IProduct>) {
  const wrapper = document.querySelector('.cards__wrapper');
  const counter = document.querySelector('.counter');
  if (wrapper) {
    wrapper.innerHTML = ''
  }
  sources.forEach((value) => {
    const container = document.createElement('div');
    container.classList.add('cards__container');
    const Imgcontainer = document.createElement('div');
    Imgcontainer.classList.add('cards__img-wrapper');
    const cardImg = document.createElement('img');
    cardImg.classList.add('cards__pic');
    const cardCategory = document.createElement('p');
    cardCategory.classList.add('cards__category');
    const cardBrand= document.createElement('p');
    cardBrand.classList.add('cards__brand');
    const cardTitle = document.createElement('p');
    cardTitle.classList.add('cards__title');
    const cardPrice = document.createElement('p');
    cardPrice.classList.add('cards__price');
    const cardButton = document.createElement('button');
    const cardHover = document.createElement('div');
    cardHover.classList.add('cards__hover');
    cardHover.innerHTML = `${value.title} Только сегодня со скидкой ${value.discountPrecentage}% Поспешите осталось ${value.stock} шт.`
    cardHover.setAttribute('id', `${value.id}`)
    if (cardButton) {
      cardButton?.classList.add('cards__button');
      cardButton.innerHTML = 'Добавить в корзину';
    }
    cardImg.src = value.previewImg;    
    Imgcontainer.append(cardImg, cardHover);
    cardCategory.innerHTML = value.category;
    cardBrand.innerHTML = value.brand;
    cardTitle.innerHTML = value.title;
    cardPrice.innerHTML = value.price.toString() + '$';
    container.append(Imgcontainer, cardCategory, cardBrand, cardTitle, cardPrice, cardButton);
    wrapper?.append(container);   
  })
  if (counter?.innerHTML) {
    counter.innerHTML = sources.length.toString();
    if (sources.length === 0) {
      (wrapper as HTMLElement).innerHTML = `К сожалению по Вешму запросу ничего не найдено`;
    }
  }
  PriceAndCart();
  widthChanger();
  cartStorage();
  CardInfo();
}

export function filterRange (e?: Event){
  const inputsCategoryCollection = document.querySelector('.block-category')?.getElementsByTagName('input');
  const inputsBrandCollection = document.querySelector('.block-brand')?.getElementsByTagName('input');
  const priceInputMin = document.querySelector('.price-inputs')?.querySelector('.input-min');
  const priceInputMax = document.querySelector('.price-inputs')?.querySelector('.input-max');
  const stokeInputMin = document.querySelector('.stock-inputs')?.querySelector('.input-min');
  const stokeInputMax = document.querySelector('.stock-inputs')?.querySelector('.input-max');
  if (Number((stokeInputMin as HTMLInputElement).value) > Number((stokeInputMax as HTMLInputElement).value) || 
  Number((priceInputMin as HTMLInputElement).value) > Number((priceInputMax as HTMLInputElement).value)) {
    return;
  }
  const CategoryFilter: Array<string> = [];
  const BrandFilter: Array<string> = [];
  let FiltredPRODUCTS: Array<IProduct> = [];
  PRODUCTS.forEach((value) => {
    FiltredPRODUCTS.push(value);
  })
  if (inputsCategoryCollection !== undefined) {
    for (const input of inputsCategoryCollection) {
      if (input.checked === true) {
        CategoryFilter.push(input.id);
      }
    }
  }
  if (inputsBrandCollection !== undefined) {
    for (const input of inputsBrandCollection) {
      if (input.checked === true) {
        BrandFilter.push(input.id);
      }
    }
  }
  FiltredPRODUCTS = FiltredPRODUCTS.filter((value) => {
    if (BrandFilter.length > 0 
      && CategoryFilter.length > 0) {
      for (let i = 0; i < BrandFilter.length; i++) {
        for (let j = 0; j < CategoryFilter.length; j++) {
          if (value.brand === BrandFilter[i] && value.category === CategoryFilter[j]) {
            return true;
          }
        }
      }
    }
    else if (BrandFilter.length > 0 && CategoryFilter.length === 0) {
      for (let i = 0; i < BrandFilter.length; i++) {
        if (value.brand === BrandFilter[i]) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length > 0) {
      for (let i = 0; i < CategoryFilter.length; i++) {
        if (value.category === CategoryFilter[i] ) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length === 0){       
      return true;
    }    
  });  
  if (e?.target !== undefined) {
    if ((e?.target as HTMLInputElement).id.includes('Price')) {
      FiltredPRODUCTS = FiltredPRODUCTS.filter((card) => {
        if (card.price >= Number((priceInputMin as HTMLInputElement).value) && card.price <= Number((priceInputMax as HTMLInputElement).value)) {
          return true;
        }
      });
      (document.getElementById('minStock') as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
        return Math.min(elem1, elem2.stock);
      }, Infinity).toString();
      (document.getElementById('maxStock') as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
        return Math.max(elem1, elem2.stock);
      }, 0).toString();
      (document.getElementById('minRangeStock') as HTMLInputElement).value = (document.getElementById('minStock') as HTMLInputElement).value;
      (document.getElementById('maxRangeStock') as HTMLInputElement).value = (document.getElementById('maxStock') as HTMLInputElement).value;      
    }
    else if ((e?.target as HTMLInputElement).id.includes('Stock')) {
      FiltredPRODUCTS = FiltredPRODUCTS.filter((card) => {
        if (card.stock >= Number((stokeInputMin as HTMLInputElement).value) && card.stock <= Number((stokeInputMax as HTMLInputElement).value)) {
          return true;
        }
      });
      (document.getElementById('minPrice') as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
        return Math.min(elem1, elem2.price);
      }, Infinity).toString();
      (document.getElementById('maxPrice') as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
        return Math.max(elem1, elem2.price);
      }, 0).toString();
      (document.getElementById('minRangePrice') as HTMLInputElement).value = (document.getElementById('minPrice') as HTMLInputElement).value;
      (document.getElementById('maxRangePrice') as HTMLInputElement).value = (document.getElementById('maxPrice') as HTMLInputElement).value;     
    }
  }  
  CardsRender(FiltredPRODUCTS);
}

export function filterCheckbox (){
  const inputsCategoryCollection = document.querySelector('.block-category')?.getElementsByTagName('input');
  const inputsBrandCollection = document.querySelector('.block-brand')?.getElementsByTagName('input');
  const priceInputMin = document.querySelector('.price-inputs')?.querySelector('.input-min');
  const priceInputMax = document.querySelector('.price-inputs')?.querySelector('.input-max');
  const stokeInputMin = document.querySelector('.stock-inputs')?.querySelector('.input-min');
  const stokeInputMax = document.querySelector('.stock-inputs')?.querySelector('.input-max');
  const CategoryFilter: Array<string> = [];
  const BrandFilter: Array<string> = [];
  let FiltredPRODUCTS: Array<IProduct> = [];
  PRODUCTS.forEach((value) => {
    FiltredPRODUCTS.push(value);
  })
  if (inputsCategoryCollection !== undefined) {
    for (const input of inputsCategoryCollection) {
      if (input.checked === true) {
        CategoryFilter.push(input.id);
      }
    }
  }
  if (inputsBrandCollection !== undefined) {
    for (const input of inputsBrandCollection) {
      if (input.checked === true) {
        BrandFilter.push(input.id);
      }
    }
  }
  FiltredPRODUCTS = FiltredPRODUCTS.filter((value) => {
    if (BrandFilter.length > 0 
      && CategoryFilter.length > 0) {
      for (let i = 0; i < BrandFilter.length; i++) {
        for (let j = 0; j < CategoryFilter.length; j++) {
          if (value.brand === BrandFilter[i] && value.category === CategoryFilter[j]) {
            return true;
          }
        }
      }
    }
    else if (BrandFilter.length > 0 && CategoryFilter.length === 0) {
      for (let i = 0; i < BrandFilter.length; i++) {
        if (value.brand === BrandFilter[i]) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length > 0) {
      for (let i = 0; i < CategoryFilter.length; i++) {
        if (value.category === CategoryFilter[i]) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length === 0){
      return true;
    }    
  });

  (priceInputMin as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.min(elem1, elem2.price);
  }, Infinity).toString();
  (priceInputMax as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.max(elem1, elem2.price);
  }, 0).toString();
  (stokeInputMin as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.min(elem1, elem2.stock);
  }, Infinity).toString();
  (stokeInputMax as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.max(elem1, elem2.stock);
  }, 0).toString();
  (inputRangeMin[0] as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.min(elem1, elem2.price);
  }, Infinity).toString();
  (inputRangeMin[1] as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.min(elem1, elem2.stock);
  }, Infinity).toString();
  (inputRangeMax[0] as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.max(elem1, elem2.price);
  }, 0).toString();
  (inputRangeMax[1] as HTMLInputElement).value = FiltredPRODUCTS.reduce(function(elem1, elem2) {
    return Math.max(elem1, elem2.stock);
  }, 0).toString();
  CardsRender(FiltredPRODUCTS);
}


const inputsCategoryCollection = document.querySelector('.block-category')?.getElementsByTagName('input');
const inputsBrandCollection = document.querySelector('.block-brand')?.getElementsByTagName('input');
const inputRangeMin = document.querySelectorAll('.range-min');
const inputRangeMax = document.querySelectorAll('.range-max');
const priceInputMin = document.querySelector('.price-inputs')?.querySelector('.input-min');
const priceInputMax = document.querySelector('.price-inputs')?.querySelector('.input-max');
const stokeInputMin = document.querySelector('.stock-inputs')?.querySelector('.input-min');
const stokeInputMax = document.querySelector('.stock-inputs')?.querySelector('.input-max');
const inputs = [];
inputs.push(priceInputMax, priceInputMin, stokeInputMin, stokeInputMax);

if (inputsCategoryCollection !== undefined) {
  for (const input of inputsCategoryCollection) {
    input.addEventListener('input', filterCheckbox);
    input.addEventListener('input', urlChanger);
  }
}
if (inputsBrandCollection !== undefined) {
  for (const input of inputsBrandCollection) {
    input.addEventListener('input', filterCheckbox);
    input.addEventListener('input', urlChanger);
  }
}
if (inputRangeMin !== undefined) {
  for (const input of inputRangeMin) {
    input.addEventListener('input', filterRange);
    input.addEventListener('input', urlChanger4range);
  }
}
if (inputRangeMax !== undefined) {
  for (const input of inputRangeMax) {
    input.addEventListener('input', filterRange);
    input.addEventListener('input', urlChanger4range);
  }
}
inputs.forEach((input) => {
  input?.addEventListener('input', filterRange);
  input?.addEventListener('input', urlChanger4range);
})

document.querySelector('.block-category__reset-copy-reset')?.addEventListener('click', restartFilters);
document.querySelector('.search__ico')?.addEventListener('click', () => console.log('nice'));

CardsRender(PRODUCTS);
widthChanger();