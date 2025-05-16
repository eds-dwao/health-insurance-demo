export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'custom_container');

    const divEl = document.createElement('div');
    divEl.setAttribute('class', '');

    // const divEl2 = document.createElement('div');
    // divEl2.setAttribute('class', 'category_cms');

    // const h2El = document.createElement('h2');
    // h2El.setAttribute('id', 'what-is-health-insurance');
    // h2El.textContent = 'What is Health Insurance?';
    // divEl2.append(h2El);

    // const pEl = document.createElement('p');
    // pEl.textContent = 'Health insurance, also called medical insurance, is a financial instrument that protects your savings in case of medical emergencies or planned treatments. Health insurance policy will help you alleviate the financial burden of any medical emergency. Further, it also provides tax savings of up to ₹75,000 on the premium amount according to Section 80D of the Income Tax Act.';
    // divEl2.append(pEl);
    // divEl.append(divEl2);

    const sectionEl2 = document.createElement('section');
    sectionEl2.setAttribute('class', 'product_card_section');

    const h2El2 = document.createElement('h2');
    h2El2.textContent = 'Select from Our Best Health Insurance Plans in India';
    sectionEl2.append(h2El2);

    const pEl2 = document.createElement('p');

    const aEl = document.createElement('a');
    aEl.setAttribute('href', 'https://www.careinsurance.com/');
    aEl.textContent = 'best health insurance companies in India';
    pEl2.append(aEl);
    sectionEl2.append(pEl2);

    const ulEl = document.createElement('ul');
    ulEl.setAttribute('class', 'product_card_section_tabs');

    const liEl = document.createElement('li');
    liEl.setAttribute('class', 'active');

    const smallEl = document.createElement('small');
    smallEl.textContent = 'A Health Plan That Covers You in Need and Rewards You for Staying Fit!';
    liEl.append(smallEl);
    ulEl.append(liEl);

    const liEl2 = document.createElement('li');

    const smallEl2 = document.createElement('small');
    smallEl2.textContent = 'Health Plan with Capless Coverage for You and Your Loved Ones!';
    liEl2.append(smallEl2);
    ulEl.append(liEl2);

    const liEl3 = document.createElement('li');

    const smallEl3 = document.createElement('small');
    smallEl3.textContent = 'Health Insurance with Global Medical Coverage.';
    liEl3.append(smallEl3);
    ulEl.append(liEl3);

    const liEl4 = document.createElement('li');

    const smallEl4 = document.createElement('small');
    smallEl4.textContent = 'Health Insurance Offering Health Security During the 60s.';
    liEl4.append(smallEl4);
    ulEl.append(liEl4);
    sectionEl2.append(ulEl);

    const articleEl = document.createElement('article');
    articleEl.setAttribute('class', 'product_card_section_tab_content active');

    const sectionEl3 = document.createElement('section');
    sectionEl3.setAttribute('class', 'product_c');

    const articleEl2 = document.createElement('article');

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/ultimate-care-icon.png');
    imgEl.setAttribute('alt', 'Ultimate Care');
    imgEl.setAttribute('title', 'Ultimate Care');
    imgEl.setAttribute('width', '120');
    imgEl.setAttribute('height', '120');
    articleEl2.append(imgEl);
    sectionEl3.append(articleEl2);

    const articleEl3 = document.createElement('article');
    articleEl3.setAttribute('class', 'content');

    const h3El = document.createElement('h3');
    h3El.textContent = 'Ultimate Care';
    articleEl3.append(h3El);

    const ulEl2 = document.createElement('ul');
    ulEl2.setAttribute('class', 'usp');

    const liEl5 = document.createElement('li');

    const svgEl = document.createElement('svg');
    svgEl.setAttribute('width', '13');
    svgEl.setAttribute('height', '10');
    svgEl.setAttribute('viewBox', '0 0 13 10');
    svgEl.setAttribute('fill', 'none');

    const pathEl = document.createElement('path');
    pathEl.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl.setAttribute('fill', '#333333');
    svgEl.append(pathEl);
    liEl5.append(svgEl);
    ulEl2.append(liEl5);

    const liEl6 = document.createElement('li');

    const svgEl2 = document.createElement('svg');
    svgEl2.setAttribute('width', '13');
    svgEl2.setAttribute('height', '10');
    svgEl2.setAttribute('viewBox', '0 0 13 10');
    svgEl2.setAttribute('fill', 'none');

    const pathEl2 = document.createElement('path');
    pathEl2.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl2.setAttribute('fill', '#333333');
    svgEl2.append(pathEl2);
    liEl6.append(svgEl2);
    ulEl2.append(liEl6);

    const liEl7 = document.createElement('li');

    const svgEl3 = document.createElement('svg');
    svgEl3.setAttribute('width', '13');
    svgEl3.setAttribute('height', '10');
    svgEl3.setAttribute('viewBox', '0 0 13 10');
    svgEl3.setAttribute('fill', 'none');

    const pathEl3 = document.createElement('path');
    pathEl3.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl3.setAttribute('fill', '#333333');
    svgEl3.append(pathEl3);
    liEl7.append(svgEl3);
    ulEl2.append(liEl7);

    const liEl8 = document.createElement('li');

    const svgEl4 = document.createElement('svg');
    svgEl4.setAttribute('width', '13');
    svgEl4.setAttribute('height', '10');
    svgEl4.setAttribute('viewBox', '0 0 13 10');
    svgEl4.setAttribute('fill', 'none');

    const pathEl4 = document.createElement('path');
    pathEl4.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl4.setAttribute('fill', '#333333');
    svgEl4.append(pathEl4);
    liEl8.append(svgEl4);
    ulEl2.append(liEl8);
    articleEl3.append(ulEl2);

    const ulEl3 = document.createElement('ul');
    ulEl3.setAttribute('class', 'amount');

    const liEl9 = document.createElement('li');

    const bEl = document.createElement('b');
    bEl.textContent = '₹5 lakh';
    liEl9.append(bEl);
    ulEl3.append(liEl9);

    const liEl10 = document.createElement('li');

    const bEl2 = document.createElement('b');
    bEl2.textContent = '₹372/month';
    liEl10.append(bEl2);
    ulEl3.append(liEl10);

    const liEl11 = document.createElement('li');

    const aEl2 = document.createElement('a');
    aEl2.setAttribute('href', 'https://www.careinsurance.com/product/ultimate-care');
    aEl2.setAttribute('target', '_blank');
    aEl2.textContent = 'Buy Now';
    liEl11.append(aEl2);
    ulEl3.append(liEl11);
    articleEl3.append(ulEl3);
    sectionEl3.append(articleEl3);
    articleEl.append(sectionEl3);
    sectionEl2.append(articleEl);

    const articleEl4 = document.createElement('article');
    articleEl4.setAttribute('class', 'product_card_section_tab_content');

    const sectionEl4 = document.createElement('section');
    sectionEl4.setAttribute('class', 'product_c');

    const articleEl5 = document.createElement('article');

    const imgEl2 = document.createElement('img');
    imgEl2.setAttribute('src', 'https://cms.careinsurance.com/upload_master/cmscatpages/upload/8256a3f4485dd0fef486807b8fba135b.png');
    imgEl2.setAttribute('alt', 'Care Supreme');
    imgEl2.setAttribute('title', 'Care Supreme');
    imgEl2.setAttribute('width', '120');
    imgEl2.setAttribute('height', '120');
    articleEl5.append(imgEl2);
    sectionEl4.append(articleEl5);

    const articleEl6 = document.createElement('article');
    articleEl6.setAttribute('class', 'content');

    const h3El2 = document.createElement('h3');
    h3El2.textContent = 'Care Supreme';
    articleEl6.append(h3El2);

    const ulEl4 = document.createElement('ul');
    ulEl4.setAttribute('class', 'usp');

    const liEl12 = document.createElement('li');

    const svgEl5 = document.createElement('svg');
    svgEl5.setAttribute('width', '13');
    svgEl5.setAttribute('height', '10');
    svgEl5.setAttribute('viewBox', '0 0 13 10');
    svgEl5.setAttribute('fill', 'none');

    const pathEl5 = document.createElement('path');
    pathEl5.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl5.setAttribute('fill', '#333333');
    svgEl5.append(pathEl5);
    liEl12.append(svgEl5);
    ulEl4.append(liEl12);

    const liEl13 = document.createElement('li');

    const svgEl6 = document.createElement('svg');
    svgEl6.setAttribute('width', '13');
    svgEl6.setAttribute('height', '10');
    svgEl6.setAttribute('viewBox', '0 0 13 10');
    svgEl6.setAttribute('fill', 'none');

    const pathEl6 = document.createElement('path');
    pathEl6.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl6.setAttribute('fill', '#333333');
    svgEl6.append(pathEl6);
    liEl13.append(svgEl6);
    ulEl4.append(liEl13);

    const liEl14 = document.createElement('li');

    const svgEl7 = document.createElement('svg');
    svgEl7.setAttribute('width', '13');
    svgEl7.setAttribute('height', '10');
    svgEl7.setAttribute('viewBox', '0 0 13 10');
    svgEl7.setAttribute('fill', 'none');

    const pathEl7 = document.createElement('path');
    pathEl7.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl7.setAttribute('fill', '#333333');
    svgEl7.append(pathEl7);
    liEl14.append(svgEl7);
    ulEl4.append(liEl14);

    const liEl15 = document.createElement('li');

    const svgEl8 = document.createElement('svg');
    svgEl8.setAttribute('width', '13');
    svgEl8.setAttribute('height', '10');
    svgEl8.setAttribute('viewBox', '0 0 13 10');
    svgEl8.setAttribute('fill', 'none');

    const pathEl8 = document.createElement('path');
    pathEl8.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl8.setAttribute('fill', '#333333');
    svgEl8.append(pathEl8);
    liEl15.append(svgEl8);
    ulEl4.append(liEl15);
    articleEl6.append(ulEl4);

    const ulEl5 = document.createElement('ul');
    ulEl5.setAttribute('class', 'amount');

    const liEl16 = document.createElement('li');

    const bEl3 = document.createElement('b');
    bEl3.textContent = '₹5 lakh';
    liEl16.append(bEl3);
    ulEl5.append(liEl16);

    const liEl17 = document.createElement('li');

    const bEl4 = document.createElement('b');
    bEl4.textContent = '₹651/month';
    liEl17.append(bEl4);
    ulEl5.append(liEl17);

    const liEl18 = document.createElement('li');

    const aEl3 = document.createElement('a');
    aEl3.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme');
    aEl3.setAttribute('target', '_blank');
    aEl3.textContent = 'Buy Now';
    liEl18.append(aEl3);
    ulEl5.append(liEl18);
    articleEl6.append(ulEl5);
    sectionEl4.append(articleEl6);
    articleEl4.append(sectionEl4);
    sectionEl2.append(articleEl4);

    const articleEl7 = document.createElement('article');
    articleEl7.setAttribute('class', 'product_card_section_tab_content');

    const sectionEl5 = document.createElement('section');
    sectionEl5.setAttribute('class', 'product_c');

    const articleEl8 = document.createElement('article');

    const imgEl3 = document.createElement('img');
    imgEl3.setAttribute('src', 'https://cms.careinsurance.com/upload_master/cmscatpages/upload/cf4cff3ee3519db03ae291059aa33d59.png');
    imgEl3.setAttribute('alt', 'Care Advantage');
    imgEl3.setAttribute('title', 'Care Advantage');
    imgEl3.setAttribute('width', '120');
    imgEl3.setAttribute('height', '120');
    articleEl8.append(imgEl3);
    sectionEl5.append(articleEl8);

    const articleEl9 = document.createElement('article');
    articleEl9.setAttribute('class', 'content');

    const h3El3 = document.createElement('h3');
    h3El3.textContent = 'Care Advantage';
    articleEl9.append(h3El3);

    const ulEl6 = document.createElement('ul');
    ulEl6.setAttribute('class', 'usp');

    const liEl19 = document.createElement('li');

    const svgEl9 = document.createElement('svg');
    svgEl9.setAttribute('width', '13');
    svgEl9.setAttribute('height', '10');
    svgEl9.setAttribute('viewBox', '0 0 13 10');
    svgEl9.setAttribute('fill', 'none');

    const pathEl9 = document.createElement('path');
    pathEl9.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl9.setAttribute('fill', '#333333');
    svgEl9.append(pathEl9);
    liEl19.append(svgEl9);
    ulEl6.append(liEl19);

    const liEl20 = document.createElement('li');

    const svgEl10 = document.createElement('svg');
    svgEl10.setAttribute('width', '13');
    svgEl10.setAttribute('height', '10');
    svgEl10.setAttribute('viewBox', '0 0 13 10');
    svgEl10.setAttribute('fill', 'none');

    const pathEl10 = document.createElement('path');
    pathEl10.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl10.setAttribute('fill', '#333333');
    svgEl10.append(pathEl10);
    liEl20.append(svgEl10);
    ulEl6.append(liEl20);

    const liEl21 = document.createElement('li');

    const svgEl11 = document.createElement('svg');
    svgEl11.setAttribute('width', '13');
    svgEl11.setAttribute('height', '10');
    svgEl11.setAttribute('viewBox', '0 0 13 10');
    svgEl11.setAttribute('fill', 'none');

    const pathEl11 = document.createElement('path');
    pathEl11.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl11.setAttribute('fill', '#333333');
    svgEl11.append(pathEl11);
    liEl21.append(svgEl11);
    ulEl6.append(liEl21);

    const liEl22 = document.createElement('li');

    const svgEl12 = document.createElement('svg');
    svgEl12.setAttribute('width', '13');
    svgEl12.setAttribute('height', '10');
    svgEl12.setAttribute('viewBox', '0 0 13 10');
    svgEl12.setAttribute('fill', 'none');

    const pathEl12 = document.createElement('path');
    pathEl12.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl12.setAttribute('fill', '#333333');
    svgEl12.append(pathEl12);
    liEl22.append(svgEl12);
    ulEl6.append(liEl22);
    articleEl9.append(ulEl6);

    const ulEl7 = document.createElement('ul');
    ulEl7.setAttribute('class', 'amount');

    const liEl23 = document.createElement('li');

    const bEl5 = document.createElement('b');
    bEl5.textContent = '₹1 Crore';
    liEl23.append(bEl5);
    ulEl7.append(liEl23);

    const liEl24 = document.createElement('li');

    const bEl6 = document.createElement('b');
    bEl6.textContent = '₹1305/month';
    liEl24.append(bEl6);
    ulEl7.append(liEl24);

    const liEl25 = document.createElement('li');

    const aEl4 = document.createElement('a');
    aEl4.setAttribute('href', 'https://www.careinsurance.com/product/care-advantage');
    aEl4.setAttribute('target', '_blank');
    aEl4.textContent = 'Buy Now';
    liEl25.append(aEl4);
    ulEl7.append(liEl25);
    articleEl9.append(ulEl7);
    sectionEl5.append(articleEl9);
    articleEl7.append(sectionEl5);
    sectionEl2.append(articleEl7);

    const articleEl10 = document.createElement('article');
    articleEl10.setAttribute('class', 'product_card_section_tab_content');

    const sectionEl6 = document.createElement('section');
    sectionEl6.setAttribute('class', 'product_c');

    const articleEl11 = document.createElement('article');

    const imgEl4 = document.createElement('img');
    imgEl4.setAttribute('src', 'https://cms.careinsurance.com/upload_master/cmscatpages/upload/care-supreme-senior.png');
    imgEl4.setAttribute('alt', 'Care Supreme- Senior');
    imgEl4.setAttribute('title', 'Care Supreme- Senior');
    imgEl4.setAttribute('width', '120');
    imgEl4.setAttribute('height', '120');
    articleEl11.append(imgEl4);
    sectionEl6.append(articleEl11);

    const articleEl12 = document.createElement('article');
    articleEl12.setAttribute('class', 'content');

    const h3El4 = document.createElement('h3');
    h3El4.textContent = 'Care Supreme- Senior';
    articleEl12.append(h3El4);

    const ulEl8 = document.createElement('ul');
    ulEl8.setAttribute('class', 'usp');

    const liEl26 = document.createElement('li');

    const svgEl13 = document.createElement('svg');
    svgEl13.setAttribute('width', '13');
    svgEl13.setAttribute('height', '10');
    svgEl13.setAttribute('viewBox', '0 0 13 10');
    svgEl13.setAttribute('fill', 'none');

    const pathEl13 = document.createElement('path');
    pathEl13.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl13.setAttribute('fill', '#333333');
    svgEl13.append(pathEl13);
    liEl26.append(svgEl13);
    ulEl8.append(liEl26);

    const liEl27 = document.createElement('li');

    const svgEl14 = document.createElement('svg');
    svgEl14.setAttribute('width', '13');
    svgEl14.setAttribute('height', '10');
    svgEl14.setAttribute('viewBox', '0 0 13 10');
    svgEl14.setAttribute('fill', 'none');

    const pathEl14 = document.createElement('path');
    pathEl14.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl14.setAttribute('fill', '#333333');
    svgEl14.append(pathEl14);
    liEl27.append(svgEl14);
    ulEl8.append(liEl27);

    const liEl28 = document.createElement('li');

    const svgEl15 = document.createElement('svg');
    svgEl15.setAttribute('width', '13');
    svgEl15.setAttribute('height', '10');
    svgEl15.setAttribute('viewBox', '0 0 13 10');
    svgEl15.setAttribute('fill', 'none');

    const pathEl15 = document.createElement('path');
    pathEl15.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl15.setAttribute('fill', '#333333');
    svgEl15.append(pathEl15);
    liEl28.append(svgEl15);
    ulEl8.append(liEl28);

    const liEl29 = document.createElement('li');

    const svgEl16 = document.createElement('svg');
    svgEl16.setAttribute('width', '13');
    svgEl16.setAttribute('height', '10');
    svgEl16.setAttribute('viewBox', '0 0 13 10');
    svgEl16.setAttribute('fill', 'none');

    const pathEl16 = document.createElement('path');
    pathEl16.setAttribute('d', 'M4.45176 9.41979L0.00634766 4.97438L0.897181 4.08333L4.45176 7.63792L12.0897 0L12.9805 0.891042L4.45176 9.41979Z');
    pathEl16.setAttribute('fill', '#333333');
    svgEl16.append(pathEl16);
    liEl29.append(svgEl16);
    ulEl8.append(liEl29);
    articleEl12.append(ulEl8);

    const ulEl9 = document.createElement('ul');
    ulEl9.setAttribute('class', 'amount');

    const liEl30 = document.createElement('li');

    const bEl7 = document.createElement('b');
    bEl7.textContent = '₹5 lakh';
    liEl30.append(bEl7);
    ulEl9.append(liEl30);

    const liEl31 = document.createElement('li');

    const bEl8 = document.createElement('b');
    bEl8.textContent = '₹1535/month';
    liEl31.append(bEl8);
    ulEl9.append(liEl31);

    const liEl32 = document.createElement('li');

    const aEl5 = document.createElement('a');
    aEl5.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme-senior');
    aEl5.setAttribute('target', '_blank');
    aEl5.textContent = 'Buy Now';
    liEl32.append(aEl5);
    ulEl9.append(liEl32);
    articleEl12.append(ulEl9);
    sectionEl6.append(articleEl12);
    articleEl10.append(sectionEl6);
    sectionEl2.append(articleEl10);
    divEl.append(sectionEl2);
    sectionEl.append(divEl);
    container.append(sectionEl);

    block.textContent = '';
    block.append(container);
}
