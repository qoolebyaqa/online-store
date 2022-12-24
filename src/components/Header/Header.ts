import { PRODUCTS } from "../goods";
import { IProduct } from "../goods";
export function PriceAndCart () {

  function calculation (e: Event) {
    const Cart = document.querySelector('.header__cart-counter');
    const totalPrice = document.querySelector('.header__cart-price');
    const target: EventTarget | null = e.target;
    let CurrentQuantity = 0;
    let CurrentPrice = Number(totalPrice?.innerHTML.slice(1, totalPrice.innerHTML.length));
    if (Cart?.innerHTML) {
      CurrentQuantity = Number(Cart.innerHTML);
    }
    CurrentQuantity++;
    if (target instanceof HTMLElement) {
      CurrentPrice = CurrentPrice + Number(target.parentElement?.children[4].innerHTML.slice(0, target.parentElement.children[4].innerHTML.length-1));
      (target as HTMLButtonElement).disabled = true;
      target.classList.remove('cards__button');
      target.classList.add('cards__button-active');
      let arrToStorage = [];
      if (localStorage.cards) {
        arrToStorage = JSON.parse(localStorage.cards);
        PRODUCTS.forEach((value) => {if(value.title === target.parentElement?.children[3].innerHTML) {
          arrToStorage.push(value);
        }})
      }
      else {
        PRODUCTS.forEach((value) => {if(value.title === target.parentElement?.children[3].innerHTML) {
          arrToStorage.push(value);
        }})
      }
      localStorage.setItem('cards', JSON.stringify(arrToStorage));
    }
    if (Cart?.innerHTML) {
      Cart.innerHTML = CurrentQuantity.toString();
    }
    if (totalPrice?.innerHTML) {
      totalPrice.innerHTML = '$' + CurrentPrice.toString();
    }
    target?.removeEventListener('click', calculation)
  }
  const cardsCollection = document.querySelectorAll('.cards__button');
  cardsCollection.forEach((value) =>  {
    value.addEventListener('click', calculation);
  });

}

  
export function cartStorage() {
  const CurrentElements = document.querySelectorAll('.cards__container');
  const Cart = document.querySelector('.header__cart-counter');
  const totalPrice = document.querySelector('.header__cart-price');
  if (localStorage.cards) {
    const arrFromStorage:Array<IProduct> = JSON.parse(localStorage.cards);
    CurrentElements.forEach((value) => {
      arrFromStorage.forEach((product) =>{
        if(value.children[3].innerHTML === product.title) {
          value.children[5].classList.remove('cards__button');
          value.children[5].classList.add('cards__button-active');
          (value.children[5] as HTMLButtonElement).disabled = true;
        }
      }
      )
    })
    if (Cart?.innerHTML && totalPrice?.innerHTML) {
      Cart.innerHTML = arrFromStorage.length.toString();
      totalPrice.innerHTML = '$' + arrFromStorage.reduce(function(a, b: IProduct): number {
        return a + b.price
      }, 0).toString();
    }
  }
}
window.addEventListener('load', cartStorage);
