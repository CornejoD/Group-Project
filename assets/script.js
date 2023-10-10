var searchFormEl = document.querySelectorAll('#search');
var btnEl = document.querySelector('.btn');
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var searchInputVal = document.querySelector('#search-input').value;
    var formatInputVal = document.querySelector('#format-input').value;
  console.log(searchInputVal)
  console.log(formatInputVal)
    if (!searchInputVal) {
      console.error('You need a search input value!');
      return;
    }
  
    var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;
  
    location.assign(queryString);
  }
  
  btnEl.addEventListener('submit', handleSearchFormSubmit);
  