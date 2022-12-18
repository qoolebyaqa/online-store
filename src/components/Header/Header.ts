
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