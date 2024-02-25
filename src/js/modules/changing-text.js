let searchString = document.getElementsByName('search')[0];
let searchbar = document.querySelector('.search__searchbar')
export default function textLoad() {
  setTimeout(() =>{
    searchString.placeholder = 'Ищу кактус';
                  }, 0);
  setTimeout(() =>{
    searchString.placeholder = 'Хочу суккуленты';
                  }, 3000)
    setTimeout(() =>{
      searchString.placeholder = 'Купить рассаду';
                  }, 6000)
    setTimeout(() =>{
      searchString.placeholder = 'Цветы для дома';
          }, 9000)
}
