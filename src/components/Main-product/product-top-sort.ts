import { CardsRender } from "./Main-product";
import { PRODUCTS } from "../goods";
import { IProduct } from "../goods";
const productTopSort = document.querySelectorAll('.product-top__sort');

productTopSort.forEach(e => {
  const select = e.querySelector('.select');
  const caret = e.querySelector('.caret');
  const menu = e.querySelector('.menu');
  const options = e.querySelectorAll('.menu li');
  const selected = e.querySelector('.selected');

  (select as HTMLElement).addEventListener('click', () => {
    (select as HTMLElement).classList.toggle('select-clicked');
    (caret as HTMLElement).classList.toggle('caret-rotate');
    (menu as HTMLElement).classList.toggle('menu-open');
  });

  options.forEach(e => {
    e.addEventListener('click', () => {
      (selected as HTMLElement).innerHTML = e.innerHTML;
      CardsRender(sort());
      (select as HTMLElement).classList.remove('select-clicked');
      (caret as HTMLElement).classList.remove('caret-rotate');
      (menu as HTMLElement).classList.remove('menu-open');
      options.forEach(e => {
        e.classList.remove('active');
      });
      e.classList.add('active');
    })
  })
});

function sort () {
  const cards = document.querySelectorAll('.cards__container');
  const sortValue = document.querySelector('.selected');
  const wrapper = document.querySelector('.cards__wrapper');
  const arrToCollect: Array<IProduct> = [];
  const currentNamesArr: Array<string> = [];

  cards.forEach((card) => {
    currentNamesArr.push(card.children[3].innerHTML);
  })

  PRODUCTS.forEach((value) => {
    if (currentNamesArr.includes(value.title)) {
      arrToCollect.push(value);
    }
  })
  if (wrapper?.innerHTML) {
    wrapper.innerHTML = '';
  }
  switch (sortValue?.innerHTML) {
    case 'Рейтингу':
      return arrToCollect.sort((a:IProduct, b:IProduct): number => {
        return Number(a.raiting) - Number(b.raiting);
      })
    case 'Цене от мин':
      return arrToCollect.sort((a:IProduct, b:IProduct): number => {
        return Number(a.price) - Number(b.price);
      })
    case 'Цене от макс':
      return arrToCollect.sort((a:IProduct, b:IProduct): number => {
        return Number(b.price) - Number(a.price);
      })
    case 'Скидке':
      return arrToCollect.sort((a:IProduct, b:IProduct): number => {
        return Number(b.discountPrecentage) - Number(a.discountPrecentage);
      })
    default: return PRODUCTS;
  }
}

function searchFilter() {
  const cards = document.querySelectorAll('.cards__container');
  const wrapper = document.querySelector('.cards__wrapper');
  const searcher = document.querySelector('.product-top__search-input');
  const serachedfield: Array<IProduct> = [];
  const arrToCollect: Array<IProduct> = [];
  const currentNamesArr: Array<string> = [];

  cards.forEach((card) => {
    currentNamesArr.push(card.children[3].innerHTML);
  })

  PRODUCTS.forEach((value) => {
    if (currentNamesArr.includes(value.title)) {
      arrToCollect.push(value);
    }
  })

  arrToCollect.forEach((value) => {
    if (Object.values(value).join('').includes((searcher as HTMLInputElement).value)){
      serachedfield.push(value);
    }
  })
  if (wrapper?.innerHTML) {
    wrapper.innerHTML = '';
  }
  if ((searcher as HTMLInputElement).value === '') {
    CardsRender(arrToCollect)
  }
  else {
    CardsRender(serachedfield);
  }
}



document.querySelector('.product-top__search-input')?.addEventListener('input', searchFilter);

export function widthChanger () {
  const cards = document.querySelectorAll('.cards__container');
  for (const card of cards) {
    card.classList.remove('cards__container2x');
    card.classList.remove('cards__container5x');
  }
  document.querySelector('.view-cards__left')?.addEventListener('click', () => { 
      for (const card of cards) {
      if (card.matches('.cards__container2x')) {
        card.classList.remove('cards__container2x');
      }
      card.classList.toggle('cards__container5x');
    }
  });
  document.querySelector('.view-cards__right')?.addEventListener('click', () => { 
    for (const card of cards) {
      if (card.matches('.cards__container5x')) {
        card.classList.remove('cards__container5x');
      }
      card.classList.toggle('cards__container2x');
    }
  });
}
