import { PRODUCTS } from "./components/goods";

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
  detalisWrapperPriceBtrAdd.classList.add('detalis-wrapper__price-btr-add');
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
  detalisWrapperPriceBtrAdd.innerHTML = 'Добавить в козрзину'
  detalisWrapperPriceBtrRemove.innerHTML = 'Купить сейчас'


  const mainLeft = document.querySelector('.main__left-section')
  const mainright = document.querySelector('.main__right-product')

  mainright?.classList.add('active')
  mainLeft?.classList.add('active')
}


const cardsHover = document.querySelectorAll('.cards__hover')
cardsHover.forEach(item => item.addEventListener('click', (e: Event) => {
  
  RenderInfoProduct();
  const t = e.target as HTMLElement
  t.getAttribute('id')

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

    detalisDescriptionText.innerHTML = item.description
    productInfoAllTitle.innerHTML = item.title 
    
    detalisDiscountText.innerHTML = item.discountPrecentage.toString()
    detalisRaitingText.innerHTML = item.raiting.toString()
    detalisStockText.innerHTML = item.stock.toString()
    detalisCategoryText.innerHTML = item.category
    detalisWrapperPricePrice.innerHTML = item.price.toString()
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
        small1Img.src = item
    })
    }
  })
  
  const clickSmallimg = document.querySelectorAll('.small-1-img')
  clickSmallimg.forEach(item => {
    item.addEventListener('mouseenter', (e: Event) => {
      const elementImgBigImg = document.querySelector('.element-img__big-img') as HTMLImageElement
      elementImgBigImg.src = `${(<HTMLElement>e.target).getAttribute('src')}`
    })
  })
}))
