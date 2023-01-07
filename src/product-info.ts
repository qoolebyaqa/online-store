import { PRODUCTS } from "./components/goods";
// import { RenderModal } from './modal';
import { IProduct } from "./components/goods";

function RenderInfoProduct() {
  const main = document.querySelector('.main');

  const mainProductInfo = document.createElement('section');
  mainProductInfo.classList.add('main__product-info');
  const productInfoAdd = document.createElement('div');
  productInfoAdd.classList.add('product-info__add');
  const productInfoAll = document.createElement('div');
  productInfoAll.classList.add('product-info__all');
  const productInfoAllTitle = document.createElement('div');
  productInfoAllTitle.classList.add('product-info__all-title');
  const productInfoAllElement = document.createElement('div');
  productInfoAllElement.classList.add('product-info__all-element');

  const productInfoAllElementImg = document.createElement('div');
  productInfoAllElementImg.classList.add('product-info__all-element-img');
  const elementImgBig = document.createElement('div');
  elementImgBig.classList.add('element-img__big');

  const detalisWrapper = document.createElement('div');
  detalisWrapper.classList.add('detalis-wrapper');

  const allElementDetalis = document.createElement('div');
  allElementDetalis.classList.add('all-element__detalis');
  const elementDetalisBrand = document.createElement('div');
  elementDetalisBrand.classList.add('element__detalis-brand');
  const detalisBrand = document.createElement('h4');
  detalisBrand.classList.add('detalis-brand');
  const detalisBrandText = document.createElement('span');
  detalisBrandText.classList.add('detalis-brand-text');

  const elementDetalisDiscount = document.createElement('div');
  elementDetalisDiscount.classList.add('element__detalis-discount');
  const detalisDiscount = document.createElement('h4');
  detalisDiscount.classList.add('detalis-discount');
  const detalisDiscountText = document.createElement('span');
  detalisDiscountText.classList.add('detalis-discount-text');

  const elementDetalisRaiting = document.createElement('div');
  elementDetalisRaiting.classList.add('element__detalis-raiting');
  const detalisRaiting = document.createElement('h4');
  detalisRaiting.classList.add('detalis-raiting');
  const detalisRaitingText = document.createElement('span');
  detalisRaitingText.classList.add('detalis-raiting-text');

  const elementDetalisStock = document.createElement('div');
  elementDetalisStock.classList.add('element__detalis-stock');
  const detalisStock = document.createElement('h4');
  detalisStock.classList.add('detalis-stock');
  const detalisStockText = document.createElement('span');
  detalisStockText.classList.add('detalis-stock-text');

  const elementDetalisCategory = document.createElement('div');
  elementDetalisCategory.classList.add('element__detalis-category');
  const detalisCategory = document.createElement('h4');
  detalisCategory.classList.add('detalis-category');
  const detalisCategoryText = document.createElement('span');
  detalisCategoryText.classList.add('detalis-category-text');

  const elementDetalisDescription = document.createElement('div');
  elementDetalisDescription.classList.add('element__detalis-description');
  const detalisDescription = document.createElement('h4');
  detalisDescription.classList.add('detalis-description');
  const detalisDescriptionText = document.createElement('span');
  detalisDescriptionText.classList.add('detalis-description-text');
  
  const detalisWrapperPrice = document.createElement('div');
  detalisWrapperPrice.classList.add('detalis-wrapper__price');
  const detalisWrapperPricePrice = document.createElement('div');
  detalisWrapperPricePrice.classList.add('detalis-wrapper__price-price');
  const detalisWrapperPriceBtrAdd = document.createElement('button');
  detalisWrapperPriceBtrAdd.classList.add('cards__button');
  const detalisWrapperPriceBtrRemove = document.createElement('button');
  detalisWrapperPriceBtrRemove.classList.add('detalis-wrapper__price-btr-remove');

  const elementImgBigImg = document.createElement('img')
  elementImgBigImg.classList.add('element-img__big-img')

  const elementImgSmall = document.createElement('div');
  elementImgSmall.classList.add('element-img__small');

  main?.append(mainProductInfo)
  mainProductInfo.append(productInfoAdd)
  mainProductInfo.append(productInfoAll)

  productInfoAll.append(productInfoAllTitle)
  productInfoAll.append(productInfoAllElement)

  productInfoAllElement.append(productInfoAllElementImg)
  productInfoAllElement.append(detalisWrapper)

  productInfoAllElementImg.append(elementImgBig)
  elementImgBig.append(elementImgBigImg)

  detalisWrapper.append(allElementDetalis)
  detalisWrapper.append(detalisWrapperPrice)

  allElementDetalis.append(elementDetalisBrand)
  elementDetalisBrand.append(detalisBrand)
  elementDetalisBrand.append(detalisBrandText)

  allElementDetalis.append(elementDetalisDiscount)
  elementDetalisDiscount.append(detalisDiscount)
  elementDetalisDiscount.append(detalisDiscountText)

  allElementDetalis.append(elementDetalisRaiting)
  elementDetalisRaiting.append(detalisRaiting)
  elementDetalisRaiting.append(detalisRaitingText)

  allElementDetalis.append(elementDetalisStock)
  elementDetalisStock.append(detalisStock)
  elementDetalisStock.append(detalisStockText)

  allElementDetalis.append(elementDetalisCategory)
  elementDetalisCategory.append(detalisCategory)
  elementDetalisCategory.append(detalisCategoryText)

  allElementDetalis.append(elementDetalisDescription)
  elementDetalisDescription.append(detalisDescription)
  elementDetalisDescription.append(detalisDescriptionText)

  detalisWrapperPrice.append(detalisWrapperPricePrice)
  detalisWrapperPrice.append(detalisWrapperPriceBtrAdd)
  detalisWrapperPrice.append(detalisWrapperPriceBtrRemove)
  productInfoAllElementImg.append(elementImgSmall)

  productInfoAdd.innerHTML = 'Инфо'
  // productInfoAllTitle.innerHTML = 'title'


  detalisBrand.innerHTML = 'Брэнд:'
  // detalisBrandText.innerHTML = 'Samsung'

  detalisDiscount.innerHTML = 'Cкидка:'
  // detalisDiscountText.innerHTML = '10%'
  
  detalisRaiting.innerHTML = 'Рейтинг:'
  // detalisRaitingText.innerHTML = '3.9'

  detalisStock.innerHTML = 'Наличие:'
  // detalisStockText.innerHTML = '75'

  detalisCategory.innerHTML = 'Категория:'
  // detalisCategoryText.innerHTML = 'Наушники'

  detalisDescription.innerHTML = 'Описание:'
  // detalisDescriptionText.innerHTML = 'Новые беспроводные наушники от Samsung Galaxy Buds 2, наряду со смартфонами, смогли также быстро завоевать доверие среди своих пользователей. Ничего сверхсложного - только стильный дизайн, качественный звук и при этом доступная цена в совокупности дают нам успех. Наушники Samsung Galaxy Buds 2 подключаются через Bluetooth 5.2 и легко синхронизируются с любыми новейшими устройствами - как версии Android, так и iOS. С помощью '

  // detalisWrapperPricePrice.innerHTML = '150%'
  detalisWrapperPriceBtrAdd.innerHTML = 'Добавить в корзину'
  detalisWrapperPriceBtrRemove.innerHTML = 'Купить сейчас'


  const mainLeft = document.querySelector('.main__left-section')
  const mainright = document.querySelector('.main__right-product')

  mainright?.classList.add('active')
  mainLeft?.classList.add('active')
  
  detalisWrapperPriceBtrRemove.addEventListener('click', () => {
    buyNow()
    // const urlStart = (location.href.slice(0, location.href.lastIndexOf("/"))) + '/?&cartpage'
    // location.href = urlStart;
    //---
    // let newUrl = window.location.origin;
    // newUrl = `${newUrl}?cartpage&checkout=1`;
    
  
    // window.history.pushState({}, '', newUrl);
    // window.location.href = newUrl
    //---
    window.location.assign(`${window.location.origin}/?&cartpage`)
    const cardShopSummBtn = document.querySelector('.card-shop__summ-btn') as HTMLElement
    setTimeout(() => {
      cardShopSummBtn.click()
    },0)
    console.log('hi')
  })
  

  detalisWrapperPriceBtrAdd.addEventListener('click', calculationInfo);
}


export function CardInfo() {
  const cardsHover = document.querySelectorAll('.cards__hover')
  cardsHover.forEach(item => item.addEventListener('click', (e: Event) => {
    
    RenderInfoProduct();
    const t = e.target as HTMLElement;
    let newUrl = window.location.href;
    PRODUCTS.forEach(item => {
      if (item.id === Number(t.getAttribute('id'))) {
        const productInfoAllTitle = document.querySelector('.product-info__all-title') as HTMLElement
        const detalisBrandText = document.querySelector('.detalis-brand-text') as HTMLElement
        const detalisDiscountText = document.querySelector('.detalis-discount-text') as HTMLElement
        const detalisRaitingText = document.querySelector('.detalis-raiting-text') as HTMLElement
        const detalisStockText = document.querySelector('.detalis-stock-text') as HTMLElement
        const detalisCategoryText = document.querySelector('.detalis-category-text') as HTMLElement
        const detalisDescriptionText = document.querySelector('.detalis-description-text') as HTMLElement
        const detalisWrapperPricePrice = document.querySelector('.detalis-wrapper__price-price') as HTMLElement
      
        const elementImgBigImg = document.querySelector('.element-img__big-img') as HTMLImageElement
        (document.querySelector('.product-info__add') as HTMLElement).innerHTML = `Techno-Store -> ${item.category} -> ${item.brand} -> ${item.title}`;
        detalisDescriptionText.innerHTML = item.description
        productInfoAllTitle.innerHTML = item.title 
        
        detalisDiscountText.innerHTML = item.discountPrecentage.toString()
        detalisRaitingText.innerHTML = item.raiting.toString()
        detalisStockText.innerHTML = item.stock.toString()
        detalisCategoryText.innerHTML = item.category
        detalisWrapperPricePrice.innerHTML = item.price.toString() + '$'
        elementImgBigImg.src = item.previewImg
        detalisBrandText.innerHTML = item.brand
        if (!newUrl.includes('?')) {
          newUrl = `${newUrl}?&${item.category}-${item.title.split(' ').join('')}`;
        } else {
          newUrl = `${newUrl}&${item.category}-${item.title.split(' ').join('')}`;
        }
        window.history.pushState({}, '', newUrl);
        item.images.filter(item => {
          const elementImgSmall = document.querySelector('.element-img__small') as HTMLElement

          const small1 = document.createElement('div');
          small1.classList.add('small-1');

          const small1Img = document.createElement('img')
          small1Img.classList.add('small-1-img')

          
          elementImgSmall.append(small1)
          small1.append(small1Img)
          small1Img.src = item;
        })
      }
    });
    
    cartStorageInfo();
    const clickSmallimg = document.querySelectorAll('.small-1-img')
    clickSmallimg.forEach(item => {
      item.addEventListener('mouseenter', (e: Event) => {
        const elementImgBigImg = document.querySelector('.element-img__big-img') as HTMLImageElement
        elementImgBigImg.src = `${(<HTMLElement>e.target).getAttribute('src')}`
      })
    })
  }))
}


function calculationInfo (e: Event) {
  const Cart = document.querySelector('.header__cart-counter');
  const totalPrice = document.querySelector('.header__cart-price');
  const priceField = document.querySelector('.detalis-wrapper__price-price');
  const titleField = document.querySelector('.product-info__all-title');
  const target: EventTarget | null = e.target;
  let CurrentQuantity = 0;
  let CurrentPrice = Number(totalPrice?.innerHTML.slice(1, totalPrice.innerHTML.length));
  if (Cart?.innerHTML) {
    CurrentQuantity = Number(Cart.innerHTML);
  }
  if ((target as HTMLButtonElement).innerHTML === 'Добавить в корзину') {
    CurrentQuantity++;
    if (target instanceof HTMLElement) {
      CurrentPrice = CurrentPrice + Number(priceField?.innerHTML.slice(0, priceField?.innerHTML.length-1));
      (target as HTMLButtonElement).innerHTML = 'Убрать из корзины';
      target.classList.remove('cards__button');
      target.classList.add('cards__button-active');
      let arrToStorage = [];
      if (localStorage.cards) {
        arrToStorage = JSON.parse(localStorage.cards);
        PRODUCTS.forEach((value) => {if(value.title === titleField?.innerHTML) {
          arrToStorage.push(value);
        }})
      }
      else {
        PRODUCTS.forEach((value) => {if(value.title === titleField?.innerHTML) {
          arrToStorage.push(value);
        }})
      }
      localStorage.setItem('cards', JSON.stringify(arrToStorage));
    }
  }
  else {
    const localCards = JSON.parse(localStorage.cards);
      localCards.forEach((value: IProduct) => {
        if (value.title === titleField?.innerHTML) {
          const dif = (priceField as HTMLElement).innerHTML.length;
          CurrentQuantity = CurrentQuantity - value.count;
          CurrentPrice = CurrentPrice - Number(priceField?.innerHTML.slice(0, 
            dif as number - 1)) * value.count;
        }
      });
    if (target instanceof HTMLElement) {
      (target as HTMLButtonElement).innerHTML = 'Добавить в корзину';
      target.classList.remove('cards__button-active');
      target.classList.add('cards__button');
      const arrToStorage: Array<IProduct> = JSON.parse(localStorage.cards);
      let index = 0;
      arrToStorage.forEach((value, i) => {
        if (value.title === titleField?.innerHTML){
          index = i;
        }
      })
      arrToStorage.splice(index, 1);
      
      localStorage.setItem('cards', JSON.stringify(arrToStorage));
    }
  }
  
  if (Cart?.innerHTML) {
    Cart.innerHTML = CurrentQuantity.toString();
  }
  if (totalPrice?.innerHTML) {
    totalPrice.innerHTML = '$' + CurrentPrice.toString();
  }
}

function buyNow() {
  const Cart = document.querySelector('.header__cart-counter') as HTMLElement;
  const headerCartPrice = document.querySelector('.header__cart-price') as HTMLElement;
  const priceField = document.querySelector('.detalis-wrapper__price-price');
  const titleField = document.querySelector('.product-info__all-title');
  let CurrentQuantity = 0;
  let arrToStorage: Array<IProduct> = [];
  if (localStorage.cards) {
    arrToStorage = JSON.parse(localStorage.cards);
    const arrItem = arrToStorage.find(item => item.title === titleField?.innerHTML)
    if (arrItem === undefined) {
      PRODUCTS.forEach((value) => {if(value.title === titleField?.innerHTML) {
        arrToStorage.push(value);
      }
      })
      CurrentQuantity = Number(Cart?.innerHTML)
      CurrentQuantity++
      Cart.innerHTML = CurrentQuantity.toString()
      headerCartPrice.innerHTML = '$' + (Number(headerCartPrice?.innerHTML.slice(1)) + Number(priceField?.innerHTML.slice(0,-1))).toString()
      localStorage.setItem('cards', JSON.stringify(arrToStorage));
    }
  } else {
    PRODUCTS.forEach((value) => {if(value.title === titleField?.innerHTML) {
      arrToStorage.push(value);
    }
    })
    CurrentQuantity = Number(Cart?.innerHTML)
    CurrentQuantity++
    Cart.innerHTML = CurrentQuantity.toString()
    headerCartPrice.innerHTML = '$' + (Number(headerCartPrice?.innerHTML.slice(1)) + Number(priceField?.innerHTML.slice(0,-1))).toString()
    localStorage.setItem('cards', JSON.stringify(arrToStorage));
  }
}

function cartStorageInfo () {
  const titleField = document.querySelector('.product-info__all-title');
  const button = document.querySelector('.detalis-wrapper__price')?.querySelector('.cards__button');
  const Cart = document.querySelector('.header__cart-counter');
  const totalPrice = document.querySelector('.header__cart-price');
  if (localStorage.cards) {
    const arrFromStorage:Array<IProduct> = JSON.parse(localStorage.cards);
    arrFromStorage.forEach((product) =>{
      if(titleField?.innerHTML === product.title) {
        button?.classList.remove('cards__button');
        button?.classList.add('cards__button-active');
        (button as HTMLButtonElement).innerHTML = 'Убрать из корзины';
      }
    })
    if (Cart?.innerHTML && totalPrice?.innerHTML) {
      Cart.innerHTML = arrFromStorage.reduce(function(a, b: IProduct): number {
        return a + b.count
      }, 0).toString();
      totalPrice.innerHTML = '$' + arrFromStorage.reduce(function(a, b: IProduct): number {
        return a + b.price
      }, 0).toString();
    }
  }
}

function cardInfoLoader() {
  const arrOfPaths: Array<string> = [];
  PRODUCTS.forEach((value) => {
    arrOfPaths.push(`${value.category}-${value.title.split(' ').join('')}`);
  })
  arrOfPaths.forEach((elem) => {
    if (window.location.href.includes(elem)) {
      RenderInfoProduct();
      PRODUCTS.forEach(item => {
        if (item.title.split(' ').join('') === elem.slice(elem.indexOf('-') + 1)) {
          const productInfoAllTitle = document.querySelector('.product-info__all-title') as HTMLElement
          const detalisBrandText = document.querySelector('.detalis-brand-text') as HTMLElement
          const detalisDiscountText = document.querySelector('.detalis-discount-text') as HTMLElement
          const detalisRaitingText = document.querySelector('.detalis-raiting-text') as HTMLElement
          const detalisStockText = document.querySelector('.detalis-stock-text') as HTMLElement
          const detalisCategoryText = document.querySelector('.detalis-category-text') as HTMLElement
          const detalisDescriptionText = document.querySelector('.detalis-description-text') as HTMLElement
          const detalisWrapperPricePrice = document.querySelector('.detalis-wrapper__price-price') as HTMLElement
        
          const elementImgBigImg = document.querySelector('.element-img__big-img') as HTMLImageElement
          (document.querySelector('.product-info__add') as HTMLElement).innerHTML = `Techno-Store -> ${item.category} -> ${item.brand} -> ${item.title}`;
          detalisDescriptionText.innerHTML = item.description
          productInfoAllTitle.innerHTML = item.title 
          
          detalisDiscountText.innerHTML = item.discountPrecentage.toString()
          detalisRaitingText.innerHTML = item.raiting.toString()
          detalisStockText.innerHTML = item.stock.toString()
          detalisCategoryText.innerHTML = item.category
          detalisWrapperPricePrice.innerHTML = item.price.toString() + '$'
          elementImgBigImg.src = item.previewImg
          detalisBrandText.innerHTML = item.brand
          item.images.filter(item => {
            const elementImgSmall = document.querySelector('.element-img__small') as HTMLElement

            const small1 = document.createElement('div');
            small1.classList.add('small-1');

            const small1Img = document.createElement('img')
            small1Img.classList.add('small-1-img')

            
            elementImgSmall.append(small1)
            small1.append(small1Img)
            small1Img.src = item;
          })
        }
      });
      
      cartStorageInfo();
      const clickSmallimg = document.querySelectorAll('.small-1-img')
      clickSmallimg.forEach(item => {
        item.addEventListener('mouseenter', (e: Event) => {
          const elementImgBigImg = document.querySelector('.element-img__big-img') as HTMLImageElement
          elementImgBigImg.src = `${(<HTMLElement>e.target).getAttribute('src')}`
        })
      })
    }
  })
}

window.addEventListener('load', cardInfoLoader);