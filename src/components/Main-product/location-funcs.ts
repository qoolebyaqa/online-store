import { pageStatus } from '../../components/Main-product/global-obj';
/* import { filterCheckbox } from './Main-product'; */
import { filterRange } from './Main-product';
import { PageStatusWithValues } from '../../components/Main-product/global-obj';

export function urlChanger (e: Event) {
  const filterType = e.target;
  let newUrl = window.location.href;
  
  pageStatus[(filterType as HTMLInputElement).id.toString()] = !pageStatus[(filterType as HTMLInputElement).id];
  if (newUrl.includes(`?${(filterType as HTMLInputElement).id}`)) {
    newUrl = newUrl.replace(`?${(filterType as HTMLInputElement).id}`, '');    
  }
  else {
    newUrl = `${window.location.href}?${(filterType as HTMLInputElement).id}`;
  }
  window.history.pushState({ path: newUrl }, '', newUrl);
}

export function urlChanger4range (e: Event) {
  const filterType = e.target;
  let newUrl = window.location.href;  

  PageStatusWithValues[(filterType as HTMLInputElement).id.toString()] = (filterType as HTMLInputElement).value;
  if (newUrl.includes(`${(filterType as HTMLInputElement).id}`)) {
    let str1 = ''
    if (newUrl.indexOf('?', newUrl.indexOf((filterType as HTMLInputElement).id)) === -1) {
      str1 = newUrl.slice(newUrl.indexOf((filterType as HTMLInputElement).id)+(filterType as HTMLInputElement).id.length);
    }
    else {
      str1 = newUrl.slice(newUrl.indexOf((filterType as HTMLInputElement).id)+(filterType as HTMLInputElement).id.length, 
      newUrl.indexOf('?', newUrl.indexOf((filterType as HTMLInputElement).id)));
    }
    
    const str2 = `:${(filterType as HTMLInputElement).value}`;
    newUrl = newUrl.replace(str1, str2);
  }
  else {
    newUrl = `${window.location.href}?${(filterType as HTMLInputElement).id}:${(filterType as HTMLInputElement).value}`;
  }
  window.history.pushState({ path: newUrl }, '', newUrl);
}

export function askToURL() {
  const Checkboxes = document.querySelectorAll('.list-category__checkbox-input');
  const inputRangeMin = document.querySelectorAll('.range-min');
  const inputRangeMax = document.querySelectorAll('.range-max');
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
      if (window.location.search.indexOf('?', window.location.search.indexOf(item)+item.length) === -1) {
        PageStatusWithValues[item] = window.location.search.slice(window.location.search.indexOf(item)+item.length);
        console.log(PageStatusWithValues[item]);
      }
      else {
        PageStatusWithValues[item] = window.location.search.slice(window.location.search.indexOf(item)+item.length,
        window.location.search.indexOf('?', window.location.search.indexOf(item)+item.length));
        console.log(PageStatusWithValues[item]);
      }
      
      inputs.forEach((input) => {
        if(input?.id === item) {
          (input as HTMLInputElement).value = PageStatusWithValues[item].toString();
        }
      });
      inputRangeMin.forEach((input => {
        if(input?.id === item) {
          (input as HTMLInputElement).value = PageStatusWithValues[item].toString();
        }
      }));
      inputRangeMax.forEach((input => {
        if(input?.id === item) {
          (input as HTMLInputElement).value = PageStatusWithValues[item].toString();
          console.log((input as HTMLInputElement).value)
        }
      }));
    }
  })
  filterRange();
  
}

window.addEventListener('load', askToURL);
window.addEventListener('popstate', () => {window.location.reload()});