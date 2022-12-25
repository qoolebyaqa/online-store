import { pageStatus } from '../../components/Main-product/global-obj';
import { filterCheckbox } from './Main-product';

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

export function askToURL() {
  const Checkboxes = document.querySelectorAll('.list-category__checkbox-input');
  /* debugger; */
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
  filterCheckbox();
  
}

window.addEventListener('load', askToURL);
window.addEventListener('popstate', () => {window.location.reload()});