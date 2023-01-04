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
  const liNames: Array<string> = [];
  let newUrl = window.location.href;

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
        liNames.push(e.innerHTML.split(' ').join(''));
      });
      e.classList.add('active');

      liNames.forEach((value) => {
        newUrl = newUrl.replace('&'+value, '');
      })
      if (!newUrl.includes('?')) {
        newUrl = `${newUrl}?&${e.innerHTML.split(' ').join('')}`;
      } else {
        newUrl = `${newUrl}&${e.innerHTML.split(' ').join('')}`;
      }
      window.history.pushState({}, '', newUrl);
    })
  })
});

/* function sortChecker () {
  const options = document.querySelector('.menu')?.children;
  if (options) {
    for (const li of options) {
      if (window.location.href.includes(li.id)){
        (document.querySelector('.selected') as HTMLElement).innerHTML = li.innerHTML;
        return CardsRender(sort());
      }
    }
  }
} */

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
/* window.addEventListener('load', sortChecker); */

export function widthChanger () {
  document.querySelector('.view-cards__left')?.removeEventListener('click', v5);
  document.querySelector('.view-cards__right')?.removeEventListener('click', v2);
  const cards = document.querySelectorAll('.cards__container');
  const view5x = document.querySelector('.view-cards__left');
  const view2x = document.querySelector('.view-cards__right');
  view5x?.classList.remove('view-cards__left-active');
  view2x?.classList.remove('view-cards__right-active');
  for (const card of cards) {
    card.classList.remove('cards__container2x');
    card.classList.remove('cards__container5x');
  }
  function v5(e: Event) {
    if (e.target === view5x) {  
      e.stopPropagation();    
      view5x?.classList.toggle('view-cards__left-active');
      view2x?.classList.remove('view-cards__right-active');
      for (const card of cards) {
      if (card.matches('.cards__container2x')) {
        card.classList.remove('cards__container2x');
      }
      card.classList.toggle('cards__container5x');
      }
    }
  }
  function v2 (e: Event) {
    if (e.target === view2x) {
      e.stopPropagation();
      view2x?.classList.toggle('view-cards__right-active');
      view5x?.classList.remove('view-cards__left-active');
      for (const card of cards) {
        if (card.matches('.cards__container5x')) {
          card.classList.remove('cards__container5x');
        }
        card.classList.toggle('cards__container2x');
      }
    }
  }
  view5x?.addEventListener('click', v5);
  view2x?.addEventListener('click', v2);
}
