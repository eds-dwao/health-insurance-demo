export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  
  
  const divEl = document.createElement('div');

    const sectionEl = document.createElement('section');

      const divEl2 = document.createElement('div');
      divEl2.setAttribute('class', 'custom_container home_banner');

        const divEl3 = document.createElement('div');
        divEl3.setAttribute('class', 'bullet_container');

      
    
      divEl2.append(divEl3);

        const divEl5 = document.createElement('div');
        divEl5.setAttribute('class', 'flex_reverse userDetail');

          const divEl6 = document.createElement('div');
          divEl6.setAttribute('class', 'first_cont_data');

            const pEl2 = document.createElement('p');
            pEl2.setAttribute('class', 'mobile-heading');
            pEl2.textContent = 'Reasons to Choose Care Health Insurance?';
          divEl6.append(pEl2);

            const divEl7 = document.createElement('div');
            divEl7.setAttribute('class', 'mobile_flex_container');

              const divEl8 = document.createElement('div');
              divEl8.setAttribute('class', 'banner_img_cont');

              const asideEl = document.createElement('aside');

// --- Infinity Bonus ---
const pEl3 = document.createElement('p');
const iEl = document.createElement('i');
const imgEl = document.createElement('img');
imgEl.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/infinity-bonus.svg');
imgEl.setAttribute('alt', 'Infinity Bonus');
imgEl.setAttribute('width', '40');
imgEl.setAttribute('height', '40');
iEl.append(imgEl);
pEl3.append(iEl);
pEl3.append('Infinity Bonus');
asideEl.append(pEl3);

// --- Premium Payback ---
const pEl4 = document.createElement('p');
const iEl2 = document.createElement('i');
const imgEl2 = document.createElement('img');
imgEl2.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/premium-payback.svg');
imgEl2.setAttribute('alt', 'Premium Payback');
imgEl2.setAttribute('width', '40');
imgEl2.setAttribute('height', '40');
iEl2.append(imgEl2);
pEl4.append(iEl2);
pEl4.append('Premium Payback');
asideEl.append(pEl4);

// --- Tenure Multiplier ---
const pEl5 = document.createElement('p');
const iEl3 = document.createElement('i');
const imgEl3 = document.createElement('img');
imgEl3.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/tenure-multiplier.svg');
imgEl3.setAttribute('alt', 'Tenure Multiplier');
imgEl3.setAttribute('width', '40');
imgEl3.setAttribute('height', '40');
iEl3.append(imgEl3);
pEl5.append(iEl3);
pEl5.append('Tenure Multiplier');
asideEl.append(pEl5);

// --- Exclusive 5% Digital Discount ---
const pEl6 = document.createElement('p');
const iEl4 = document.createElement('i');
const imgEl4 = document.createElement('img');
imgEl4.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-up-to-30-percent-renewal-discounts.svg');
imgEl4.setAttribute('alt', 'Welcome Discount + Digital Discount');
imgEl4.setAttribute('width', '40');
imgEl4.setAttribute('height', '40');
iEl4.append(imgEl4);
pEl6.append(iEl4);
pEl6.append('Exclusive 5% Digital Discount^');
asideEl.append(pEl6);

// Append to main container
divEl8.append(asideEl);

                const pictureEl = document.createElement('picture');

                  const sourceEl = document.createElement('source');
                  sourceEl.setAttribute('srcset', 'https://cms.careinsurance.com/cms/public/assets/media/health-insurance.webp');
                  sourceEl.setAttribute('type', 'image/png');
                pictureEl.append(sourceEl);

                  const imgEl5 = document.createElement('img');
                  imgEl5.setAttribute('loading', 'lazy');
                  imgEl5.setAttribute('alt', 'Health Insurance');
                  imgEl5.setAttribute('title', 'Health Insurance');
                  imgEl5.setAttribute('width', '250');
                  imgEl5.setAttribute('height', '250');
                  imgEl5.setAttribute('class', 'lozad new_banner_image');
                  imgEl5.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/health-insurance.webp');
                  imgEl5.setAttribute('data-src', 'https://cms.careinsurance.com/cms/public/assets/media/health-insurance.webp');
                  imgEl5.setAttribute('data-loaded', 'true');
                pictureEl.append(imgEl5);
              divEl8.append(pictureEl);
            divEl7.append(divEl8);

              const divEl9 = document.createElement('div');
              divEl9.setAttribute('class', 'pointer_cont');

                const ulEl = document.createElement('ul');

                  const liEl = document.createElement('li');

                    const imgEl6 = document.createElement('img');
                    imgEl6.setAttribute('alt', 'Healthcare Networks');
                    imgEl6.setAttribute('title', 'Healthcare Networks');
                    imgEl6.setAttribute('width', '50');
                    imgEl6.setAttribute('height', '50');
                    imgEl6.setAttribute('class', 'icon_img lozad');
                    imgEl6.setAttribute('src', '');
                    imgEl6.setAttribute('data-src', 'https://www.careinsurance.com/images/hospital-networks.svg');
                  liEl.append(imgEl6);

                    const divEl10 = document.createElement('div');

                      const spanEl = document.createElement('span');
                      spanEl.setAttribute('class', 'strong');
                      spanEl.textContent = '21600+';
                    divEl10.append(spanEl);

                      const spanEl2 = document.createElement('span');
                      spanEl2.textContent = 'Cashless Providers^^'

                        const spanEl3 = document.createElement('span');
                      spanEl2.append(spanEl3);
                    divEl10.append(spanEl2);
                  liEl.append(divEl10);
                ulEl.append(liEl);

                  const liEl2 = document.createElement('li');

                    const imgEl7 = document.createElement('img');
                    imgEl7.setAttribute('alt', 'Claim settled ratio');
                    imgEl7.setAttribute('title', 'Claim settled ratio');
                    imgEl7.setAttribute('width', '50');
                    imgEl7.setAttribute('height', '50');
                    imgEl7.setAttribute('class', 'icon_img lozad');
                    imgEl7.setAttribute('src', '');
                    imgEl7.setAttribute('data-src', 'https://www.careinsurance.com/images/AB-Testing-Popup/IC-30lakh-claim-settled.svg');
                  liEl2.append(imgEl7);

                    const divEl11 = document.createElement('div');

                      const spanEl4 = document.createElement('span');
                      spanEl4.setAttribute('class', 'strong');
                      spanEl4.textContent = '48 Lakh+';
                    divEl11.append(spanEl4);

                      const spanEl5 = document.createElement('span');
                      spanEl5.textContent = 'Claims Settled**';

                        const spanEl6 = document.createElement('span');
                      spanEl5.append(spanEl6);
                    divEl11.append(spanEl5);
                  liEl2.append(divEl11);
                ulEl.append(liEl2);

                  const liEl3 = document.createElement('li');

                    const imgEl8 = document.createElement('img');
                    imgEl8.setAttribute('alt', 'Claim settled');
                    imgEl8.setAttribute('title', 'Claim settled');
                    imgEl8.setAttribute('width', '50');
                    imgEl8.setAttribute('height', '50');
                    imgEl8.setAttribute('class', 'icon_img lozad');
                    imgEl8.setAttribute('src', '');
                    imgEl8.setAttribute('data-src', 'https://www.careinsurance.com/images/claim-and-customer-support.svg');
                  liEl3.append(imgEl8);

                    const divEl12 = document.createElement('div');

                      const spanEl7 = document.createElement('span');
                      spanEl7.setAttribute('class', 'strong');
                      spanEl7.textContent = '24*7';
                    divEl12.append(spanEl7);

                      const spanEl8 = document.createElement('span');
                      spanEl8.textContent = 'Customer Support';

                        const spanEl9 = document.createElement('span');
                      spanEl8.append(spanEl9);
                    divEl12.append(spanEl8);
                  liEl3.append(divEl12);
                ulEl.append(liEl3);
              divEl9.append(ulEl);

                const divEl13 = document.createElement('div');
                divEl13.setAttribute('class', 'trust');

                  const strongEl = document.createElement('strong');
                  strongEl.textContent = 'Trusted By People!';
                divEl13.append(strongEl);

                  const imgEl9 = document.createElement('img');
                  imgEl9.setAttribute('alt', 'Rated 4.7/5');
                  imgEl9.setAttribute('title', 'Rated 4.7/5');
                  imgEl9.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-star-ratings.svg');
                  imgEl9.setAttribute('width', '122');
                  imgEl9.setAttribute('height', '24');
                divEl13.append(imgEl9);

                  const strongEl2 = document.createElement('strong');
                  strongEl2.textContent = '4.7 / 5';
                divEl13.append(strongEl2);
              divEl9.append(divEl13);
            divEl7.append(divEl9);
          divEl6.append(divEl7);
        divEl5.append(divEl6);

          const divEl14 = document.createElement('div');
          divEl14.setAttribute('class', 'form_data fourstepper new-form');

            const formEl = document.createElement('form');
            formEl.setAttribute('name', 'care-quote-box');
            formEl.setAttribute('id', 'care-quote-box');
            formEl.setAttribute('method', 'post');

              const divEl15 = document.createElement('div');
              divEl15.setAttribute('class', 'step1 form-step');

                const divEl16 = document.createElement('div');
                divEl16.setAttribute('class', 'stepper');

                  const divEl17 = document.createElement('div');
                  divEl17.setAttribute('class', 'stepper_border');

                    const pEl7 = document.createElement('p');
                    pEl7.textContent = 'Get Higher Coverage at an Affordable Premium';
                  divEl17.append(pEl7);
                divEl16.append(divEl17);
              divEl15.append(divEl16);

                const divEl18 = document.createElement('div');
                divEl18.setAttribute('class', 'discount_sticker_cont');

                  const spanEl10 = document.createElement('span');
                  spanEl10.textContent = 'Health Insurance Plan starting : ';
                  
                    const bEl = document.createElement('b');
                    bEl.textContent = '@₹12/day*';
                  spanEl10.append(bEl);
                divEl18.append(spanEl10);
              divEl15.append(divEl18);

                const inputEl = document.createElement('input');
                inputEl.setAttribute('autocomplete', 'off');
                inputEl.setAttribute('type', 'hidden');
                inputEl.setAttribute('id', 'quote_id');
                inputEl.setAttribute('name', 'quote_id');
                inputEl.setAttribute('value', '1');
              divEl15.append(inputEl);

                const inputEl2 = document.createElement('input');
                inputEl2.setAttribute('autocomplete', 'off');
                inputEl2.setAttribute('type', 'hidden');
                inputEl2.setAttribute('id', 'agent_id');
                inputEl2.setAttribute('name', 'agent_id');
                inputEl2.setAttribute('value', '20000057');
              divEl15.append(inputEl2);

                const inputEl3 = document.createElement('input');
                inputEl3.setAttribute('autocomplete', 'off');
                inputEl3.setAttribute('type', 'hidden');
                inputEl3.setAttribute('id', 'ma_utm');
                inputEl3.setAttribute('name', 'ma_utm');
                inputEl3.setAttribute('value', 'CUSTOMERPORTAL');
              divEl15.append(inputEl3);

                const inputEl4 = document.createElement('input');
                inputEl4.setAttribute('autocomplete', 'off');
                inputEl4.setAttribute('type', 'hidden');
                inputEl4.setAttribute('id', 'pageId');
                inputEl4.setAttribute('name', 'pageId');
                inputEl4.setAttribute('value', 'productLandingPage');
              divEl15.append(inputEl4);

                const divEl19 = document.createElement('div');
                divEl19.setAttribute('class', 'form_cont');

                  const divEl20 = document.createElement('div');
                  divEl20.setAttribute('class', 'd_flex');

                    const divEl21 = document.createElement('div');
                    divEl21.setAttribute('class', 'form-group');

                      const labelEl = document.createElement('label');
                      labelEl.setAttribute('class', 'floating-label');
                      labelEl.setAttribute('for', 'mobile_no');

                        const spanEl11 = document.createElement('span');
                        spanEl11.setAttribute('class', 'country_label');
                        spanEl11.textContent = '+91';
                      labelEl.append(spanEl11);

                        const inputEl5 = document.createElement('input');
                        inputEl5.setAttribute('id', 'mobile_no');
                        inputEl5.setAttribute('name', 'mobile_no');
                        inputEl5.setAttribute('class', 'animate_label mobile_no floating-input mask-input');
                        inputEl5.setAttribute('type', 'tel');
                        inputEl5.setAttribute('autocomplete', 'off');
                        inputEl5.setAttribute('value', '');
                        inputEl5.setAttribute('placeholder', ' ');
                        inputEl5.setAttribute('maxlength', '10');
                        inputEl5.setAttribute('oninput', 'return isNumber(event, this, 10,\'mobile\');');
                        inputEl5.setAttribute('data-mobile-no', '');
                        inputEl5.setAttribute('onkeyup', 'changeInputType(event, \'tel\')');
                      labelEl.append(inputEl5);

                        const spanEl12 = document.createElement('span');
                        spanEl12.setAttribute('class', 'label-new');
                        spanEl12.textContent = 'Enter Mobile Number';
                      labelEl.append(spanEl12);

                        const spanEl13 = document.createElement('span');
                        spanEl13.setAttribute('alt', 'verified');
                        spanEl13.setAttribute('title', 'verified');
                        spanEl13.setAttribute('class', 'material-icons success_icon_span');
                        spanEl13.textContent = 'check';
                      labelEl.append(spanEl13);
                    divEl21.append(labelEl);

                      const smallEl = document.createElement('small');
                      smallEl.setAttribute('class', 'error_msg mobile_error');
                    divEl21.append(smallEl);
                  divEl20.append(divEl21);
                divEl19.append(divEl20);

                  const buttonEl = document.createElement('button');
                  buttonEl.textContent = 'Calculate Premium ';
                  buttonEl.setAttribute('type', 'button');
                  buttonEl.setAttribute('class', 'btn_sticky_mobile btn_custom quote_btn custum_common_btn');
                  buttonEl.setAttribute('onclick', 'focusOnMobileField()');

                    const spanEl14 = document.createElement('span');
                    spanEl14.setAttribute('class', 'material-icons');
                    spanEl14.textContent = 'north';
                  buttonEl.append(spanEl14);
                divEl19.append(buttonEl);

                  const divEl22 = document.createElement('div');
                  divEl22.setAttribute('class', 'tnc_popup');

                    const labelEl2 = document.createElement('label');
                    labelEl2.setAttribute('class', 'quotebox_tc');

                      const smallEl2 = document.createElement('small');
                      smallEl2.textContent = 'By clicking, you agree to our';

                        const spanEl15 = document.createElement('span');
                        spanEl15.setAttribute('onclick', 'show_terms();');
                        spanEl15.textContent = 'Terms and Conditions';
                      smallEl2.append(spanEl15);
                    labelEl2.append(smallEl2);
                  divEl22.append(labelEl2);
                divEl19.append(divEl22);

                  const labelEl3 = document.createElement('label');
                  labelEl3.setAttribute('class', 'checkbox update_whtsup');

                    const inputEl6 = document.createElement('input');
                    inputEl6.setAttribute('autocomplete', 'off');
                    inputEl6.setAttribute('type', 'checkbox');
                    inputEl6.setAttribute('name', 'whatsapp_opt');
                    inputEl6.setAttribute('id', 'whatsapp_opt');
                    inputEl6.setAttribute('checked', 'checked');
                  labelEl3.append(inputEl6);

                    const smallEl3 = document.createElement('small');
                    smallEl3.textContent = 'Get updates on';
                    smallEl3.setAttribute('class', 'watsapp_icon_cont');

                      const spanEl16 = document.createElement('span');
                      spanEl16.setAttribute('class', 'watsapp_icon');
                      spanEl16.textContent = 'WhatsApp';

                        const imgEl10 = document.createElement('img');
                        imgEl10.setAttribute('class', 'lozad care_spritewhatsapp-new');
                        imgEl10.setAttribute('alt', 'whatsapp');
                        imgEl10.setAttribute('title', 'whatsapp');
                        imgEl10.setAttribute('width', '16');
                        imgEl10.setAttribute('height', '16');
                        imgEl10.setAttribute('src', 'https://www.careinsurance.com/images/whatsApp-new.svg');
                        imgEl10.setAttribute('data-src', 'https://www.careinsurance.com/images/whatsApp-new.svg');
                        imgEl10.setAttribute('data-loaded', 'true');
                      spanEl16.append(imgEl10);
                    smallEl3.append(spanEl16);
                  labelEl3.append(smallEl3);

                    const spanEl17 = document.createElement('span');
                  labelEl3.append(spanEl17);
                divEl19.append(labelEl3);
              divEl15.append(divEl19);
            formEl.append(divEl15);

              const divEl23 = document.createElement('div');
              divEl23.setAttribute('class', 'step2 form-step Cr-PreQuote-InsuredDetails');

                const h2El = document.createElement('h2');

                  const spanEl18 = document.createElement('span');
                  spanEl18.setAttribute('class', 'back step2_back material-icons');
                  spanEl18.setAttribute('alt', 'Back');
                  spanEl18.setAttribute('title', 'Back');
                  spanEl18.textContent = 'arrow_back';
                h2El.append(spanEl18);

                  const iEl5 = document.createElement('i');
                  iEl5.textContent = 'you want to cover';
                h2El.append(iEl5);
              divEl23.append(h2El);

                const divEl24 = document.createElement('div');
                divEl24.setAttribute('class', 'stepper');

                  const ulEl2 = document.createElement('ul');

                    const liEl4 = document.createElement('li');
                    liEl4.setAttribute('class', 'completed');
                  ulEl2.append(liEl4);

                    const liEl5 = document.createElement('li');
                    liEl5.setAttribute('class', 'current');
                  ulEl2.append(liEl5);

                    const liEl6 = document.createElement('li');
                    liEl6.setAttribute('class', '');
                  ulEl2.append(liEl6);

                    const liEl7 = document.createElement('li');
                    liEl7.setAttribute('class', '');
                  ulEl2.append(liEl7);
                divEl24.append(ulEl2);
              divEl23.append(divEl24);

                const divEl25 = document.createElement('div');
                divEl25.setAttribute('class', 'select_member');

                  const divEl26 = document.createElement('div');
                  divEl26.setAttribute('class', 'member_list align_middle');

                    const inputEl7 = document.createElement('input');
                    inputEl7.setAttribute('type', 'checkbox');
                    inputEl7.setAttribute('name', 'self');
                    inputEl7.setAttribute('class', 'relation adult');
                    inputEl7.setAttribute('id', 'self');
                    inputEl7.setAttribute('data-r', 'self');
                    inputEl7.setAttribute('value', '1');
                    inputEl7.setAttribute('checked', '');
                  divEl26.append(inputEl7);

                    const labelEl4 = document.createElement('label');
                    labelEl4.setAttribute('for', 'self');

                      const imgEl11 = document.createElement('img');
                      imgEl11.setAttribute('class', 'lozad');
                      imgEl11.setAttribute('src', '');
                      imgEl11.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Self_new.svg');
                      imgEl11.setAttribute('alt', 'Self');
                      imgEl11.setAttribute('title', 'Self');
                      imgEl11.setAttribute('width', '39');
                      imgEl11.setAttribute('height', '41');
                    labelEl4.append(imgEl11);

                      const spanEl19 = document.createElement('span');
                      spanEl19.textContent = 'Self';
                    labelEl4.append(spanEl19);
                  divEl26.append(labelEl4);
                divEl25.append(divEl26);

                  const divEl27 = document.createElement('div');
                  divEl27.setAttribute('class', 'member_list align_middle');

                    const inputEl8 = document.createElement('input');
                    inputEl8.setAttribute('type', 'checkbox');
                    inputEl8.setAttribute('name', 'spouse');
                    inputEl8.setAttribute('class', 'relation adult');
                    inputEl8.setAttribute('id', 'spouse');
                    inputEl8.setAttribute('data-r', 'spouse');
                    inputEl8.setAttribute('value', '0');
                  divEl27.append(inputEl8);

                    const labelEl5 = document.createElement('label');
                    labelEl5.setAttribute('for', 'spouse');

                      const imgEl12 = document.createElement('img');
                      imgEl12.setAttribute('class', 'lozad');
                      imgEl12.setAttribute('src', '');
                      imgEl12.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Spouse.svg');
                      imgEl12.setAttribute('alt', 'Spouse');
                      imgEl12.setAttribute('title', 'Spouse');
                      imgEl12.setAttribute('width', '39');
                      imgEl12.setAttribute('height', '41');
                    labelEl5.append(imgEl12);

                      const spanEl20 = document.createElement('span');
                      spanEl20.textContent = 'Spouse';
                    labelEl5.append(spanEl20);
                  divEl27.append(labelEl5);
                divEl25.append(divEl27);

                  const divEl28 = document.createElement('div');
                  divEl28.setAttribute('class', 'member_list align_middle');

                    const inputEl9 = document.createElement('input');
                    inputEl9.setAttribute('type', 'checkbox');
                    inputEl9.setAttribute('name', 'son');
                    inputEl9.setAttribute('class', 'relation multiple_entries');
                    inputEl9.setAttribute('id', 'son');
                    inputEl9.setAttribute('data-r', 'son');
                    inputEl9.setAttribute('value', '0');
                  divEl28.append(inputEl9);

                    const labelEl6 = document.createElement('label');
                    labelEl6.setAttribute('for', 'son');

                      const imgEl13 = document.createElement('img');
                      imgEl13.setAttribute('class', 'lozad');
                      imgEl13.setAttribute('src', '');
                      imgEl13.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Son.svg');
                      imgEl13.setAttribute('alt', 'Son');
                      imgEl13.setAttribute('title', 'Son');
                      imgEl13.setAttribute('width', '39');
                      imgEl13.setAttribute('height', '41');
                    labelEl6.append(imgEl13);

                      const spanEl21 = document.createElement('span');
                      spanEl21.textContent = 'Son';
                    labelEl6.append(spanEl21);

                      const divEl29 = document.createElement('div');
                      divEl29.setAttribute('class', 'number');

                        const spanEl22 = document.createElement('span');
                        spanEl22.setAttribute('class', 'minus');
                        spanEl22.textContent = '-';
                      divEl29.append(spanEl22);

                        const inputEl10 = document.createElement('input');
                        inputEl10.setAttribute('class', 'align_middle relation minor minor_son');
                        inputEl10.setAttribute('type', 'text');
                        inputEl10.setAttribute('data-r', 'son');
                        inputEl10.setAttribute('value', '0');
                      divEl29.append(inputEl10);

                        const spanEl23 = document.createElement('span');
                        spanEl23.setAttribute('class', 'plus');
                        spanEl23.textContent = '+';
                      divEl29.append(spanEl23);
                    labelEl6.append(divEl29);
                  divEl28.append(labelEl6);
                divEl25.append(divEl28);

                  const divEl30 = document.createElement('div');
                  divEl30.setAttribute('class', 'member_list align_middle');

                    const inputEl11 = document.createElement('input');
                    inputEl11.setAttribute('type', 'checkbox');
                    inputEl11.setAttribute('name', 'daughter');
                    inputEl11.setAttribute('class', 'relation multiple_entries');
                    inputEl11.setAttribute('id', 'daughter');
                    inputEl11.setAttribute('data-r', 'daughter');
                    inputEl11.setAttribute('value', '0');
                  divEl30.append(inputEl11);

                    const labelEl7 = document.createElement('label');
                    labelEl7.setAttribute('for', 'daughter');

                      const imgEl14 = document.createElement('img');
                      imgEl14.setAttribute('class', 'lozad');
                      imgEl14.setAttribute('src', '');
                      imgEl14.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Daughter.svg');
                      imgEl14.setAttribute('alt', 'Daughter');
                      imgEl14.setAttribute('title', 'Daughter');
                      imgEl14.setAttribute('width', '39');
                      imgEl14.setAttribute('height', '41');
                    labelEl7.append(imgEl14);

                      const spanEl24 = document.createElement('span');
                      spanEl24.textContent = 'Daughter';
                    labelEl7.append(spanEl24);

                      const divEl31 = document.createElement('div');
                      divEl31.setAttribute('class', 'number');

                        const spanEl25 = document.createElement('span');
                        spanEl25.setAttribute('class', 'minus');
                        spanEl25.textContent = '-';
                      divEl31.append(spanEl25);

                        const inputEl12 = document.createElement('input');
                        inputEl12.setAttribute('class', 'align_middle relation minor minor_daughter');
                        inputEl12.setAttribute('type', 'text');
                        inputEl12.setAttribute('data-r', 'daughter');
                        inputEl12.setAttribute('value', '0');
                      divEl31.append(inputEl12);

                        const spanEl26 = document.createElement('span');
                        spanEl26.setAttribute('class', 'plus');
                        spanEl26.textContent = '+';
                      divEl31.append(spanEl26);
                    labelEl7.append(divEl31);
                  divEl30.append(labelEl7);
                divEl25.append(divEl30);

                  const divEl32 = document.createElement('div');
                  divEl32.setAttribute('class', 'member_list align_middle');

                    const inputEl13 = document.createElement('input');
                    inputEl13.setAttribute('type', 'checkbox');
                    inputEl13.setAttribute('name', 'father');
                    inputEl13.setAttribute('class', 'relation adult');
                    inputEl13.setAttribute('id', 'father');
                    inputEl13.setAttribute('data-r', 'father');
                    inputEl13.setAttribute('value', '0');
                  divEl32.append(inputEl13);

                    const labelEl8 = document.createElement('label');
                    labelEl8.setAttribute('for', 'father');

                      const imgEl15 = document.createElement('img');
                      imgEl15.setAttribute('class', 'lozad');
                      imgEl15.setAttribute('src', '');
                      imgEl15.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Father.svg');
                      imgEl15.setAttribute('alt', 'Father');
                      imgEl15.setAttribute('title', 'Father');
                      imgEl15.setAttribute('width', '39');
                      imgEl15.setAttribute('height', '41');
                    labelEl8.append(imgEl15);

                      const spanEl27 = document.createElement('span');
                      spanEl27.textContent = 'Father';
                    labelEl8.append(spanEl27);
                  divEl32.append(labelEl8);
                divEl25.append(divEl32);

                  const divEl33 = document.createElement('div');
                  divEl33.setAttribute('class', 'member_list align_middle');

                    const inputEl14 = document.createElement('input');
                    inputEl14.setAttribute('type', 'checkbox');
                    inputEl14.setAttribute('name', 'mother');
                    inputEl14.setAttribute('class', 'relation adult');
                    inputEl14.setAttribute('id', 'mother');
                    inputEl14.setAttribute('data-r', 'mother');
                    inputEl14.setAttribute('value', '0');
                  divEl33.append(inputEl14);

                    const labelEl9 = document.createElement('label');
                    labelEl9.setAttribute('for', 'mother');

                      const imgEl16 = document.createElement('img');
                      imgEl16.setAttribute('class', 'lozad');
                      imgEl16.setAttribute('src', '');
                      imgEl16.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Mother.svg');
                      imgEl16.setAttribute('alt', 'Mother');
                      imgEl16.setAttribute('title', 'Mother');
                      imgEl16.setAttribute('width', '39');
                      imgEl16.setAttribute('height', '41');
                    labelEl9.append(imgEl16);

                      const spanEl28 = document.createElement('span');
                      spanEl28.textContent = 'Mother';
                    labelEl9.append(spanEl28);
                  divEl33.append(labelEl9);
                divEl25.append(divEl33);

                  const divEl34 = document.createElement('div');
                  divEl34.setAttribute('class', 'member_list align_middle');

                    const inputEl15 = document.createElement('input');
                    inputEl15.setAttribute('type', 'checkbox');
                    inputEl15.setAttribute('name', 'father-in-law');
                    inputEl15.setAttribute('class', 'relation adult');
                    inputEl15.setAttribute('id', 'father-in-law');
                    inputEl15.setAttribute('data-r', 'father-in-law');
                    inputEl15.setAttribute('value', '0');
                  divEl34.append(inputEl15);

                    const labelEl10 = document.createElement('label');
                    labelEl10.setAttribute('for', 'father-in-law');

                      const imgEl17 = document.createElement('img');
                      imgEl17.setAttribute('class', 'lozad');
                      imgEl17.setAttribute('src', '');
                      imgEl17.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Father.svg');
                      imgEl17.setAttribute('alt', 'Father In Law');
                      imgEl17.setAttribute('title', 'Father In Law');
                      imgEl17.setAttribute('width', '39');
                      imgEl17.setAttribute('height', '41');
                    labelEl10.append(imgEl17);

                      const spanEl29 = document.createElement('span');
                      spanEl29.textContent = 'Father In Law';
                    labelEl10.append(spanEl29);
                  divEl34.append(labelEl10);
                divEl25.append(divEl34);

                  const divEl35 = document.createElement('div');
                  divEl35.setAttribute('class', 'member_list align_middle');

                    const inputEl16 = document.createElement('input');
                    inputEl16.setAttribute('type', 'checkbox');
                    inputEl16.setAttribute('name', 'mother-in-law');
                    inputEl16.setAttribute('class', 'relation adult');
                    inputEl16.setAttribute('id', 'mother-in-law');
                    inputEl16.setAttribute('data-r', 'mother-in-law');
                    inputEl16.setAttribute('value', '0');
                  divEl35.append(inputEl16);

                    const labelEl11 = document.createElement('label');
                    labelEl11.setAttribute('for', 'mother-in-law');

                      const imgEl18 = document.createElement('img');
                      imgEl18.setAttribute('class', 'lozad');
                      imgEl18.setAttribute('src', '');
                      imgEl18.setAttribute('data-src', 'https://www.careinsurance.com/images/sem_dynamic/Mother.svg');
                      imgEl18.setAttribute('alt', 'Mother In Law');
                      imgEl18.setAttribute('title', 'Mother In Law');
                      imgEl18.setAttribute('width', '39');
                      imgEl18.setAttribute('height', '41');
                    labelEl11.append(imgEl18);

                      const spanEl30 = document.createElement('span');
                      spanEl30.textContent = 'Mother In Law';
                    labelEl11.append(spanEl30);
                  divEl35.append(labelEl11);
                divEl25.append(divEl35);

                  const smallEl4 = document.createElement('small');
                  smallEl4.setAttribute('class', 'error_msg');
                divEl25.append(smallEl4);
              divEl23.append(divEl25);

                const buttonEl2 = document.createElement('button');
                buttonEl2.setAttribute('type', 'button');
                buttonEl2.setAttribute('class', 'btn_sticky_mobile btn_custom step2_continue custum_common_btn');
                buttonEl2.setAttribute('onclick', 'validateMembers();');
                buttonEl2.textContent = 'Continue';
              divEl23.append(buttonEl2);
            formEl.append(divEl23);

              const divEl36 = document.createElement('div');
              divEl36.setAttribute('class', 'step3 form-step Cr-PreQuote-InsuredAge');

                const h2El2 = document.createElement('h2');

                  const spanEl31 = document.createElement('span');
                  spanEl31.setAttribute('class', 'back step3_back material-icons');
                  spanEl31.setAttribute('alt', 'Back');
                  spanEl31.setAttribute('title', 'Back');
                  spanEl31.textContent = 'arrow_back';
                h2El2.append(spanEl31);

                  const iEl6 = document.createElement('i');
                  iEl6.textContent = 'each family member';
                h2El2.append(iEl6);
              divEl36.append(h2El2);

                const divEl37 = document.createElement('div');
                divEl37.setAttribute('class', 'stepper');

                  const ulEl3 = document.createElement('ul');

                    const liEl8 = document.createElement('li');
                    liEl8.setAttribute('class', 'completed');

                      const spanEl32 = document.createElement('span');
                    liEl8.append(spanEl32);
                  ulEl3.append(liEl8);

                    const liEl9 = document.createElement('li');
                    liEl9.setAttribute('class', 'completed');

                      const spanEl33 = document.createElement('span');
                    liEl9.append(spanEl33);
                  ulEl3.append(liEl9);

                    const liEl10 = document.createElement('li');
                    liEl10.setAttribute('class', 'current');

                      const spanEl34 = document.createElement('span');
                    liEl10.append(spanEl34);
                  ulEl3.append(liEl10);

                    const liEl11 = document.createElement('li');
                    liEl11.setAttribute('class', '');

                      const spanEl35 = document.createElement('span');
                    liEl11.append(spanEl35);
                  ulEl3.append(liEl11);
                divEl37.append(ulEl3);
              divEl36.append(divEl37);

                const divEl38 = document.createElement('div');
                divEl38.setAttribute('class', 'custom_button_error');

                  const divEl39 = document.createElement('div');
                  divEl39.setAttribute('class', 'selected_members light_bg');
                divEl38.append(divEl39);

                  const smallEl5 = document.createElement('small');
                  smallEl5.setAttribute('class', 'error_msg');
                divEl38.append(smallEl5);
              divEl36.append(divEl38);

                const buttonEl3 = document.createElement('button');
                buttonEl3.setAttribute('type', 'button');
                buttonEl3.setAttribute('class', 'btn_sticky_mobile btn_custom step3_continue custum_common_btn');
                buttonEl3.setAttribute('onclick', 'agevalidation();');
                buttonEl3.textContent = 'Continue';
              divEl36.append(buttonEl3);
            formEl.append(divEl36);

              const divEl40 = document.createElement('div');
              divEl40.setAttribute('class', 'step4 form-step Cr-PreQuote-City');

                const h2El3 = document.createElement('h2');

                  const spanEl36 = document.createElement('span');
                  spanEl36.setAttribute('class', 'back step4_back material-icons');
                  spanEl36.setAttribute('alt', 'Back');
                  spanEl36.setAttribute('title', 'Back');
                  spanEl36.textContent = 'arrow_back';
                h2El3.append(spanEl36);

                  const iEl7 = document.createElement('i');
                  iEl7.textContent = 'Help us with your city pincode';
                h2El3.append(iEl7);
              divEl40.append(h2El3);

                const divEl41 = document.createElement('div');
                divEl41.setAttribute('class', 'stepper');

                  const ulEl4 = document.createElement('ul');

                    const liEl12 = document.createElement('li');
                    liEl12.setAttribute('class', 'completed');

                      const spanEl37 = document.createElement('span');
                    liEl12.append(spanEl37);
                  ulEl4.append(liEl12);

                    const liEl13 = document.createElement('li');
                    liEl13.setAttribute('class', 'completed');

                      const spanEl38 = document.createElement('span');
                    liEl13.append(spanEl38);
                  ulEl4.append(liEl13);

                    const liEl14 = document.createElement('li');
                    liEl14.setAttribute('class', 'completed');

                      const spanEl39 = document.createElement('span');
                    liEl14.append(spanEl39);
                  ulEl4.append(liEl14);

                    const liEl15 = document.createElement('li');
                    liEl15.setAttribute('class', 'current');

                      const spanEl40 = document.createElement('span');
                    liEl15.append(spanEl40);
                  ulEl4.append(liEl15);
                divEl41.append(ulEl4);
              divEl40.append(divEl41);

                const divEl42 = document.createElement('div');
                divEl42.setAttribute('class', 'form_cont');

                  const divEl43 = document.createElement('div');
                  divEl43.setAttribute('class', 'd_flex');

                    const divEl44 = document.createElement('div');
                    divEl44.setAttribute('class', 'form-group');

                      const divEl45 = document.createElement('div');
                      divEl45.setAttribute('class', 'cities');

                        const labelEl12 = document.createElement('label');
                        labelEl12.setAttribute('class', 'floating-label');

                          const inputEl17 = document.createElement('input');
                          inputEl17.setAttribute('autocomplete', 'Off');
                          inputEl17.setAttribute('type', 'text');
                          inputEl17.setAttribute('id', 'pincode_search');
                          inputEl17.setAttribute('name', 'pin_code');
                          inputEl17.setAttribute('class', 'form-input animate_label valid floating-input');
                          inputEl17.setAttribute('maxlength', '6');
                          inputEl17.setAttribute('placeholder', ' ');
                          inputEl17.setAttribute('oninput', 'return isNumber(event,this,6);');
                          inputEl17.setAttribute('value', '');
                          inputEl17.setAttribute('pincode_size', '0');
                          inputEl17.setAttribute('data-pincode-search', '');
                        labelEl12.append(inputEl17);

                          const spanEl41 = document.createElement('span');
                          spanEl41.setAttribute('class', 'label-new');
                          spanEl41.textContent = 'Enter Your Pincode';
                        labelEl12.append(spanEl41);

                          const spanEl42 = document.createElement('span');
                          spanEl42.setAttribute('alt', 'verified');
                          spanEl42.setAttribute('title', 'verified');
                          spanEl42.setAttribute('class', 'material-icons success_icon_span pin_code_success_icon_span');
                          spanEl42.textContent = 'check';
                        labelEl12.append(spanEl42);

                          const inputEl18 = document.createElement('input');
                          inputEl18.setAttribute('id', 'city_name');
                          inputEl18.setAttribute('type', 'hidden');
                          inputEl18.setAttribute('name', 'city_name');
                          inputEl18.setAttribute('class', 'form-input animate_label');
                          inputEl18.setAttribute('autocomplete', 'off');
                          inputEl18.setAttribute('value', '');
                        labelEl12.append(inputEl18);

                          const inputEl19 = document.createElement('input');
                          inputEl19.setAttribute('id', 'static_city');
                          inputEl19.setAttribute('type', 'hidden');
                          inputEl19.setAttribute('name', 'static_city');
                          inputEl19.setAttribute('class', 'form-input animate_label');
                          inputEl19.setAttribute('autocomplete', 'off');
                          inputEl19.setAttribute('value', '');
                        labelEl12.append(inputEl19);

                          const inputEl20 = document.createElement('input');
                          inputEl20.setAttribute('id', 'state');
                          inputEl20.setAttribute('name', 'state');
                          inputEl20.setAttribute('class', 'form-input animate_label');
                          inputEl20.setAttribute('type', 'hidden');
                          inputEl20.setAttribute('autocomplete', 'off');
                          inputEl20.setAttribute('value', 'DELHI');
                        labelEl12.append(inputEl20);

                          const spanEl43 = document.createElement('span');
                          spanEl43.setAttribute('id', 'user_zone');
                          spanEl43.setAttribute('style', 'display:none;');
                        labelEl12.append(spanEl43);

                          const inputEl21 = document.createElement('input');
                          inputEl21.setAttribute('type', 'hidden');
                          inputEl21.setAttribute('name', 'portability_allowed');
                          inputEl21.setAttribute('id', 'portability_allowed');
                          inputEl21.setAttribute('value', '');
                        labelEl12.append(inputEl21);

                          const inputEl22 = document.createElement('input');
                          inputEl22.setAttribute('type', 'hidden');
                          inputEl22.setAttribute('name', 'opd_mandatory_on_portability');
                          inputEl22.setAttribute('id', 'opd_mandatory_on_portability');
                          inputEl22.setAttribute('value', '');
                        labelEl12.append(inputEl22);

                          const inputEl23 = document.createElement('input');
                          inputEl23.setAttribute('type', 'hidden');
                          inputEl23.setAttribute('name', 'checkHSAllow');
                          inputEl23.setAttribute('id', 'checkHSAllow');
                          inputEl23.setAttribute('value', '');
                        labelEl12.append(inputEl23);

                          const inputEl24 = document.createElement('input');
                          inputEl24.setAttribute('type', 'hidden');
                          inputEl24.setAttribute('name', 'supremeAdonCheck');
                          inputEl24.setAttribute('id', 'supremeAdonCheck');
                          inputEl24.setAttribute('value', '');
                        labelEl12.append(inputEl24);

                          const inputEl25 = document.createElement('input');
                          inputEl25.setAttribute('type', 'hidden');
                          inputEl25.setAttribute('name', 'portabilityCheckFPSI');
                          inputEl25.setAttribute('id', 'portabilityCheckFPSI');
                          inputEl25.setAttribute('value', '');
                        labelEl12.append(inputEl25);

                          const inputEl26 = document.createElement('input');
                          inputEl26.setAttribute('type', 'hidden');
                          inputEl26.setAttribute('name', 'careplusChangeSI');
                          inputEl26.setAttribute('id', 'careplusChangeSI');
                          inputEl26.setAttribute('value', '');
                        labelEl12.append(inputEl26);

                          const inputEl27 = document.createElement('input');
                          inputEl27.setAttribute('type', 'hidden');
                          inputEl27.setAttribute('name', 'supremeAgeAdons');
                          inputEl27.setAttribute('id', 'supremeAgeAdons');
                          inputEl27.setAttribute('value', '');
                        labelEl12.append(inputEl27);

                          const inputEl28 = document.createElement('input');
                          inputEl28.setAttribute('type', 'hidden');
                          inputEl28.setAttribute('name', 'supremeNasicAdons');
                          inputEl28.setAttribute('id', 'supremeNasicAdons');
                          inputEl28.setAttribute('value', '');
                        labelEl12.append(inputEl28);

                          const inputEl29 = document.createElement('input');
                          inputEl29.setAttribute('type', 'hidden');
                          inputEl29.setAttribute('name', 'si_options_for_specific_locations');
                          inputEl29.setAttribute('id', 'si_options_for_specific_locations');
                          inputEl29.setAttribute('value', '');
                        labelEl12.append(inputEl29);

                          const inputEl30 = document.createElement('input');
                          inputEl30.setAttribute('type', 'hidden');
                          inputEl30.setAttribute('name', 'identifier');
                          inputEl30.setAttribute('id', 'identifier');
                          inputEl30.setAttribute('value', '');
                        labelEl12.append(inputEl30);

                          const inputEl31 = document.createElement('input');
                          inputEl31.setAttribute('type', 'hidden');
                          inputEl31.setAttribute('name', 'supremeMABAdons');
                          inputEl31.setAttribute('id', 'supremeMABAdons');
                          inputEl31.setAttribute('value', '');
                        labelEl12.append(inputEl31);
                      divEl45.append(labelEl12);

                        const smallEl6 = document.createElement('small');
                        smallEl6.setAttribute('class', 'error_msg city_error');
                      divEl45.append(smallEl6);
                    divEl44.append(divEl45);
                  divEl43.append(divEl44);

                    const divEl46 = document.createElement('div');
                    divEl46.setAttribute('class', 'form-group');
                  divEl43.append(divEl46);
                divEl42.append(divEl43);
              divEl40.append(divEl42);

                const smallEl7 = document.createElement('small');
                smallEl7.setAttribute('id', 'note');
                smallEl7.setAttribute('class', 'hide_all');

                  const bEl2 = document.createElement('b');

                    const spanEl44 = document.createElement('span');
                    spanEl44.setAttribute('id', 'product_note');
                  bEl2.append(spanEl44);

                    const aEl = document.createElement('a');
                    aEl.setAttribute('href', 'https://www.careinsurance.com/product/care-supreme');
                    aEl.textContent = 'click here';
                  bEl2.append(aEl);
                smallEl7.append(bEl2);
              divEl40.append(smallEl7);

                const divEl47 = document.createElement('div');
                divEl47.setAttribute('class', 'custom_button_error');

                  const buttonEl4 = document.createElement('button');
                  buttonEl4.setAttribute('type', 'button');
                  buttonEl4.setAttribute('class', 'btn_sticky_mobile btn_custom view_quote custum_common_btn');
                  buttonEl4.textContent = 'View Quote';
                divEl47.append(buttonEl4);
              divEl40.append(divEl47);
            formEl.append(divEl40);
          divEl14.append(formEl);
        divEl5.append(divEl14);
      divEl2.append(divEl5);
    sectionEl.append(divEl2);
  divEl.append(sectionEl);
  container.append(divEl);


  block.textContent = '';
  block.append(container);
}