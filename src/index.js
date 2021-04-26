import cardTemplate from './template.hbs';
import cards from './menu.json';
import './styles.css';

const cardsContainer = document.querySelector('.js-menu');
const cardsMarkup = createCards(cards);
cardsContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createCards(cards) {
    return cardTemplate(cards)
}




const switchTheme = document.querySelector('#theme-switch-toggle');
const bodyEl = document.querySelector('body');

const localStTheme = localStorage.getItem('theme');
const localStToggle = localStorage.getItem('toggle');

switchTheme.addEventListener('change', changeTheme);

function changeTheme () {
    if (this.checked) {
        bodyEl.classList.add('dark-theme');
        bodyEl.classList.remove('light-theme');
         localStorage.setItem('theme', 'dark-theme');
         localStorage.setItem('toggle', 'true');
    } else {
    bodyEl.classList.add('light-theme');
    bodyEl.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light-theme');
    localStorage.removeItem('toggle');
  }
}
bodyEl.classList.add(localStTheme);
switchTheme.checked = localStToggle;
localStorage.clear();
