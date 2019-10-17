// import styles here
import 'styles/styles.scss';

// modules here -->
import * as axios from 'axios';

// js here -->
import { TemplateRendererEngine } from 'lib/renderer';
import { DynamicForm } from 'components/contact-form';
import { Menu } from 'components/menu';
// Target specific browser if needed
document.body.setAttribute('user-agent', navigator.userAgent);
document.body.setAttribute('can-webComponents', 'customElements' in window);

// Initialize menu
const navigation = document.querySelector('.navigation');
if (navigation) {
  // eslint-disable-next-line no-new
  new Menu(navigation);
}

// Initialize contact form
const form = document.querySelector('.dynamic-form');
if (form) {
  // eslint-disable-next-line no-new
  new DynamicForm(form);
}

// Sharing the page
const sharer = document.querySelector('#share');
if (sharer) {
  const shareCase = navigator.share ? 'sheet' : 'prompt';

  const shareOptions = {
    sheet: () => {
      navigator
        .share({
          title: 'Actualcactuar',
          text: 'Homepage / showcase of my favourite technologies',
          url: window.location.href,
        })
        .catch(() => {
          prompt('Error occured while sharing, here is a snippet!', window.location.href);
        });
    },
    prompt: () => {
      prompt("Your browser doesn't support the share API, but here is a snippet!", window.location.href);
    },
  };

  sharer.addEventListener('click', () => {
    shareOptions[shareCase].call();
  });
}

const engine = new TemplateRendererEngine();
const newsContainer = document.querySelector('#hNewsContainer');
const tpl = newsContainer ? newsContainer.innerHTML : null;
const storyUrl = id => `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`;

const fetchDetails = async id => {
  const { data } = await axios.get(storyUrl(id));
  return data;
};

const fetchTopTenHackerNews = async () => {
  const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty');
  const topTen = data.slice(0, 10);
  Promise.all(topTen.map(id => fetchDetails(id)))
    // eslint-disable-next-line no-return-assign
    .then(values => (newsContainer.innerHTML = engine.render(tpl, { news: values })))
    .then(() => createObserver('.hacker-news-entry'));
};

if (tpl && newsContainer) {
  fetchTopTenHackerNews();
}

function createObserver(selector) {
  const cols = document.querySelectorAll(selector);

  if (!('IntersectionObserver' in window)) {
    cols.forEach(col => col.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add('visible');
        }
      });
    });

    cols.forEach(col => {
      observer.observe(col);
    });
  }
}

createObserver('[class^="col-"]');
document.addEventListener('DOMContentLoaded', event => {
  const themeSwitch = document.querySelector('c-theme-switch');
  const cachedTheme = localStorage.getItem('cachedTheme');
  if (cachedTheme && themeSwitch) {
    themeSwitch.setAttribute('active-theme', cachedTheme);
  }
  document.body.style.opacity = '1';
});
