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

  cardShopSumm.append(shopSummText, shopSummProduct, shopSummTotalPrice, shopSummPromocod, cardShopSummBtn)
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
  promocodSale20.append(promocodSale20Add)
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