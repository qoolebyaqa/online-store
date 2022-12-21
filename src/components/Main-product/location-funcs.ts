import { pageStatus } from '../../components/Main-product/global-obj';

export function urlChanger (e: Event) {
  const filterType = e.target;
  let newUrl = window.location.href;
  
  pageStatus[(filterType as HTMLInputElement).id.toString()] = !pageStatus[(filterType as HTMLInputElement).id];
  if (newUrl.includes(`?${(filterType as HTMLInputElement).id}:true`)) {
    newUrl = newUrl.replace(`?${(filterType as HTMLInputElement).id}:true`, '');    
  }
  else {
    newUrl = `${window.location.href}?${(filterType as HTMLInputElement).id}:${pageStatus[(filterType as HTMLInputElement).id]}`;
  }
  window.history.pushState({ path: newUrl }, '', newUrl);  
}