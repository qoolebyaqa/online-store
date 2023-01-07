import { IProduct } from "./components/goods";
/* const getParam = localStorage.getItem('cards')
const localCards = JSON.parse(getParam || "{}") */
import { cartStorage } from './components/Header/Header';
import { PRODUCTS } from './components/goods'
import { RenderModal } from './modal';

//----- Ф-ия если корзина пуста --------
function RenderWrapperCardShop() {
  const main = document.querySelector('.main') as HTMLElement;
  const mainLeft = document.querySelector('.main__left-section') as HTMLElement;
  const mainRight = document.querySelector('.main__right-product') as HTMLElement;
  const infoWindow = document.querySelector('.main__product-info') as HTMLElement;
  mainLeft.style.display = 'none';
  mainRight.style.display = 'none';
  if (infoWindow) { infoWindow.style.display = 'none'; }

  const mainWrapperCardShop = document.createElement('section');
  mainWrapperCardShop.classList.add('main-wrapper__card-shop');
  const mainCardShop = document.createElement('div');
  mainCardShop.classList.add('main__card-shop');
  const cardShopH1 = document.createElement('h1');
  cardShopH1.classList.add('card-shop__h1');
  main?.append(mainWrapperCardShop)
  mainWrapperCardShop.append(mainCardShop)
  mainCardShop.append(cardShopH1)
  cardShopH1.innerHTML = 'Корзина пуста';

  let newUrl = window.location.origin;

  if (!newUrl.includes('?')) {
    newUrl = `${newUrl}?&cartpage`;
  } else {
    newUrl = `${newUrl}&cartpage`;
  }
  window.history.pushState({}, '', newUrl);
}
// RenderWrapperCardShop()


//========================= отображение корзины====================
//--блок скидок---
export function RenderCardShop() {
  const longUrl = window.location.href;
  let newUrl = window.location.origin;

  if (!newUrl.includes('?')) {
    newUrl = `${newUrl}?&cartpage`;
  } else {
    newUrl = `${newUrl}&cartpage`;
  }
  window.history.pushState({}, '', newUrl);

  
  const headerCartPrice = document.querySelector('.header__cart-price')
  const main = document.querySelector('.main') as HTMLElement;

  const mainLeft = document.querySelector('.main__left-section') as HTMLElement;
  const mainRight = document.querySelector('.main__right-product') as HTMLElement;
  const infoWindow = document.querySelector('.main__product-info') as HTMLElement;
  mainLeft.style.display = 'none';
  mainRight.style.display = 'none';
  if (infoWindow) { infoWindow.style.display = 'none'; }
  const mainWrapperCardShop = document.createElement('section');
  mainWrapperCardShop.classList.add('main-wrapper__card-shop');
  const mainCardShop = document.createElement('div');
  mainCardShop.classList.add('main__card-shop');

  const cardShop = document.createElement('div');
  cardShop.classList.add('card-shop');
  const cardShopProduct = document.createElement('div');
  cardShopProduct.classList.add('card-shop__product');
  const cardShopProductTitle = document.createElement('div');
  cardShopProductTitle.classList.add('card-shop__product-title');
  const productTitleText = document.createElement('div');
  productTitleText.classList.add('product-title__text');
  const productTitleItems = document.createElement('div');
  productTitleItems.classList.add('product-title__items');
  const itemsBox = document.createElement('div');
  itemsBox.classList.add('items-box');
  const itemsBoxText = document.createElement('div');
  itemsBoxText.classList.add('items-box-text');
  const itemsBoxNumber = document.createElement('input');
  itemsBoxNumber.classList.add('items-box-number');
  itemsBoxNumber.value = '3';
  itemsBoxNumber.setAttribute('type', 'number')
  const productTitlePage = document.createElement('div');
  productTitlePage.classList.add('product-title__page');
  const titlePageText = document.createElement('div');
  titlePageText.classList.add('title__page-text');
  const titlePageBtnLeft = document.createElement('button');
  titlePageBtnLeft.classList.add('title__page-btn-left');
  const titlePageNumber = document.createElement('div');
  titlePageNumber.classList.add('title__page-number');
  const titlePageBtnRight = document.createElement('button');
  titlePageBtnRight.classList.add('title__page-btn-right');

  const cardShopSumm = document.createElement('div');
  cardShopSumm.classList.add('card-shop__summ');
  const shopSummText = document.createElement('div');
  shopSummText.classList.add('shop__summ-text');
  const shopSummProduct = document.createElement('div');
  shopSummProduct.classList.add('shop__summ-product');
  const summProductText = document.createElement('span');
  summProductText.classList.add('summ-product-text');
  const summProductValue = document.createElement('span');
  summProductValue.classList.add('summ-product-value');
  const shopSummTotalPrice = document.createElement('div');
  shopSummTotalPrice.classList.add('shop__summ-total-price');

  const shopSummTotalPriceSales = document.createElement('div');
  shopSummTotalPriceSales.classList.add('shop__summ-total-price-sales');
  const totalPriceTextSales = document.createElement('span');
  totalPriceTextSales.classList.add('total-price-text-sales');
  const totalPriceValueSales = document.createElement('span');
  totalPriceValueSales.classList.add('total-price-value-sales');
  const promocodAppliedSale10 = document.createElement('div');
  promocodAppliedSale10.classList.add('promocod-applied-sale-10');
  const promocodSaleRem10Text = document.createElement('span');
  promocodSaleRem10Text.classList.add('promocod-sale-rem10-text');
  const promocodSaleRem10 = document.createElement('span');
  promocodSaleRem10.classList.add('promocod-sale-rem10');
  const promocodAppliedSale20 = document.createElement('div');
  promocodAppliedSale20.classList.add('promocod-applied-sale-20');
  const promocodSaleRem20Text = document.createElement('span');
    promocodSaleRem20Text.classList.add('promocod-sale-rem20-text');
  const promocodSaleRem20 = document.createElement('span');
  promocodSaleRem20.classList.add('promocod-sale-rem20');

  const totalPriceText = document.createElement('span');
  totalPriceText.classList.add('total-price-text');
  const totalPriceValue = document.createElement('span');
  totalPriceValue.classList.add('total-price-value');
  const shopSummPromocod = document.createElement('div');
  shopSummPromocod.classList.add('shop__summ-promocod');
  const inputPromocodText = document.createElement('input');
  inputPromocodText.classList.add('input-promocod-text');
  inputPromocodText.setAttribute('placeholder', 'введите код')
  inputPromocodText.setAttribute('type', 'search')
  const promocodSale10 = document.createElement('div');
  promocodSale10.classList.add('promocod-sale-10');
  const promocodSale10Add = document.createElement('span');
  promocodSale10Add.classList.add('promocod-sale10-add');
  const promocodSale20 = document.createElement('div');
  promocodSale20.classList.add('promocod-sale-20');
  const promocodSale20Add = document.createElement('span');
  promocodSale20Add.classList.add('promocod-sale20-add');
  const inputPromocodSpan = document.createElement('span');
  inputPromocodSpan.classList.add('input-promocod-span');
  const cardShopSummBtn = document.createElement('button');
  cardShopSummBtn.classList.add('card-shop__summ-btn');

  const headerCartCounter = document.querySelector('.header__cart-counter') as HTMLElement

  main.append(mainWrapperCardShop)
  mainWrapperCardShop.append(mainCardShop)
  mainCardShop?.append(cardShop)
  cardShop.append(cardShopProduct, cardShopSumm)

  cardShopProduct.append(cardShopProductTitle)
  cardShopProductTitle.append(productTitleText, productTitleItems)
  productTitleItems.append(itemsBox, productTitlePage)
  itemsBox.append(itemsBoxText, itemsBoxNumber)
  productTitlePage.append(titlePageText, titlePageBtnLeft, titlePageNumber, titlePageBtnRight)

  productTitleText.innerHTML = 'Товаров в корзине'
  itemsBoxText.innerHTML = 'по:'
  titlePageText.innerHTML = 'Страница:'
  titlePageBtnLeft.innerHTML = '&lt;'
  titlePageNumber.innerHTML = '1'
  titlePageBtnRight.innerHTML = '&gt;'

  cardShopSumm.append(shopSummText, shopSummProduct, shopSummTotalPrice, shopSummTotalPriceSales, promocodAppliedSale10, promocodAppliedSale20, shopSummPromocod, cardShopSummBtn)
  shopSummTotalPriceSales.append(totalPriceTextSales, totalPriceValueSales)
  totalPriceTextSales.innerHTML = 'Всего:'
  totalPriceValueSales.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
  promocodAppliedSale10.append(promocodSaleRem10Text, promocodSaleRem10)
  promocodSaleRem10Text.innerHTML = 'скидка 10%'
  promocodSaleRem10.innerHTML = '-'
  promocodAppliedSale20.append(promocodSaleRem20Text, promocodSaleRem20)
  promocodSaleRem20Text.innerHTML = 'скидка 20%'
  promocodSaleRem20.innerHTML = '-'

  shopSummText.innerHTML = 'Итого'
  cardShopSummBtn.innerHTML = 'Оформить'
  
  shopSummProduct.append(summProductText, summProductValue)
  summProductText.innerHTML = 'Kол-во:'
  summProductValue.innerHTML = (headerCartCounter.innerHTML)?.toString()
  shopSummTotalPrice.append(totalPriceText, totalPriceValue)
  totalPriceText.innerHTML = 'Всего:'
  totalPriceValue.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
  shopSummPromocod.append(inputPromocodText, promocodSale10, promocodSale20, inputPromocodSpan)
  promocodSale10.innerHTML = 'скидка 10%'
  promocodSale20.innerHTML = 'скидка 20%'
  promocodSale10.append(promocodSale10Add)
  promocodSale10Add.innerHTML = '+'
  promocodSale20.append(promocodSale20Add)
  promocodSale20Add.innerHTML = '+'
  inputPromocodSpan.innerHTML = "код 'top' 'low'"

  if (longUrl.includes('items')) {
    if (longUrl.indexOf('&', longUrl.indexOf('items')) === -1) {
      (document.querySelector('.items-box-number') as HTMLInputElement).value = longUrl.slice(longUrl.indexOf('items') + 6)
    } else {
      (document.querySelector('.items-box-number') as HTMLInputElement).value = longUrl.slice(longUrl.indexOf('items') + 6, 
      longUrl.indexOf('&', longUrl.indexOf('items')));
    } 
    window.history.pushState({}, '', longUrl);
  }
  if (longUrl.includes('list')) {
    if (longUrl.indexOf('&', longUrl.indexOf('list')) === -1) {
      (document.querySelector('.title__page-number') as HTMLElement).innerHTML = longUrl.slice(longUrl.indexOf('list')+5)
    } else {
      (document.querySelector('.title__page-number') as HTMLElement).innerHTML = longUrl.slice(longUrl.indexOf('list')+5, 
      longUrl.indexOf('&', longUrl.indexOf('list')));
    }
    window.history.pushState({}, '', longUrl);
  }


inputPromocodText.addEventListener('input', filterList)
function filterList() {
const searchInput = document.querySelector('.input-promocod-text')
const promocodSale10 = document.querySelector('.promocod-sale-10')
const promocodSale20 = document.querySelector('.promocod-sale-20')

const filter = (searchInput as HTMLInputElement).value.toLowerCase()

if (filter === 'low') {
  (promocodSale10 as HTMLElement).classList.add('active')
} else {
  (promocodSale10 as HTMLElement).classList.remove('active')
}

if (filter === 'top') {
  (promocodSale20 as HTMLElement).classList.add('active')
} else {
  (promocodSale20 as HTMLElement).classList.remove('active')
}
}

//---блок с товаром---
function RenderCardItem(localCards: Array<IProduct>) {
  let count = 1;
  
  localCards.forEach(item => {
  const cardShopProduct = document.querySelector('.card-shop__product');

  const cardShopProductItem = document.createElement('div');
  cardShopProductItem.classList.add('card-shop__product-item');
  const productItemBox = document.createElement('div');
  productItemBox.classList.add('product-item__box');
  const productItemBoxNumber = document.createElement('div');
  productItemBoxNumber.classList.add('product-item__box-number');
  const productItemBoxInfo = document.createElement('div');
  productItemBoxInfo.classList.add('product-item__box-info');
  const boxInfoImg = document.createElement('div');
  boxInfoImg.classList.add('box-info__img');
  const boxInfoImgImg = document.createElement('img');
  boxInfoImgImg.classList.add('box-info__img-img');
  const boxInfoAll = document.createElement('div');
  boxInfoAll.classList.add('box-info__all');

  const boxInfoAllTitle = document.createElement('div');
  boxInfoAllTitle.classList.add('box-info__all-title');
  const boxInfoAllDescription = document.createElement('div');
  boxInfoAllDescription.classList.add('box-info__all-description');
  const boxInfoAllRaitDisc = document.createElement('div');
  boxInfoAllRaitDisc.classList.add('box-info__all-rait-disc');
  const boxInfoAllRait = document.createElement('div');
  boxInfoAllRait.classList.add('box-info__all-rait');
  const infoAllRaitText = document.createElement('div');
  infoAllRaitText.classList.add('info__all-rait-text');
  const infoAllRaitValue = document.createElement('div');
  infoAllRaitValue.classList.add('info__all-rait-value');
  const boxInfoAllDisc = document.createElement('div');
  boxInfoAllDisc.classList.add('box-info__all-disc');
  const infoAllDiscText = document.createElement('div');
  infoAllDiscText.classList.add('info__all-disc-text');
  const infoAllDiscValue = document.createElement('div');
  infoAllDiscValue.classList.add('info__all-disc-value');

  const productItemCount = document.createElement('div');
  productItemCount.classList.add('product-item__count');
  const productItemCountStock = document.createElement('div');
  productItemCountStock.classList.add('product-item__count-stock');
  const countStockText = document.createElement('div');
  countStockText.classList.add('count-stock__text');
  const countStockValue = document.createElement('div');
  countStockValue.classList.add('count-stock__value');

  const productItemCountAdd = document.createElement('div');
  productItemCountAdd.classList.add('product-item__count-add');
  productItemCountAdd.setAttribute('id', `${item.id}`)
  const countAddAdd = document.createElement('div');
    countAddAdd.classList.add('count-add-add', 'plus');
    countAddAdd.setAttribute('id', `${item.id}`)
  const countAddValue = document.createElement('div');
  countAddValue.classList.add('count-add-value');
  const countAddRemove = document.createElement('div');
    countAddRemove.classList.add('count-add-remove', 'minus');
    countAddRemove.setAttribute('id', `${item.id}`)

  const productItemCountStockPrice = document.createElement('div');
  productItemCountStockPrice.classList.add('product-item__count-stock-price');

  cardShopProduct?.append(cardShopProductItem)

  cardShopProductItem.append(productItemBox)
  productItemBox.append(productItemBoxNumber, productItemBoxInfo, productItemCount)

  productItemBoxNumber.innerHTML = (count++).toString()

  productItemBoxInfo.append(boxInfoImg, boxInfoAll)
  boxInfoImg.append(boxInfoImgImg)
  boxInfoAll.append(boxInfoAllTitle, boxInfoAllDescription, boxInfoAllRaitDisc)
  boxInfoAllTitle.innerHTML =  `${item.title}`
  boxInfoAllDescription.innerHTML = `${item.description}`
  
  boxInfoAllRaitDisc.append(boxInfoAllRait, boxInfoAllDisc)
  boxInfoAllRait.append(infoAllRaitText, infoAllRaitValue)
  infoAllRaitText.innerHTML = 'Рейтинг:'
  infoAllRaitValue.innerHTML = `${item.raiting}`
  boxInfoAllDisc.append(infoAllDiscText, infoAllDiscValue)
  infoAllDiscText.innerHTML = 'Скидка:'
  infoAllDiscValue.innerHTML = `${item.discountPrecentage}%`

  productItemCount.append(productItemCountStock, productItemCountAdd, productItemCountStockPrice)
  productItemCountStockPrice.innerHTML = `${item.price}$`

  productItemCountStock.append(countStockText, countStockValue)
  countStockText.innerHTML = 'Кол-во:'
  countStockValue.innerHTML = `${item.stock}`

  productItemCountAdd.append(countAddAdd, countAddValue, countAddRemove)
  countAddAdd.innerHTML = '+'
  countAddValue.innerHTML = `${item.count}`
  countAddRemove.innerHTML = '-'
    
    boxInfoImgImg.src = `${item.previewImg}`

    countAddAdd.addEventListener('click', (event) => {
      const summProductValue = document.querySelector('.summ-product-value') as HTMLElement
      const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
      const headerCartPrice = document.querySelector('.header__cart-price')
      const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
      const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10') as HTMLElement
      const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20') as HTMLElement
      
      if ( (<HTMLElement>event.target).classList.contains('plus')) {
        let count = Number(countAddValue.innerHTML)
        const stock = Number(countStockValue.innerHTML)
        count++
        summProductValue.innerHTML = localCards.reduce(function(a, b: IProduct): number {
          return a + b.count
        }, 1).toString();
        if (count > stock) {
          return
        }
        PRODUCTS.forEach(value => {
          if (value.id === item.id) {
            productItemCountStockPrice.innerHTML = `${value.price * count}$`
            item.count = count
            item.price = value.price * count
            localStorage.setItem('cards', JSON.stringify(localCards));
            cartStorage()
          }
        })
        countAddValue.innerHTML = count.toString()
        totalPriceValue.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
        if (promocodAppliedSale10.classList.contains('active') && !promocodAppliedSale20.classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$'+(Math.round(price - ((price/100)*10))).toString()
        } else if (promocodAppliedSale20.classList.contains('active') && !promocodAppliedSale10.classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$'+(Math.round(price - ((price/100)*20))).toString()
        } else if ((<HTMLElement>promocodAppliedSale10).classList.contains('active') && (<HTMLElement>promocodAppliedSale20).classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 30))).toString()
        }
      }
    })

    countAddRemove.addEventListener('click', (event) => {
      const cardShopProductItem = document.querySelectorAll('.card-shop__product-item');
      const summProductValue = document.querySelector('.summ-product-value') as HTMLElement
      const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
      const headerCartPrice = document.querySelector('.header__cart-price')
      const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
      const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10') as HTMLElement
      const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20') as HTMLElement
      if ((<HTMLElement>event.target).classList.contains('minus')) {
        let count = Number(countAddValue.innerHTML)
        PRODUCTS.forEach(value => {
          if (value.id === item.id) {
            const num = Number(productItemCountStockPrice.innerHTML.slice(0, -1))
            productItemCountStockPrice.innerHTML = `${num - value.price}$`
            count--
            item.count = count
            summProductValue.innerHTML = localCards.reduce(function(a, b: IProduct): number {
              return a + b.count
            }, 0).toString();
            item.price = num - value.price
            localStorage.setItem('cards', JSON.stringify(localCards));
            cartStorage()
          }

        })

        if (count === 0) {
          localCards = localCards.filter(elem => elem.id != item.id)
          localStorage.setItem('cards', JSON.stringify(localCards));
          cardShopProductItem.forEach(item => item.innerHTML = '')
          RenderCardItem(localCards);
          PaginationRenderer(PagesDividerAfterRemoval());
        }
        countAddValue.innerHTML = count.toString()
        totalPriceValue.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
        if ((<HTMLElement>promocodAppliedSale10).classList.contains('active') && !(<HTMLElement>promocodAppliedSale20).classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$'+(Math.round(price - ((price/100)*10))).toString()
        } else if (!(<HTMLElement>promocodAppliedSale10).classList.contains('active') && (<HTMLElement>promocodAppliedSale20).classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$'+(Math.round(price - ((price/100)*20))).toString()
        } else if ((<HTMLElement>promocodAppliedSale10).classList.contains('active') && (<HTMLElement>promocodAppliedSale20).classList.contains('active')) {
          const price = Number(totalPriceValue.innerHTML.slice(1))
          totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 30))).toString()
        }
      }
    })
  })
}
  RenderCardItem(JSON.parse(localStorage.cards));
  
  cardShopSummBtn.addEventListener('click', RenderModal)
}
// RenderCardShop()
//==================================================================

//---------------кнопки для добавления удаления скидки---------------------------
function clickSale10() {
  const promocodSale10Add = document.querySelector('.promocod-sale10-add')
  const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10')
  const shopSummTotalPriceSales = document.querySelector('.shop__summ-total-price-sales')
  const shopSummTotalPrice = document.querySelector('.shop__summ-total-price')
  // const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
  const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement

  promocodSale10Add?.addEventListener('click', () => {
    promocodAppliedSale10?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale10Add.classList.add('active')

    const price = Number(totalPriceValueSales.innerHTML.slice(1))
    totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 10))).toString()
    
    localStorage.setItem("sale10", 'true');
  })
} 
function clickSale20() {
  const promocodSale20Add = document.querySelector('.promocod-sale20-add')
  const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20')
  const shopSummTotalPriceSales = document.querySelector('.shop__summ-total-price-sales')
  const shopSummTotalPrice = document.querySelector('.shop__summ-total-price')
  // const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
  const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
  
  promocodSale20Add?.addEventListener('click', () => {
    promocodAppliedSale20?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale20Add.classList.add('active')

    const price = Number(totalPriceValueSales.innerHTML.slice(1))
    totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 20))).toString()

    localStorage.setItem("sale20", 'true');
  })
} 
function clickSaleRemove10() {
  const promocodSaleRem10 = document.querySelector('.promocod-sale-rem10')
  const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10')
  const promocodSale10Add = document.querySelector('.promocod-sale10-add') as HTMLButtonElement
  const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
  const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
  const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20')
  const shopSummTotalPrice = document.querySelector('.shop__summ-total-price')
  const shopSummTotalPriceSales = document.querySelector('.shop__summ-total-price-sales')
  const headerCartPrice = document.querySelector('.header__cart-price')

  promocodSaleRem10?.addEventListener('click', () => {
    promocodAppliedSale10?.classList.remove('active')
    promocodSale10Add.classList.remove('active')

    const price = Number(totalPriceValue.innerHTML.slice(1))
    const newPrice = price - Math.ceil(price - ((price/100)*10))
    totalPriceValueSales.innerHTML = '$' + (Number(totalPriceValueSales.innerHTML.slice(1)) + newPrice).toString()
    
    if (!promocodAppliedSale20?.classList.contains('active')) {
      shopSummTotalPrice?.classList.remove('active')
    }

    if (!promocodAppliedSale10?.classList.contains('active') && !promocodAppliedSale20?.classList.contains('active')) {
      shopSummTotalPriceSales?.classList.remove('active')
      totalPriceValueSales.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
    }

    localStorage.removeItem("sale10");
  })

  
}
function clickSaleRemove20() {
  const promocodSaleRem20 = document.querySelector('.promocod-sale-rem20')
  const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20')
  const promocodSale20Add = document.querySelector('.promocod-sale20-add') as HTMLButtonElement
  const totalPriceValue = document.querySelector('.total-price-value') as HTMLElement
  const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
  const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10')
  const shopSummTotalPrice = document.querySelector('.shop__summ-total-price')
  const shopSummTotalPriceSales = document.querySelector('.shop__summ-total-price-sales')
  const headerCartPrice = document.querySelector('.header__cart-price')

  promocodSaleRem20?.addEventListener('click', () => {
    promocodAppliedSale20?.classList.remove('active')
    promocodSale20Add.classList.remove('active')

    const price = Number(totalPriceValue.innerHTML.slice(1))
    const newPrice = price - Math.ceil(price - ((price/100)*20))
    totalPriceValueSales.innerHTML = '$' + (Number(totalPriceValueSales.innerHTML.slice(1)) + newPrice).toString()
    
    if (!promocodAppliedSale10?.classList.contains('active')) {
      shopSummTotalPrice?.classList.remove('active')
    }

    if (!promocodAppliedSale10?.classList.contains('active') && !promocodAppliedSale20?.classList.contains('active')) {
      shopSummTotalPriceSales?.classList.remove('active')
      totalPriceValueSales.innerHTML = `$${headerCartPrice?.innerHTML.slice(1)}`
    }

    localStorage.removeItem("sale20");
  })

  
}
//-------------------Ф-ция для добавления скидки в ls-----------------------------
function saleLocalStor() {
  const promocodSale10Add = document.querySelector('.promocod-sale10-add') as HTMLElement
  const promocodAppliedSale10 = document.querySelector('.promocod-applied-sale-10')
  const shopSummTotalPriceSales = document.querySelector('.shop__summ-total-price-sales')
  const shopSummTotalPrice = document.querySelector('.shop__summ-total-price')
  const totalPriceValueSales = document.querySelector('.total-price-value-sales') as HTMLElement
  const promocodAppliedSale20 = document.querySelector('.promocod-applied-sale-20')
  const promocodSale20Add = document.querySelector('.promocod-sale20-add') as HTMLElement
  const sale10 = localStorage.getItem('sale10')
  const sale20 = localStorage.getItem('sale20')
  if (sale10 && !sale20) {
    promocodAppliedSale10?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale10Add.classList.add('active')

    const price = Number(totalPriceValueSales.innerHTML.slice(1))
    totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 10))).toString()
  }else if (sale20 && !sale10) {
    promocodAppliedSale20?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale20Add.classList.add('active')

    const price = Number(totalPriceValueSales.innerHTML.slice(1))
    totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 20))).toString()
  } else if(sale10 && sale20) {
    promocodAppliedSale10?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale10Add.classList.add('active')
    promocodAppliedSale20?.classList.add('active')
    shopSummTotalPriceSales?.classList.add('active')
    shopSummTotalPrice?.classList.add('active')
    promocodSale20Add.classList.add('active')
    const price = Number(totalPriceValueSales.innerHTML.slice(1))
    totalPriceValueSales.innerHTML = '$' + (Math.round(price - ((price / 100) * 30))).toString()
  }
}
//-------------------------------------------------------------------------------

export function cartOptions () {
  const basket = document.querySelector('.nav-item-basket')
  const headerCartCounter = document.querySelector('.header__cart-counter')
  if (Number(headerCartCounter?.innerHTML) === 0) {
    RenderWrapperCardShop()
  } else {
    RenderCardShop()
    PaginationRenderer(PagesDivider());
    clickSale10()
    clickSale20()
    clickSaleRemove10()
    clickSaleRemove20()
    saleLocalStor()
    document.querySelector('.title__page-btn-right')?.addEventListener('click', switcher);
    document.querySelector('.title__page-btn-left')?.addEventListener('click', switcher);
    document.querySelector('.items-box-number')?.addEventListener('input', (e) => {
      if ((e.target as HTMLInputElement).value === undefined) {
        return;
      }
      PaginationRenderer(inputPage())});

    }
  
  basket?.removeEventListener('click', cartOptions);
}

function clickBasket() {
  const basket = document.querySelector('.nav-item-basket')
  const headerCartCounter = document.querySelector('.header__cart-counter')

  function cartOptions () {
    if (document.querySelector('.card-shop')) {
      basket?.removeEventListener('click', cartOptions);
    }
    else {      
      if (Number(headerCartCounter?.innerHTML) === 0) {
        RenderWrapperCardShop()
      } else {
        RenderCardShop()
        PaginationRenderer(PagesDivider());
        clickSale10()
        clickSale20()
        clickSaleRemove10()
        clickSaleRemove20()
        saleLocalStor()
        document.querySelector('.title__page-btn-right')?.addEventListener('click', switcher);
        document.querySelector('.title__page-btn-left')?.addEventListener('click', switcher);
        document.querySelector('.items-box-number')?.addEventListener('input', (e) => {
          if ((e.target as HTMLInputElement).value === undefined) {
            return;
          }
          PaginationRenderer(inputPage())});

        }
    }
    
    basket?.removeEventListener('click', cartOptions);
  }
basket?.addEventListener('click', cartOptions);
}
clickBasket()

type gl = {
  pages: string,
  glArr: Element[][],
  sourceArr: Element[],
}
const gl: gl = {
  pages: '0',
  glArr: [],
  sourceArr: Array.from(document.querySelectorAll('.card-shop__product-item'))
}
function PagesDivider() {
  const goodsArr = Array.from(document.querySelectorAll('.card-shop__product-item'));
  const goodsPerPage = document.querySelector('.items-box-number') as HTMLInputElement;
  const itemArrByPages: Element[][] = [];  
  let arr: Array<Element> = [];
  goodsArr.forEach((value, index, array) => {
    index += 1;
    if ((index) % Number(goodsPerPage.value) !== 0) {
      arr.push(value);
      if (index === array.length) {
        itemArrByPages.push(arr);
      } 
    } else {
      arr.push(value);
      itemArrByPages.push(arr);
      arr = [];
    }
  })
  gl.pages = itemArrByPages.length.toString();
  gl.glArr = itemArrByPages;
  gl.sourceArr = goodsArr;
  return itemArrByPages;
}

function PaginationRenderer (arr: Element[][]) {
  const pageNumber = document.querySelector('.title__page-number') as HTMLElement;
  const itemsCollection = document.querySelectorAll('.card-shop__product-item');
  const btnPrevious = document.querySelector('.title__page-btn-left') as HTMLButtonElement;
  const btnNext = document.querySelector('.title__page-btn-right') as HTMLButtonElement;
  const wrapper = document.querySelector('.card-shop__product') as HTMLElement;

  if (arr[0] === undefined) {
    (document.querySelector('.main-wrapper__card-shop') as HTMLElement).remove();
    return RenderWrapperCardShop();
  }

  for (const item of itemsCollection) {
    item.remove();
  }
  if (arr[Number(pageNumber.innerHTML) - 1] === undefined) {
    if (Number(pageNumber.innerHTML) - 1 < 2) {
      pageNumber.innerHTML = '1';
      arr[0].forEach((value) => {
        
        wrapper.append(value);
      });
    }
    if (Number(pageNumber.innerHTML) - 1 >= arr.length) {
      pageNumber.innerHTML = arr.length.toString();
      arr[arr.length - 1].forEach((value) => {
        wrapper.append(value);
      });
    }
  } else {
    arr[Number(pageNumber.innerHTML) - 1].forEach((value) => {
      wrapper.append(value);
    });
  }

  if (pageNumber.innerHTML === '1') {
    btnPrevious.disabled = true;
  }
  else {
    btnPrevious.disabled = false;
  }
  if (pageNumber.innerHTML === arr.length.toString()) {
    btnNext.disabled = true;
  }
  else {
    btnNext.disabled = false;
  }
  return arr;
}



function switcher (e?: Event) {
  const pageNumber = document.querySelector('.title__page-number') as HTMLElement;
  const btnPrevious = document.querySelector('.title__page-btn-left') as HTMLButtonElement;
  const btnNext = document.querySelector('.title__page-btn-right') as HTMLButtonElement;  
  const maxPage = gl.pages;
  let newUrl = window.location.href;

  if (e?.target === btnPrevious) {
    pageNumber.innerHTML = (Number(pageNumber.innerHTML) - 1).toString();
    PaginationRenderer(gl.glArr);
    if (pageNumber.innerHTML === '1') {
      btnPrevious.disabled = true;
      btnNext.disabled = false;
    } else {
      btnPrevious.disabled = false;
      btnNext.disabled = false;
    }

  }
  if (e?.target === btnNext) {
    pageNumber.innerHTML = (Number(pageNumber.innerHTML) + 1).toString();
    PaginationRenderer(gl.glArr);
    if (pageNumber.innerHTML === maxPage.toString()) {
      btnNext.disabled = true;
      btnPrevious.disabled = false;
    } else {
      btnNext.disabled = false;
      btnPrevious.disabled = false;
    }
  }

  if (newUrl.includes('&list')) {
    if (newUrl.indexOf('&', newUrl.indexOf('list')) === -1) {
      newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&list')), '');
    } else {
      newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&list'), newUrl.indexOf('&', newUrl.indexOf('list'))), '');
    }
  }
  newUrl = `${newUrl}&list=${pageNumber.innerHTML}`;
  window.history.pushState({}, '', newUrl);
}

function inputPage () {
  const goodsArr = gl.sourceArr;
  const goodsPerPage = document.querySelector('.items-box-number') as HTMLInputElement;
  const itemArrByPages: Element[][] = [];
  let newUrl = window.location.href;
  let arr: Array<Element> = [];
  goodsArr.forEach((value, index, array) => {
    index += 1;
    if ((index) % Number(goodsPerPage.value) !== 0) {
      arr.push(value);
      if (index === array.length) {
        itemArrByPages.push(arr);
      } 
    } else {
      arr.push(value);
      itemArrByPages.push(arr);
      arr = [];
    }
  })
  gl.pages = itemArrByPages.length.toString();
  gl.glArr = itemArrByPages;

  if (newUrl.includes('&items')) {
    if (newUrl.indexOf('&', newUrl.indexOf('items')) === -1) {
      newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&items')), '');
    } else {
      newUrl = newUrl.replace(newUrl.slice(newUrl.indexOf('&items'), newUrl.indexOf('&', newUrl.indexOf('items'))), '');
    }
  }
  newUrl = `${newUrl}&items=${goodsPerPage.value}`;
  window.history.pushState({}, '', newUrl);

  return itemArrByPages;
}



function PagesDividerAfterRemoval() {
  let goodsArr = Array.from(document.querySelectorAll('.card-shop__product-item'));
  const goodsPerPage = document.querySelector('.items-box-number') as HTMLInputElement;
  const itemArrByPages: Element[][] = [];  
  let arr: Array<Element> = [];
  goodsArr = goodsArr.filter((value) => value.innerHTML !== '');
  goodsArr.forEach((value, index, array) => {
    index += 1;
    if ((index) % Number(goodsPerPage.value) !== 0) {
      arr.push(value);
      if (index === array.length) {
        itemArrByPages.push(arr);
      } 
    } else {
      arr.push(value);
      itemArrByPages.push(arr);
      arr = [];
    }
  })
  gl.pages = itemArrByPages.length.toString();
  gl.glArr = itemArrByPages;
  gl.sourceArr = goodsArr;

  return itemArrByPages;
}


