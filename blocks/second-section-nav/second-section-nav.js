export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const sectionEl = document.createElement('section');
  sectionEl.setAttribute('class', 'second_section quote_navbar');

  const navEl = document.createElement('nav');
  navEl.setAttribute('class', 'resolution_container nav_container');

  const articleEl = document.createElement('article');
  articleEl.setAttribute('class', 'nav_detail');

  const ulEl = document.createElement('ul');

  const liEl = document.createElement('li');

  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'https://www.careinsurance.com/');
  aEl.textContent = 'Home';
  const aEl23 = document.createElement('p');
  aEl23.textContent = '/ Health Insurance ';
  liEl.append(aEl);
  liEl.append(aEl23);
  ulEl.append(liEl);
  articleEl.append(ulEl);
  navEl.append(articleEl);

  const articleEl2 = document.createElement('article');
  articleEl2.setAttribute('class', 'nav_links');

  const ulEl2 = document.createElement('ul');
  ulEl2.setAttribute('id', 'navscroll');

  const liEl2 = document.createElement('li');
  liEl2.setAttribute('class', 'nav-scroll');

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('href', '#what-is-health-insurance');
  aEl2.setAttribute('data-link', '#what-is-health-insurance');
  aEl2.textContent = 'What is Health Insurance?';
  liEl2.append(aEl2);
  ulEl2.append(liEl2);

  const liEl3 = document.createElement('li');
  liEl3.setAttribute('class', 'nav-scroll');

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('href', '#best-health-insurance-plans');
  aEl3.setAttribute('data-link', '#best-health-insurance-plans');
  aEl3.textContent = 'Best Health Insurance Plans';
  liEl3.append(aEl3);
  ulEl2.append(liEl3);

  const liEl4 = document.createElement('li');
  liEl4.setAttribute('class', 'nav-scroll');

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('href', '#why-choose-care');
  aEl4.setAttribute('data-link', '#why-choose-care');
  aEl4.textContent = 'Why Choose Care?';
  liEl4.append(aEl4);
  ulEl2.append(liEl4);

  const liEl5 = document.createElement('li');
  liEl5.setAttribute('class', 'nav-scroll');

  const aEl5 = document.createElement('a');
  aEl5.setAttribute('href', '#features');
  aEl5.setAttribute('data-link', '#features');
  aEl5.textContent = 'Features';
  liEl5.append(aEl5);
  ulEl2.append(liEl5);
  
  articleEl2.append(ulEl2);
  navEl.append(articleEl2);

  const asideEl = document.createElement('aside');
  asideEl.setAttribute('class', 'nav_btn');

  const spanEl = document.createElement('span');
  spanEl.setAttribute('onclick', 'focusOnMobileField()');
  spanEl.textContent = 'GET QUOTE IN 1 MIN';
  asideEl.append(spanEl);
  navEl.append(asideEl);
  sectionEl.append(navEl);
  container.append(sectionEl);


  block.textContent = '';
  block.append(container);
}
