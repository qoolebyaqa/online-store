import { CardsRender } from "./Main-product";
import { PRODUCTS } from "../goods";
import { IProduct } from "../goods";
import { cartOptions } from "../../cart-shop";
import { askToURL } from "./location-funcs";

const productTopSort = document.querySelectorAll('.product-top__sort');

productTopSort.forEach(e => {
  const select = e.querySelector('.select');
  const caret = e.querySelector('.caret');
  const menu = e.querySelector('.menu');
  const options = e.querySelectorAll('.menu li');
  const selected = e.querySelector('.selected');
  const liNames: Array<string> = [];

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
      let newUrl = window.location.href;
      
      options.forEach(e => {
        e.classList.remove('active');
        liNames.push(e.id);
      });
      e.classList.add('active');
      liNames.forEach((value) => {
        if (newUrl.includes(`&${value}`)) {
          newUrl = newUrl.replace(`&${value}`, '');
        }
      })
      if (!newUrl.includes('?')) {
        newUrl = `${newUrl}?&${e.id}`;
      } else {
        newUrl = `${newUrl}&${e.id}`;
      }
      window.history.pushState({}, '', newUrl);
    })
  })
});

function sortChecker () {
  const options = document.querySelector('.menu')?.children;
  if (options) {
    for (const li of options) {
      if (window.location.href.includes(li.id)){
        (document.querySelector('.selected') as HTMLElement).innerHTML = li.innerHTML;
        return CardsRender(sort());
      }
    }
  }
  if (window.location.href.includes('cartpage')) {
    document.querySelector('.nav-item-basket')?.removeEventListener('click', cartOptions);
    document.querySelector('.header__cart-counter')?.removeEventListener('click', cartOptions);
    cartOptions();
  }
}

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
  askToURL();
  
  const cards = document.querySelectorAll('.cards__container');
  const wrapper = document.querySelector('.cards__wrapper');
  const searcher = document.querySelector('.product-top__search-input');
  const serachedfield: Array<IProduct> = [];
  const arrToCollect: Array<IProduct> = [];
  const currentNamesArr: Array<string> = [];
  if ((searcher as HTMLInputElement).value !== '') {
    cards.forEach((card) => {
      currentNamesArr.push(card.children[3].innerHTML);
    })

    PRODUCTS.forEach((value) => {
      if (currentNamesArr.includes(value.title)) {
        arrToCollect.push(value);
      }
    })

    arrToCollect.forEach((item) => {
      const [, a, , b, c, d, e, f, g] = Object.values(item);
      if (Object.values([a, b, c, d, e, f, g]).join('').toUpperCase().includes((searcher as HTMLInputElement).value.toUpperCase())){
        serachedfield.push(item);
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
    let newUrl = window.location.href;
    if (newUrl.includes('search')) {
      if (newUrl.indexOf('&', newUrl.indexOf('search')) === -1) {
        newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&search')), '');
      } else {
        newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&search'), newUrl.indexOf('&', newUrl.indexOf('search'))), '')
      }
    }
    if (!newUrl.includes('?')) {
      newUrl = `${newUrl}?&search=${(searcher as HTMLInputElement).value}`;
    } else {
      newUrl = `${newUrl}&search=${(searcher as HTMLInputElement).value}`;
    }
    window.history.pushState({}, '', newUrl);
  }
  else {
    let newUrl = window.location.href;
    if (newUrl.includes('search')) {
      if (newUrl.indexOf('&', newUrl.indexOf('search')) === -1) {
        newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&search')), '');
      } else {
        newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&search'), newUrl.indexOf('&', newUrl.indexOf('search'))), '')
      }
    }
    window.history.pushState({}, '', newUrl);
  }  
}


type internalFunc = () => void;
export const debounce = function (fn: internalFunc, ms: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  return function () {
    const fncall = (...args: []) => {
      fn.apply(fn, args)
    }
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(fncall, ms)
  };
}

const gg = debounce(searchFilter, 1500);

document.querySelector('.product-top__search-input')?.addEventListener('input', gg);
window.addEventListener('load', sortChecker);
window.addEventListener('load', searchAfterLoad);

export function widthChanger () {
  document.querySelector('.view-cards__left')?.removeEventListener('click', v5);
  document.querySelector('.view-cards__right')?.removeEventListener('click', v2);
  const cards = document.querySelectorAll('.cards__container');
  const view5x = document.querySelector('.view-cards__left');
  const view2x = document.querySelector('.view-cards__right');
  
 
  function v5(e: Event) {
    let newUrl = window.location.href;
    if (newUrl.includes('2x-vision')) {
      newUrl = newUrl.replace('&2x-vision', '');
    }
    if (!newUrl.includes('5x-vision')) {
      if (!newUrl.includes('?')) {
        newUrl = `${newUrl}?&5x-vision`;
      } else {
        newUrl = `${newUrl}&5x-vision`;
      }
      window.history.pushState({}, '', newUrl);
    }
    if (cards[0]) {
      if (cards[0].matches('.cards__container5x')){
        newUrl = newUrl.replace('&5x-vision', '');
        window.history.pushState({}, '', newUrl);
      }
    }
    if (e.target === view5x) { 
      view2x?.classList.remove('view-cards__left-active');
      for (const card of cards) {
        if (card.matches('.cards__container2x')) {
          card.classList.remove('cards__container2x');
        }
      card.classList.toggle('cards__container5x');
      }
      if (cards[0]) {
        if (cards[1].matches('.cards__container5x')) {
          view5x?.classList.add('view-cards__left-active');
        } else {
          view5x?.classList.remove('view-cards__left-active');
        }
      }
    }
  }
  function v2 (e: Event) {
    let newUrl = window.location.href;
    if (newUrl.includes('5x-vision')) {
      newUrl = newUrl.replace('&5x-vision', '');
    }
    if (!newUrl.includes('2x-vision')) {
      if (!newUrl.includes('?')) {
        newUrl = `${newUrl}?&2x-vision`;
      } else {
        newUrl = `${newUrl}&2x-vision`;
      }
      window.history.pushState({}, '', newUrl);
    }
    if (cards[0]) {
      if (cards[0].matches('.cards__container2x')){
        newUrl = newUrl.replace('&2x-vision', '');
        window.history.pushState({}, '', newUrl);
      }
    }    
    if (e.target === view2x) {
      view5x?.classList.remove('view-cards__left-active');
      for (const card of cards) {
        if (card.matches('.cards__container5x')) {
          card.classList.remove('cards__container5x');
        }
        card.classList.toggle('cards__container2x');
      }
      if (cards[0]) {
        if (cards[0].matches('.cards__container2x')) {
          view2x?.classList.add('view-cards__left-active');
        } else {
          view2x?.classList.remove('view-cards__left-active');
        }
      }
    }
  }
  view5x?.addEventListener('click', v5);
  view2x?.addEventListener('click', v2);
}

function searchAfterLoad () {
  const url = window.location.href;
  if(url.includes('search')) {
    if (url.indexOf('&', url.indexOf('search')) === -1) {
      (document.querySelector('.product-top__search-input') as HTMLInputElement).value = 
      `${url.slice(url.indexOf('search') + 7)}`;
    } else {
      (document.querySelector('.product-top__search-input') as HTMLInputElement).value = 
      `${url.slice(url.indexOf('search') + 7, url.indexOf('&', url.indexOf('search')))}`;
    }
    searchFilter();
  }
}