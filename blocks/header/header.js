export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');
  // const homeImage = block.querySelector("div > p > picture > img").src;

  const headerEl = document.createElement('header');
  headerEl.setAttribute('class', 'navigation');

  const sectionEl = document.createElement('section');
  sectionEl.setAttribute('class', 'nav-bg');

  const articleEl = document.createElement('article');
  articleEl.setAttribute('class', 'container d-flex');

  const aEl = document.createElement('a');
  aEl.setAttribute('href', 'https://main--health-insurance-demo--eds-dwao.aem.page');
  aEl.setAttribute('class', 'd-flex');
  aEl.setAttribute('aria-label', 'Care Insurance Logo');

  const imgEl = document.createElement('img');
  imgEl.setAttribute('src', 'https://www.careinsurance.com/images/care_health_insurance_logo.svg');
  imgEl.setAttribute('alt', 'Care Insurance');
  imgEl.setAttribute('width', '130');
  imgEl.setAttribute('height', '40');
  aEl.append(imgEl);
  articleEl.append(aEl);

  const navEl = document.createElement('nav');
  navEl.setAttribute('class', 'd-flex');

  const ulEl = document.createElement('ul');
  ulEl.setAttribute('class', 'd-flex');

  const liEl = document.createElement('li');
  liEl.setAttribute('class', '');

  const spanEl = document.createElement('span');
  spanEl.setAttribute('class', 'menu-item');
  spanEl.textContent = 'Health Plans';
  liEl.append(spanEl);

  const ulEl2 = document.createElement('ul');
  ulEl2.setAttribute('class', 'menu_dropdown');

  const liEl2 = document.createElement('li');

  const aEl2 = document.createElement('a');
  aEl2.setAttribute('href', 'https://main--health-insurance-demo--eds-dwao.aem.page/healthinsurance');
  aEl2.textContent = 'Health Insurance Plans';
  liEl2.append(aEl2);
  ulEl2.append(liEl2);

  const liEl3 = document.createElement('li');

  const aEl3 = document.createElement('a');
  aEl3.setAttribute('href', 'https://www.careinsurance.com/health-insurance/family-health-insurance');
  aEl3.textContent = 'Family health insurance ';
  liEl3.append(aEl3);
  ulEl2.append(liEl3);

  const liEl4 = document.createElement('li');

  const aEl4 = document.createElement('a');
  aEl4.setAttribute('href', 'https://www.careinsurance.com/health-insurance/individual-health-insurance');
  aEl4.textContent = 'Individual health insurance ';
  liEl4.append(aEl4);
  ulEl2.append(liEl4);

  const liEl5 = document.createElement('li');

  const aEl5 = document.createElement('a');
  aEl5.setAttribute('href', 'https://www.careinsurance.com/health-insurance/1-crore-health-insurance');
  aEl5.textContent = '1 crore health insurance plan ';
  liEl5.append(aEl5);
  ulEl2.append(liEl5);

  const liEl6 = document.createElement('li');

  const aEl6 = document.createElement('a');
  aEl6.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-senior-citizens');
  aEl6.textContent = 'senior citizen health insurance ';
  liEl6.append(aEl6);
  ulEl2.append(liEl6);

  const liEl7 = document.createElement('li');

  const aEl7 = document.createElement('a');
  aEl7.setAttribute('href', 'https://www.careinsurance.com/health-insurance/maternity-health-insurance-plan');
  aEl7.textContent = 'maternity health insurance ';
  liEl7.append(aEl7);
  ulEl2.append(liEl7);

  const liEl8 = document.createElement('li');

  const aEl8 = document.createElement('a');
  aEl8.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-diabetes');
  aEl8.textContent = 'health insurance for diabetes ';
  liEl8.append(aEl8);
  ulEl2.append(liEl8);

  const liEl9 = document.createElement('li');

  const aEl9 = document.createElement('a');
  aEl9.setAttribute('href', 'https://www.careinsurance.com/health-insurance/heart-health-insurance');
  aEl9.textContent = 'heart health insurance ';
  liEl9.append(aEl9);
  ulEl2.append(liEl9);

  const liEl10 = document.createElement('li');

  const aEl10 = document.createElement('a');
  aEl10.setAttribute('href', 'https://www.careinsurance.com/health-insurance/top-up-medical-insurance-policy');
  aEl10.textContent = 'super top up health insurance ';
  liEl10.append(aEl10);
  ulEl2.append(liEl10);

  const liEl11 = document.createElement('li');

  const aEl11 = document.createElement('a');
  aEl11.setAttribute('href', 'https://www.careinsurance.com/health-insurance/cancer-insurance');
  aEl11.textContent = 'cancer insurance';
  liEl11.append(aEl11);
  ulEl2.append(liEl11);

  const liEl12 = document.createElement('li');

  const aEl12 = document.createElement('a');
  aEl12.setAttribute('href', 'https://www.careinsurance.com/health-insurance/critical-illness-insurance');
  aEl12.textContent = 'critical illness insurance ';
  liEl12.append(aEl12);
  ulEl2.append(liEl12);

  const liEl13 = document.createElement('li');

  const aEl13 = document.createElement('a');
  aEl13.setAttribute('href', 'https://www.careinsurance.com/health-insurance/heart-insurance');
  aEl13.textContent = 'Heart Mediclaim';
  liEl13.append(aEl13);
  ulEl2.append(liEl13);

  const liEl14 = document.createElement('li');

  const aEl14 = document.createElement('a');
  aEl14.setAttribute('href', 'https://www.careinsurance.com/health-insurance/operation-insurance');
  aEl14.textContent = 'Operation Mediclaim ';
  liEl14.append(aEl14);
  ulEl2.append(liEl14);
  liEl.append(ulEl2);
  ulEl.append(liEl);

  const liEl15 = document.createElement('li');
  liEl15.setAttribute('class', '');

  const spanEl2 = document.createElement('span');
  spanEl2.setAttribute('class', 'menu-item');
  spanEl2.textContent = 'Travel Plans';
  liEl15.append(spanEl2);

  const ulEl3 = document.createElement('ul');
  ulEl3.setAttribute('class', 'menu_dropdown');

  const liEl16 = document.createElement('li');

  const aEl15 = document.createElement('a');
  aEl15.setAttribute('href', 'https://main--health-insurance-demo--eds-dwao.aem.page/travelinsurance');
  aEl15.textContent = 'Travel Insurance Policy';
  liEl16.append(aEl15);
  ulEl3.append(liEl16);

  const liEl17 = document.createElement('li');

  const aEl16 = document.createElement('a');
  aEl16.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/international-travel-insurance');
  aEl16.textContent = 'International Travel Insurance ';
  liEl17.append(aEl16);
  ulEl3.append(liEl17);

  const liEl18 = document.createElement('li');

  const aEl17 = document.createElement('a');
  aEl17.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/student-travel-insurance');
  aEl17.textContent = 'Student Travel Insurance ';
  liEl18.append(aEl17);
  ulEl3.append(liEl18);

  const liEl19 = document.createElement('li');

  const aEl18 = document.createElement('a');
  aEl18.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/uk-travel-insurance');
  aEl18.textContent = 'UK Travel Insurance ';
  liEl19.append(aEl18);
  ulEl3.append(liEl19);

  const liEl20 = document.createElement('li');

  const aEl19 = document.createElement('a');
  aEl19.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/asia-travel-insurance');
  aEl19.textContent = 'Asia Travel Insurance ';
  liEl20.append(aEl19);
  ulEl3.append(liEl20);

  const liEl21 = document.createElement('li');

  const aEl20 = document.createElement('a');
  aEl20.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/thailand-travel-insurance');
  aEl20.textContent = 'Thailand Travel Insurance ';
  liEl21.append(aEl20);
  ulEl3.append(liEl21);

  const liEl22 = document.createElement('li');

  const aEl21 = document.createElement('a');
  aEl21.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/singapore-travel-insurance');
  aEl21.textContent = 'Singapore Travel Insurance';
  liEl22.append(aEl21);
  ulEl3.append(liEl22);

  const liEl23 = document.createElement('li');

  const aEl22 = document.createElement('a');
  aEl22.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/usa-travel-insurance');
  aEl22.textContent = 'USA Travel Insurance';
  liEl23.append(aEl22);
  ulEl3.append(liEl23);

  const liEl24 = document.createElement('li');

  const aEl23 = document.createElement('a');
  aEl23.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/schengen-travel-insurance');
  aEl23.textContent = 'Schengen Travel Insurance ';
  liEl24.append(aEl23);
  ulEl3.append(liEl24);

  const liEl25 = document.createElement('li');

  const aEl24 = document.createElement('a');
  aEl24.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/canada-travel-insurance');
  aEl24.textContent = 'Canada Travel Insurance ';
  liEl25.append(aEl24);
  ulEl3.append(liEl25);

  const liEl26 = document.createElement('li');

  const aEl25 = document.createElement('a');
  aEl25.setAttribute('href', 'https://www.careinsurance.com/travel-insurance/uae-travel-insurance');
  aEl25.textContent = 'UAE Travel Insurance';
  liEl26.append(aEl25);
  ulEl3.append(liEl26);
  liEl15.append(ulEl3);
  ulEl.append(liEl15);

  const liEl27 = document.createElement('li');
  liEl27.setAttribute('class', 'corporate_plan');

  const spanEl3 = document.createElement('span');
  spanEl3.setAttribute('class', 'menu-item');
  spanEl3.textContent = 'Corporate Plans';
  liEl27.append(spanEl3);

  const ulEl4 = document.createElement('ul');
  ulEl4.setAttribute('class', 'menu_dropdown');

  const liEl28 = document.createElement('li');

  const aEl26 = document.createElement('a');
  aEl26.setAttribute('href', 'https://www.careinsurance.com/corporate-insurance/');
  aEl26.textContent = 'Corporate Insurance';
  liEl28.append(aEl26);
  ulEl4.append(liEl28);

  const liEl29 = document.createElement('li');

  const aEl27 = document.createElement('a');
  aEl27.setAttribute('href', 'https://www.careinsurance.com/corporate-insurance/group-health-insurance');
  aEl27.textContent = 'Group Health Insurance';
  liEl29.append(aEl27);
  ulEl4.append(liEl29);

  const liEl30 = document.createElement('li');

  const aEl28 = document.createElement('a');
  aEl28.setAttribute('href', 'https://www.careinsurance.com/corporate-insurance/group-personal-accident-insurance');
  aEl28.textContent = 'Group Personal Accident Insurance';
  liEl30.append(aEl28);
  ulEl4.append(liEl30);
  liEl27.append(ulEl4);
  ulEl.append(liEl27);

  const liEl31 = document.createElement('li');
  liEl31.setAttribute('class', '');

  const aEl29 = document.createElement('a');
  aEl29.setAttribute('href', 'https://www.careinsurance.com/rhicl/proposalcp/renew/index-care');
  aEl29.setAttribute('target', '_blank');
  aEl29.setAttribute('rel', 'noopener');
  aEl29.setAttribute('id', 'renew_nav');
  aEl29.textContent = 'Renew';
  liEl31.append(aEl29);
  ulEl.append(liEl31);

  const liEl32 = document.createElement('li');
  liEl32.setAttribute('class', '');

  const aEl30 = document.createElement('a');
  aEl30.setAttribute('href', 'https://www.careinsurance.com/contact-us.html');
  aEl30.setAttribute('id', 'contactus_nav');
  aEl30.textContent = 'Contact Us';
  liEl32.append(aEl30);
  ulEl.append(liEl32);
  navEl.append(ulEl);

  const ulEl5 = document.createElement('ul');
  ulEl5.setAttribute('class', 'support');

  const liEl33 = document.createElement('li');
  liEl33.setAttribute('class', 'submit-button menu-item');
  liEl33.setAttribute('id', 'support_nav');
  liEl33.textContent = 'Support';
  ulEl5.append(liEl33);

  const ulEl6 = document.createElement('ul');
  ulEl6.setAttribute('class', 'menu_dropdown');

  const liEl34 = document.createElement('li');
  liEl34.setAttribute('class', 'support_agent');

  const svgEl = document.createElement('svg');
  svgEl.setAttribute('width', '40');
  svgEl.setAttribute('height', '40');
  svgEl.setAttribute('fill', '#fff');
  svgEl.setAttribute('viewBox', '0 0 32 32');

  const useEl = document.createElement('use');
  useEl.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/icons.svg#support_agent');
  svgEl.append(useEl);
  liEl34.append(svgEl);
  ulEl6.append(liEl34);

  const liEl35 = document.createElement('li');
  liEl35.setAttribute('class', 'heading');
  liEl35.textContent = 'Support';
  ulEl6.append(liEl35);

  const liEl36 = document.createElement('li');
  liEl36.setAttribute('class', 'in-touch');

  const spanEl4 = document.createElement('span');
  spanEl4.textContent = 'Get in Touch';
  liEl36.append(spanEl4);
  ulEl6.append(liEl36);

  const liEl37 = document.createElement('li');

  const aEl31 = document.createElement('a');
  aEl31.setAttribute('href', 'https://www.careinsurance.com/self-help-portal.html');
  aEl31.textContent = 'Self Help';
  liEl37.append(aEl31);
  ulEl6.append(liEl37);

  const liEl38 = document.createElement('li');

  const aEl32 = document.createElement('a');
  aEl32.setAttribute('href', 'https://www.careinsurance.com/rhicl/claim/login');
  aEl32.textContent = 'Claim Genie';
  liEl38.append(aEl32);
  ulEl6.append(liEl38);

  const liEl39 = document.createElement('li');

  const aEl33 = document.createElement('a');
  aEl33.setAttribute('href', 'https://www.careinsurance.com/unclaimed-amount.php');
  aEl33.textContent = 'Unclaimed Amount';
  liEl39.append(aEl33);
  ulEl6.append(liEl39);

  const liEl40 = document.createElement('li');
  liEl40.setAttribute('class', 'in-touch');

  const spanEl5 = document.createElement('span');
  spanEl5.textContent = 'My Account';
  liEl40.append(spanEl5);
  ulEl6.append(liEl40);

  const liEl41 = document.createElement('li');

  const aEl34 = document.createElement('a');
  aEl34.setAttribute('href', 'https://www.careinsurance.com/rhicl/login/register');
  aEl34.textContent = 'Login as a Customer';
  liEl41.append(aEl34);
  ulEl6.append(liEl41);

  const liEl42 = document.createElement('li');

  const aEl35 = document.createElement('a');
  aEl35.setAttribute('href', 'https://faveo.careinsurance.com/NewFaveo/#auth/login');
  aEl35.textContent = 'Login as a Partner';
  liEl42.append(aEl35);
  ulEl6.append(liEl42);

  const liEl43 = document.createElement('li');
  liEl43.setAttribute('class', 'in-touch');

  const spanEl6 = document.createElement('span');
  spanEl6.textContent = 'WhatsApp for Service';
  liEl43.append(spanEl6);
  ulEl6.append(liEl43);

  const liEl44 = document.createElement('li');

  const aEl36 = document.createElement('a');
  aEl36.setAttribute('href', 'https://api.whatsapp.com/send?phone=918860402452&text=hi');
  aEl36.setAttribute('target', '_blank');
  aEl36.setAttribute('rel', 'noopener');
  aEl36.setAttribute('title', 'whatApp Icon');

  const svgEl2 = document.createElement('svg');
  svgEl2.setAttribute('width', '24');
  svgEl2.setAttribute('height', '24');
  svgEl2.setAttribute('fill', '#25D366');
  svgEl2.setAttribute('viewBox', '0 0 32 32');

  const useEl2 = document.createElement('use');
  useEl2.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#whatsapp-fill');
  svgEl2.append(useEl2);
  aEl36.append(svgEl2);
  liEl44.append(aEl36);
  ulEl6.append(liEl44);

  const liEl45 = document.createElement('li');
  liEl45.setAttribute('class', 'in-touch');

  const spanEl7 = document.createElement('span');
  spanEl7.textContent = 'Download Our App';
  liEl45.append(spanEl7);
  ulEl6.append(liEl45);

  const liEl46 = document.createElement('li');
  liEl46.setAttribute('class', 'd-flex');

  const aEl37 = document.createElement('a');
  aEl37.setAttribute('href', 'https://apps.apple.com/in/app/care-health-customer-app/id1451697831');
  aEl37.setAttribute('target', '_blank');
  aEl37.setAttribute('rel', 'noopener');
  aEl37.setAttribute('class', 'apple_button');
  aEl37.setAttribute('alt', 'App Store link to download app');
  aEl37.setAttribute('aria-label', 'App Store link to download app');
  aEl37.setAttribute('loading', 'defer');

  const svgEl3 = document.createElement('svg');
  svgEl3.setAttribute('width', '132');
  svgEl3.setAttribute('height', '45');
  svgEl3.setAttribute('viewBox', '0 0 180 60');

  const useEl3 = document.createElement('use');
  useEl3.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#apple-play-button');
  svgEl3.append(useEl3);
  aEl37.append(svgEl3);
  liEl46.append(aEl37);

  const aEl38 = document.createElement('a');
  aEl38.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.religare.healthinsurance');
  aEl38.setAttribute('target', '_blank');
  aEl38.setAttribute('rel', 'noopener');
  aEl38.setAttribute('class', 'android_button');
  aEl38.setAttribute('alt', 'google play link to download app');
  aEl38.setAttribute('aria-label', 'google play link to download app');
  aEl38.setAttribute('loading', 'defer');

  const svgEl4 = document.createElement('svg');
  svgEl4.setAttribute('width', '132');
  svgEl4.setAttribute('height', '45');
  svgEl4.setAttribute('viewBox', '0 0 180 60');

  const useEl4 = document.createElement('use');
  useEl4.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/social-icons.svg#google-play-button');
  svgEl4.append(useEl4);
  aEl38.append(svgEl4);
  liEl46.append(aEl38);
  ulEl6.append(liEl46);
  ulEl5.append(ulEl6);
  navEl.append(ulEl5);
  articleEl.append(navEl);

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'language-wrap');

  const spanEl8 = document.createElement('span');
  spanEl8.setAttribute('class', 'new-support js-btn-modal');
  spanEl8.setAttribute('data-id', '4');

  const svgEl5 = document.createElement('svg');
  svgEl5.setAttribute('width', '24');
  svgEl5.setAttribute('height', '24');
  svgEl5.setAttribute('fill', '#136da3');
  svgEl5.setAttribute('viewBox', '0 0 32 32');

  const useEl5 = document.createElement('use');
  useEl5.setAttribute('href', 'https://www.careinsurance.com/images/svg_icons/icons.svg#support_agent');
  svgEl5.append(useEl5);
  spanEl8.append(svgEl5);
  divEl.append(spanEl8);

  const ulEl7 = document.createElement('ul');
  ulEl7.setAttribute('class', 'language_btn');

  const liEl47 = document.createElement('li');
  liEl47.setAttribute('title', 'Select Language');
  liEl47.setAttribute('class', 'active-item');

  const svgEl6 = document.createElement('svg');
  svgEl6.setAttribute('width', '40');
  svgEl6.setAttribute('height', '26');
  svgEl6.setAttribute('viewBox', '0 0 44 29');

  const titleEl = document.createElement('title');
  titleEl.textContent = 'Select Language';
  svgEl6.append(titleEl);

  const useEl6 = document.createElement('img');
  useEl6.setAttribute('src', 'https://cdn-icons-png.freepik.com/512/15571/15571816.png');
  svgEl6.append(useEl6);
  liEl47.append(svgEl6);

  const ulEl8 = document.createElement('ul');

  const liEl48 = document.createElement('li');
  liEl48.setAttribute('class', 'active-item');

  const aEl39 = document.createElement('a');
  aEl39.setAttribute('href', 'https://www.careinsurance.com/health-insurance/');
  aEl39.textContent = 'English';
  liEl48.append(aEl39);
  ulEl8.append(liEl48);

  const liEl49 = document.createElement('li');

  const aEl40 = document.createElement('a');
  aEl40.setAttribute('href', 'https://www.careinsurance.com/himl/health-insurance/');
  aEl40.textContent = 'Hindi';
  liEl49.append(aEl40);
  ulEl8.append(liEl49);
  liEl47.append(ulEl8);
  ulEl7.append(liEl47);
  divEl.append(ulEl7);
  articleEl.append(divEl);

  const spanEl9 = document.createElement('span');
  spanEl9.setAttribute('class', 'hamburger');

  const spanEl10 = document.createElement('span');
  spanEl10.setAttribute('class', 'bar');
  spanEl9.append(spanEl10);
  articleEl.append(spanEl9);
  sectionEl.append(articleEl);
  headerEl.append(sectionEl);
  container.append(headerEl);


  block.textContent = '';
  block.append(container);
}
