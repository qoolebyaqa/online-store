import { PRODUCTS } from "../goods";
import { PriceAndCart } from "../Header/Header";
import { IProduct } from "../goods";

function CardsRender (sources: Array<IProduct>) {
  const wrapper = document.querySelector('.cards__wrapper')
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
    if (cardButton) {
      cardButton?.classList.add('cards__button');
      cardButton.innerHTML = 'Add to Cart';
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
  PriceAndCart();
}

function filter (){
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
      && CategoryFilter.length > 0 
      && Number((priceInputMin as HTMLInputElement).value) < value.price
      && Number((priceInputMax as HTMLInputElement).value) > value.price
      && Number((stokeInputMin as HTMLInputElement).value) < value.stock
      && Number((stokeInputMax as HTMLInputElement).value) > value.stock) {
      for (let i = 0; i < BrandFilter.length; i++) {
        for (let j = 0; j < CategoryFilter.length; j++) {
          if (value.brand === BrandFilter[i] && value.category === CategoryFilter[j]) {
            return true;
          }
        }
      }
    }
    else if (BrandFilter.length > 0 && CategoryFilter.length === 0
      && Number((priceInputMin as HTMLInputElement).value) < value.price
      && Number((priceInputMax as HTMLInputElement).value) > value.price
      && Number((stokeInputMin as HTMLInputElement).value) < value.stock
      && Number((stokeInputMax as HTMLInputElement).value) > value.stock) {
      for (let i = 0; i < BrandFilter.length; i++) {
        if (value.brand === BrandFilter[i]) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length > 0
      && Number((priceInputMin as HTMLInputElement).value) < value.price
      && Number((priceInputMax as HTMLInputElement).value) > value.price
      && Number((stokeInputMin as HTMLInputElement).value) < value.stock
      && Number((stokeInputMax as HTMLInputElement).value) > value.stock) {
      for (let i = 0; i < CategoryFilter.length; i++) {
        if (value.category === CategoryFilter[i]) {
          return true;
        }        
      }
    }
    else if (BrandFilter.length === 0 && CategoryFilter.length === 0
      && Number((priceInputMin as HTMLInputElement).value) < value.price
      && Number((priceInputMax as HTMLInputElement).value) > value.price
      && Number((stokeInputMin as HTMLInputElement).value) < value.stock
      && Number((stokeInputMax as HTMLInputElement).value) > value.stock){
        return value;
      }
    
  });
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
    input.addEventListener('input', filter);
  }
}
if (inputsBrandCollection !== undefined) {
  for (const input of inputsBrandCollection) {
    input.addEventListener('input', filter);
  }
}
if (inputRangeMin !== undefined) {
  for (const input of inputRangeMin) {
    input.addEventListener('input', filter);
  }
}
if (inputRangeMax !== undefined) {
  for (const input of inputRangeMax) {
    input.addEventListener('input', filter);
  }
}
inputs.forEach((input) => {
  input?.addEventListener('input', filter);
})

CardsRender(PRODUCTS);