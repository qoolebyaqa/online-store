import { PRODUCTS } from "../goods";

function CardsRender () {
  const wrapper = document.querySelector('.cards__wrapper')
  if (wrapper) {
    wrapper.innerHTML = ''
  }
  PRODUCTS.forEach((value) => {
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
    if (cardButton) {
      cardButton?.classList.add('cards__button');
      cardButton.innerHTML = 'Add to Cart';
    }
    cardImg.src = value.previewImg;    
    Imgcontainer.append(cardImg);
    cardCategory.innerHTML = value.category;
    cardBrand.innerHTML = value.brand;
    cardTitle.innerHTML = value.title;
    cardPrice.innerHTML = value.price.toString() + '$';
    container.append(Imgcontainer, cardCategory, cardBrand, cardTitle, cardPrice, cardButton);
    wrapper?.append(container);

  })
}

CardsRender();

