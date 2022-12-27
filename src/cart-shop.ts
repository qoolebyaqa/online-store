import { IProduct } from "./components/goods";

function RenderWrapperCardShop() {
  const main = document.querySelector('.main');

  const mainWrapperCardShop = document.createElement('section');
  mainWrapperCardShop.classList.add('main-wrapper__card-shop');
  const mainCardShop = document.createElement('div');
  mainCardShop.classList.add('main__card-shop');
  const cardShopH1 = document.createElement('h1');
  cardShopH1.classList.add('card-shop__h1');

  main?.append(mainWrapperCardShop)
  mainWrapperCardShop.append(mainCardShop)
  mainCardShop.append(cardShopH1)
  cardShopH1.innerHTML = 'Корзина пуста'
}
RenderWrapperCardShop()

function RenderCardShop() {
  const mainCardShop = document.querySelector('.main__card-shop');

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
  itemsBoxNumber.setAttribute('type', 'number')
  const productTitlePage = document.createElement('div');
  productTitlePage.classList.add('product-title__page');
  const titlePageText = document.createElement('div');
  titlePageText.classList.add('title__page-text');
  const titlePageBtnLeft = document.createElement('div');
  titlePageBtnLeft.classList.add('title__page-btn-left');
  const titlePageNumber = document.createElement('div');
  titlePageNumber.classList.add('title__page-number');
  const titlePageBtnRight = document.createElement('div');
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
  totalPriceValueSales.innerHTML = 'со скидкой$'
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
  summProductValue.innerHTML = '2'
  shopSummTotalPrice.append(totalPriceText, totalPriceValue)
  totalPriceText.innerHTML = 'Всего:'
  totalPriceValue.innerHTML = 'summ$'
  shopSummPromocod.append(inputPromocodText, promocodSale10, promocodSale20, inputPromocodSpan)
  promocodSale10.innerHTML = 'скидка 10%'
  promocodSale20.innerHTML = 'скидка 20%'
  promocodSale10.append(promocodSale10Add)
  promocodSale10Add.innerHTML = '+'
  promocodSale20.append(promocodSale20Add)
  promocodSale20Add.innerHTML = '+'
  inputPromocodSpan.innerHTML = "код 'top' 'low'"

}
RenderCardShop()

const inputPromocodText = document.querySelector('.input-promocod-text') as HTMLElement
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



const getParam = localStorage.getItem('cards')
const localCards = JSON.parse(getParam || "{}")
function RenderCardItem(localCards: Array<IProduct>) {
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

  countStockText.innerHTML = 'stock:'
  countStockValue.innerHTML = '40'

  const productItemCountAdd = document.createElement('div');
  productItemCountAdd.classList.add('product-item__count-add');
  const countAddAdd = document.createElement('div');
  countAddAdd.classList.add('count-add-add');
  const countAddValue = document.createElement('div');
  countAddValue.classList.add('count-add-value');
  const countAddRemove = document.createElement('div');
  countAddRemove.classList.add('count-add-remove');

  const productItemCountStockPrice = document.createElement('div');
  productItemCountStockPrice.classList.add('product-item__count-stock-price');

  cardShopProduct?.append(cardShopProductItem)

  cardShopProductItem.append(productItemBox)
  productItemBox.append(productItemBoxNumber, productItemBoxInfo, productItemCount)

  productItemBoxNumber.innerHTML = '1'

  productItemBoxInfo.append(boxInfoImg, boxInfoAll)
  boxInfoImg.append(boxInfoImgImg)
  boxInfoAll.append(boxInfoAllTitle, boxInfoAllDescription, boxInfoAllRaitDisc)
  boxInfoAllTitle.innerHTML =  'Airpods 2'
  boxInfoAllDescription.innerHTML = '2022. Гаджет вызвал большой интерес благодаря безупречным характеристикам. Эти параметры сочетаются с выгодными условиями продажи'
  
  boxInfoAllRaitDisc.append(boxInfoAllRait, boxInfoAllDisc)
  boxInfoAllRait.append(infoAllRaitText, infoAllRaitValue)
  infoAllRaitText.innerHTML = 'Рейтинг:'
  infoAllRaitValue.innerHTML = '4.84'
  boxInfoAllDisc.append(infoAllDiscText, infoAllDiscValue)
  infoAllDiscText.innerHTML = 'Скидка:'
  infoAllDiscValue.innerHTML = '5'

  productItemCount.append(productItemCountStock, productItemCountAdd, productItemCountStockPrice)
  productItemCountStockPrice.innerHTML = '200$'

  productItemCountStock.append(countStockText, countStockValue)
  countStockText.innerHTML = 'stock:'
  countStockValue.innerHTML = '40'

  productItemCountAdd.append(countAddAdd, countAddValue, countAddRemove)
  countAddAdd.innerHTML = '+'
  countAddValue.innerHTML = '1'
  countAddRemove.innerHTML = '-'
  } )

  
}
RenderCardItem(localCards)
