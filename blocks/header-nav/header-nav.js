export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('class', 'section header-nav-container');
  divEl.setAttribute('data-section-status', 'loaded');
  divEl.setAttribute('style', '');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('class', 'header-nav-wrapper');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('class', 'header-nav block');
      divEl3.setAttribute('data-block-name', 'header-nav');
      divEl3.setAttribute('data-block-status', 'loaded');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('class', 'container');

          const sectionEl = document.createElement('section');
          sectionEl.setAttribute('class', 'JFM_Banner d-flex');
          sectionEl.setAttribute('style', 'content-visibility: auto; ');

            const articleEl = document.createElement('article');
            articleEl.setAttribute('class', 'container d-flex');

              const pEl = document.createElement('p');
              pEl.setAttribute('class', 'mobile_hide');

                const spanEl = document.createElement('span');
                spanEl.textContent = 'Save tax up to ₹75,000~ u/s 80D';
              pEl.append(spanEl);
            articleEl.append(pEl);

              const asideEl = document.createElement('aside');
              asideEl.setAttribute('class', 'request-a-callback d-flex');

                const imgEl = document.createElement('img');
                imgEl.setAttribute('width', '24');
                imgEl.setAttribute('height', '24');
                imgEl.setAttribute('src', 'https://main--health-insurance-demo--eds-dwao.aem.live/media_181ab96d0bb0c770df1c77981d8421a47f7993db0.png?width=750&format=png&optimize=medium');
                imgEl.setAttribute('loading', 'eager');
              asideEl.append(imgEl);

                const aEl = document.createElement('a');
                aEl.setAttribute('href', 'tel:1800-102-4499');
                aEl.setAttribute('id', 'buypolicy_tollfree');
                aEl.textContent = 'Buy New Policy :1800-102-4499';
              asideEl.append(aEl);
            articleEl.append(asideEl);
          sectionEl.append(articleEl);
        divEl4.append(sectionEl);
      divEl3.append(divEl4);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}