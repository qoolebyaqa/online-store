const productTopSort = document.querySelectorAll('.product-top__sort');

productTopSort.forEach(e => {
  const select = e.querySelector('.select');
  const caret = e.querySelector('.caret');
  const menu = e.querySelector('.menu');
  const options = e.querySelectorAll('.menu li');
  const selected = e.querySelector('.selected');

  (select as HTMLElement).addEventListener('click', () => {
    (select as HTMLElement).classList.toggle('select-clicked');
    (caret as HTMLElement).classList.toggle('caret-rotate');
    (menu as HTMLElement).classList.toggle('menu-open');
  });

  options.forEach(e => {
    e.addEventListener('click', () => {
      (selected as HTMLElement).innerHTML = e.innerHTML;
      (select as HTMLElement).classList.remove('select-clicked');
      (caret as HTMLElement).classList.remove('caret-rotate');
      (menu as HTMLElement).classList.remove('menu-open');
      options.forEach(e => {
        e.classList.remove('active');
      });
      e.classList.add('active');
    })
  })
});