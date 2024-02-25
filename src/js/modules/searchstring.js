let searchString = document.getElementsByName('search')[0];
function searchstringActive(){
  const root = document.querySelector(":root");
  searchString.placeholder = '';
  root.style.setProperty('--searchbar-border', 'transparent')
  root.style.setProperty('--searchbar-bg', 'transparent')
}

function searchstringBlur(){
  const root = document.querySelector(":root");
  searchString.value = '';
  root.style.setProperty('--searchbar-border', '#C1DCDC');
  root.style.setProperty('--searchbar-bg', 'white');
}

export {searchstringActive, searchstringBlur}
