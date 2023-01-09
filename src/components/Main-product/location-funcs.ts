import { pageStatus } from '../../components/Main-product/global-obj';
/* import { filterCheckbox } from './Main-product'; */
import { filterRange } from './Main-product';
import { PageStatusWithValues } from '../../components/Main-product/global-obj';

export function urlChanger (e: Event) {
  if (!window.location.href.includes('?')){
    window.history.pushState({}, '', window.location.href+'?');
  }
  const filterType = e.target;
  let newUrl = window.location.search;
  
  pageStatus[(filterType as HTMLInputElement).id] = !pageStatus[(filterType as HTMLInputElement).id];
  if (newUrl.indexOf('&', newUrl.indexOf('minStock')) === -1) {
    newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minStock'))}`, '');
  }
  else {
    newUrl = newUrl.replace(`${newUrl.slice(newUrl.indexOf('&minStock'), newUrl.indexOf('&', newUrl.indexOf('minStock')))}`, '');
  }
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

  if (newUrl.includes(`&${(filterType as HTMLInputElement).id}`)) {
    newUrl = newUrl.replace(`&${(filterType as HTMLInputElement).id}`, '');    
  }
  else {
    newUrl = `${newUrl}&${(filterType as HTMLInputElement).id}`;
  }
  window.history.pushState({ path: newUrl }, '', newUrl);
}



export function askToURL() {
  const Checkboxes = document.querySelectorAll('.list-category__checkbox-input');
  const inputPriceMin = [document.getElementById('minPrice'), document.getElementById('minRangePrice')];
  const inputPriceMax = [document.getElementById('maxPrice'), document.getElementById('maxRangePrice')];
  const inputStockMin = [document.getElementById('minStock'), document.getElementById('minRangeStock')];
  const inputStockMax = [document.getElementById('maxStock'), document.getElementById('maxRangeStock')];
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
    const pathLink = window.location.search;
    if (pathLink.includes(item)) {
      if (item === (inputPriceMax[0] as HTMLInputElement).id || item === (inputPriceMax[1] as HTMLInputElement).id) {
        let forValue = '';
        if (pathLink.indexOf('&', pathLink.indexOf(item)) === -1) {
          forValue = pathLink.slice(pathLink.indexOf(item) + item.length + 1)
        } else {
          forValue = pathLink.slice(pathLink.indexOf(item) + item.length + 1, pathLink.indexOf('&', pathLink.indexOf(item)));
        }
        (inputPriceMax[0] as HTMLInputElement).value = forValue;
        console.log(forValue);
        (inputPriceMax[1] as HTMLInputElement).value = forValue;
      }
      if (item === (inputPriceMin[0] as HTMLInputElement).id || item === (inputPriceMin[1] as HTMLInputElement).id) {
        const forValue1 = pathLink.indexOf('&', pathLink.indexOf(item)) === -1 ?
        pathLink.slice(pathLink.indexOf(item) + item.length + 1) : pathLink.slice(pathLink.indexOf(item) + item.length + 1, pathLink.indexOf('&', pathLink.indexOf(item)));
        (inputPriceMin[0] as HTMLInputElement).value = forValue1;
        (inputPriceMin[1] as HTMLInputElement).value = forValue1;
      }
      if (item === (inputStockMin[0] as HTMLInputElement).id || item === (inputStockMin[1] as HTMLInputElement).id) {
        const forValue2 = pathLink.indexOf('&', pathLink.indexOf(item)) === -1 ?
        pathLink.slice(pathLink.indexOf(item) + item.length + 1) : pathLink.slice(pathLink.indexOf(item) + item.length + 1, pathLink.indexOf('&', pathLink.indexOf(item)));
        (inputStockMin[0] as HTMLInputElement).value = forValue2;
        console.log(forValue2);
        (inputStockMin[1] as HTMLInputElement).value = forValue2;
      }
      if (item === (inputStockMax[0] as HTMLInputElement).id || item === (inputStockMax[1] as HTMLInputElement).id) {
        const forValue3 = pathLink.indexOf('&', pathLink.indexOf(item)) === -1 ?
        pathLink.slice(pathLink.indexOf(item) + item.length + 1) : pathLink.slice(pathLink.indexOf(item) + item.length + 1, pathLink.indexOf('&', pathLink.indexOf(item)));
        (inputStockMax[0] as HTMLInputElement).value = forValue3;
        console.log(forValue3);
        (inputStockMax[1] as HTMLInputElement).value = forValue3;
      }
    }
  });
  filterRange();
  
}

window.addEventListener('load', askToURL);
window.addEventListener('popstate', () => {window.location.reload()});