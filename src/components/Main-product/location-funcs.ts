import { pageStatus } from '../../components/Main-product/global-obj';
/* import { filterCheckbox } from './Main-product'; */
import { filterRange } from './Main-product';
import { PageStatusWithValues } from '../../components/Main-product/global-obj';

export function urlChanger (e: Event) {
  if (!window.location.href.includes('?')){
    window.history.pushState({}, '', window.location.href+'?');
  }
  const filterType = e.target;
  let newUrl = window.location.href;
  
  pageStatus[(filterType as HTMLInputElement).id] = !pageStatus[(filterType as HTMLInputElement).id];
  if (newUrl.includes(`&${(filterType as HTMLInputElement).id}`)) {
    newUrl = newUrl.replace(`&${(filterType as HTMLInputElement).id}`, '');    
  }
  else {
    newUrl = `${window.location.href}&${(filterType as HTMLInputElement).id}`;
  }
  window.history.pushState({ path: newUrl }, '', newUrl);
}

export function urlChanger4range (e: Event) {
  const filterType = e.target;
  let newUrl = window.location.href;
  if ((filterType as HTMLInputElement).value === '') {
    return;
  }
  PageStatusWithValues[(filterType as HTMLInputElement).id] = (filterType as HTMLInputElement).value;
  if ((filterType as HTMLInputElement).id === 'minPrice' || (filterType as HTMLInputElement).id === 'minRangePrice') {
    if (newUrl.includes('minPrice') || newUrl.includes('minRangePrice')) {
      if (newUrl.indexOf('&', newUrl.indexOf('minPrice')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minPrice'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minPrice'), newUrl.indexOf('&', newUrl.indexOf('minPrice')))}`, '');
      }
      if (newUrl.indexOf('&', newUrl.indexOf('minRangePrice')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minRangePrice'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minRangePrice'), newUrl.indexOf('&', newUrl.indexOf('minRangePrice')))}`, '');
      }
    }   
  }
  if ((filterType as HTMLInputElement).id === 'maxPrice' || (filterType as HTMLInputElement).id === 'maxRangePrice') {
    if (newUrl.includes('maxPrice') || newUrl.includes('maxRangePrice')) {
      if (newUrl.indexOf('&', newUrl.indexOf('maxPrice')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxPrice'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxPrice'), newUrl.indexOf('&', newUrl.indexOf('maxPrice')))}`, '');
      }
      if (newUrl.indexOf('&', newUrl.indexOf('maxRangePrice')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxRangePrice'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxRangePrice'), newUrl.indexOf('&', newUrl.indexOf('maxRangePrice')))}`, '');
      }
    }
  }
  if ((filterType as HTMLInputElement).id === 'minStock' || (filterType as HTMLInputElement).id === 'minRangeStock') {
    if (newUrl.includes('minStock') || newUrl.includes('minRangeStock')) {
      if (newUrl.indexOf('&', newUrl.indexOf('minStock')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minStock'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minStock'), newUrl.indexOf('&', newUrl.indexOf('minStock')))}`, '');
      }
      if (newUrl.indexOf('&', newUrl.indexOf('minRangeStock')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minRangeStock'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minRangeStock'), newUrl.indexOf('&', newUrl.indexOf('minRangeStock')))}`, '');
      }
    }
  }
  if ((filterType as HTMLInputElement).id === 'maxStock' || (filterType as HTMLInputElement).id === 'maxRangeStock') {
    if (newUrl.includes('maxStock') || newUrl.includes('maxRangeStock')) {
      if (newUrl.indexOf('&', newUrl.indexOf('maxStock')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxStock'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxStock'), newUrl.indexOf('&', newUrl.indexOf('maxStock')))}`, '');
      }
      if (newUrl.indexOf('&', newUrl.indexOf('maxRangeStock')) === -1) {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxRangeStock'))}`, '');
      }
      else {
        newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&maxRangeStock'), newUrl.indexOf('&', newUrl.indexOf('maxRangeStock')))}`, '');
      }
    }
  }
      
  setTimeout(() => {
    if (!newUrl.includes('?')) {
      newUrl = `${newUrl}?&${(filterType as HTMLInputElement).id}=${(filterType as HTMLInputElement).value}`;
    } else {
      newUrl = `${newUrl}&${(filterType as HTMLInputElement).id}=${(filterType as HTMLInputElement).value}`;
    }
    window.history.pushState({}, '', newUrl);
  }, 2000); 
  /* if (newUrl.includes(`${(filterType as HTMLInputElement).id}`)) {
    let str1 = ''
    if (newUrl.indexOf('&', newUrl.indexOf((filterType as HTMLInputElement).id)) === -1) {
      str1 = newUrl.slice(newUrl.indexOf((filterType as HTMLInputElement).id)+(filterType as HTMLInputElement).id.length);
      console.log(str1);
    }
    else {
      str1 = newUrl.slice(newUrl.indexOf((filterType as HTMLInputElement).id)+(filterType as HTMLInputElement).id.length, 
      newUrl.indexOf('&', newUrl.indexOf((filterType as HTMLInputElement).id)));
    }
    
    const str2 = `=${(filterType as HTMLInputElement).value}`;
    newUrl = newUrl.replace(str1, str2);
  }
  else {
    newUrl = `${window.location.href}&${(filterType as HTMLInputElement).id}=${(filterType as HTMLInputElement).value}`;
  }
  window.history.pushState({}, '', newUrl); */
}

export function askToURL() {
  const Checkboxes = document.querySelectorAll('.list-category__checkbox-input');
  /* const inputRangeMin = document.querySelectorAll('.range-min');
  const inputRangeMax = document.querySelectorAll('.range-max'); */
  const priceInputMin = document.querySelector('.price-inputs')?.querySelector('.input-min');
  const priceInputMax = document.querySelector('.price-inputs')?.querySelector('.input-max');
  const stokeInputMin = document.querySelector('.stock-inputs')?.querySelector('.input-min');
  const stokeInputMax = document.querySelector('.stock-inputs')?.querySelector('.input-max');
  const inputs: Array<Element | null | undefined> = [];
  inputs.push(priceInputMax, priceInputMin, stokeInputMin, stokeInputMax);
  Object.keys(pageStatus).forEach((value) => {
    if (window.location.search.includes(value)) {
      pageStatus[value] = !pageStatus[value];
      for (const input of Checkboxes) {
        if (input.id === value) {
          (input as HTMLInputElement).checked = true;
        }
      }
    }
  });
  Object.keys(PageStatusWithValues).forEach((item) => {
    if (window.location.search.includes(item)) {
      if (window.location.search.indexOf('&', window.location.search.indexOf(item)+item.length) === -1) {
        PageStatusWithValues[item] = window.location.search.slice(window.location.search.indexOf(item)+item.length);
      }
      else {
        PageStatusWithValues[item] = window.location.search.slice(window.location.search.indexOf(item)+item.length,
        window.location.search.indexOf('&', window.location.search.indexOf(item)+item.length));
      }
    }
  })
  filterRange();
  
}

window.addEventListener('load', askToURL);
window.addEventListener('popstate', () => {window.location.reload()});