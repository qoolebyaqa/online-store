import { CardsRender } from "./Main-product";
import { PRODUCTS } from "../goods";

export function restartFilters() {
  const inputsCategoryCollection = document.querySelector('.block-category')?.getElementsByTagName('input');
  const inputsBrandCollection = document.querySelector('.block-brand')?.getElementsByTagName('input');
  const minInputsCollection = [...document.querySelectorAll('.input-min'), ...document.querySelectorAll('.range-min')];
  const maxInputsCollection = [...document.querySelectorAll('.input-max'), ...document.querySelectorAll('.range-max')];
  (minInputsCollection[0] as HTMLInputElement).value = '0';
  (minInputsCollection[1] as HTMLInputElement).value = '1';
  (minInputsCollection[2] as HTMLInputElement).value = '0';
  (minInputsCollection[3] as HTMLInputElement).value = '1';
  (maxInputsCollection[0] as HTMLInputElement).value = '4500';
  (maxInputsCollection[1] as HTMLInputElement).value = '100';
  (maxInputsCollection[2] as HTMLInputElement).value = '4500';
  (maxInputsCollection[3] as HTMLInputElement).value = '100';
  const newUrl = window.location.href.replace(window.location.search, '');
  window.history.pushState({}, '', newUrl);
  if (inputsCategoryCollection && inputsBrandCollection) {
    Array.from(inputsCategoryCollection).forEach((value) => {
      value.checked = false;
    })
    Array.from(inputsBrandCollection).forEach((value) => {
      value.checked = false;
    })
  }
  CardsRender(PRODUCTS);
  return;
}
