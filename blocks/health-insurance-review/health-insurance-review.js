export default function decorate(block) {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('class', 'custom_container');

    const divEl = document.createElement('div');
    divEl.setAttribute('class', '');


    const sectionEl7 = document.createElement('section');
    sectionEl7.setAttribute('class', 'custom_block why_health_plan custom_container');

    const articleEl13 = document.createElement('article');
    articleEl13.setAttribute('class', 'cn_bg-blue cn_p-30');

    const divEl3 = document.createElement('div');
    divEl3.setAttribute('class', 'cn_container_text_header_content');

    const h2El3 = document.createElement('h2');
    h2El3.setAttribute('id', 'why-choose-care');
    h2El3.textContent = 'Why Choose Care Health Insurance?';
    divEl3.append(h2El3);

    const pEl3 = document.createElement('p');
    pEl3.textContent = 'Given below are some of the reasons why a health insurance policy from Care Health Insurance may be the best option for you:';
    divEl3.append(pEl3);

    const divEl4 = document.createElement('div');
    divEl4.setAttribute('class', 'health_insurance_cover');

    const divEl5 = document.createElement('div');
    divEl5.setAttribute('class', 'health_plan_details');

    const divEl6 = document.createElement('div');
    divEl6.setAttribute('class', 'cn_row top_cards');
    divEl6.setAttribute('id', 'health-insurance-cover');

    const divEl7 = document.createElement('div');
    divEl7.setAttribute('class', 'health_product_slides');
    divEl7.setAttribute('style', '');
    divEl7.setAttribute('tabindex', '0');

    const divEl8 = document.createElement('div');
    divEl8.setAttribute('class', 'cn_column_content cn_card_view');

    const divEl9 = document.createElement('div');
    divEl9.setAttribute('class', 'cn_thumbnail-border');

    const divEl10 = document.createElement('div');
    divEl10.setAttribute('class', 'health_insurancr_benifit_section');

    const divEl11 = document.createElement('div');
    divEl11.setAttribute('class', 'card_img card_img2 lozad');
    divEl11.setAttribute('data-background-image', 'https://cms.careinsurance.com/cms/public/assets/media/affordable-premiums-with-extensive-coverage.webp');
    divEl11.setAttribute('data-loaded', 'true');
    divEl11.setAttribute('style', 'background-image: url("https://cms.careinsurance.com/cms/public/assets/media/affordable-premiums-with-extensive-coverage.webp");');
    divEl10.append(divEl11);

    const pEl4 = document.createElement('p');
    pEl4.setAttribute('class', 'health_heading_pera');

    const strongEl = document.createElement('strong');
    strongEl.textContent = 'Affordable Premiums with Extensive Coverage';
    pEl4.append(strongEl);
    divEl10.append(pEl4);

    const pEl5 = document.createElement('p');
    pEl5.textContent = 'Our health insurance plans offer new-age coverage at an affordable premium, ensuring you are appropriately covered without breaking the bank.';
    divEl10.append(pEl5);
    divEl9.append(divEl10);
    divEl8.append(divEl9);
    divEl7.append(divEl8);
    divEl6.append(divEl7);

    const divEl12 = document.createElement('div');
    divEl12.setAttribute('class', 'health_product_slides');
    divEl12.setAttribute('style', '');
    divEl12.setAttribute('tabindex', '0');

    const divEl13 = document.createElement('div');
    divEl13.setAttribute('class', 'cn_column_content cn_card_view');

    const divEl14 = document.createElement('div');
    divEl14.setAttribute('class', 'cn_thumbnail-border');

    const divEl15 = document.createElement('div');
    divEl15.setAttribute('class', 'health_insurancr_benifit_section');

    const divEl16 = document.createElement('div');
    divEl16.setAttribute('class', 'card_img card_img3 lozad');
    divEl16.setAttribute('data-background-image', 'https://cms.careinsurance.com/cms/public/assets/media/wide-range-of-plan-options.webp');
    divEl16.setAttribute('data-loaded', 'true');
    divEl16.setAttribute('style', 'background-image: url("https://cms.careinsurance.com/cms/public/assets/media/wide-range-of-plan-options.webp");');
    divEl15.append(divEl16);

    const pEl6 = document.createElement('p');
    pEl6.setAttribute('class', 'health_heading_pera');

    const strongEl2 = document.createElement('strong');
    strongEl2.textContent = 'Wide Range of Plan Options';
    pEl6.append(strongEl2);
    divEl15.append(pEl6);

    const pEl7 = document.createElement('p');
    pEl7.textContent = 'We ensure competitive coverage for everyone through the diverse plan options for families, individuals, parents, expecting mothers, and people with critical illnesses.';
    divEl15.append(pEl7);
    divEl14.append(divEl15);
    divEl13.append(divEl14);
    divEl12.append(divEl13);
    divEl6.append(divEl12);

    const divEl17 = document.createElement('div');
    divEl17.setAttribute('class', 'health_product_slides');
    divEl17.setAttribute('style', '');
    divEl17.setAttribute('tabindex', '-1');

    const divEl18 = document.createElement('div');
    divEl18.setAttribute('class', 'cn_column_content cn_card_view');

    const divEl19 = document.createElement('div');
    divEl19.setAttribute('class', 'cn_thumbnail-border');

    const divEl20 = document.createElement('div');
    divEl20.setAttribute('class', 'health_insurancr_benifit_section');

    const divEl21 = document.createElement('div');
    divEl21.setAttribute('class', 'card_img card_img4 lozad');
    divEl21.setAttribute('data-background-image', 'https://cms.careinsurance.com/cms/public/assets/media/vast-network.webp');
    divEl21.setAttribute('data-loaded', 'true');
    divEl21.setAttribute('style', 'background-image: url("https://cms.careinsurance.com/cms/public/assets/media/vast-network.webp");');
    divEl20.append(divEl21);

    const pEl8 = document.createElement('p');
    pEl8.setAttribute('class', 'health_heading_pera');

    const strongEl3 = document.createElement('strong');
    strongEl3.textContent = 'Vast Network';
    pEl8.append(strongEl3);
    divEl20.append(pEl8);

    const pEl9 = document.createElement('p');
    pEl9.textContent = 'Our family healthcare plans are backed with a wide network of 21600+ cashless healthcare providers, including 11400+ network hospitals, which ensures you can avail of quality treatment in times of need.';
    divEl20.append(pEl9);
    divEl19.append(divEl20);
    divEl18.append(divEl19);
    divEl17.append(divEl18);
    divEl6.append(divEl17);

    const divEl22 = document.createElement('div');
    divEl22.setAttribute('class', 'health_product_slides');
    divEl22.setAttribute('style', '');
    divEl22.setAttribute('tabindex', '-1');

    const divEl23 = document.createElement('div');
    divEl23.setAttribute('class', 'cn_column_content cn_card_view');

    const divEl24 = document.createElement('div');
    divEl24.setAttribute('class', 'cn_thumbnail-border');

    const divEl25 = document.createElement('div');
    divEl25.setAttribute('class', 'health_insurancr_benifit_section');

    const divEl26 = document.createElement('div');
    divEl26.setAttribute('class', 'card_img card_img5 lozad');
    divEl26.setAttribute('data-background-image', 'https://cms.careinsurance.com/cms/public/assets/media/easy-claim-process.webp');
    divEl26.setAttribute('data-loaded', 'true');
    divEl26.setAttribute('style', 'background-image: url("https://cms.careinsurance.com/cms/public/assets/media/easy-claim-process.webp");');
    divEl25.append(divEl26);

    const pEl10 = document.createElement('p');
    pEl10.setAttribute('class', 'health_heading_pera');

    const strongEl4 = document.createElement('strong');
    strongEl4.textContent = 'Easy Claim Process';
    pEl10.append(strongEl4);
    divEl25.append(pEl10);

    const pEl11 = document.createElement('p');
    pEl11.textContent = 'With a hassle-free claim procedure available both online and offline, we are also home to one of the best claim assistance team which means convenient claims anytime anyday!';
    divEl25.append(pEl11);
    divEl24.append(divEl25);
    divEl23.append(divEl24);
    divEl22.append(divEl23);
    divEl6.append(divEl22);
    divEl5.append(divEl6);
    divEl4.append(divEl5);
    divEl3.append(divEl4);

    const h2El4 = document.createElement('h2');
    h2El4.setAttribute('id', 'features');
    h2El4.textContent = 'Features of Health Insurance Plans';
    divEl3.append(h2El4);

    const pEl12 = document.createElement('p');
    pEl12.textContent = 'Addressed below are the features of the best health insurance plans from Care Health Insurance:';
    divEl3.append(pEl12);

    const divEl27 = document.createElement('div');
    divEl27.setAttribute('class', 'custom_table');

    const tableEl = document.createElement('table');
    tableEl.setAttribute('border', '1');
    tableEl.setAttribute('cellpadding', '1');
    tableEl.setAttribute('cellspacing', '1');

    const tbodyEl = document.createElement('tbody');

    const trEl = document.createElement('tr');

    const thEl = document.createElement('th');
    thEl.textContent = 'Parameter';
    trEl.append(thEl);

    const thEl2 = document.createElement('th');
    thEl2.textContent = 'Definition';
    trEl.append(thEl2);

    const thEl3 = document.createElement('th');
    thEl3.textContent = 'Details';
    trEl.append(thEl3);
    tbodyEl.append(trEl);

    const trEl2 = document.createElement('tr');

    const tdEl = document.createElement('td');
    tdEl.textContent = 'Sum insured';
    trEl2.append(tdEl);

    const tdEl2 = document.createElement('td');
    tdEl2.textContent = 'The sum insured is an amount paid by the insurer to the insured in case of an unforeseen event.';
    trEl2.append(tdEl2);

    const tdEl3 = document.createElement('td');
    tdEl3.textContent = 'Ranging from ₹5 lakhs to ₹1 crores';
    trEl2.append(tdEl3);
    tbodyEl.append(trEl2);

    const trEl3 = document.createElement('tr');

    const tdEl4 = document.createElement('td');
    tdEl4.textContent = 'Pre-hospitalisation expenses';
    trEl3.append(tdEl4);

    const tdEl5 = document.createElement('td');
    tdEl5.textContent = 'Diagnostic, consultation, and medical charges incurred before hospitalisation are pre-hospitalisation expenses';
    trEl3.append(tdEl5);

    const tdEl6 = document.createElement('td');
    tdEl6.textContent = 'Covered up to 60 days';
    trEl3.append(tdEl6);
    tbodyEl.append(trEl3);

    const trEl4 = document.createElement('tr');

    const tdEl7 = document.createElement('td');
    tdEl7.textContent = 'Post-hospitalisation expenses';
    trEl4.append(tdEl7);

    const tdEl8 = document.createElement('td');
    tdEl8.textContent = 'The expenses incurred in taking recovery diagnosis, consultation and medication after discharge are called post-hospitalisation expenses.';
    trEl4.append(tdEl8);

    const tdEl9 = document.createElement('td');
    tdEl9.textContent = 'Covered up to 90 days';
    trEl4.append(tdEl9);
    tbodyEl.append(trEl4);

    const trEl5 = document.createElement('tr');

    const tdEl10 = document.createElement('td');
    tdEl10.textContent = 'Ambulance charges';
    trEl5.append(tdEl10);

    const tdEl11 = document.createElement('td');
    tdEl11.textContent = 'The cost incurred in hiring ambulance services if a medical emergency occurs.';
    trEl5.append(tdEl11);

    const tdEl12 = document.createElement('td');
    tdEl12.textContent = '✅';
    trEl5.append(tdEl12);
    tbodyEl.append(trEl5);

    const trEl6 = document.createElement('tr');

    const tdEl13 = document.createElement('td');
    tdEl13.textContent = 'Daycare treatments';
    trEl6.append(tdEl13);

    const tdEl14 = document.createElement('td');
    tdEl14.textContent = 'A treatment that does not require 24-hour hospitalisation is known as daycare treatment. Examples include dialysis and chemotherapy.';
    trEl6.append(tdEl14);

    const tdEl15 = document.createElement('td');
    tdEl15.textContent = '✅';
    trEl6.append(tdEl15);
    tbodyEl.append(trEl6);

    const trEl7 = document.createElement('tr');

    const tdEl16 = document.createElement('td');
    tdEl16.textContent = 'ICU charges';
    trEl7.append(tdEl16);

    const tdEl17 = document.createElement('td');
    tdEl17.textContent = 'The cost incurred towards availing of ICU services.';
    trEl7.append(tdEl17);

    const tdEl18 = document.createElement('td');
    tdEl18.textContent = '✅';
    trEl7.append(tdEl18);
    tbodyEl.append(trEl7);

    const trEl8 = document.createElement('tr');

    const tdEl19 = document.createElement('td');
    tdEl19.textContent = 'Add-ons';
    trEl8.append(tdEl19);

    const tdEl20 = document.createElement('td');
    tdEl20.textContent = 'An additional feature in health insurance plans that can be bought by paying an extra premium.';
    trEl8.append(tdEl20);

    const tdEl21 = document.createElement('td');
    tdEl21.textContent = '✅';
    trEl8.append(tdEl21);
    tbodyEl.append(trEl8);

    const trEl9 = document.createElement('tr');

    const tdEl22 = document.createElement('td');
    tdEl22.textContent = 'Hospital Network';
    trEl9.append(tdEl22);

    const tdEl23 = document.createElement('td');
    tdEl23.textContent = 'The list of hospitals that tie up with the insurance company to provide hassle-free treatments to the insured is called network hospitals in health insurance.';
    trEl9.append(tdEl23);

    const tdEl24 = document.createElement('td');
    tdEl24.textContent = '21600+ cashless healthcare providers with 11400+ network hospitals';
    trEl9.append(tdEl24);
    tbodyEl.append(trEl9);

    const trEl10 = document.createElement('tr');

    const tdEl25 = document.createElement('td');
    tdEl25.textContent = 'Tax benefits';
    trEl10.append(tdEl25);

    const tdEl26 = document.createElement('td');
    tdEl26.textContent = 'The tax benefit is the deduction from the taxable amount you can avail of based on your health insurance premium.';
    trEl10.append(tdEl26);

    const tdEl27 = document.createElement('td');
    tdEl27.textContent = 'Up to ₹75000 Under Section 80D~';
    trEl10.append(tdEl27);
    tbodyEl.append(trEl10);

    const trEl11 = document.createElement('tr');

    const tdEl28 = document.createElement('td');
    tdEl28.textContent = 'AYUSH treatments';
    trEl11.append(tdEl28);

    const tdEl29 = document.createElement('td');
    tdEl29.textContent = 'The medicine practices, including Ayurveda, Yunani, Siddha, and Homeopathy, are AYUSH treatments.';
    trEl11.append(tdEl29);

    const tdEl30 = document.createElement('td');
    tdEl30.textContent = '✅';
    trEl11.append(tdEl30);
    tbodyEl.append(trEl11);

    const trEl12 = document.createElement('tr');

    const tdEl31 = document.createElement('td');
    tdEl31.textContent = 'Domiciliary treatments';
    trEl12.append(tdEl31);

    const tdEl32 = document.createElement('td');
    tdEl32.textContent = 'Domiciliary treatment is the medical treatment offered to a patient at home when hospitalisation is impossible.';
    trEl12.append(tdEl32);

    const tdEl33 = document.createElement('td');
    tdEl33.textContent = '✅';
    trEl12.append(tdEl33);
    tbodyEl.append(trEl12);

    const trEl13 = document.createElement('tr');

    const tdEl34 = document.createElement('td');
    tdEl34.textContent = 'Grace period';
    trEl13.append(tdEl34);

    const tdEl35 = document.createElement('td');
    tdEl35.textContent = 'The period after the policy expiry date, when you can renew your policy and retain the existing benefits, is known as a Grace period.';
    trEl13.append(tdEl35);

    const tdEl36 = document.createElement('td');
    tdEl36.textContent = '30 days after policy expiry';
    trEl13.append(tdEl36);
    tbodyEl.append(trEl13);

    const trEl14 = document.createElement('tr');

    const tdEl37 = document.createElement('td');
    tdEl37.textContent = 'Waiting period';
    trEl14.append(tdEl37);

    const tdEl38 = document.createElement('td');
    tdEl38.textContent = 'The time that you have to wait before filing a claim for specified diseases is known as the Waiting period.';
    trEl14.append(tdEl38);

    const tdEl39 = document.createElement('td');
    tdEl39.textContent = '30 days / 24 months/36 months';
    trEl14.append(tdEl39);
    tbodyEl.append(trEl14);

    const trEl15 = document.createElement('tr');

    const tdEl40 = document.createElement('td');
    tdEl40.textContent = 'Policy tenure';
    trEl15.append(tdEl40);

    const tdEl41 = document.createElement('td');
    tdEl41.textContent = 'Policy tenure is the maximum tenure till which you want your policy to offer coverage.';
    trEl15.append(tdEl41);

    const tdEl42 = document.createElement('td');
    tdEl42.textContent = '1 year/ 2 years/ 3 years / 4 years/ 5 years';
    trEl15.append(tdEl42);
    tbodyEl.append(trEl15);

    const trEl16 = document.createElement('tr');

    const tdEl43 = document.createElement('td');
    tdEl43.textContent = 'Advanced medical treatments';
    trEl16.append(tdEl43);

    const tdEl44 = document.createElement('td');
    tdEl44.textContent = 'Treatment procedures that require modern methods, such as robotic surgery, laser treatment, stem cell therapy, etc., are known as Advanced medical treatments.';
    trEl16.append(tdEl44);

    const tdEl45 = document.createElement('td');
    tdEl45.textContent = 'Covered';
    trEl16.append(tdEl45);
    tbodyEl.append(trEl16);

    const trEl17 = document.createElement('tr');

    const tdEl46 = document.createElement('td');
    tdEl46.textContent = 'Critical illness';
    trEl17.append(tdEl46);

    const tdEl47 = document.createElement('td');
    tdEl47.textContent = 'According to IRDAI, illnesses such as Cancer, Pulmonary Thromboembolism, Stroke, Angioplasty, etc. are considered critical illnesses.';
    trEl17.append(tdEl47);

    const tdEl48 = document.createElement('td');
    tdEl48.textContent = 'Special plans offering coverage for 32 illnesses';
    trEl17.append(tdEl48);
    tbodyEl.append(trEl17);
    tableEl.append(tbodyEl);
    divEl27.append(tableEl);
    divEl3.append(divEl27);

    const h2El5 = document.createElement('h2');
    h2El5.textContent = 'Comparing Our Health Insurance Plan with Other Insurers';
    divEl3.append(h2El5);

    const pEl13 = document.createElement('p');
    pEl13.textContent = 'There is no universal health insurance policy that suits everyone. Different plans have varying benefits, coverage, and premiums. Hence, comparing plans to choose the one that meets your needs is important. Take a look at how our plan compares to other options in the market:';
    divEl3.append(pEl13);

    const divEl28 = document.createElement('div');
    divEl28.setAttribute('class', 'custom_table');

    const tableEl2 = document.createElement('table');
    tableEl2.setAttribute('border', '1');
    tableEl2.setAttribute('cellpadding', '1');
    tableEl2.setAttribute('cellspacing', '1');

    const tbodyEl2 = document.createElement('tbody');

    const trEl18 = document.createElement('tr');

    const thEl4 = document.createElement('th');
    thEl4.textContent = 'Benefits';
    trEl18.append(thEl4);

    const thEl5 = document.createElement('th');
    thEl5.textContent = 'Other Health Insurers Plans';
    trEl18.append(thEl5);

    const thEl6 = document.createElement('th');
    thEl6.textContent = 'Care\'s Ultimate Care Plan';
    trEl18.append(thEl6);
    tbodyEl2.append(trEl18);

    const trEl19 = document.createElement('tr');

    const tdEl49 = document.createElement('td');
    tdEl49.textContent = 'MoneyBack Benefit';
    trEl19.append(tdEl49);

    const tdEl50 = document.createElement('td');
    tdEl50.textContent = 'Although loyalty bonuses are offered for claim-free years, premiums are not returned.';
    trEl19.append(tdEl50);

    const tdEl51 = document.createElement('td');
    tdEl51.textContent = 'Ultimate Care returns the first year’s base premium upon every block of 5 claim-free years.';
    trEl19.append(tdEl51);
    tbodyEl2.append(trEl19);

    const trEl20 = document.createElement('tr');

    const tdEl52 = document.createElement('td');
    tdEl52.textContent = 'Bonus Limit';
    trEl20.append(tdEl52);

    const tdEl53 = document.createElement('td');
    tdEl53.textContent = 'Other health insurance has a set limit on the bonus amount offered.';
    trEl20.append(tdEl53);

    const tdEl54 = document.createElement('td');
    tdEl54.textContent = 'The infinity bonus boosts your coverage up to 100% of the sum insured every year upon consecutive renewals.';
    trEl20.append(tdEl54);
    tbodyEl2.append(trEl20);

    const trEl21 = document.createElement('tr');

    const tdEl55 = document.createElement('td');
    tdEl55.textContent = 'Room rent limits';
    trEl21.append(tdEl55);

    const tdEl56 = document.createElement('td');
    tdEl56.textContent = 'Other health insurance plans may have sub-limits on room rent.';
    trEl21.append(tdEl56);

    const tdEl57 = document.createElement('td');
    tdEl57.textContent = 'No Room rent limit';
    trEl21.append(tdEl57);
    tbodyEl2.append(trEl21);

    const trEl22 = document.createElement('tr');

    const tdEl58 = document.createElement('td');
    tdEl58.textContent = 'Co-pay';
    trEl22.append(tdEl58);

    const tdEl59 = document.createElement('td');
    tdEl59.textContent = 'May have a fixed co-pay';
    trEl22.append(tdEl59);

    const tdEl60 = document.createElement('td');
    tdEl60.textContent = 'No Co-pay';
    trEl22.append(tdEl60);
    tbodyEl2.append(trEl22);
    tableEl2.append(tbodyEl2);
    divEl28.append(tableEl2);
    divEl3.append(divEl28);

    const divEl32 = document.createElement('div');
    divEl32.setAttribute('class', 'category_cms');

    const h2El7 = document.createElement('h2');
    h2El7.setAttribute('id', 'benefits');
    h2El7.textContent = 'Benefits of Health Insurance';
    divEl32.append(h2El7);

    const divEl33 = document.createElement('div');
    divEl33.setAttribute('class', 'right_image_section');

    const divEl34 = document.createElement('div');
    divEl34.setAttribute('class', 'below_cont_detail video_content');

    const pEl16 = document.createElement('p');

    const aEl8 = document.createElement('a');
    aEl8.setAttribute('href', 'https://www.business-standard.com/economy/news/wholesale-prices-rise-in-march-by-0-53-from-a-year-shows-govt-data-124041500267_1.html');
    aEl8.setAttribute('rel', 'nofollow');
    aEl8.setAttribute('target', '_blank');
    aEl8.textContent = 'Business Standard';
    pEl16.append(aEl8);
    divEl34.append(pEl16);

    const ulEl10 = document.createElement('ul');

    const liEl33 = document.createElement('li');
    liEl33.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';
    const strongEl5 = document.createElement('strong');
    strongEl5.textContent = 'Financial Safety:';
    liEl33.prepend(strongEl5);
    ulEl10.append(liEl33);

    const liEl34 = document.createElement('li');
    liEl34.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';
    const strongEl6 = document.createElement('strong');
    strongEl6.textContent = 'Coverage for Critical Illnesses:';
    liEl34.prepend(strongEl6);
    ulEl10.append(liEl34);

    const liEl35 = document.createElement('li');
    liEl35.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';
    const strongEl7 = document.createElement('strong');
    strongEl7.textContent = 'Protection above Corporate Health Insurance:';
    liEl35.prepend(strongEl7);
    ulEl10.append(liEl35);

    const liEl36 = document.createElement('li');
    liEl36.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';
    const strongEl8 = document.createElement('strong');
    strongEl8.textContent = 'Cashless Claim Benefit:';
    liEl36.prepend(strongEl8);
    ulEl10.append(liEl36);

    const liEl37 = document.createElement('li');
    liEl37.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';
    const strongEl9 = document.createElement('strong');
    strongEl9.textContent = 'Tax Benefits under Section 80D:';
    liEl37.prepend(strongEl9);
    ulEl10.append(liEl37);

    const liEl38 = document.createElement('li');
    liEl38.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.';

    const strongEl10 = document.createElement('strong');
    strongEl10.textContent = 'Wellness & Preventive Care:';
    liEl38.prepend(strongEl10);
    ulEl10.append(liEl38);
    divEl34.append(ulEl10);
    divEl33.append(divEl34);

    const divEl35 = document.createElement('div');
    divEl35.setAttribute('class', 'video_frame lozad');
    divEl35.setAttribute('data-id', 'video1');
    divEl35.setAttribute('data-loaded', 'true');
    divEl35.setAttribute('data-video', 'https://www.youtube.com/embed/IILzn8LTjr8?rel=0&autoplay=1&controls=0');

    const imgEl8 = document.createElement('img');
    imgEl8.setAttribute('alt', 'Video Frame');
    imgEl8.setAttribute('class', 'lozad');
    imgEl8.setAttribute('data-loaded', 'true');
    imgEl8.setAttribute('data-src', 'https://cms.careinsurance.com/cms/public/assets/media/benefits-of-health-insurance.png');
    imgEl8.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/benefits-of-health-insurance.png');
    imgEl8.setAttribute('title', 'What is health insurance');
    divEl35.append(imgEl8);
    divEl33.append(divEl35);
    divEl32.append(divEl33);
    divEl3.append(divEl32);

    const h2El8 = document.createElement('h2');
    h2El8.textContent = 'Common Health Insurance Terms You Should Know';
    divEl3.append(h2El8);

    const pEl17 = document.createElement('p');
    pEl17.textContent = 'Understanding the terms and conditions of your health insurance is crucial for policyholders to avoid last-minute hassles. Read out these commonly used health insurance terms to make reading the policy documents easier:';
    divEl3.append(pEl17);

    const ulEl11 = document.createElement('ul');

    const liEl39 = document.createElement('li');
    liEl39.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl11 = document.createElement('strong');
    strongEl11.textContent = 'Co-payment:';
    liEl39.prepend(strongEl11);
    ulEl11.append(liEl39);

    const liEl40 = document.createElement('li');
    liEl40.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl12 = document.createElement('strong');
    strongEl12.textContent = 'Deductible:';
    liEl40.prepend(strongEl12);
    ulEl11.append(liEl40);

    const liEl41 = document.createElement('li');
    liEl41.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl13 = document.createElement('strong');
    strongEl13.textContent = 'Sum insured:';
    liEl41.prepend(strongEl13);
    ulEl11.append(liEl41);

    const liEl42 = document.createElement('li');
    liEl42.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl14 = document.createElement('strong');
    strongEl14.textContent = 'Top-up plans:';
    liEl42.prepend(strongEl14);
    ulEl11.append(liEl42);

    const liEl43 = document.createElement('li');
    liEl43.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl15 = document.createElement('strong');
    strongEl15.textContent = 'Pre-existing Diseases:';
    liEl43.prepend(strongEl15);
    ulEl11.append(liEl43);

    const liEl44 = document.createElement('li');
    liEl44.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl16 = document.createElement('strong');
    strongEl16.textContent = 'Claim Intimation:';
    liEl44.prepend(strongEl16);
    ulEl11.append(liEl44);

    const liEl45 = document.createElement('li');
    liEl45.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl17 = document.createElement('strong');
    strongEl17.textContent = 'Cashless Hospitalisation Claim:';
    liEl45.prepend(strongEl17);
    ulEl11.append(liEl45);

    const liEl46 = document.createElement('li');
    liEl46.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl18 = document.createElement('strong');
    strongEl18.textContent = 'Reimbursement Claim:';
    liEl46.prepend(strongEl18);
    ulEl11.append(liEl46);

    const liEl47 = document.createElement('li');
    liEl47.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl19 = document.createElement('strong');
    strongEl19.textContent = 'No Claim Bonus:';
    liEl47.prepend(strongEl19);
    ulEl11.append(liEl47);

    const liEl48 = document.createElement('li');
    liEl48.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl20 = document.createElement('strong');
    strongEl20.textContent = 'Sublimits:';
    liEl48.prepend(strongEl20);
    ulEl11.append(liEl48);

    const liEl49 = document.createElement('li');
    liEl49.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'


    const strongEl21 = document.createElement('strong');
    strongEl21.textContent = 'Room Type:';
    liEl49.prepend(strongEl21);
    ulEl11.append(liEl49);

    const liEl50 = document.createElement('li');
    liEl50.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl22 = document.createElement('strong');
    strongEl22.textContent = 'Room Rent Proportionate Charge:';
    liEl50.prepend(strongEl22);
    ulEl11.append(liEl50);

    const liEl51 = document.createElement('li');
    liEl51.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'
    const strongEl23 = document.createElement('strong');
    strongEl23.textContent = 'Smart Select Hospitals:';
    liEl51.prepend(strongEl23);
    ulEl11.append(liEl51);

    const liEl52 = document.createElement('li');
    liEl52.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'


    const strongEl24 = document.createElement('strong');
    strongEl24.textContent = 'Use of Preventive Care:';
    liEl52.prepend(strongEl24);
    ulEl11.append(liEl52);

    const liEl53 = document.createElement('li');
    liEl53.textContent = 'Health Insurance from Care protects you against pre- and post-hospitalisation expenses, ambulance charges, day-care procedures, domiciliary care expenses, etc.'


    const strongEl25 = document.createElement('strong');
    strongEl25.textContent = 'Alternate Treatments in Health Insurance:';
    liEl53.prepend(strongEl25);
    ulEl11.append(liEl53);
    divEl3.append(ulEl11);

    const sectionEl9 = document.createElement('section');
    sectionEl9.setAttribute('class', 'toggle_section');

    const h2El9 = document.createElement('h2');
    h2El9.setAttribute('id', 'coverage');
    h2El9.textContent = 'Care Health Insurance- At a Glance';
    sectionEl9.append(h2El9);

    const pEl18 = document.createElement('p');

    const aEl9 = document.createElement('a');
    aEl9.setAttribute('href', 'https://irdai.gov.in/web/guest/document-detail?documentId=394776');
    aEl9.setAttribute('target', '_blank');
    aEl9.setAttribute('rel', 'nofollow');
    aEl9.textContent = 'Insurance Regulatory and Development Authority of India (IRDAI)';
    pEl18.append(aEl9);
    sectionEl9.append(pEl18);

    const ulEl12 = document.createElement('ul');
    ulEl12.setAttribute('class', 'toggle_section_tabs');

    const liEl54 = document.createElement('li');
    liEl54.setAttribute('class', 'active');
    liEl54.textContent = 'Coverage';
    ulEl12.append(liEl54);

    const liEl55 = document.createElement('li');
    liEl55.textContent = 'Add-ons';
    ulEl12.append(liEl55);

    const liEl56 = document.createElement('li');
    liEl56.textContent = 'Exclusions';
    ulEl12.append(liEl56);
    sectionEl9.append(ulEl12);

    const articleEl15 = document.createElement('article');
    articleEl15.setAttribute('class', 'toggle_section_tab_content active');

    const ulEl13 = document.createElement('ul');
    const liEl58 = document.createElement('li');
    liEl58.textContent = 'Covers expenses incurred before hospitalization, such as consultations and diagnostics.';
    const bEl10 = document.createElement('b');
    bEl10.textContent = 'Pre-Hospitalisation Medical Expenses:';
    liEl58.prepend(bEl10);
    ulEl13.append(liEl58);

    const liEl59 = document.createElement('li');
    liEl59.textContent = 'Covers follow-up treatments and medications after discharge.';
    const bEl11 = document.createElement('b');
    bEl11.textContent = 'Post-Hospitalisation Medical Expenses:';
    liEl59.prepend(bEl11);
    ulEl13.append(liEl59);

    const liEl60 = document.createElement('li');
    liEl60.textContent = 'Provides coverage for ambulance charges during emergencies.';
    const bEl12 = document.createElement('b');
    bEl12.textContent = 'Ambulance Cover:';
    liEl60.prepend(bEl12);
    ulEl13.append(liEl60);

    const liEl61 = document.createElement('li');
    liEl61.textContent = 'Includes treatments like robotic surgery or stem cell therapy.';
    const bEl13 = document.createElement('b');
    bEl13.textContent = 'Advanced Medical Treatments:';
    liEl61.prepend(bEl13);
    ulEl13.append(liEl61);

    const liEl62 = document.createElement('li');
    liEl62.textContent = 'Covers treatment taken at home under medical supervision when hospitalisation is not possible.';
    const bEl14 = document.createElement('b');
    bEl14.textContent = 'Domiciliary Hospitalisation:';
    liEl62.prepend(bEl14);
    ulEl13.append(liEl62);

    const liEl63 = document.createElement('li');
    liEl63.textContent = 'Coverage for Ayurveda, Yoga, Unani, Siddha, and Homeopathy treatments.';
    const bEl15 = document.createElement('b');
    bEl15.textContent = 'AYUSH Treatments:';
    liEl63.prepend(bEl15);
    ulEl13.append(liEl63);


    const aEl10 = document.createElement('a');
    aEl10.setAttribute('href', 'https://timesofindia.indiatimes.com/blogs/voices/indias-alternative-medicine-industry-grows-boosted-by-the-covid-19-pandemic/');
    aEl10.setAttribute('rel', 'noreferrer noopener nofollow');
    aEl10.setAttribute('target', '_blank');
    aEl10.textContent = 'CAGR growth rate of 8.6% between 2022-27';
    liEl63.append(aEl10);
    ulEl13.append(liEl63);

    const liEl64 = document.createElement('li');

    const bEl16 = document.createElement('b');
    bEl16.textContent = 'Premium Payback:';
    liEl64.append(bEl16);
    ulEl13.append(liEl64);

    const liEl65 = document.createElement('li');

    const bEl17 = document.createElement('b');
    bEl17.textContent = 'Coronavirus Treatment:';
    liEl65.append(bEl17);
    ulEl13.append(liEl65);
    articleEl15.append(ulEl13);
    sectionEl9.append(articleEl15);

    const articleEl16 = document.createElement('article');
    articleEl16.setAttribute('class', 'toggle_section_tab_content');

    const ulEl14 = document.createElement('ul');

    const pEl19 = document.createElement('p');
    pEl19.textContent = 'Health Insurance plans from Care Health Insurance come with different add-on benefits that help you customise premiums and/or expand your coverage. Listed below are a few add-ons that our customers love the most.';
    ulEl14.append(pEl19);

    const liEl66 = document.createElement('li');

    const bEl18 = document.createElement('b');
    bEl18.textContent = 'Care Sheild:';
    liEl66.append(bEl18);

    const ulEl15 = document.createElement('ul');

    const liEl67 = document.createElement('li');

    const bEl19 = document.createElement('b');
    bEl19.textContent = 'Claim Shield:';
    liEl67.append(bEl19);
    ulEl15.append(liEl67);

    const liEl68 = document.createElement('li');

    const bEl20 = document.createElement('b');
    bEl20.textContent = 'No Claim Bonus Sheild:';
    liEl68.append(bEl20);
    ulEl15.append(liEl68);

    const liEl69 = document.createElement('li');

    const bEl21 = document.createElement('b');
    bEl21.textContent = 'Inflation Sheild:';
    liEl69.append(bEl21);
    ulEl15.append(liEl69);
    liEl66.append(ulEl15);
    ulEl14.append(liEl66);

    const liEl70 = document.createElement('li');

    const bEl22 = document.createElement('b');
    bEl22.textContent = 'Annual health check-up:';
    liEl70.append(bEl22);
    ulEl14.append(liEl70);

    const liEl71 = document.createElement('li');

    const bEl23 = document.createElement('b');
    bEl23.textContent = 'Reduction in the PED Waiting Period:';
    liEl71.append(bEl23);
    ulEl14.append(liEl71);

    const liEl72 = document.createElement('li');

    const bEl24 = document.createElement('b');
    bEl24.textContent = 'Infinity Bonus:';
    liEl72.append(bEl24);
    ulEl14.append(liEl72);

    const liEl73 = document.createElement('li');

    const bEl25 = document.createElement('b');
    bEl25.textContent = 'Care OPD:';
    liEl73.append(bEl25);
    ulEl14.append(liEl73);

    const liEl74 = document.createElement('li');

    const bEl26 = document.createElement('b');
    bEl26.textContent = 'Air-ambulance cover:';
    liEl74.append(bEl26);
    ulEl14.append(liEl74);

    const liEl75 = document.createElement('li');

    const bEl27 = document.createElement('b');
    bEl27.textContent = 'Co-payment waiver for senior citizens:';
    liEl75.append(bEl27);
    ulEl14.append(liEl75);

    const liEl76 = document.createElement('li');

    const bEl28 = document.createElement('b');
    bEl28.textContent = 'Smart Select:';
    liEl76.append(bEl28);
    ulEl14.append(liEl76);
    articleEl16.append(ulEl14);
    sectionEl9.append(articleEl16);

    const articleEl17 = document.createElement('article');
    articleEl17.setAttribute('class', 'toggle_section_tab_content');

    const pEl20 = document.createElement('p');
    pEl20.textContent = 'At Care Health Insurance, we want all our customers to be well-informed before purchasing a health insurance policy. Therefore, we urge you to review the policy documents within the free lookup period to avoid last-minute rejections of claims. Mentioned below are the common exclusions of a health insurance plan that you opt from Care Health Insurance';
    articleEl17.append(pEl20);

    const ulEl16 = document.createElement('ul');

    const liEl77 = document.createElement('li');
    liEl77.textContent = 'We do not offer coverage for self-inflicted injuries resulting from suicide or attempted suicide.';
    ulEl16.append(liEl77);

    const liEl78 = document.createElement('li');
    liEl78.textContent = 'Expenses incurred due to diseases, surgeries, or medical events(except accidents), occurring within 30 days of the policy start date are not covered.';
    ulEl16.append(liEl78);

    const liEl79 = document.createElement('li');
    liEl79.textContent = 'Expenses arising out of or attributable to alcohol or drug use/misuse/abuse are not covered.';
    ulEl16.append(liEl79);

    const liEl80 = document.createElement('li');
    liEl80.textContent = 'Treatment arising from or traceable to pregnancy and childbirth, miscarriage, abortion, and its consequences.';
    ulEl16.append(liEl80);

    const liEl81 = document.createElement('li');
    liEl81.textContent = 'Tests and treatment relating to infertility and in vitro fertilisation.';
    ulEl16.append(liEl81);

    const liEl82 = document.createElement('li');
    liEl82.textContent = 'Cosmetic or aesthetic treatments that do not fall under the \'medically necessary\' category.';
    ulEl16.append(liEl82);

    const liEl83 = document.createElement('li');
    liEl83.textContent = 'War, riot, strike, nuclear weapons induced Hospitalisation';
    ulEl16.append(liEl83);
    articleEl17.append(ulEl16);
    sectionEl9.append(articleEl17);
    divEl3.append(sectionEl9);



    const sectionEl10 = document.createElement('section');
    sectionEl10.setAttribute('class', 'claim_tab_toggle_section');

    const h2El10 = document.createElement('h2');
    h2El10.setAttribute('id', 'claim-process');
    h2El10.textContent = 'How to File a Claim under Health Insurance Plans';
    sectionEl10.append(h2El10);

    const ulEl17 = document.createElement('ul');
    ulEl17.setAttribute('class', 'claim_tab_toggle_section_tabs');

    const liEl84 = document.createElement('li');
    liEl84.setAttribute('class', 'active');
    liEl84.textContent = 'Cashless';
    ulEl17.append(liEl84);

    const liEl85 = document.createElement('li');
    liEl85.textContent = 'Reimbursement';
    ulEl17.append(liEl85);
    sectionEl10.append(ulEl17);

    const articleEl18 = document.createElement('article');
    articleEl18.setAttribute('class', 'claim_tab_toggle_section_tab_content active');

    const divEl36 = document.createElement('div');
    divEl36.setAttribute('class', 'claim_tab_section');

    const asideEl2 = document.createElement('aside');

    const imgEl9 = document.createElement('img');
    imgEl9.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-locate-a-network-hospital-and-inform-us.svg');
    imgEl9.setAttribute('alt', '');
    imgEl9.setAttribute('width', '33');
    imgEl9.setAttribute('height', '33');
    asideEl2.append(imgEl9);

    const h3El5 = document.createElement('h3');
    h3El5.textContent = 'Locate a Network Hospital & Inform Us';
    asideEl2.append(h3El5);

    const pEl21 = document.createElement('p');
    pEl21.textContent = 'In case of planned hospitalisation, inform us at least 48 hours prior. In emergencies, notify us within 24 hours of hospitalisation. Find a network hospital near you and visit the TPA desk.';
    asideEl2.append(pEl21);
    divEl36.append(asideEl2);

    const asideEl3 = document.createElement('aside');

    const imgEl10 = document.createElement('img');
    imgEl10.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-submit-pre-authorisation-request.svg');
    imgEl10.setAttribute('alt', '');
    imgEl10.setAttribute('width', '33');
    imgEl10.setAttribute('height', '33');
    asideEl3.append(imgEl10);

    const h3El6 = document.createElement('h3');
    h3El6.textContent = 'Submit Pre-Authorisation Request';
    asideEl3.append(h3El6);

    const pEl22 = document.createElement('p');
    pEl22.textContent = 'Duly complete and submit the pre-authorisation form at the hospital TPA desk. You will be notified of the claim acceptance.';
    asideEl3.append(pEl22);
    divEl36.append(asideEl3);

    const asideEl4 = document.createElement('aside');

    const imgEl11 = document.createElement('img');
    imgEl11.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-get-treated-and-discharged.svg');
    imgEl11.setAttribute('alt', '');
    imgEl11.setAttribute('width', '33');
    imgEl11.setAttribute('height', '33');
    asideEl4.append(imgEl11);

    const h3El7 = document.createElement('h3');
    h3El7.textContent = 'Get Treated and Discharged';
    asideEl4.append(h3El7);

    const pEl23 = document.createElement('p');
    pEl23.textContent = 'Now, focus on your treatment without worrying about the hefty medical bills! The insurer will directly settle the claims once you get discharged.';
    asideEl4.append(pEl23);
    divEl36.append(asideEl4);
    articleEl18.append(divEl36);
    sectionEl10.append(articleEl18);

    const articleEl19 = document.createElement('article');
    articleEl19.setAttribute('class', 'claim_tab_toggle_section_tab_content');

    const divEl37 = document.createElement('div');
    divEl37.setAttribute('class', 'claim_tab_section');

    const asideEl5 = document.createElement('aside');

    const imgEl12 = document.createElement('img');
    imgEl12.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-intimate-and-get-treated.svg');
    imgEl12.setAttribute('alt', '');
    imgEl12.setAttribute('width', '33');
    imgEl12.setAttribute('height', '33');
    asideEl5.append(imgEl12);

    const h3El8 = document.createElement('h3');
    h3El8.textContent = 'Intimate and get Treated';
    asideEl5.append(h3El8);

    const pEl24 = document.createElement('p');
    pEl24.textContent = 'Please inform us at least 48 hours before a planned hospitalisation. In an emergency, please inform us within 24 hours of hospitalisation. Remember to keep your original bills safe.';
    asideEl5.append(pEl24);
    divEl37.append(asideEl5);

    const asideEl6 = document.createElement('aside');

    const imgEl13 = document.createElement('img');
    imgEl13.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-submit-claim.svg');
    imgEl13.setAttribute('alt', '');
    imgEl13.setAttribute('width', '33');
    imgEl13.setAttribute('height', '33');
    asideEl6.append(imgEl13);

    const h3El9 = document.createElement('h3');
    h3El9.textContent = 'Submit Claim';
    asideEl6.append(h3El9);

    const pEl25 = document.createElement('p');
    pEl25.textContent = 'After discharge, fill out the claim form and submit all the necessary documentation.';
    asideEl6.append(pEl25);
    divEl37.append(asideEl6);

    const asideEl7 = document.createElement('aside');

    const imgEl14 = document.createElement('img');
    imgEl14.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-receive-reimbursement.svg');
    imgEl14.setAttribute('alt', '');
    imgEl14.setAttribute('width', '33');
    imgEl14.setAttribute('height', '33');
    asideEl7.append(imgEl14);

    const h3El10 = document.createElement('h3');
    h3El10.textContent = 'Receive Reimbursement';
    asideEl7.append(h3El10);

    const pEl26 = document.createElement('p');
    pEl26.textContent = 'Your documents will then be verified. Once all the details have been verified, the claim amount will be transferred to your bank account.';
    asideEl7.append(pEl26);
    divEl37.append(asideEl7);
    articleEl19.append(divEl37);
    sectionEl10.append(articleEl19);
    divEl3.append(sectionEl10);

    const h2El11 = document.createElement('h2');
    h2El11.setAttribute('id', 'how-health-insurance-works');
    h2El11.textContent = 'How Do Health Insurance Plans Work?';
    divEl3.append(h2El11);

    const ulEl18 = document.createElement('ul');
    const liEl86 = document.createElement('li');
    liEl86.textContent = 'Research and compare policies based on your healthcare needs.';
    const strongEl26 = document.createElement('strong');
    strongEl26.textContent = 'Shortlist a health insurance plan:';
    liEl86.prepend(strongEl26);
    ulEl18.append(liEl86);

    const liEl87 = document.createElement('li');
    liEl87.textContent = 'Pay premiums on time to keep your policy active and avoid lapses.';
    const strongEl27 = document.createElement('strong');
    strongEl27.textContent = 'Make regular premium payments:';
    liEl87.prepend(strongEl27);
    ulEl18.append(liEl87);

    const liEl88 = document.createElement('li');
    liEl88.textContent = 'Visit a network hospital or clinic for necessary treatment.';
    const strongEl28 = document.createElement('strong');
    strongEl28.textContent = 'Seek medical treatment:';
    liEl88.prepend(strongEl28);
    ulEl18.append(liEl88);

    const liEl89 = document.createElement('li');
    liEl89.textContent = 'Inform the insurer and submit the required documents for your claim.';
    const strongEl29 = document.createElement('strong');
    strongEl29.textContent = 'File a claim:';
    liEl89.prepend(strongEl29);
    ulEl18.append(liEl89);

    const liEl90 = document.createElement('li');
    liEl90.textContent = 'The insurer evaluates your claim details before approval or rejection.';
    const strongEl30 = document.createElement('strong');
    strongEl30.textContent = 'Claim assessment:';
    liEl90.prepend(strongEl30);
    ulEl18.append(liEl90);

    divEl3.append(ulEl18);

    const pEl27 = document.createElement('p');
    pEl27.textContent = 'Let us understand the entire workings of health insurance with an example:';
    divEl3.append(pEl27);

    const pEl28 = document.createElement('p');
    pEl28.textContent = 'Suvidha purchased health insurance with a coverage of ₹10 Lakh for her family. A few months later, her mother got sick and had to see a doctor. Unfortunately, she had to get hospitalised as her condition worsened.';
    divEl3.append(pEl28);

    const pEl29 = document.createElement('p');
    pEl29.textContent = 'Knowing that her mother was covered under her health insurance policy, Suvidha searched for a nearby network hospital and admitted her for further treatment. She then informed her insurer about the emergency hospitalisation and completed the formalities.';
    divEl3.append(pEl29);

    const pEl30 = document.createElement('p');
    pEl30.textContent = 'Upon discharge, the hospital directly settled the bills with the insurance company, while she paid only for the non-payable items.';
    divEl3.append(pEl30);

    const pEl31 = document.createElement('p');
    pEl31.textContent = 'Further, she filed a reimbursement claim for the pre-and post-hospitalisation expenses. Suvidha filled out the reimbursement form and attested it with all the bills and reports related to the hospitalisation. Her insurer verified the documents and paid the claim amount to her bank account.';
    divEl3.append(pEl31);



    const divEl39 = document.createElement('div');
    divEl39.setAttribute('class', 'custom_block');

    const sectionEl11 = document.createElement('section');

    const h2El12 = document.createElement('h2');
    h2El12.setAttribute('id', 'which-plan-you-should-buy');
    h2El12.textContent = 'Which Type of Health Insurance Should You Buy?';
    sectionEl11.append(h2El12);

    const pEl32 = document.createElement('p');
    pEl32.textContent = 'You should determine the best health insurance policyideal health plan for yourself and your family by evaluating every member\'s healthcare needs, age, and current health status. To help you select the right medical insurance for every member, we have created a scenario-based differentiation covering the different needs of individuals and families. Find out which scenario is most relatable to you and secure yourself with our policy offerings-';
    sectionEl11.append(pEl32);

    const divEl40 = document.createElement('div');
    divEl40.setAttribute('class', 'plan_flex');

    const divEl41 = document.createElement('div');
    divEl41.setAttribute('class', 'card_item');

    const divEl42 = document.createElement('div');
    divEl42.setAttribute('class', 'bg_color');

    const imgEl17 = document.createElement('img');
    imgEl17.setAttribute('alt', 'Health Insurance for Family');
    imgEl17.setAttribute('class', 'plan_img');
    imgEl17.setAttribute('height', '200');
    imgEl17.setAttribute('loading', 'lazy');
    imgEl17.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/family-floater-insurance-policy.webp');
    imgEl17.setAttribute('title', 'Family Health Insurance');
    imgEl17.setAttribute('width', '300');
    divEl42.append(imgEl17);
    divEl41.append(divEl42);

    const h3El11 = document.createElement('h3');
    h3El11.setAttribute('class', 'plan_name');
    h3El11.textContent = 'If You Have Dependent Family Members';
    divEl41.append(h3El11);

    const pEl33 = document.createElement('p');
    pEl33.setAttribute('class', 'card_plan_detail');
    pEl33.textContent = 'Cover all your family’s medical needs under one plan. These plans have a single affordable premium, annual health check-ups, and customisable benefits for every member. We offer sum insured options of up to ₹ 6 crore';
    divEl41.append(pEl33);

    const aEl11 = document.createElement('a');
    aEl11.setAttribute('class', 'know_more_btn');
    aEl11.setAttribute('href', 'https://www.careinsurance.com/health-insurance/family-health-insurance');
    aEl11.textContent = 'Family Floater Insurance Policy';
    divEl41.append(aEl11);
    divEl40.append(divEl41);

    const divEl43 = document.createElement('div');
    divEl43.setAttribute('class', 'card_item');

    const divEl44 = document.createElement('div');
    divEl44.setAttribute('class', 'bg_color');

    const imgEl18 = document.createElement('img');
    imgEl18.setAttribute('alt', 'Youth Health Insurance');
    imgEl18.setAttribute('class', 'plan_img');
    imgEl18.setAttribute('height', '200');
    imgEl18.setAttribute('loading', 'lazy');
    imgEl18.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/youth-health-insurance-plan.webp');
    imgEl18.setAttribute('title', 'Youth Health Insurance');
    imgEl18.setAttribute('width', '300');
    divEl44.append(imgEl18);
    divEl43.append(divEl44);

    const h3El12 = document.createElement('h3');
    h3El12.setAttribute('class', 'plan_name');
    h3El12.textContent = 'If You are Young and Need Complete';
    divEl43.append(h3El12);

    const pEl34 = document.createElement('p');
    pEl34.setAttribute('class', 'card_plan_detail');
    pEl34.textContent = 'This inflation-proof plan offers comprehensive financial and healthcare security for young adults. This plan has several benefits such as personal accident coverage, discounts, and no co-payment. These plans are available on individual and family floater basis';
    divEl43.append(pEl34);

    const aEl12 = document.createElement('a');
    aEl12.setAttribute('class', 'know_more_btn');
    aEl12.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-at-an-early-age');
    aEl12.textContent = 'Youth Health Insurance Plan';
    divEl43.append(aEl12);
    divEl40.append(divEl43);

    const divEl45 = document.createElement('div');
    divEl45.setAttribute('class', 'card_item');

    const divEl46 = document.createElement('div');
    divEl46.setAttribute('class', 'bg_color');

    const imgEl19 = document.createElement('img');
    imgEl19.setAttribute('alt', 'Senior Citizen Health Insurance Plan');
    imgEl19.setAttribute('class', 'plan_img');
    imgEl19.setAttribute('height', '200');
    imgEl19.setAttribute('loading', 'lazy');
    imgEl19.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/senior-citizen-health-insurance-plan.webp');
    imgEl19.setAttribute('title', 'Senior Citizen Health Insurance Plan');
    imgEl19.setAttribute('width', '300');
    divEl46.append(imgEl19);
    divEl45.append(divEl46);

    const h3El13 = document.createElement('h3');
    h3El13.setAttribute('class', 'plan_name');
    h3El13.textContent = 'If You Have Elderly Parents to Look After';
    divEl45.append(h3El13);

    const pEl35 = document.createElement('p');
    pEl35.setAttribute('class', 'card_plan_detail');
    pEl35.textContent = 'Senior citizen health insurance plans offer complete coverage for elders, including automatic recharge, annual health check-ups, and tax benefits. Further, this policy does not require pre-policy medical check-ups.';
    divEl45.append(pEl35);

    const aEl13 = document.createElement('a');
    aEl13.setAttribute('class', 'know_more_btn');
    aEl13.setAttribute('href', 'https://www.careinsurance.com/health-insurance/health-insurance-for-senior-citizens');
    aEl13.textContent = 'Senior Citizen Health Insurance Plan';
    divEl45.append(aEl13);
    divEl40.append(divEl45);

    const divEl47 = document.createElement('div');
    divEl47.setAttribute('class', 'card_item');

    const divEl48 = document.createElement('div');
    divEl48.setAttribute('class', 'bg_color');

    const imgEl20 = document.createElement('img');
    imgEl20.setAttribute('alt', 'Critical Illness Insurance');
    imgEl20.setAttribute('class', 'plan_img');
    imgEl20.setAttribute('height', '200');
    imgEl20.setAttribute('loading', 'lazy');
    imgEl20.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/critical-illness-insurance.webp');
    imgEl20.setAttribute('title', 'Critical Illness Insurance');
    imgEl20.setAttribute('width', '300');
    divEl48.append(imgEl20);
    divEl47.append(divEl48);

    const h3El14 = document.createElement('h3');
    h3El14.setAttribute('class', 'plan_name');
    h3El14.textContent = 'If You Need Protection Against Critica';
    divEl47.append(h3El14);

    const pEl36 = document.createElement('p');
    pEl36.setAttribute('class', 'card_plan_detail');
    pEl36.textContent = 'Our Critical Illness Mediclaim provides financial protection against the medical expenses of 32 critical illnesses, including cancer, stroke, and paralysis. It offers low premiums, easy EMI options, quick recovery counselling, and coverage for cancer at all stages.';
    divEl47.append(pEl36);

    const aEl14 = document.createElement('a');
    aEl14.setAttribute('class', 'know_more_btn');
    aEl14.setAttribute('href', 'https://www.careinsurance.com/health-insurance/critical-illness-insurance');
    aEl14.textContent = 'Critical Illness Insurance';
    divEl47.append(aEl14);
    divEl40.append(divEl47);
    sectionEl11.append(divEl40);
    divEl39.append(sectionEl11);
    divEl3.append(divEl39);

    const h2El13 = document.createElement('h2');
    h2El13.setAttribute('id', 'eligibility');
    h2El13.textContent = 'Eligibility Criteria and Health Insurance Policy Details';
    divEl3.append(h2El13);

    const pEl37 = document.createElement('p');
    pEl37.textContent = 'While most of our health insurance plans have standard eligibility criteria, you can check the desired policy for specific conditions, like co-payments, waiting periods, etc. Tabulated below are the eligibility criteria to purchase health insurance plans from Care Health Insurance:';
    divEl3.append(pEl37);

    const divEl49 = document.createElement('div');
    divEl49.setAttribute('class', 'custom_table');

    const tableEl3 = document.createElement('table');
    tableEl3.setAttribute('border', '1');
    tableEl3.setAttribute('cellpadding', '8');
    tableEl3.setAttribute('cellspacing', '1');

    const tbodyEl3 = document.createElement('tbody');

    const trEl23 = document.createElement('tr');

    const tdEl61 = document.createElement('td');

    const strongEl31 = document.createElement('strong');
    strongEl31.textContent = 'Minimum Entry Age';
    tdEl61.append(strongEl31);
    trEl23.append(tdEl61);

    const tdEl62 = document.createElement('td');
    tdEl62.textContent = 'Individual- 5 years | Floater- 91 days with at least 1 insured person of age 18 years or above';
    trEl23.append(tdEl62);
    tbodyEl3.append(trEl23);

    const trEl24 = document.createElement('tr');

    const tdEl63 = document.createElement('td');

    const strongEl32 = document.createElement('strong');
    strongEl32.textContent = 'Maximum Exit Age';
    tdEl63.append(strongEl32);
    trEl24.append(tdEl63);

    const tdEl64 = document.createElement('td');
    tdEl64.textContent = 'Lifelong for Adults';
    trEl24.append(tdEl64);
    tbodyEl3.append(trEl24);

    const trEl25 = document.createElement('tr');

    const tdEl65 = document.createElement('td');

    const strongEl33 = document.createElement('strong');
    strongEl33.textContent = 'Tenure Options';
    tdEl65.append(strongEl33);
    trEl25.append(tdEl65);

    const tdEl66 = document.createElement('td');
    tdEl66.textContent = '1/2/3 Years';
    trEl25.append(tdEl66);
    tbodyEl3.append(trEl25);

    const trEl26 = document.createElement('tr');

    const tdEl67 = document.createElement('td');

    const strongEl34 = document.createElement('strong');
    strongEl34.textContent = 'Cover Types';
    tdEl67.append(strongEl34);
    trEl26.append(tdEl67);

    const tdEl68 = document.createElement('td');
    tdEl68.textContent = 'Individual and Family Floater basis';
    trEl26.append(tdEl68);
    tbodyEl3.append(trEl26);

    const trEl27 = document.createElement('tr');

    const tdEl69 = document.createElement('td');

    const strongEl35 = document.createElement('strong');
    strongEl35.textContent = 'Waiting Period';
    tdEl69.append(strongEl35);
    trEl27.append(tdEl69);

    const tdEl70 = document.createElement('td');
    tdEl70.textContent = '30 days for illnesses, except injury | 24 months for named ailments | 36 months for pre-existing diseases';
    trEl27.append(tdEl70);
    tbodyEl3.append(trEl27);

    const trEl28 = document.createElement('tr');

    const tdEl71 = document.createElement('td');

    const strongEl36 = document.createElement('strong');
    strongEl36.textContent = 'Grace Period';
    tdEl71.append(strongEl36);
    trEl28.append(tdEl71);

    const tdEl72 = document.createElement('td');
    tdEl72.textContent = '30 days to renew your policy post expiry';
    trEl28.append(tdEl72);
    tbodyEl3.append(trEl28);
    tableEl3.append(tbodyEl3);
    divEl49.append(tableEl3);
    divEl3.append(divEl49);



    const sectionEl12 = document.createElement('section');
    sectionEl12.setAttribute('class', 'static-steps');

    const h2El14 = document.createElement('h2');
    h2El14.setAttribute('id', 'how-to-calculate-premium');
    h2El14.textContent = 'How do you Calculate the Premium of Health Insurance Plans?';
    sectionEl12.append(h2El14);

    const pEl38 = document.createElement('p');

    const aEl15 = document.createElement('a');
    aEl15.setAttribute('href', 'https://www.careinsurance.com/health-insurance/calculate-health-insurance-premium');
    aEl15.setAttribute('target', '_blank');
    aEl15.textContent = 'health insurance premium calculator';
    pEl38.append(aEl15);
    sectionEl12.append(pEl38);

    const sectionEl13 = document.createElement('section');
    sectionEl13.setAttribute('class', 'static-steps-section');

    const articleEl20 = document.createElement('article');
    articleEl20.setAttribute('class', 'steps');

    const asideEl8 = document.createElement('aside');

    const imgEl21 = document.createElement('img');
    imgEl21.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-visit-website.svg');
    imgEl21.setAttribute('alt', '');
    imgEl21.setAttribute('title', '');
    imgEl21.setAttribute('width', '35');
    imgEl21.setAttribute('height', '35');
    asideEl8.append(imgEl21);

    const iEl = document.createElement('i');
    iEl.textContent = '01';
    asideEl8.append(iEl);
    articleEl20.append(asideEl8);

    const h3El15 = document.createElement('h3');
    h3El15.textContent = 'Visit Website';
    articleEl20.append(h3El15);

    const pEl39 = document.createElement('p');
    pEl39.textContent = 'On the home page of Care Health Insurance, navigate to the products.';
    articleEl20.append(pEl39);
    sectionEl13.append(articleEl20);

    const articleEl21 = document.createElement('article');
    articleEl21.setAttribute('class', 'steps');

    const asideEl9 = document.createElement('aside');

    const imgEl22 = document.createElement('img');
    imgEl22.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-choose-a-plan.svg');
    imgEl22.setAttribute('alt', '');
    imgEl22.setAttribute('title', '');
    imgEl22.setAttribute('width', '35');
    imgEl22.setAttribute('height', '35');
    asideEl9.append(imgEl22);

    const iEl2 = document.createElement('i');
    iEl2.textContent = '02';
    asideEl9.append(iEl2);
    articleEl21.append(asideEl9);

    const h3El16 = document.createElement('h3');
    h3El16.textContent = 'Choose a Plan';
    articleEl21.append(h3El16);

    const pEl40 = document.createElement('p');

    const bEl29 = document.createElement('b');
    bEl29.textContent = '\'Get Quote\'';
    pEl40.append(bEl29);
    articleEl21.append(pEl40);
    sectionEl13.append(articleEl21);

    const articleEl22 = document.createElement('article');
    articleEl22.setAttribute('class', 'steps');

    const asideEl10 = document.createElement('aside');

    const imgEl23 = document.createElement('img');
    imgEl23.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-fill-member-details.svg');
    imgEl23.setAttribute('alt', '');
    imgEl23.setAttribute('title', '');
    imgEl23.setAttribute('width', '35');
    imgEl23.setAttribute('height', '35');
    asideEl10.append(imgEl23);

    const iEl3 = document.createElement('i');
    iEl3.textContent = '03';
    asideEl10.append(iEl3);
    articleEl22.append(asideEl10);

    const h3El17 = document.createElement('h3');
    h3El17.textContent = 'Fill Member Details';
    articleEl22.append(h3El17);

    const pEl41 = document.createElement('p');

    const bEl30 = document.createElement('b');
    bEl30.textContent = '\'View Quote\'';
    pEl41.append(bEl30);
    articleEl22.append(pEl41);
    sectionEl13.append(articleEl22);

    const articleEl23 = document.createElement('article');
    articleEl23.setAttribute('class', 'steps');

    const asideEl11 = document.createElement('aside');

    const imgEl24 = document.createElement('img');
    imgEl24.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-select-coverage.svg');
    imgEl24.setAttribute('alt', '');
    imgEl24.setAttribute('title', '');
    imgEl24.setAttribute('width', '35');
    imgEl24.setAttribute('height', '35');
    asideEl11.append(imgEl24);

    const iEl4 = document.createElement('i');
    iEl4.textContent = '04';
    asideEl11.append(iEl4);
    articleEl23.append(asideEl11);

    const h3El18 = document.createElement('h3');
    h3El18.textContent = 'Select Coverage';
    articleEl23.append(h3El18);

    const pEl42 = document.createElement('p');
    pEl42.textContent = 'Customise the policy by changing the sum insured and add-ons as per your needs.';
    articleEl23.append(pEl42);
    sectionEl13.append(articleEl23);

    const articleEl24 = document.createElement('article');
    articleEl24.setAttribute('class', 'steps');

    const asideEl12 = document.createElement('aside');

    const imgEl25 = document.createElement('img');
    imgEl25.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/icons-purchase-policy.svg');
    imgEl25.setAttribute('alt', '');
    imgEl25.setAttribute('title', '');
    imgEl25.setAttribute('width', '35');
    imgEl25.setAttribute('height', '35');
    asideEl12.append(imgEl25);

    const iEl5 = document.createElement('i');
    iEl5.textContent = '05';
    asideEl12.append(iEl5);
    articleEl24.append(asideEl12);

    const h3El19 = document.createElement('h3');
    h3El19.textContent = 'Purchase Policy';
    articleEl24.append(h3El19);

    const pEl43 = document.createElement('p');
    pEl43.textContent = 'That\'s it! Your instant health insurance quote, including 18% GST will be calculated in no time!';
    articleEl24.append(pEl43);
    sectionEl13.append(articleEl24);
    sectionEl12.append(sectionEl13);
    divEl3.append(sectionEl12);

    const pEl44 = document.createElement('p');
    pEl44.textContent = 'We offer three policy estimation options: family cover, pre-existing diseases cover, and senior citizen insurance. The premium calculator will automatically calculate the amount you must pay to be eligible for the coverage. You can check the premium and critical benefits in your base mediclaim insurance policy.';
    divEl3.append(pEl44);

    const h2El15 = document.createElement('h2');
    h2El15.setAttribute('id', 'factors-affecting-premium');
    h2El15.textContent = 'Factors Affecting the Premium of Health Insurance Policies';
    divEl3.append(h2El15);

    const pEl45 = document.createElement('p');
    pEl45.textContent = 'Given below are some of the factors that affect the premium of your health insurance policy:';
    divEl3.append(pEl45);

    const ulEl19 = document.createElement('ul');

    const liEl91 = document.createElement('li');
    liEl91.textContent = 'Premiums tend to be lower for younger individuals and increase with age.';
    const strongEl37 = document.createElement('strong');
    strongEl37.textContent = 'Age:';
    liEl91.prepend(strongEl37);
    ulEl19.append(liEl91);

    const liEl92 = document.createElement('li');
    liEl92.textContent = 'Existing health conditions can lead to higher premiums or exclusions.';
    const strongEl38 = document.createElement('strong');
    strongEl38.textContent = 'Pre-existing Conditions:';
    liEl92.prepend(strongEl38);
    ulEl19.append(liEl92);

    const liEl93 = document.createElement('li');
    liEl93.textContent = 'A high or low BMI may affect your health risk category and premium.';
    const strongEl39 = document.createElement('strong');
    strongEl39.textContent = 'Body Mass Index (BMI):';
    liEl93.prepend(strongEl39);
    ulEl19.append(liEl93);

    const liEl94 = document.createElement('li');
    liEl94.textContent = 'Smoking, alcohol consumption, and other habits can impact insurance costs.';
    const strongEl40 = document.createElement('strong');
    strongEl40.textContent = 'Lifestyle Habits:';
    liEl94.prepend(strongEl40);
    ulEl19.append(liEl94);

    const liEl95 = document.createElement('li');
    liEl95.textContent = 'Different plan types offer varying coverage and benefit levels.';
    const strongEl41 = document.createElement('strong');
    strongEl41.textContent = 'Type of Plan:';
    liEl95.prepend(strongEl41);
    ulEl19.append(liEl95);

    const liEl96 = document.createElement('li');
    liEl96.textContent = 'The higher the sum insured, the higher the premium you may pay.';
    const strongEl42 = document.createElement('strong');
    strongEl42.textContent = 'Sum Insured:';
    liEl96.prepend(strongEl42);
    ulEl19.append(liEl96);

    const liEl97 = document.createElement('li');
    liEl97.textContent = 'Deductibles and co-payments reduce your premium but increase your out-of-pocket costs.';
    const strongEl43 = document.createElement('strong');
    strongEl43.textContent = 'Deductibles and Co-Payment:';
    liEl97.prepend(strongEl43);
    ulEl19.append(liEl97);

    const liEl98 = document.createElement('li');
    liEl98.textContent = 'Optional benefits can enhance coverage but increase the overall premium.';
    const strongEl44 = document.createElement('strong');
    strongEl44.textContent = 'Add-On Covers:';
    liEl98.prepend(strongEl44);
    ulEl19.append(liEl98);

    const liEl99 = document.createElement('li');
    liEl99.textContent = 'Medical costs and risk factors vary by region, influencing premium rates.';
    const strongEl45 = document.createElement('strong');
    strongEl45.textContent = 'Location:';
    liEl99.prepend(strongEl45);
    ulEl19.append(liEl99);

    const liEl100 = document.createElement('li');
    liEl100.textContent = 'A family history of illness can lead to a higher risk profile.';
    const strongEl46 = document.createElement('strong');
    strongEl46.textContent = 'Medical History of Family:';
    liEl100.prepend(strongEl46);
    ulEl19.append(liEl100);

    divEl3.append(ulEl19);


    const sectionEl14 = document.createElement('section');
    sectionEl14.setAttribute('class', 'tab_toggle_section');

    const h2El16 = document.createElement('h2');
    h2El16.setAttribute('id', 'benefits-of-medical-insurance-policy');
    h2El16.textContent = 'Health Insurance on Your Fingertips';
    sectionEl14.append(h2El16);

    const pEl46 = document.createElement('p');
    pEl46.textContent = 'Now that you are versed in the details of health insurance, here are a few other things you should know to make an informed choice of a health insurance plan online. Click through to understand how to choose a health plan online.';
    sectionEl14.append(pEl46);

    const ulEl20 = document.createElement('ul');
    ulEl20.setAttribute('class', 'tab_toggle_section_tabs');

    const liEl101 = document.createElement('li');
    liEl101.setAttribute('class', 'active');
    liEl101.textContent = 'Choose Wisely';
    ulEl20.append(liEl101);

    const liEl102 = document.createElement('li');
    liEl102.textContent = 'Buy Online';
    ulEl20.append(liEl102);

    const liEl103 = document.createElement('li');
    liEl103.textContent = 'Premium Reduction';
    ulEl20.append(liEl103);

    const liEl104 = document.createElement('li');
    liEl104.textContent = 'Easy Renewal';
    ulEl20.append(liEl104);
    sectionEl14.append(ulEl20);

    const articleEl25 = document.createElement('article');
    articleEl25.setAttribute('class', 'tab_toggle_section_tab_content active');

    const pEl47 = document.createElement('p');
    pEl47.textContent = 'To choose the best medical insurance in India, you must consider the below-mentioned advantages:';
    articleEl25.append(pEl47);

    const ulEl21 = document.createElement('ul');
    const liEl105 = document.createElement('li');
    liEl105.textContent = 'Review the insurer’s terms to ensure you meet age, health, and residency criteria.';
    const bEl31 = document.createElement('b');
    bEl31.textContent = 'Verify Eligibility:';
    liEl105.prepend(bEl31);
    ulEl21.append(liEl105);

    const liEl106 = document.createElement('li');
    liEl106.textContent = 'Choose a policy that offers comprehensive protection for various medical needs.';
    const bEl32 = document.createElement('b');
    bEl32.textContent = 'Ensure Maximum Coverage:';
    liEl106.prepend(bEl32);
    ulEl21.append(liEl106);

    const liEl107 = document.createElement('li');
    liEl107.textContent = 'Compare different plans to find one that balances benefits and cost.';
    const bEl33 = document.createElement('b');
    bEl33.textContent = 'Look for Affordable Premium:';
    liEl107.prepend(bEl33);
    ulEl21.append(liEl107);

    const liEl108 = document.createElement('li');
    liEl108.textContent = 'Understand what medical conditions or treatments are not covered by the policy.';
    const bEl34 = document.createElement('b');
    bEl34.textContent = 'Check Exclusions:';
    liEl108.prepend(bEl34);
    ulEl21.append(liEl108);

    const liEl109 = document.createElement('li');
    liEl109.textContent = 'Be aware of the percentage of the bill you may need to pay from your pocket.';
    const bEl35 = document.createElement('b');
    bEl35.textContent = 'Understand the Co-Payment Clause:';
    liEl109.prepend(bEl35);
    ulEl21.append(liEl109);


    const liEl110 = document.createElement('li');
    liEl110.textContent = 'Choose a plan that allows you to access a wide network.';
    const bEl36 = document.createElement('b');
    bEl36.textContent = 'Select Wide Cashless Network Hospitals:';
    liEl110.prepend(bEl36);

    const aEl16 = document.createElement('a');
    aEl16.textContent = 'Choose a plan that allows you to access a for cashless treatment.';
    aEl16.setAttribute('href', 'https://www.careinsurance.com/health-insurance/cashless-health-insurance');
    aEl16.textContent = 'cashless treatment';
    liEl110.append(aEl16);
    ulEl21.append(liEl110);

    const liEl111 = document.createElement('li');
    liEl111.textContent = 'Choose a plan that allows you to access a wide network of hospitals for cashless treatment.';
    const bEl37 = document.createElement('b');
    bEl37.textContent = 'Bid for Higher Claim Settlement Ratio:';
    liEl111.prepend(bEl37);
    ulEl21.append(liEl111);
    articleEl25.append(ulEl21);
    sectionEl14.append(articleEl25);

    const articleEl26 = document.createElement('article');
    articleEl26.setAttribute('class', 'tab_toggle_section_tab_content');

    const pEl48 = document.createElement('p');
    pEl48.textContent = 'The best part about the online availability of health covers is the secure payment gateways. With easy-to-follow steps and trust-backed payment partners, we offer you a seamless experience of buying the best health insurance plans in India completely online. Also, our digital portal enables you to effortlessly make premium payments through a hassle-free digital payment gateway. Welcome to the future of hassle-free health coverage with Care Health Insurance!';
    articleEl26.append(pEl48);

    const pEl49 = document.createElement('p');
    pEl49.textContent = 'Here is a quick 6-step guide you should follow for making online insurance payments:';
    articleEl26.append(pEl49);

    const ulEl22 = document.createElement('ul');

    const liEl112 = document.createElement('li');
    liEl112.textContent = 'Go to our home page and select a health policy based on your needs and the sum insured\'s requirements.';
    ulEl22.append(liEl112);

    const liEl113 = document.createElement('li');
    liEl113.textContent = 'Click on ‘Get Quote’ and provide relevant details.';
    ulEl22.append(liEl113);

    const liEl114 = document.createElement('li');
    liEl114.textContent = 'Enter the required information and customise your policy.';
    ulEl22.append(liEl114);

    const liEl115 = document.createElement('li');
    liEl115.textContent = 'You will be redirected to the payment section.';
    ulEl22.append(liEl115);

    const liEl116 = document.createElement('li');
    liEl116.textContent = 'Make payment through any secure digital payment mode.';
    ulEl22.append(liEl116);

    const liEl117 = document.createElement('li');
    liEl117.textContent = 'You will get the new health policy documents in your registered email.';
    ulEl22.append(liEl117);
    articleEl26.append(ulEl22);
    sectionEl14.append(articleEl26);

    const articleEl27 = document.createElement('article');
    articleEl27.setAttribute('class', 'tab_toggle_section_tab_content');

    const pEl50 = document.createElement('p');
    pEl50.textContent = 'You know by now that your health insurance premium is not a random number but a thoughtful calculation based on unique facts. Our underwriting process ensures a personalised touch, from your health history to lifestyle choices. However, some easy tips and tricks can help you reduce your health insurance premium without cutting back on the coverage.';
    articleEl27.append(pEl50);

    const ulEl23 = document.createElement('ul');

    const liEl118 = document.createElement('li');

    const bEl38 = document.createElement('b');
    bEl38.textContent = 'Buy a health insurance plan today:';
    liEl118.append(bEl38);
    ulEl23.append(liEl118);

    const liEl119 = document.createElement('li');

    const bEl39 = document.createElement('b');
    bEl39.textContent = 'Pick the right add-ons:';
    liEl119.append(bEl39);
    ulEl23.append(liEl119);

    const liEl120 = document.createElement('li');

    const bEl40 = document.createElement('b');
    bEl40.textContent = 'Make the most of the tax benefits:';
    liEl120.append(bEl40);
    ulEl23.append(liEl120);

    const liEl121 = document.createElement('li');

    const bEl41 = document.createElement('b');
    bEl41.textContent = 'Choose a medical insurance policy that you can afford:';
    liEl121.append(bEl41);
    ulEl23.append(liEl121);

    const liEl122 = document.createElement('li');

    const bEl42 = document.createElement('b');
    bEl42.textContent = 'Pick the right co-pay and deductibles:';
    liEl122.append(bEl42);
    ulEl23.append(liEl122);

    const liEl123 = document.createElement('li');

    const bEl43 = document.createElement('b');
    bEl43.textContent = 'Choose a multi-year policy:';
    liEl123.append(bEl43);
    ulEl23.append(liEl123);

    const liEl124 = document.createElement('li');

    const bEl44 = document.createElement('b');
    bEl44.textContent = 'Follow a good lifestyle:';
    liEl124.append(bEl44);
    ulEl23.append(liEl124);

    const liEl125 = document.createElement('li');

    const bEl45 = document.createElement('b');
    bEl45.textContent = 'Compare Mediclaim Policies:';
    liEl125.append(bEl45);
    ulEl23.append(liEl125);
    articleEl27.append(ulEl23);
    sectionEl14.append(articleEl27);

    const articleEl28 = document.createElement('article');
    articleEl28.setAttribute('class', 'tab_toggle_section_tab_content');

    const pEl51 = document.createElement('p');
    pEl51.textContent = 'Every medical policy terminates when the term for the policy ends. That’s why renewing a mediclaim is crucial to ensure uninterrupted healthcare coverage and added advantages like no claim bonus, coverage for a pre-existing ailment, etc. The process of renewing insurance involves the following steps:';
    articleEl28.append(pEl51);

    const ulEl24 = document.createElement('ul');

    const liEl126 = document.createElement('li');
    liEl126.textContent = 'Visit our official website for health insurance policy renewal.';
    ulEl24.append(liEl126);

    const liEl127 = document.createElement('li');
    liEl127.textContent = 'Go to the renew section.';
    ulEl24.append(liEl127);

    const liEl128 = document.createElement('li');
    liEl128.textContent = 'Enter the complete details, such as insurance policy number, contact number, etc.';
    ulEl24.append(liEl128);

    const liEl129 = document.createElement('li');
    liEl129.textContent = 'Under the payment section, pay the renewal premium through any secure payment mode.';
    ulEl24.append(liEl129);
    articleEl28.append(ulEl24);

    const pEl52 = document.createElement('p');
    pEl52.textContent = 'By buying a health policy online, you can also renew your health plan digitally, thus saving much effort.';
    articleEl28.append(pEl52);
    sectionEl14.append(articleEl28);
    divEl3.append(sectionEl14);

    const h2El17 = document.createElement('h2');
    h2El17.setAttribute('id', 'tax-benefits');
    h2El17.textContent = 'How much Tax Benefit Can I get from Health Insurance?';
    divEl3.append(h2El17);

    const pEl53 = document.createElement('p');
    pEl53.textContent = 'If you fall into the taxable slab, then your health insurance plan can fetch you tax benefits. Here’s how:';
    divEl3.append(pEl53);

    const ulEl25 = document.createElement('ul');

    const liEl130 = document.createElement('li');
    liEl130.textContent = 'If you are paying the health insurance premium for yourself, your spouse, your children, or your parents, you can avail of tax benefits under Section 80D and save more.';
    ulEl25.append(liEl130);

    const liEl131 = document.createElement('li');
    liEl131.textContent = 'As a policyholder, you can also claim up to ₹5,000 when towards preventive health check-ups.';
    ulEl25.append(liEl131);

    const liEl132 = document.createElement('li');
    liEl132.textContent = 'Take a look at the table to understand the deductions in detail:';
    ulEl25.append(liEl132);
    divEl3.append(ulEl25);

    const divEl50 = document.createElement('div');
    divEl50.setAttribute('class', 'table-border');

    const tableEl4 = document.createElement('table');
    tableEl4.setAttribute('class', 'table_coustom');

    const theadEl = document.createElement('thead');
    theadEl.setAttribute('class', 'h-center');

    const trEl29 = document.createElement('tr');

    const thEl7 = document.createElement('th');
    thEl7.textContent = 'Policyholders';
    trEl29.append(thEl7);

    const thEl8 = document.createElement('th');
    thEl8.textContent = 'Deductions for premium paid for self and family';
    trEl29.append(thEl8);

    const thEl9 = document.createElement('th');
    thEl9.textContent = 'Deductions for premium paid for parents';
    trEl29.append(thEl9);

    const thEl10 = document.createElement('th');
    thEl10.textContent = 'Preventive Health Check-Ups';
    trEl29.append(thEl10);

    const thEl11 = document.createElement('th');
    thEl11.textContent = 'Tax benefit';
    trEl29.append(thEl11);
    theadEl.append(trEl29);
    tableEl4.append(theadEl);

    const tbodyEl4 = document.createElement('tbody');

    const trEl30 = document.createElement('tr');

    const tdEl73 = document.createElement('td');
    tdEl73.textContent = 'Self and family below 60 years';
    trEl30.append(tdEl73);

    const tdEl74 = document.createElement('td');
    tdEl74.textContent = '₹25,000';
    trEl30.append(tdEl74);

    const tdEl75 = document.createElement('td');
    tdEl75.textContent = '-';
    trEl30.append(tdEl75);

    const tdEl76 = document.createElement('td');
    tdEl76.textContent = '₹5,000';
    trEl30.append(tdEl76);

    const tdEl77 = document.createElement('td');
    tdEl77.textContent = '₹25,000';
    trEl30.append(tdEl77);
    tbodyEl4.append(trEl30);

    const trEl31 = document.createElement('tr');

    const tdEl78 = document.createElement('td');
    tdEl78.textContent = 'Self, family, and parents below 60 years';
    trEl31.append(tdEl78);

    const tdEl79 = document.createElement('td');
    tdEl79.textContent = '₹25,000';
    trEl31.append(tdEl79);

    const tdEl80 = document.createElement('td');
    tdEl80.textContent = '₹25,000';
    trEl31.append(tdEl80);

    const tdEl81 = document.createElement('td');
    tdEl81.textContent = '₹5,000';
    trEl31.append(tdEl81);

    const tdEl82 = document.createElement('td');
    tdEl82.textContent = '₹50,000';
    trEl31.append(tdEl82);
    tbodyEl4.append(trEl31);

    const trEl32 = document.createElement('tr');

    const tdEl83 = document.createElement('td');
    tdEl83.textContent = 'Self and family below 60 years and parents above 60 years';
    trEl32.append(tdEl83);

    const tdEl84 = document.createElement('td');
    tdEl84.textContent = '₹25,000';
    trEl32.append(tdEl84);

    const tdEl85 = document.createElement('td');
    tdEl85.textContent = '₹50,000';
    trEl32.append(tdEl85);

    const tdEl86 = document.createElement('td');
    tdEl86.textContent = '₹5,000';
    trEl32.append(tdEl86);

    const tdEl87 = document.createElement('td');
    tdEl87.textContent = '₹75,000';
    trEl32.append(tdEl87);
    tbodyEl4.append(trEl32);
    tableEl4.append(tbodyEl4);
    divEl50.append(tableEl4);
    divEl3.append(divEl50);

    const h2El18 = document.createElement('h2');
    h2El18.setAttribute('id', 'documents-required');

    const spanEl3 = document.createElement('span');
    spanEl3.setAttribute('style', 'font-size:28px;');
    spanEl3.textContent = 'Documents required to File a Claim under Health Insurance';
    h2El18.append(spanEl3);
    divEl3.append(h2El18);

    const pEl54 = document.createElement('p');
    pEl54.textContent = 'Given below are the set of documents that you will have to submit while making a claim:';
    divEl3.append(pEl54);

    const divEl51 = document.createElement('div');
    divEl51.setAttribute('class', 'table-border');

    const tableEl5 = document.createElement('table');
    tableEl5.setAttribute('class', 'table_coustom');

    const theadEl2 = document.createElement('thead');
    theadEl2.setAttribute('class', 'hcenter');

    const trEl33 = document.createElement('tr');

    const thEl12 = document.createElement('th');
    thEl12.setAttribute('width', '250');
    thEl12.textContent = 'Category';
    trEl33.append(thEl12);

    const thEl13 = document.createElement('th');
    thEl13.setAttribute('width', '250');
    thEl13.textContent = 'Documents';
    trEl33.append(thEl13);
    theadEl2.append(trEl33);
    tableEl5.append(theadEl2);

    const tbodyEl5 = document.createElement('tbody');
    tbodyEl5.setAttribute('class', 'h-center');

    const trEl34 = document.createElement('tr');

    const tdEl88 = document.createElement('td');
    tdEl88.textContent = 'Claim Related';
    trEl34.append(tdEl88);

    const tdEl89 = document.createElement('td');

    const ulEl26 = document.createElement('ul');

    const liEl133 = document.createElement('li');
    liEl133.textContent = 'Duly filled and signed claim form';
    ulEl26.append(liEl133);

    const liEl134 = document.createElement('li');
    liEl134.textContent = 'Insured person’s name, policy number, address, etc';
    ulEl26.append(liEl134);
    tdEl89.append(ulEl26);
    trEl34.append(tdEl89);
    tbodyEl5.append(trEl34);

    const trEl35 = document.createElement('tr');

    const tdEl90 = document.createElement('td');
    tdEl90.textContent = 'Medical Documents';
    trEl35.append(tdEl90);

    const tdEl91 = document.createElement('td');

    const ulEl27 = document.createElement('ul');

    const liEl135 = document.createElement('li');
    liEl135.textContent = 'All diagnostics and medical reports';
    ulEl27.append(liEl135);

    const liEl136 = document.createElement('li');
    liEl136.textContent = 'Original payment receipts, hospital bills, and discharge summary';
    ulEl27.append(liEl136);

    const liEl137 = document.createElement('li');
    liEl137.textContent = 'Pharmacy bills and prescriptions';
    ulEl27.append(liEl137);

    const liEl138 = document.createElement('li');
    liEl138.textContent = 'Doctor’s referral letter';
    ulEl27.append(liEl138);
    tdEl91.append(ulEl27);
    trEl35.append(tdEl91);
    tbodyEl5.append(trEl35);
    tableEl5.append(tbodyEl5);
    divEl51.append(tableEl5);
    divEl3.append(divEl51);

    const h2El19 = document.createElement('h2');
    h2El19.setAttribute('id', 'myths-about-health-insurance');
    h2El19.textContent = 'Some Myths about Health Insurance Busted';
    divEl3.append(h2El19);

    const pEl55 = document.createElement('p');
    pEl55.textContent = 'Health insurance is vital to financial planning, yet various misconceptions surround it. Let us examine the most common health insurance myths and help you understand what is a myth and what is not.';
    divEl3.append(pEl55);

    const ulEl28 = document.createElement('ul');

    const liEl139 = document.createElement('li');
    liEl139.textContent = 'Health insurance is not only meant for seniors, but is also important for younger people to secure future medical needs.';
    const strongEl47 = document.createElement('strong');
    strongEl47.textContent = 'Health Insurance is only meant for seniors:';
    liEl139.prepend(strongEl47);
    ulEl28.append(liEl139);

    const liEl140 = document.createElement('li');
    liEl140.textContent = 'Coverage may vary by policy, and some may have a waiting period before benefits begin, so read carefully.';
    const strongEl48 = document.createElement('strong');
    strongEl48.textContent = 'Coverage Begins Immediately Upon Purchase:';
    liEl140.prepend(strongEl48);
    ulEl28.append(liEl140);

    const liEl141 = document.createElement('li');
    liEl141.textContent = 'Cheaper plans may not provide comprehensive coverage, so choosing the right plan is more important than just price.';
    const strongEl49 = document.createElement('strong');
    strongEl49.textContent = 'The Cheapest Plan is the Best Choice:';
    liEl141.prepend(strongEl49);
    ulEl28.append(liEl141);

    const liEl142 = document.createElement('li');
    liEl142.textContent = 'Pre-existing conditions may be covered after a waiting period, so check the policy terms before assuming they disqualify you.';
    const strongEl50 = document.createElement('strong');
    strongEl50.textContent = 'Pre-Existing Diseases Disqualify You From Health Insurance:';
    liEl142.prepend(strongEl50);
    ulEl28.append(liEl142);

    const liEl143 = document.createElement('li');
    liEl143.textContent = 'A group health plan might be sufficient for some, but individual coverage provides better customization for personal healthcare needs.';
    const strongEl51 = document.createElement('strong');
    strongEl51.textContent = 'Group Health Plan is Enough:';
    liEl143.prepend(strongEl51);
    ulEl28.append(liEl143);

    const liEl144 = document.createElement('li');
    liEl144.textContent = 'Not all hospital bills are covered; certain treatments and expenses may have exclusions or co-payments.';
    const strongEl52 = document.createElement('strong');
    strongEl52.textContent = 'All Hospital Bills are Covered:';
    liEl144.prepend(strongEl52);
    ulEl28.append(liEl144);

    divEl3.append(ulEl28);


    const h2El20 = document.createElement('h2');
    h2El20.setAttribute('id', 'health-insurance-portability');
    h2El20.textContent = 'Porting Your Health Policy to Care Health Insurance';
    divEl3.append(h2El20);

    const pEl56 = document.createElement('p');
    pEl56.textContent = 'There are more than one reasons to port your policy to Care Health Insurance. As an insured person, we promise you unique benefits with lifelong renewability under most of our health insurance plans. Porting a medical plan is easy and can be done before the policy renewal stage. Just notify your existing insurer at least 45 days before the policy renewal date of an existing medical cover.';
    divEl3.append(pEl56);

    const pEl57 = document.createElement('p');
    pEl57.textContent = 'You will be able to retain your medical insurance policy benefits and accrued bonuses and transfer the time-bound exclusions, including credit for the waiting period for pre-existing diseases. It is possible to port a policy from one insurance company to another and from one health insurance policy to another policy with the same insurance company.';
    divEl3.append(pEl57);

    const divEl52 = document.createElement('div');
    divEl52.setAttribute('class', 'cn_container_text_header_content');

    const divEl53 = document.createElement('div');
    divEl53.setAttribute('class', 'custom_block why_health_plan');
    divEl53.setAttribute('id', 'port-policy');

    const h3El20 = document.createElement('h3');
    h3El20.textContent = 'How to Port a Medical Insurance Policy?';
    divEl53.append(h3El20);

    const pEl58 = document.createElement('p');
    pEl58.textContent = 'Here is a step-by-step guide to port your health insurance scheme and get covered under Care Health Insurance plans:';
    divEl53.append(pEl58);

    const divEl54 = document.createElement('div');
    divEl54.setAttribute('class', 'port_card_section');

    const divEl55 = document.createElement('div');
    divEl55.setAttribute('class', 'port_card');

    const divEl56 = document.createElement('div');

    const spanEl4 = document.createElement('span');
    spanEl4.setAttribute('class', 'step_block');

    const spanEl5 = document.createElement('span');
    spanEl5.setAttribute('class', 'number_block');
    spanEl5.textContent = '1';
    spanEl4.append(spanEl5);
    divEl56.append(spanEl4);

    const pEl59 = document.createElement('p');

    const strongEl53 = document.createElement('strong');
    strongEl53.textContent = 'Step 1';
    pEl59.append(strongEl53);
    divEl56.append(pEl59);

    const pEl60 = document.createElement('p');
    pEl60.textContent = 'On the home page of Care Health select the “port existing policy” option and follow the premium calculation journey.';
    divEl56.append(pEl60);
    divEl55.append(divEl56);

    const spanEl6 = document.createElement('span');
    spanEl6.setAttribute('class', 'clain_image lozad');
    // spanEl6.setAttribute('data-background-image', 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/arrow-card.png');
    divEl55.append(spanEl6);
    divEl54.append(divEl55);

    const divEl57 = document.createElement('div');
    divEl57.setAttribute('class', 'port_card');

    const divEl58 = document.createElement('div');

    const spanEl7 = document.createElement('span');
    spanEl7.setAttribute('class', 'step_block');

    const spanEl8 = document.createElement('span');
    spanEl8.setAttribute('class', 'number_block');
    spanEl8.textContent = '2';
    spanEl7.append(spanEl8);
    divEl58.append(spanEl7);

    const pEl61 = document.createElement('p');

    const strongEl54 = document.createElement('strong');
    strongEl54.textContent = 'Step 2';
    pEl61.append(strongEl54);
    divEl58.append(pEl61);

    const pEl62 = document.createElement('p');
    pEl62.textContent = 'Fill up the proposal form and the portability form with relevant details and submit the required documents along with it.';
    divEl58.append(pEl62);
    divEl57.append(divEl58);

    const spanEl9 = document.createElement('span');
    spanEl9.setAttribute('class', 'clain_image lozad');
    // spanEl9.setAttribute('data-background-image', 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/arrow-card.png');
    divEl57.append(spanEl9);
    divEl54.append(divEl57);

    const divEl59 = document.createElement('div');
    divEl59.setAttribute('class', 'port_card');

    const divEl60 = document.createElement('div');

    const spanEl10 = document.createElement('span');
    spanEl10.setAttribute('class', 'step_block');

    const spanEl11 = document.createElement('span');
    spanEl11.setAttribute('class', 'number_block');
    spanEl11.textContent = '3';
    spanEl10.append(spanEl11);
    divEl60.append(spanEl10);

    const pEl63 = document.createElement('p');

    const strongEl55 = document.createElement('strong');
    strongEl55.textContent = 'Step 3';
    pEl63.append(strongEl55);
    divEl60.append(pEl63);

    const pEl64 = document.createElement('p');
    pEl64.textContent = 'The requisite data will be furnished on the official portal of IRDAI.';
    divEl60.append(pEl64);
    divEl59.append(divEl60);

    const spanEl12 = document.createElement('span');
    spanEl12.setAttribute('class', 'clain_image lozad');
    // spanEl12.setAttribute('data-background-image', 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/arrow-card.png');
    divEl59.append(spanEl12);
    divEl54.append(divEl59);

    const divEl61 = document.createElement('div');
    divEl61.setAttribute('class', 'port_card');

    const divEl62 = document.createElement('div');

    const spanEl13 = document.createElement('span');
    spanEl13.setAttribute('class', 'step_block');

    const spanEl14 = document.createElement('span');
    spanEl14.setAttribute('class', 'number_block');
    spanEl14.textContent = '4';
    spanEl13.append(spanEl14);
    divEl62.append(spanEl13);

    const pEl65 = document.createElement('p');

    const strongEl56 = document.createElement('strong');
    strongEl56.textContent = 'Step 4';
    pEl65.append(strongEl56);
    divEl62.append(pEl65);

    const pEl66 = document.createElement('p');
    pEl66.textContent = 'The new insurance company will underwrite the proposal and inform you within 15 days.';
    divEl62.append(pEl66);
    divEl61.append(divEl62);

    const spanEl15 = document.createElement('span');
    spanEl15.setAttribute('class', 'clain_image_tick lozad');
    // spanEl15.setAttribute('data-background-image', 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/tick-port.png');
    divEl61.append(spanEl15);
    divEl54.append(divEl61);
    divEl53.append(divEl54);
    divEl52.append(divEl53);
    divEl3.append(divEl52);

    const h2El21 = document.createElement('h2');
    h2El21.textContent = 'Things to Keep in Mind When Porting Health Insurance';
    divEl3.append(h2El21);

    const pEl67 = document.createElement('p');
    pEl67.textContent = 'When you port a health insurance policy to a new insurance provider, the aim is to get better services and coverage. Keeping in mind the following aspects will help you make a seamless transition.';
    divEl3.append(pEl67);

    const h3El21 = document.createElement('h3');
    h3El21.textContent = 'Inform your previous insurer';
    divEl3.append(h3El21);

    const pEl68 = document.createElement('p');
    pEl68.textContent = 'Before switching to a new health insurer, it is vital to inform the current insurer. You should write an application for this purpose. You can make this request to your insurer at least 45 days before your policy’s expiry date. Also, keep in mind that you should avoid making this request before 60 days of the renewal. Let’s understand how to make the portability permission request. You should write an application in which you have to mention the name of your new insurer and other personal and details. Once you apply, your application will be reviewed and you will receive an acknowledgement within 3 business days.';
    divEl3.append(pEl68);

    const h3El22 = document.createElement('h3');
    h3El22.textContent = 'Keep an eye on the premium';
    divEl3.append(h3El22);

    const pEl69 = document.createElement('p');
    pEl69.textContent = 'When you decide to port your health insurance policy to a new insurer, you should enquire about the premium. You should check whether its premium will increase or decline on porting. The change in premium indicates the changes in your coverage or benefits. So, gather this information before you finalise the porting.';
    divEl3.append(pEl69);

    const h3El23 = document.createElement('h3');
    h3El23.textContent = 'Check for the available add-ons';
    divEl3.append(h3El23);

    const pEl70 = document.createElement('p');
    pEl70.textContent = 'If you are thinking of switching to a new insurer to enhance coverage or benefits, you should check for the available add-ons. You can buy the add-ons of your current insurer to avail of the extended benefits.';
    divEl3.append(pEl70);

    const h3El24 = document.createElement('h3');
    h3El24.textContent = 'Understand the waiting period';
    divEl3.append(h3El24);

    const pEl71 = document.createElement('p');
    pEl71.textContent = 'Did you know? You may avail yourself of continuity benefits when porting your health policy. There are three types of waiting periods under health insurance: Initial waiting period, Waiting period for named ailments, and Waiting period due to pre-existing diseases. When porting a health insurance policy, you must consider how it will affect the waiting periods served with your current insurer.';
    divEl3.append(pEl71);

    const h3El25 = document.createElement('h3');
    h3El25.textContent = 'Give correct details about your medical health';
    divEl3.append(h3El25);

    const pEl72 = document.createElement('p');
    pEl72.textContent = 'Hiding the current medical conditions of the insured members may lead to unnecessary hassles during claim filing. Therefore, you must provide correct medical details when porting your policy to a new insurer.';
    divEl3.append(pEl72);

    const h3El26 = document.createElement('h3');
    h3El26.textContent = 'Choose a higher sum insured';
    divEl3.append(h3El26);

    const pEl73 = document.createElement('p');
    pEl73.textContent = 'Choosing a higher sum insured may help you avail yourself a broader coverage throughout the policy year. Hence, you should choose a higher sum insured when you port.';
    divEl3.append(pEl73);

    const h3El27 = document.createElement('h3');
    h3El27.textContent = 'Check Insurer Details';
    divEl3.append(h3El27);

    const pEl74 = document.createElement('p');
    pEl74.textContent = 'Knowing details like discounts, coverage, the company’s empanelled network healthcare providers and the claim settlement ratio might be a good idea. It might also help to check the ratings on the company’s social media handles to understand the overall customer experience.';
    divEl3.append(pEl74);

    const h2El22 = document.createElement('h2');
    h2El22.textContent = 'Get Easy Claim Settlement With Care Health Customer App';
    divEl3.append(h2El22);

    const pEl75 = document.createElement('p');
    pEl75.textContent = 'Care Health Insurance strives to make quality health care accessible to everyone while maintaining a quick and hassle-free claim experience. The Care Health Customer App is an integrated app for all your health insurance needs. You can use this app for claim intimation, fill out a claim form online, upload the necessary claim documents, and track your claim status. Given below is the step-by-step process to file claim intimation using ‘Claim Genie’';
    divEl3.append(pEl75);

    const ulEl29 = document.createElement('ul');

    const liEl145 = document.createElement('li');
    liEl145.textContent = 'Download the Care Health Customer App from the Play Store or App Store.';
    const strongEl57 = document.createElement('strong');
    strongEl57.textContent = 'Step 1:';
    liEl145.prepend(strongEl57);
    ulEl29.append(liEl145);

    const liEl146 = document.createElement('li');
    liEl146.textContent = 'Create an account and log in to your Care Health account.';
    const strongEl58 = document.createElement('strong');
    strongEl58.textContent = 'Step 2:';
    liEl146.prepend(strongEl58);
    ulEl29.append(liEl146);

    const liEl147 = document.createElement('li');
    liEl147.textContent = 'Browse and choose the health insurance plan that fits your needs.';
    const strongEl59 = document.createElement('strong');
    strongEl59.textContent = 'Step 3:';
    liEl147.prepend(strongEl59);
    ulEl29.append(liEl147);

    const liEl148 = document.createElement('li');
    liEl148.textContent = 'Enter personal details and required health information to complete the application.';
    const strongEl60 = document.createElement('strong');
    strongEl60.textContent = 'Step 4:';
    liEl148.prepend(strongEl60);
    ulEl29.append(liEl148);

    const liEl149 = document.createElement('li');
    liEl149.textContent = 'Review your details and confirm your policy for activation.';
    const strongEl61 = document.createElement('strong');
    strongEl61.textContent = 'Step 5:';
    liEl149.prepend(strongEl61);
    ulEl29.append(liEl149);

    divEl3.append(ulEl29);

    const pEl76 = document.createElement('p');
    pEl76.textContent = 'You can also track the status of the claim, just click on the ‘Claim Tracking’ option on the homepage. The list of active claims will be presented on the screen. Click on “Track Claim” on the relevant claim. The latest claim status will then be displayed on top of the screen. This app can also be used to download the query/settlement letter or approval letter.';
    divEl3.append(pEl76);
    articleEl13.append(divEl3);
    sectionEl7.append(articleEl13);
    container.append(sectionEl7);

    const sectionEl15 = document.createElement('section');
    sectionEl15.setAttribute('class', 'custom_block white_bg comprehensive_detail custom_container');

    const articleEl29 = document.createElement('article');
    articleEl29.setAttribute('class', 'cn_bg-blue cn_p-30');

    const divEl63 = document.createElement('div');
    divEl63.setAttribute('class', 'cn_container');

    const divEl64 = document.createElement('div');
    divEl64.setAttribute('class', 'care_product');

    const divEl65 = document.createElement('div');
    divEl65.setAttribute('class', '');
    divEl64.append(divEl65);
    divEl63.append(divEl64);
    articleEl29.append(divEl63);
    sectionEl15.append(articleEl29);
    container.append(sectionEl15);

    const sectionEl16 = document.createElement('section');
    sectionEl16.setAttribute('class', 'custom_block blue_bg what_coverd custom_container');

    const articleEl30 = document.createElement('article');

    const divEl66 = document.createElement('div');
    divEl66.setAttribute('class', 'carefreedom_product');

    const divEl67 = document.createElement('div');
    divEl67.setAttribute('class', 'cn_container');

    const divEl68 = document.createElement('div');
    divEl68.setAttribute('class', 'orrange_bullet_text');

    const h2El23 = document.createElement('h2');
    h2El23.setAttribute('id', 'advantages-of-buying-online');
    h2El23.textContent = 'Advantages of Buying Health Insurance Online';
    divEl68.append(h2El23);

    const pEl77 = document.createElement('p');
    pEl77.textContent = 'Embrace the ease of securing your health online, with our digitally-enhanced portal. All you need to do is simply select your preferred health cover plans, fill up the details, and pay through secure transaction modes. Here’s why and how we ensure customer-friendly purchase a medical insurance plan online:';
    divEl68.append(pEl77);

    const h3El28 = document.createElement('h3');
    h3El28.textContent = 'Chat Option for Queries';
    divEl68.append(h3El28);

    const pEl78 = document.createElement('p');
    pEl78.textContent = 'Read our terms and conditions to understand the details of your insurance policy.';
    const aEl17 = document.createElement('a');

    aEl17.setAttribute('href', 'https://www.careinsurance.com/terms_conditions.html');
    aEl17.textContent = 'terms and conditions';
    pEl78.append(aEl17);
    divEl68.append(pEl78);

    const h3El29 = document.createElement('h3');
    h3El29.textContent = 'Instant Premium Quote Calculation';
    divEl68.append(h3El29);

    const pEl79 = document.createElement('p');
    pEl79.textContent = 'We facilitate digital premium calculators to help you evaluate and opt for customised healthcare insurance for your family members.The ability to choose your desired health coverage and optional benefits helps us serve you the best mediclaim policies.';
    divEl68.append(pEl79);

    const h3El30 = document.createElement('h3');
    h3El30.textContent = 'Secure Payment Modes';
    divEl68.append(h3El30);

    const pEl80 = document.createElement('p');
    pEl80.textContent = 'Read our terms and conditions to understand the details of your insurance policy.';
    const aEl18 = document.createElement('a');
    aEl18.setAttribute('href', 'https://www.careinsurance.com/health-insurance/mediclaim-policy');
    aEl18.textContent = 'mediclaim policy';
    pEl80.append(aEl18);
    divEl68.append(pEl80);

    const h3El31 = document.createElement('h3');
    h3El31.textContent = 'Transparent Policy Evaluation';
    divEl68.append(h3El31);

    const pEl81 = document.createElement('p');
    pEl81.textContent = 'What we promise on paper is what you get in times of emergencies. All our healthcare insurance plans include all the terms and conditions for your ready reference. Our commitment to transparency knows no bounds!';
    divEl68.append(pEl81);

    const h3El32 = document.createElement('h3');
    h3El32.textContent = 'Readily Available Value Added Services';
    divEl68.append(h3El32);

    const pEl82 = document.createElement('p');
    pEl82.textContent = 'While browsing online through our mediclaim policies, you can easily check out other add-on benefits. These include OPD care, co-payment waiver, and reduced wait time for pre-existing diseases, among others, to cover your specific needs.';
    divEl68.append(pEl82);

    const h3El33 = document.createElement('h3');
    h3El33.textContent = 'Helps Save Money';
    divEl68.append(h3El33);

    const pEl83 = document.createElement('p');
    pEl83.textContent = 'The offline method of buying mediclaim policies usually result in increased costs due to numerous factors like agent fees. Insurance agents get a commission for selling mediclaim policies , which increase the cost of the policy. Purchasing a health insurance plan online can help eliminate overhead expenses. Further, some insurance companies also offer an additional discount when you purchase plans using their online platform.';
    divEl68.append(pEl83);
    divEl67.append(divEl68);
    divEl66.append(divEl67);
    articleEl30.append(divEl66);
    sectionEl16.append(articleEl30);
    container.append(sectionEl16);


    const sectionEl17 = document.createElement('section');
    sectionEl17.setAttribute('class', 'awards-sec');

    const articleEl31 = document.createElement('article');
    articleEl31.setAttribute('class', 'awards-head');

    const h2El24 = document.createElement('h2');
    h2El24.setAttribute('id', 'Awards');
    h2El24.textContent = 'Awards & Recognition';
    articleEl31.append(h2El24);

    const pEl84 = document.createElement('p');
    pEl84.textContent = 'Recognized for Excellence in Health Insurance and Customer Service';
    articleEl31.append(pEl84);
    sectionEl17.append(articleEl31);

    const sectionEl18 = document.createElement('section');
    sectionEl18.setAttribute('class', 'awards');

    const articleEl32 = document.createElement('article');
    articleEl32.setAttribute('class', 'award');

    const h3El34 = document.createElement('h3');
    h3El34.textContent = 'Overall Achievement Award’ (SAHI category)';
    articleEl32.append(h3El34);

    const pEl85 = document.createElement('p');
    pEl85.textContent = 'ASSOCHAM 16th Global Insurance Summit & Awards';
    articleEl32.append(pEl85);

    const aEl19 = document.createElement('a');
    aEl19.setAttribute('href', 'https://www.ptinews.com/press-release/care-health-insurance-introduces-customers-to-the-future-of-health-insurance-launches-ultimate-care/2227657');
    aEl19.setAttribute('rel', 'nofollow');
    aEl19.setAttribute('target', '_blank');

    const imgEl26 = document.createElement('img');
    imgEl26.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/assocham.webp');
    imgEl26.setAttribute('alt', '');
    imgEl26.setAttribute('title', '');
    imgEl26.setAttribute('width', '320');
    imgEl26.setAttribute('height', '65');
    aEl19.append(imgEl26);
    articleEl32.append(aEl19);
    sectionEl18.append(articleEl32);

    const articleEl33 = document.createElement('article');
    articleEl33.setAttribute('class', 'award');

    const h3El35 = document.createElement('h3');
    h3El35.textContent = 'Claims Service Leader for the Year';
    articleEl33.append(h3El35);

    const pEl86 = document.createElement('p');
    pEl86.textContent = 'India Insurance Summit & Awards 2024';
    articleEl33.append(pEl86);

    const aEl20 = document.createElement('a');
    aEl20.setAttribute('href', 'https://www.business-standard.com/content/press-releases-ani/care-health-insurance-introduces-customers-to-the-future-of-health-insurance-launches-ultimate-care-125012301148_1.html');
    aEl20.setAttribute('rel', 'nofollow');
    aEl20.setAttribute('target', '_blank');

    const imgEl27 = document.createElement('img');
    imgEl27.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/india-insurance-summit-awards-2024.webp');
    imgEl27.setAttribute('alt', 'India Insurance Summit & Awards 2024');
    imgEl27.setAttribute('title', 'India Insurance Summit & Awards 2024');
    imgEl27.setAttribute('width', '320');
    imgEl27.setAttribute('height', '65');
    aEl20.append(imgEl27);
    articleEl33.append(aEl20);
    sectionEl18.append(articleEl33);

    const articleEl34 = document.createElement('article');
    articleEl34.setAttribute('class', 'award');

    const h3El36 = document.createElement('h3');
    h3El36.textContent = 'Best Health Insurance Company in Rural Sector';
    articleEl34.append(h3El36);

    const pEl87 = document.createElement('p');
    pEl87.textContent = 'India Insurance Summit & Awards 2024';
    articleEl34.append(pEl87);

    const aEl21 = document.createElement('a');
    aEl21.setAttribute('href', 'https://www.aninews.in/news/business/care-health-insurance-introduces-customers-to-the-future-of-health-insurance-launches-ultimate-care20250123173857/');
    aEl21.setAttribute('rel', 'nofollow');
    aEl21.setAttribute('target', '_blank');

    const imgEl28 = document.createElement('img');
    imgEl28.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/india-insurance-summit-awards-2024.webp');
    imgEl28.setAttribute('alt', 'India Insurance Summit & Awards 2024');
    imgEl28.setAttribute('title', 'India Insurance Summit & Awards 2024');
    imgEl28.setAttribute('width', '320');
    imgEl28.setAttribute('height', '65');
    aEl21.append(imgEl28);
    articleEl34.append(aEl21);
    sectionEl18.append(articleEl34);

    const articleEl35 = document.createElement('article');
    articleEl35.setAttribute('class', 'award');

    const h3El37 = document.createElement('h3');
    h3El37.textContent = 'Best Health Insurance Plan – Care Plus';
    articleEl35.append(h3El37);

    const pEl88 = document.createElement('p');
    pEl88.textContent = 'Global Financial Planner’s Summit 2024';
    articleEl35.append(pEl88);

    const aEl22 = document.createElement('a');
    aEl22.setAttribute('href', 'https://www.tribuneindia.com/news/business/care-health-insurance-introduces-customers-to-the-future-of-health-insurance-launches-ultimate-care/');
    aEl22.setAttribute('rel', 'nofollow');
    aEl22.setAttribute('target', '_blank');

    const imgEl29 = document.createElement('img');
    imgEl29.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/global-financial-planners-summit.webp');
    imgEl29.setAttribute('alt', 'Best Health Insurance Plan – Care Plus');
    imgEl29.setAttribute('title', 'Best Health Insurance Plan – Care Plus');
    imgEl29.setAttribute('width', '320');
    imgEl29.setAttribute('height', '65');
    aEl22.append(imgEl29);
    articleEl35.append(aEl22);
    sectionEl18.append(articleEl35);
    sectionEl17.append(sectionEl18);
    container.append(sectionEl17);

    const sectionEl19 = document.createElement('section');
    sectionEl19.setAttribute('class', 'media-coverage');

    const h2El25 = document.createElement('h2');
    h2El25.setAttribute('id', 'how-to-calculate-premium');
    h2El25.textContent = 'Care Health Insurance in the Media Limelight';
    sectionEl19.append(h2El25);

    const sectionEl20 = document.createElement('section');
    sectionEl20.setAttribute('class', 'media-coverage-section');

    const articleEl36 = document.createElement('article');
    articleEl36.setAttribute('class', 'media');

    const asideEl13 = document.createElement('aside');

    const imgEl30 = document.createElement('img');
    imgEl30.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/ob.webp');
    imgEl30.setAttribute('alt', '');
    imgEl30.setAttribute('title', '');
    imgEl30.setAttribute('width', '400');
    imgEl30.setAttribute('height', '50');
    asideEl13.append(imgEl30);
    articleEl36.append(asideEl13);

    const h3El38 = document.createElement('h3');
    h3El38.textContent = 'Cashless Claim Within An Hour! How Can Customers Take Full Benefit Of IRDAI\'s New Update?';
    articleEl36.append(h3El38);

    const pEl89 = document.createElement('p');
    pEl89.textContent = 'Cashless claim settlements are a cornerstone of the modern insurance landscape, offering numerous benefits to policyholders and the industry alike. Irdai in a master circular released on Wednesday alerted all insurance providers...';
    articleEl36.append(pEl89);

    const aEl23 = document.createElement('a');
    aEl23.setAttribute('href', 'https://www.outlookbusiness.com/personal-finance/insurance/cashless-claim-within-an-hour-how-can-customers-take-full-benefit-of-irdais-new-update');
    aEl23.textContent = 'Read more';
    articleEl36.append(aEl23);
    sectionEl20.append(articleEl36);

    const articleEl37 = document.createElement('article');
    articleEl37.setAttribute('class', 'media');

    const asideEl14 = document.createElement('aside');

    const imgEl31 = document.createElement('img');
    imgEl31.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/bs.webp');
    imgEl31.setAttribute('alt', '');
    imgEl31.setAttribute('title', '');
    imgEl31.setAttribute('width', '400');
    imgEl31.setAttribute('height', '50');
    asideEl14.append(imgEl31);
    articleEl37.append(asideEl14);

    const h3El39 = document.createElement('h3');
    h3El39.textContent = 'Compare features, costs regularly to find a better health insurance';
    articleEl37.append(h3El39);

    const pEl90 = document.createElement('p');
    pEl90.textContent = 'Health insurance premiums are on their way up. A survey of 11,000 owners of personal health insurance policies by LocalCircles found that 52 per cent had witnessed an over 25 per cent increase in their renewal premiums in the past 12 months...';
    articleEl37.append(pEl90);

    const aEl24 = document.createElement('a');
    aEl24.setAttribute('href', 'https://www.business-standard.com/finance/personal-finance/compare-features-costs-regularly-to-find-a-better-health-insurance-124051301238_1.html');
    aEl24.textContent = 'Read more';
    articleEl37.append(aEl24);
    sectionEl20.append(articleEl37);

    const articleEl38 = document.createElement('article');
    articleEl38.setAttribute('class', 'media');

    const asideEl15 = document.createElement('aside');

    const imgEl32 = document.createElement('img');
    imgEl32.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/mint.webp');
    imgEl32.setAttribute('alt', '');
    imgEl32.setAttribute('title', '');
    imgEl32.setAttribute('width', '400');
    imgEl32.setAttribute('height', '50');
    asideEl15.append(imgEl32);
    articleEl38.append(asideEl15);

    const h3El40 = document.createElement('h3');
    h3El40.textContent = 'Health Insurance for senior citizens: How the no age restriction new rules will benefit the elderly— Explained';
    articleEl38.append(h3El40);

    const pEl91 = document.createElement('p');
    pEl91.textContent = 'Health Insurance for senior citizens: The recent amendments by the Insurance Regulatory and Development Authority of India (IRDAI) regarding health insurance rules are set to benefit senior citizens significantly...';
    articleEl38.append(pEl91);

    const aEl25 = document.createElement('a');
    aEl25.setAttribute('href', 'https://www.livemint.com/insurance/health-insurance-for-senior-citizens-how-the-no-age-restriction-new-rules-will-benefit-the-elderly-explained-irdai-11714811264494.html');
    aEl25.textContent = 'Read more';
    articleEl38.append(aEl25);
    sectionEl20.append(articleEl38);

    const articleEl39 = document.createElement('article');
    articleEl39.setAttribute('class', 'media');

    const asideEl16 = document.createElement('aside');

    const imgEl33 = document.createElement('img');
    imgEl33.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/fe.webp');
    imgEl33.setAttribute('alt', '');
    imgEl33.setAttribute('title', '');
    imgEl33.setAttribute('width', '400');
    imgEl33.setAttribute('height', '50');
    asideEl16.append(imgEl33);
    articleEl39.append(asideEl16);

    const h3El41 = document.createElement('h3');
    h3El41.textContent = 'Mother’s Day 2024: Understanding the significance of health insurance for women';
    articleEl39.append(h3El41);

    const pEl92 = document.createElement('p');
    pEl92.textContent = 'As we celebrate Mother’s Day, it is crucial to reflect on the health-related challenges that women face. From reproductive health to mental wellness, our mothers can encounter obstacles that demand attention, care and support...';
    articleEl39.append(pEl92);

    const aEl26 = document.createElement('a');
    aEl26.setAttribute('href', 'https://www.financialexpress.com/money/mothers-day-2024-understanding-the-significance-of-health-insurance-for-women-3484671/');
    aEl26.textContent = 'Read more';
    articleEl39.append(aEl26);
    sectionEl20.append(articleEl39);

    const articleEl40 = document.createElement('article');
    articleEl40.setAttribute('class', 'media');

    const asideEl17 = document.createElement('aside');

    const imgEl34 = document.createElement('img');
    imgEl34.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/a-b-p.webp');
    imgEl34.setAttribute('alt', '');
    imgEl34.setAttribute('title', '');
    imgEl34.setAttribute('width', '400');
    imgEl34.setAttribute('height', '50');
    asideEl17.append(imgEl34);
    articleEl40.append(asideEl17);

    const h3El42 = document.createElement('h3');
    h3El42.textContent = 'Cancer Coverage: Why Health Insurance Is Essential? Here Are 6 Key Reasons';
    articleEl40.append(h3El42);

    const pEl93 = document.createElement('p');
    pEl93.textContent = 'Cancer Coverage: Ever increasing number of cancer cases in India present a challenging aspect of the nation\'s healthcare landscape. According to the National Cancer Registry Programme, India recorded about 1.46 million new cases of cancer in 2022....';
    articleEl40.append(pEl93);

    const aEl27 = document.createElement('a');
    aEl27.setAttribute('href', 'https://news.abplive.com/business/personal-finance/cancer-coverage-why-health-insurance-is-essential-here-are-6-key-reasons-1682462');
    aEl27.textContent = 'Read more';
    articleEl40.append(aEl27);
    sectionEl20.append(articleEl40);

    const articleEl41 = document.createElement('article');
    articleEl41.setAttribute('class', 'media');

    const asideEl18 = document.createElement('aside');

    const imgEl35 = document.createElement('img');
    imgEl35.setAttribute('src', 'https://cms.careinsurance.com/cms/public/assets/media/bs.webp');
    imgEl35.setAttribute('alt', '');
    imgEl35.setAttribute('title', '');
    imgEl35.setAttribute('width', '400');
    imgEl35.setAttribute('height', '50');
    asideEl18.append(imgEl35);
    articleEl41.append(asideEl18);

    const h3El43 = document.createElement('h3');
    h3El43.textContent = 'Customise insurance riders to fit your family\'s medical background';
    articleEl41.append(h3El43);

    const pEl94 = document.createElement('p');
    pEl94.textContent = 'A growing number of health insurance customers are nowadays supplementing their base health insurance policies with riders. According to insurance aggregator Policybazaar.com, while only 15 per cent of customers purchased riders...';
    articleEl41.append(pEl94);

    const aEl28 = document.createElement('a');
    aEl28.setAttribute('href', 'https://www.business-standard.com/finance/personal-finance/customise-insurance-riders-to-fit-your-family-s-medical-background-124050801343_1.html');
    aEl28.textContent = 'Read more';
    articleEl41.append(aEl28);
    sectionEl20.append(articleEl41);
    sectionEl19.append(sectionEl20);
    container.append(sectionEl19);

    const sectionEl21 = document.createElement('section');
    sectionEl21.setAttribute('class', 'custom_block');

    const articleEl42 = document.createElement('article');
    articleEl42.setAttribute('id', 'hospital_network');
    articleEl42.setAttribute('class', 'map_list_view');

    const divEl69 = document.createElement('div');
    divEl69.setAttribute('class', 'map_btn map_in in');

    const divEl70 = document.createElement('div');
    divEl70.setAttribute('class', 'map_show');

    const divEl71 = document.createElement('div');
    divEl71.setAttribute('class', 'second_section');
    divEl71.setAttribute('id', 'hospital_network');

    const sectionEl22 = document.createElement('section');
    sectionEl22.setAttribute('class', 'hospital_services third_section lozad hospital_service_background_img');

    const divEl72 = document.createElement('div');
    divEl72.setAttribute('class', 'custom_container');

    const divEl73 = document.createElement('div');
    divEl73.setAttribute('class', 'd-flex');

    const divEl74 = document.createElement('div');
    divEl74.setAttribute('class', 'left_sec');
    divEl74.setAttribute('data-aos', 'fade-right');

    const h2El26 = document.createElement('h2');
    h2El26.textContent = '21600+ Healthcare providers offering cashless treatment across the country';
    divEl74.append(h2El26);

    const divEl75 = document.createElement('div');
    divEl75.setAttribute('class', 'd-flex');

    const pEl95 = document.createElement('p');
    pEl95.textContent = 'Look for hospitals around you';
    divEl75.append(pEl95);
    divEl74.append(divEl75);

    const formEl = document.createElement('form');
    formEl.setAttribute('name', 'geo_loc_form');
    formEl.setAttribute('class', 'geo_loc_form');
    formEl.setAttribute('id', 'map');

    const inputEl = document.createElement('input');
    inputEl.setAttribute('type', 'text');
    inputEl.setAttribute('name', 'nh_pincode');
    inputEl.setAttribute('id', 'nh_pincode');
    inputEl.setAttribute('onfocusout', 'getCity(this.value)');
    inputEl.setAttribute('oninput', 'return validName(this);');
    inputEl.setAttribute('class', 'form-control');
    inputEl.setAttribute('placeholder', 'Enter Your City');
    inputEl.setAttribute('autocomplete', 'off');
    formEl.append(inputEl);
    divEl74.append(formEl);

    const pEl96 = document.createElement('p');
    pEl96.setAttribute('class', 'visible_text total_hospital');
    divEl74.append(pEl96);

    const aEl29 = document.createElement('a');
    aEl29.setAttribute('href', 'https://www.careinsurance.com/health-plan-certified-network-hospitals.html');
    aEl29.setAttribute('target', '_blank');
    aEl29.setAttribute('rel', 'noopener');
    aEl29.setAttribute('class', 'bottom_a');
    aEl29.textContent = 'Detailed Hospital List';
    divEl74.append(aEl29);
    divEl73.append(divEl74);

    const divEl76 = document.createElement('div');
    divEl76.setAttribute('class', 'right-sec');
    divEl76.setAttribute('data-aos', 'fade-up');

    const divEl77 = document.createElement('div');
    divEl77.setAttribute('class', 'right_width');

    const divEl78 = document.createElement('div');
    divEl78.setAttribute('class', 'res_img_none');

    const imgEl36 = document.createElement('img');
    imgEl36.setAttribute('title', '21600+ Healthcare providers offering cashless treatment across the country');
    imgEl36.setAttribute('alt', '21600+ Healthcare providers offering cashless treatment across the country');
    imgEl36.setAttribute('width', '450');
    imgEl36.setAttribute('height', '638');
    imgEl36.setAttribute('loading', 'lazy');
    imgEl36.setAttribute('src', 'https://www.careinsurance.com/images/ipad.png');
    // imgEl36.setAttribute('data-src', '');
    imgEl36.setAttribute('class', 'lozad res_img_none');
    divEl78.append(imgEl36);
    divEl77.append(divEl78);

    const divEl79 = document.createElement('div');
    divEl79.setAttribute('class', 'container_map');

    const divEl80 = document.createElement('div');
    divEl80.setAttribute('class', 'empty_state image_show');

    const imgEl37 = document.createElement('img');
    imgEl37.setAttribute('alt', 'Map empty');
    imgEl37.setAttribute('title', 'Map');
    imgEl37.setAttribute('width', '140');
    imgEl37.setAttribute('height', '140');
    imgEl37.setAttribute('class', 'lozad');
    imgEl37.setAttribute('src', 'https://www.careinsurance.com/images/map-empty.svg');
    // imgEl37.setAttribute('data-src', "");
    divEl80.append(imgEl37);
    divEl79.append(divEl80);

    const divEl81 = document.createElement('div');
    divEl81.setAttribute('class', 'list_view list_show');
    divEl79.append(divEl81);
    divEl77.append(divEl79);
    divEl76.append(divEl77);
    divEl73.append(divEl76);
    divEl72.append(divEl73);
    sectionEl22.append(divEl72);
    divEl71.append(sectionEl22);
    divEl70.append(divEl71);
    divEl69.append(divEl70);
    articleEl42.append(divEl69);
    sectionEl21.append(articleEl42);
    container.append(sectionEl21);

    const divEl82 = document.createElement('div');
    divEl82.setAttribute('id', 'voice_of_customer');

    const sectionEl23 = document.createElement('section');
    sectionEl23.setAttribute('class', 'rev_testimonial_sec');

    const divEl83 = document.createElement('div');
    divEl83.setAttribute('class', 'custom_container');

    const h2El27 = document.createElement('h2');
    h2El27.setAttribute('class', 'testimonial_heading');
    h2El27.textContent = 'Voice of Our Customer';
    divEl83.append(h2El27);

    const divEl84 = document.createElement('div');
    divEl84.setAttribute('class', 'tabs');
    const divEl85 = document.createElement('div');

    // Button 1: Reviews & Ratings
    const buttonEl1 = document.createElement('button');
    buttonEl1.setAttribute('class', 'tablink active');
    buttonEl1.setAttribute('data-voice', 'revies_rating_slider');
    buttonEl1.setAttribute('onclick', "openTab(event, 'revies_rating')");
    buttonEl1.textContent = 'Reviews & Ratings';
    divEl85.append(buttonEl1);

    // Button 2: Testimonial
    const buttonEl2 = document.createElement('button');
    buttonEl2.setAttribute('class', 'tablink');
    buttonEl2.setAttribute('data-voice', 'testimonial_slider');
    buttonEl2.setAttribute('onclick', "openTab(event, 'testimonial')");
    buttonEl2.textContent = 'Testimonial';
    divEl85.append(buttonEl2);

    // Button 3: Why Care Health Insurance
    const buttonEl3 = document.createElement('button');
    buttonEl3.setAttribute('class', 'tablink');
    buttonEl3.setAttribute('data-voice', 'why_religare');
    buttonEl3.setAttribute('onclick', "openTab(event, 'whyreligare')");
    buttonEl3.textContent = 'Why Care Health Insurance';
    divEl85.append(buttonEl3);

    // Append to parent containers
    divEl84.append(divEl85);
    divEl83.append(divEl84);

    const divEl86 = document.createElement('div');
    divEl86.setAttribute('class', 'sliders');

    const divEl87 = document.createElement('div');
    divEl87.setAttribute('class', 'rev_btn');

    const divEl88 = document.createElement('div');
    divEl88.setAttribute('id', 'revies_rating');
    divEl88.setAttribute('class', 'tabcontent activetab');

    const divEl89 = document.createElement('div');
    divEl89.setAttribute('class', 'star-value');

    const spanEl16 = document.createElement('span');
    spanEl16.setAttribute('class', 'starnumber');
    spanEl16.textContent = '5';
    divEl89.append(spanEl16);

    const divEl90 = document.createElement('div');
    divEl90.setAttribute('class', 'custom_star_block');

    const spanEl17 = document.createElement('span');
    spanEl17.setAttribute('data-star', '1');
    divEl90.append(spanEl17);

    const spanEl18 = document.createElement('span');
    spanEl18.setAttribute('data-star', '1');
    divEl90.append(spanEl18);

    const spanEl19 = document.createElement('span');
    spanEl19.setAttribute('data-star', '1');
    divEl90.append(spanEl19);

    const spanEl20 = document.createElement('span');
    spanEl20.setAttribute('data-star', '1');
    divEl90.append(spanEl20);

    const spanEl21 = document.createElement('span');
    spanEl21.setAttribute('data-star', '1');
    divEl90.append(spanEl21);
    divEl89.append(divEl90);

    const aEl30 = document.createElement('a');
    aEl30.setAttribute('class', 'write-review-link mobile_hide');
    aEl30.setAttribute('href', 'https://www.careinsurance.com/reviews/?writereview=product&select_product=20');
    aEl30.setAttribute('target', '_blank');
    aEl30.setAttribute('rel', 'noopener');
    aEl30.textContent = 'Write a Review';
    divEl89.append(aEl30);
    divEl88.append(divEl89);

    const divEl91 = document.createElement('div');
    divEl91.setAttribute('class', 'revies_rating_slider slick-initialized slick-slider');

    const iEl6 = document.createElement('i');
    iEl6.setAttribute('alt', 'Previous');
    iEl6.setAttribute('title', 'Previous');
    iEl6.setAttribute('class', 'slick_prev material-icons slick-arrow slick-disabled');
    iEl6.setAttribute('aria-disabled', 'true');
    iEl6.setAttribute('style', '');
    iEl6.textContent = 'arrow_back';
    divEl91.append(iEl6);

    const divEl92 = document.createElement('div');
    divEl92.setAttribute('class', 'slick-list draggable');

    const divEl93 = document.createElement('div');
    divEl93.setAttribute('class', 'slick-track');
    divEl93.setAttribute('style', 'opacity: 1; width: 2550px; transform: translate3d(0px, 0px, 0px);');

    const divEl94 = document.createElement('div');
    divEl94.setAttribute('class', 'rating-card slick-slide slick-current slick-active');
    divEl94.setAttribute('style', 'width: 235px;');
    divEl94.setAttribute('tabindex', '0');
    divEl94.setAttribute('data-slick-index', '0');
    divEl94.setAttribute('aria-hidden', 'false');

    const divEl95 = document.createElement('div');
    divEl95.setAttribute('class', 'card-top');

    const spanEl22 = document.createElement('span');
    spanEl22.setAttribute('class', 'raterinitials');
    spanEl22.textContent = 'S';
    divEl95.append(spanEl22);

    const divEl96 = document.createElement('div');
    divEl96.setAttribute('class', 'review-details');

    const spanEl23 = document.createElement('span');
    spanEl23.setAttribute('class', 'ratername');
    spanEl23.textContent = 'Seetha';
    divEl96.append(spanEl23);

    const spanEl24 = document.createElement('span');
    spanEl24.setAttribute('class', 'ratingdate');
    spanEl24.textContent = 'March 11, 2025';
    divEl96.append(spanEl24);
    divEl95.append(divEl96);
    divEl94.append(divEl95);

    const divEl97 = document.createElement('div');
    divEl97.setAttribute('class', 'cardbottom');

    const divEl98 = document.createElement('div');
    divEl98.setAttribute('class', 'review-product');

    const spanEl25 = document.createElement('span');
    spanEl25.setAttribute('class', 'insurancetype');
    spanEl25.textContent = 'Care Supreme';
    divEl98.append(spanEl25);

    const divEl99 = document.createElement('div');
    divEl99.setAttribute('class', 'custom_star_block');

    const spanEl26 = document.createElement('span');
    spanEl26.setAttribute('data-five-star', '5');
    divEl99.append(spanEl26);

    const spanEl27 = document.createElement('span');
    spanEl27.setAttribute('class', 'stargiven');
    spanEl27.textContent = '5';
    divEl99.append(spanEl27);
    divEl98.append(divEl99);
    divEl97.append(divEl98);

    const pEl97 = document.createElement('p');
    pEl97.setAttribute('class', 'ratetitle');
    pEl97.textContent = 'Claim';
    divEl97.append(pEl97);

    const divEl100 = document.createElement('div');
    divEl100.setAttribute('class', 'ratedesc');
    divEl100.textContent = 'Claim is super fast and super easy good services';
    divEl97.append(divEl100);
    divEl94.append(divEl97);
    divEl93.append(divEl94);

    const divEl101 = document.createElement('div');
    divEl101.setAttribute('class', 'rating-card slick-slide slick-active');
    divEl101.setAttribute('style', 'width: 235px;');
    divEl101.setAttribute('tabindex', '0');
    divEl101.setAttribute('data-slick-index', '1');
    divEl101.setAttribute('aria-hidden', 'false');

    const divEl102 = document.createElement('div');
    divEl102.setAttribute('class', 'card-top');

    const spanEl28 = document.createElement('span');
    spanEl28.setAttribute('class', 'raterinitials');
    spanEl28.textContent = 'D';
    divEl102.append(spanEl28);

    const divEl103 = document.createElement('div');
    divEl103.setAttribute('class', 'review-details');

    const spanEl29 = document.createElement('span');
    spanEl29.setAttribute('class', 'ratername');
    spanEl29.textContent = 'Diwakar';
    divEl103.append(spanEl29);

    const spanEl30 = document.createElement('span');
    spanEl30.setAttribute('class', 'ratingdate');
    spanEl30.textContent = 'March 11, 2025';
    divEl103.append(spanEl30);
    divEl102.append(divEl103);
    divEl101.append(divEl102);

    const divEl104 = document.createElement('div');
    divEl104.setAttribute('class', 'cardbottom');

    const divEl105 = document.createElement('div');
    divEl105.setAttribute('class', 'review-product');

    const spanEl31 = document.createElement('span');
    spanEl31.setAttribute('class', 'insurancetype');
    spanEl31.textContent = 'Care Supreme';
    divEl105.append(spanEl31);

    const divEl106 = document.createElement('div');
    divEl106.setAttribute('class', 'custom_star_block');

    const spanEl32 = document.createElement('span');
    spanEl32.setAttribute('data-five-star', '5');
    divEl106.append(spanEl32);

    const spanEl33 = document.createElement('span');
    spanEl33.setAttribute('class', 'stargiven');
    spanEl33.textContent = '5';
    divEl106.append(spanEl33);
    divEl105.append(divEl106);
    divEl104.append(divEl105);

    const pEl98 = document.createElement('p');
    pEl98.setAttribute('class', 'ratetitle');
    pEl98.textContent = 'Services and claim';
    divEl104.append(pEl98);

    const divEl107 = document.createElement('div');
    divEl107.setAttribute('class', 'ratedesc');
    divEl107.textContent = 'I took a policy in Paris branch chennai mr sudhakar the zonal head of Chennai branch he is so kind and helpful I suggest care is best for all services and claim in care is good and our claims getting approved with in a hour';
    divEl104.append(divEl107);
    divEl101.append(divEl104);
    divEl93.append(divEl101);

    const divEl108 = document.createElement('div');
    divEl108.setAttribute('class', 'rating-card slick-slide slick-active');
    divEl108.setAttribute('style', 'width: 235px;');
    divEl108.setAttribute('tabindex', '0');
    divEl108.setAttribute('data-slick-index', '2');
    divEl108.setAttribute('aria-hidden', 'false');

    const divEl109 = document.createElement('div');
    divEl109.setAttribute('class', 'card-top');

    const spanEl34 = document.createElement('span');
    spanEl34.setAttribute('class', 'raterinitials');
    spanEl34.textContent = 'DD';
    divEl109.append(spanEl34);

    const divEl110 = document.createElement('div');
    divEl110.setAttribute('class', 'review-details');

    const spanEl35 = document.createElement('span');
    spanEl35.setAttribute('class', 'ratername');
    spanEl35.textContent = 'Divya Dwivedi';
    divEl110.append(spanEl35);

    const spanEl36 = document.createElement('span');
    spanEl36.setAttribute('class', 'ratingdate');
    spanEl36.textContent = 'December 20, 2024';
    divEl110.append(spanEl36);
    divEl109.append(divEl110);
    divEl108.append(divEl109);

    const divEl111 = document.createElement('div');
    divEl111.setAttribute('class', 'cardbottom');

    const divEl112 = document.createElement('div');
    divEl112.setAttribute('class', 'review-product');

    const spanEl37 = document.createElement('span');
    spanEl37.setAttribute('class', 'insurancetype');
    spanEl37.textContent = 'Care Supreme';
    divEl112.append(spanEl37);

    const divEl113 = document.createElement('div');
    divEl113.setAttribute('class', 'custom_star_block');

    const spanEl38 = document.createElement('span');
    spanEl38.setAttribute('data-five-star', '5');
    divEl113.append(spanEl38);

    const spanEl39 = document.createElement('span');
    spanEl39.setAttribute('class', 'stargiven');
    spanEl39.textContent = '5';
    divEl113.append(spanEl39);
    divEl112.append(divEl113);
    divEl111.append(divEl112);

    const pEl99 = document.createElement('p');
    pEl99.setAttribute('class', 'ratetitle');
    pEl99.textContent = 'I have been';
    divEl111.append(pEl99);

    const divEl114 = document.createElement('div');
    divEl114.setAttribute('class', 'ratedesc');
    divEl114.textContent = 'I really appreciate my';
    divEl111.append(divEl114);
    divEl108.append(divEl111);
    divEl93.append(divEl108);

    const divEl115 = document.createElement('div');
    divEl115.setAttribute('class', 'rating-card slick-slide');
    divEl115.setAttribute('style', 'width: 235px;');
    divEl115.setAttribute('tabindex', '-1');
    divEl115.setAttribute('data-slick-index', '3');
    divEl115.setAttribute('aria-hidden', 'true');

    const divEl116 = document.createElement('div');
    divEl116.setAttribute('class', 'card-top');

    const spanEl40 = document.createElement('span');
    spanEl40.setAttribute('class', 'raterinitials');
    spanEl40.textContent = 'SS';
    divEl116.append(spanEl40);

    const divEl117 = document.createElement('div');
    divEl117.setAttribute('class', 'review-details');

    const spanEl41 = document.createElement('span');
    spanEl41.setAttribute('class', 'ratername');
    spanEl41.textContent = 'SAURABH SINGH YADAV';
    divEl117.append(spanEl41);

    const spanEl42 = document.createElement('span');
    spanEl42.setAttribute('class', 'ratingdate');
    spanEl42.textContent = 'December 20, 2024';
    divEl117.append(spanEl42);
    divEl116.append(divEl117);
    divEl115.append(divEl116);

    const divEl118 = document.createElement('div');
    divEl118.setAttribute('class', 'cardbottom');

    const divEl119 = document.createElement('div');
    divEl119.setAttribute('class', 'review-product');

    const spanEl43 = document.createElement('span');
    spanEl43.setAttribute('class', 'insurancetype');
    spanEl43.textContent = 'Care Supreme';
    divEl119.append(spanEl43);

    const divEl120 = document.createElement('div');
    divEl120.setAttribute('class', 'custom_star_block');

    const spanEl44 = document.createElement('span');
    spanEl44.setAttribute('data-five-star', '5');
    divEl120.append(spanEl44);

    const spanEl45 = document.createElement('span');
    spanEl45.setAttribute('class', 'stargiven');
    spanEl45.textContent = '5';
    divEl120.append(spanEl45);
    divEl119.append(divEl120);
    divEl118.append(divEl119);

    const pEl100 = document.createElement('p');
    pEl100.setAttribute('class', 'ratetitle');
    pEl100.textContent = 'Best Health Insurance';
    divEl118.append(pEl100);

    const divEl121 = document.createElement('div');
    divEl121.setAttribute('class', 'ratedesc');
    divEl121.textContent = 'My policy with CARE health since 2019 and this year in FEB migrated in CARE SUPREME plan and made cashless claim in APOLLO  hospital Noida and got full claim with a deluxe room . Best Health insurance and plan Thanks CARE n TEAM.';
    divEl118.append(divEl121);
    divEl115.append(divEl118);
    divEl93.append(divEl115);

    const divEl122 = document.createElement('div');
    divEl122.setAttribute('class', 'rating-card slick-slide');
    divEl122.setAttribute('style', 'width: 235px;');
    divEl122.setAttribute('tabindex', '-1');
    divEl122.setAttribute('data-slick-index', '4');
    divEl122.setAttribute('aria-hidden', 'true');

    const divEl123 = document.createElement('div');
    divEl123.setAttribute('class', 'card-top');

    const spanEl46 = document.createElement('span');
    spanEl46.setAttribute('class', 'raterinitials');
    spanEl46.textContent = 'MV';
    divEl123.append(spanEl46);

    const divEl124 = document.createElement('div');
    divEl124.setAttribute('class', 'review-details');

    const spanEl47 = document.createElement('span');
    spanEl47.setAttribute('class', 'ratername');
    spanEl47.textContent = 'Masidda vitthal biradar';
    divEl124.append(spanEl47);

    const spanEl48 = document.createElement('span');
    spanEl48.setAttribute('class', 'ratingdate');
    spanEl48.textContent = 'October 22, 2024';
    divEl124.append(spanEl48);
    divEl123.append(divEl124);
    divEl122.append(divEl123);

    const divEl125 = document.createElement('div');
    divEl125.setAttribute('class', 'cardbottom');

    const divEl126 = document.createElement('div');
    divEl126.setAttribute('class', 'review-product');

    const spanEl49 = document.createElement('span');
    spanEl49.setAttribute('class', 'insurancetype');
    spanEl49.textContent = 'Care Supreme';
    divEl126.append(spanEl49);

    const divEl127 = document.createElement('div');
    divEl127.setAttribute('class', 'custom_star_block');

    const spanEl50 = document.createElement('span');
    spanEl50.setAttribute('data-five-star', '5');
    divEl127.append(spanEl50);

    const spanEl51 = document.createElement('span');
    spanEl51.setAttribute('class', 'stargiven');
    spanEl51.textContent = '5';
    divEl127.append(spanEl51);
    divEl126.append(divEl127);
    divEl125.append(divEl126);

    const pEl101 = document.createElement('p');
    pEl101.setAttribute('class', 'ratetitle');
    pEl101.textContent = 'confident in the service....';
    divEl125.append(pEl101);

    const divEl128 = document.createElement('div');
    divEl128.setAttribute('class', 'ratedesc');
    divEl128.textContent = 'I had no issues with my claim, and the approval process was quick. I am very happy to give a 5 Star rating  and confident in the service....';
    divEl125.append(divEl128);
    divEl122.append(divEl125);
    divEl93.append(divEl122);

    const divEl129 = document.createElement('div');
    divEl129.setAttribute('class', 'rating-card slick-slide');
    divEl129.setAttribute('style', 'width: 235px;');
    divEl129.setAttribute('tabindex', '-1');
    divEl129.setAttribute('data-slick-index', '5');
    divEl129.setAttribute('aria-hidden', 'true');

    const divEl130 = document.createElement('div');
    divEl130.setAttribute('class', 'card-top');

    const spanEl52 = document.createElement('span');
    spanEl52.setAttribute('class', 'raterinitials');
    spanEl52.textContent = 'SB';
    divEl130.append(spanEl52);

    const divEl131 = document.createElement('div');
    divEl131.setAttribute('class', 'review-details');

    const spanEl53 = document.createElement('span');
    spanEl53.setAttribute('class', 'ratername');
    spanEl53.textContent = 'Sunil babu, Palakkad';
    divEl131.append(spanEl53);

    const spanEl54 = document.createElement('span');
    spanEl54.setAttribute('class', 'ratingdate');
    spanEl54.textContent = 'October 22, 2024';
    divEl131.append(spanEl54);
    divEl130.append(divEl131);
    divEl129.append(divEl130);

    const divEl132 = document.createElement('div');
    divEl132.setAttribute('class', 'cardbottom');

    const divEl133 = document.createElement('div');
    divEl133.setAttribute('class', 'review-product');

    const spanEl55 = document.createElement('span');
    spanEl55.setAttribute('class', 'insurancetype');
    spanEl55.textContent = 'Care Supreme';
    divEl133.append(spanEl55);

    const divEl134 = document.createElement('div');
    divEl134.setAttribute('class', 'custom_star_block');

    const spanEl56 = document.createElement('span');
    spanEl56.setAttribute('data-five-star', '5');
    divEl134.append(spanEl56);

    const spanEl57 = document.createElement('span');
    spanEl57.setAttribute('class', 'stargiven');
    spanEl57.textContent = '5';
    divEl134.append(spanEl57);
    divEl133.append(divEl134);
    divEl132.append(divEl133);

    const pEl102 = document.createElement('p');
    pEl102.setAttribute('class', 'ratetitle');
    pEl102.textContent = 'Absolutely give care for you';
    divEl132.append(pEl102);

    const divEl135 = document.createElement('div');
    divEl135.setAttribute('class', 'ratedesc');
    divEl135.textContent = 'This health insurance cashless claim process timely done there I am so happy with this product. And thank to my consultant Mr Shukla ji, he was adding me to his family care insurance. So thanks to care health policy.';
    divEl132.append(divEl135);
    divEl129.append(divEl132);
    divEl93.append(divEl129);

    const divEl136 = document.createElement('div');
    divEl136.setAttribute('class', 'rating-card slick-slide');
    divEl136.setAttribute('style', 'width: 235px;');
    divEl136.setAttribute('tabindex', '-1');
    divEl136.setAttribute('data-slick-index', '6');
    divEl136.setAttribute('aria-hidden', 'true');

    const divEl137 = document.createElement('div');
    divEl137.setAttribute('class', 'card-top');

    const spanEl58 = document.createElement('span');
    spanEl58.setAttribute('class', 'raterinitials');
    spanEl58.textContent = 'RS';
    divEl137.append(spanEl58);

    const divEl138 = document.createElement('div');
    divEl138.setAttribute('class', 'review-details');

    const spanEl59 = document.createElement('span');
    spanEl59.setAttribute('class', 'ratername');
    spanEl59.textContent = 'Rajkumar saraf';
    divEl138.append(spanEl59);

    const spanEl60 = document.createElement('span');
    spanEl60.setAttribute('class', 'ratingdate');
    spanEl60.textContent = 'October 22, 2024';
    divEl138.append(spanEl60);
    divEl137.append(divEl138);
    divEl136.append(divEl137);

    const divEl139 = document.createElement('div');
    divEl139.setAttribute('class', 'cardbottom');

    const divEl140 = document.createElement('div');
    divEl140.setAttribute('class', 'review-product');

    const spanEl61 = document.createElement('span');
    spanEl61.setAttribute('class', 'insurancetype');
    spanEl61.textContent = 'Care Supreme';
    divEl140.append(spanEl61);

    const divEl141 = document.createElement('div');
    divEl141.setAttribute('class', 'custom_star_block');

    const spanEl62 = document.createElement('span');
    spanEl62.setAttribute('data-five-star', '5');
    divEl141.append(spanEl62);

    const spanEl63 = document.createElement('span');
    spanEl63.setAttribute('class', 'stargiven');
    spanEl63.textContent = '5';
    divEl141.append(spanEl63);
    divEl140.append(divEl141);
    divEl139.append(divEl140);

    const pEl103 = document.createElement('p');
    pEl103.setAttribute('class', 'ratetitle');
    pEl103.textContent = 'Good care service';
    divEl139.append(pEl103);

    const divEl142 = document.createElement('div');
    divEl142.setAttribute('class', 'ratedesc');
    divEl139.append(divEl142);
    divEl136.append(divEl139);
    divEl93.append(divEl136);

    const divEl143 = document.createElement('div');
    divEl143.setAttribute('class', 'rating-card slick-slide');
    divEl143.setAttribute('style', 'width: 235px;');
    divEl143.setAttribute('tabindex', '-1');
    divEl143.setAttribute('data-slick-index', '7');
    divEl143.setAttribute('aria-hidden', 'true');

    const divEl144 = document.createElement('div');
    divEl144.setAttribute('class', 'card-top');

    const spanEl64 = document.createElement('span');
    spanEl64.setAttribute('class', 'raterinitials');
    spanEl64.textContent = 'NP';
    divEl144.append(spanEl64);

    const divEl145 = document.createElement('div');
    divEl145.setAttribute('class', 'review-details');

    const spanEl65 = document.createElement('span');
    spanEl65.setAttribute('class', 'ratername');
    spanEl65.textContent = 'Nitin Padegaonkar';
    divEl145.append(spanEl65);

    const spanEl66 = document.createElement('span');
    spanEl66.setAttribute('class', 'ratingdate');
    spanEl66.textContent = 'August 23, 2024';
    divEl145.append(spanEl66);
    divEl144.append(divEl145);
    divEl143.append(divEl144);

    const divEl146 = document.createElement('div');
    divEl146.setAttribute('class', 'cardbottom');

    const divEl147 = document.createElement('div');
    divEl147.setAttribute('class', 'review-product');

    const spanEl67 = document.createElement('span');
    spanEl67.setAttribute('class', 'insurancetype');
    spanEl67.textContent = 'Care Supreme';
    divEl147.append(spanEl67);

    const divEl148 = document.createElement('div');
    divEl148.setAttribute('class', 'custom_star_block');

    const spanEl68 = document.createElement('span');
    spanEl68.setAttribute('data-five-star', '5');
    divEl148.append(spanEl68);

    const spanEl69 = document.createElement('span');
    spanEl69.setAttribute('class', 'stargiven');
    spanEl69.textContent = '5';
    divEl148.append(spanEl69);
    divEl147.append(divEl148);
    divEl146.append(divEl147);

    const pEl104 = document.createElement('p');
    pEl104.setAttribute('class', 'ratetitle');
    pEl104.textContent = 'Thanks to care health insurance';
    divEl146.append(pEl104);

    const divEl149 = document.createElement('div');
    divEl149.setAttribute('class', 'ratedesc');
    divEl149.textContent = 'Fantastic company accross the India wide cashless network... good service';
    divEl146.append(divEl149);
    divEl143.append(divEl146);
    divEl93.append(divEl143);

    const divEl150 = document.createElement('div');
    divEl150.setAttribute('class', 'rating-card slick-slide');
    divEl150.setAttribute('style', 'width: 235px;');
    divEl150.setAttribute('tabindex', '-1');
    divEl150.setAttribute('data-slick-index', '8');
    divEl150.setAttribute('aria-hidden', 'true');

    const divEl151 = document.createElement('div');
    divEl151.setAttribute('class', 'card-top');

    const spanEl70 = document.createElement('span');
    spanEl70.setAttribute('class', 'raterinitials');
    spanEl70.textContent = 'MK';
    divEl151.append(spanEl70);

    const divEl152 = document.createElement('div');
    divEl152.setAttribute('class', 'review-details');

    const spanEl71 = document.createElement('span');
    spanEl71.setAttribute('class', 'ratername');
    spanEl71.textContent = 'Manoj kumar';
    divEl152.append(spanEl71);

    const spanEl72 = document.createElement('span');
    spanEl72.setAttribute('class', 'ratingdate');
    spanEl72.textContent = 'August 23, 2024';
    divEl152.append(spanEl72);
    divEl151.append(divEl152);
    divEl150.append(divEl151);

    const divEl153 = document.createElement('div');
    divEl153.setAttribute('class', 'cardbottom');

    const divEl154 = document.createElement('div');
    divEl154.setAttribute('class', 'review-product');

    const spanEl73 = document.createElement('span');
    spanEl73.setAttribute('class', 'insurancetype');
    spanEl73.textContent = 'Care Supreme';
    divEl154.append(spanEl73);

    const divEl155 = document.createElement('div');
    divEl155.setAttribute('class', 'custom_star_block');

    const spanEl74 = document.createElement('span');
    spanEl74.setAttribute('data-five-star', '5');
    divEl155.append(spanEl74);

    const spanEl75 = document.createElement('span');
    spanEl75.setAttribute('class', 'stargiven');
    spanEl75.textContent = '5';
    divEl155.append(spanEl75);
    divEl154.append(divEl155);
    divEl153.append(divEl154);

    const pEl105 = document.createElement('p');
    pEl105.setAttribute('class', 'ratetitle');
    pEl105.textContent = 'Family';
    divEl153.append(pEl105);

    const divEl156 = document.createElement('div');
    divEl156.setAttribute('class', 'ratedesc');
    divEl153.append(divEl156);
    divEl150.append(divEl153);
    divEl93.append(divEl150);

    const divEl157 = document.createElement('div');
    divEl157.setAttribute('class', 'rating-card all_articles_card slick-slide');
    divEl157.setAttribute('style', 'width: 235px;');
    divEl157.setAttribute('tabindex', '-1');
    divEl157.setAttribute('data-slick-index', '9');
    divEl157.setAttribute('aria-hidden', 'true');

    const aEl31 = document.createElement('a');
    aEl31.setAttribute('href', 'https://www.careinsurance.com/reviews/?select_product=20');
    aEl31.setAttribute('class', 'all_articles');
    aEl31.setAttribute('target', '_blank');
    aEl31.setAttribute('rel', 'noopener');
    aEl31.setAttribute('tabindex', '-1');

    const brEl = document.createElement('br');
    aEl31.append(brEl);

    const brEl2 = document.createElement('br');
    aEl31.append(brEl2);

    const spanEl76 = document.createElement('span');
    spanEl76.setAttribute('class', 'material-icons');
    spanEl76.textContent = 'arrow_forward';
    aEl31.append(spanEl76);
    divEl157.append(aEl31);
    divEl93.append(divEl157);
    divEl92.append(divEl93);
    divEl91.append(divEl92);

    const iEl7 = document.createElement('i');
    iEl7.setAttribute('alt', 'Next');
    iEl7.setAttribute('title', 'Next');
    iEl7.setAttribute('class', 'slick_next material-icons slick-arrow');
    iEl7.setAttribute('aria-disabled', 'false');
    iEl7.setAttribute('style', '');
    iEl7.textContent = 'arrow_forward';
    divEl91.append(iEl7);
    divEl88.append(divEl91);

    const divEl158 = document.createElement('div');
    divEl158.setAttribute('class', 'mobile_review');

    const aEl32 = document.createElement('a');
    aEl32.setAttribute('class', 'write-review-link mobile_show');
    aEl32.setAttribute('style', 'display:none');
    aEl32.setAttribute('href', 'https://www.careinsurance.com/reviews/?writereview=product&select_product=20');
    aEl32.setAttribute('target', '_blank');
    aEl32.setAttribute('rel', 'noopener');
    aEl32.textContent = 'Write a Review';
    divEl158.append(aEl32);
    divEl88.append(divEl158);
    divEl87.append(divEl88);
    divEl86.append(divEl87);

    const divEl159 = document.createElement('div');
    divEl159.setAttribute('class', 'testimnal_btn');

    const divEl160 = document.createElement('div');
    divEl160.setAttribute('id', 'testimonial');
    divEl160.setAttribute('class', 'tabcontent');

    const divEl161 = document.createElement('div');
    divEl161.setAttribute('class', 'testimonial_slider slick-initialized slick-slider');

    const iEl8 = document.createElement('i');
    iEl8.setAttribute('alt', 'Previous');
    iEl8.setAttribute('title', 'Previous');
    iEl8.setAttribute('class', 'slick_prev material-icons slick-arrow slick-disabled');
    iEl8.setAttribute('aria-disabled', 'true');
    iEl8.setAttribute('style', '');
    iEl8.textContent = 'arrow_back';
    divEl161.append(iEl8);

    const divEl162 = document.createElement('div');
    divEl162.setAttribute('class', 'slick-list draggable');

    const divEl163 = document.createElement('div');
    divEl163.setAttribute('class', 'slick-track');
    divEl163.setAttribute('style', 'opacity: 1; width: 1480px; transform: translate3d(0px, 0px, 0px);');

    const divEl164 = document.createElement('div');
    divEl164.setAttribute('class', 'slick-slide slick-current slick-active');
    divEl164.setAttribute('style', 'width: 370px;');
    divEl164.setAttribute('tabindex', '0');
    divEl164.setAttribute('data-slick-index', '0');
    divEl164.setAttribute('aria-hidden', 'false');

    const imgEl38 = document.createElement('img');
    imgEl38.setAttribute('alt', 'Rahul Sangwan ');
    imgEl38.setAttribute('title', 'Rahul Sangwan ');
    imgEl38.setAttribute('width', '90');
    imgEl38.setAttribute('height', '90');
    imgEl38.setAttribute('class', 'lozad');
    imgEl38.setAttribute('data-src', 'https://www.careinsurance.com/images/webp/rahul-sangwan.webp');
    imgEl38.setAttribute('src', '');
    divEl164.append(imgEl38);

    const pEl106 = document.createElement('p');
    pEl106.setAttribute('class', 'testimonial_user_heading');
    pEl106.textContent = 'My appreciation for your prompt service';
    divEl164.append(pEl106);

    const pEl107 = document.createElement('p');

    const spanEl77 = document.createElement('span');
    spanEl77.setAttribute('class', 'testimoni_message');
    spanEl77.textContent = 'Recently, I’ve purchased JOY Maternity insurance for my expecting wife and my experience was excellent with the claim settlement team who helped me deal with all the formalities smoothly.Thank you for making my decision the right one!';
    pEl107.append(spanEl77);
    divEl164.append(pEl107);

    const pEl108 = document.createElement('p');
    pEl108.setAttribute('class', 'bold_16');
    pEl108.textContent = 'Rahul Sangwan';
    divEl164.append(pEl108);

    const pEl109 = document.createElement('p');
    pEl109.setAttribute('class', 'name_review');
    pEl109.textContent = 'Health Insurance';
    divEl164.append(pEl109);
    divEl163.append(divEl164);

    const divEl165 = document.createElement('div');
    divEl165.setAttribute('class', 'slick-slide slick-active');
    divEl165.setAttribute('style', 'width: 370px;');
    divEl165.setAttribute('tabindex', '0');
    divEl165.setAttribute('data-slick-index', '1');
    divEl165.setAttribute('aria-hidden', 'false');

    const imgEl39 = document.createElement('img');
    imgEl39.setAttribute('alt', 'Samanway Barik ');
    imgEl39.setAttribute('title', 'Samanway Barik ');
    imgEl39.setAttribute('width', '90');
    imgEl39.setAttribute('height', '90');
    imgEl39.setAttribute('class', 'lozad');

    imgEl39.setAttribute('src', 'https://www.careinsurance.com/images/webp/samanway-barik.webp');
    divEl165.append(imgEl39);

    const pEl110 = document.createElement('p');
    pEl110.setAttribute('class', 'testimonial_user_heading');
    pEl110.textContent = 'We will continue to avail of your scheme';
    divEl165.append(pEl110);

    const pEl111 = document.createElement('p');

    const spanEl78 = document.createElement('span');
    spanEl78.setAttribute('class', 'testimoni_message');
    spanEl78.textContent = 'I ported my healthcare plan last year; it is the wisest decision I made by choosing Care Health Insurance.I recently got admitted due to a viral infection, and all my expenses got covered under m plan.';
    pEl111.append(spanEl78);
    divEl165.append(pEl111);

    const pEl112 = document.createElement('p');
    pEl112.setAttribute('class', 'bold_16');
    pEl112.textContent = 'Samanway Barik';
    divEl165.append(pEl112);

    const pEl113 = document.createElement('p');
    pEl113.setAttribute('class', 'name_review');
    pEl113.textContent = 'Health Insurance';
    divEl165.append(pEl113);
    divEl163.append(divEl165);

    const divEl166 = document.createElement('div');
    divEl166.setAttribute('class', 'slick-slide slick-active');
    divEl166.setAttribute('style', 'width: 370px;');
    divEl166.setAttribute('tabindex', '0');
    divEl166.setAttribute('data-slick-index', '2');
    divEl166.setAttribute('aria-hidden', 'false');

    const imgEl40 = document.createElement('img');
    imgEl40.setAttribute('alt', 'Soubhagya K Kulkarni ');
    imgEl40.setAttribute('title', 'Soubhagya K Kulkarni ');
    imgEl40.setAttribute('width', '90');
    imgEl40.setAttribute('height', '90');
    imgEl40.setAttribute('class', 'lozad');
    // imgEl40.setAttribute('data-src', '');
    imgEl40.setAttribute('src', 'https://www.careinsurance.com/images/webp/soubhagya-k-kulkarni.webp');
    divEl166.append(imgEl40);

    const pEl114 = document.createElement('p');
    pEl114.setAttribute('class', 'testimonial_user_heading');
    pEl114.textContent = 'Everything went very smooth';
    divEl166.append(pEl114);

    const pEl115 = document.createElement('p');

    const spanEl79 = document.createElement('span');
    spanEl79.setAttribute('class', 'testimoni_message');
    spanEl79.textContent = 'Thank you for helping me when I needed help the most, being in the hospital.Buying Care’ s health insurance plan is my best decision so far.';
    pEl115.append(spanEl79);
    divEl166.append(pEl115);

    const pEl116 = document.createElement('p');
    pEl116.setAttribute('class', 'bold_16');
    pEl116.textContent = 'Soubhagya K Kulkarni';
    divEl166.append(pEl116);

    const pEl117 = document.createElement('p');
    pEl117.setAttribute('class', 'name_review');
    pEl117.textContent = 'Health Insurance';
    divEl166.append(pEl117);
    divEl163.append(divEl166);

    const divEl167 = document.createElement('div');
    divEl167.setAttribute('class', 'slick-slide');
    divEl167.setAttribute('style', 'width: 370px;');
    divEl167.setAttribute('tabindex', '-1');
    divEl167.setAttribute('data-slick-index', '3');
    divEl167.setAttribute('aria-hidden', 'true');

    const imgEl41 = document.createElement('img');
    imgEl41.setAttribute('alt', 'Vaibhav Rai ');
    imgEl41.setAttribute('title', 'Vaibhav Rai ');
    imgEl41.setAttribute('width', '90');
    imgEl41.setAttribute('height', '90');
    imgEl41.setAttribute('class', 'lozad');
    // imgEl41.setAttribute('data-src', '');
    imgEl41.setAttribute('src', 'https://www.careinsurance.com/images/webp/vaibhav-rai.webp');
    divEl167.append(imgEl41);

    const pEl118 = document.createElement('p');
    pEl118.setAttribute('class', 'testimonial_user_heading');
    pEl118.textContent = 'Really helpful explaining the process in advance';
    divEl167.append(pEl118);

    const pEl119 = document.createElement('p');

    const spanEl80 = document.createElement('span');
    spanEl80.setAttribute('class', 'testimoni_message');
    spanEl80.textContent = 'Thank you for helping me with your fastest claim settlement process.I didn’ t have to wait much for the approval.Everything was quick and seamless.';
    pEl119.append(spanEl80);
    divEl167.append(pEl119);

    const pEl120 = document.createElement('p');
    pEl120.setAttribute('class', 'bold_16');
    pEl120.textContent = 'Vaibhav Rai';
    divEl167.append(pEl120);

    const pEl121 = document.createElement('p');
    pEl121.setAttribute('class', 'name_review');
    pEl121.textContent = 'Health Insurance';
    divEl167.append(pEl121);
    divEl163.append(divEl167);
    divEl162.append(divEl163);
    divEl161.append(divEl162);

    const iEl9 = document.createElement('i');
    iEl9.setAttribute('alt', 'Next');
    iEl9.setAttribute('title', 'Next');
    iEl9.setAttribute('class', 'slick_next material-icons slick-arrow');
    iEl9.setAttribute('aria-disabled', 'false');
    iEl9.setAttribute('style', '');
    iEl9.textContent = 'arrow_forward';
    divEl161.append(iEl9);
    divEl160.append(divEl161);
    divEl159.append(divEl160);
    divEl86.append(divEl159);

    const divEl168 = document.createElement('div');
    divEl168.setAttribute('class', 'why_rel_btn');

    const divEl169 = document.createElement('div');
    divEl169.setAttribute('id', 'whyreligare');
    divEl169.setAttribute('class', 'tabcontent');

    const divEl170 = document.createElement('div');
    divEl170.setAttribute('class', 'why_religare');

    const pEl122 = document.createElement('p');
    pEl122.setAttribute('class', 'why_rel_desc');
    pEl122.textContent = 'Zeroing in on a health insurance plan for your family is a tricky choice, given the number of insurers in the market who offer similar policies. It is not wise to simply choose the policy with the lowest amount of premium. You need to compare different policies, their features and benefits. Care Health Insurance(CHI) is a specialist Health Insurer and offers products keeping in mind the needs of a customer in the event of a medical exigency. CHI offers a distinct set of benefits giving a clear choice for providing you with the best possible health insurance. ';

    divEl170.append(pEl122);

    const divEl171 = document.createElement('div');
    divEl171.setAttribute('class', 'd-flex why_rel_slider slick-initialized slick-slider');

    const divEl172 = document.createElement('div');
    divEl172.setAttribute('class', 'slick-list draggable');

    const divEl173 = document.createElement('div');
    divEl173.setAttribute('class', 'slick-track');
    divEl173.setAttribute('style', 'opacity: 1; width: 594px; transform: translate3d(0px, 0px, 0px);');

    const divEl174 = document.createElement('div');
    divEl174.setAttribute('class', 'line_anim slick-slide slick-current slick-active');
    divEl174.setAttribute('style', 'width: 198px;');
    divEl174.setAttribute('tabindex', '0');
    divEl174.setAttribute('data-slick-index', '0');
    divEl174.setAttribute('aria-hidden', 'false');

    const imgEl42 = document.createElement('img');
    imgEl42.setAttribute('class', 'lozad');
    imgEl42.setAttribute('alt', 'Awarded As Claims');
    imgEl42.setAttribute('title', 'Awarded As Claims');
    imgEl42.setAttribute('width', '80');
    imgEl42.setAttribute('height', '80');
    imgEl42.setAttribute('loading', 'lazy');
    imgEl42.setAttribute('src', 'https://www.careinsurance.com/images/Awarded-as-Claims-2023.svg');
    // imgEl42.setAttribute('data-src', '');
    divEl174.append(imgEl42);

    const pEl123 = document.createElement('p');

    const strongEl62 = document.createElement('strong');

    const brEl3 = document.createElement('br');
    strongEl62.append(brEl3);
    pEl123.append(strongEl62);

    const supEl = document.createElement('sup');
    pEl123.append(supEl);
    divEl174.append(pEl123);
    divEl173.append(divEl174);

    const divEl175 = document.createElement('div');
    divEl175.setAttribute('class', 'line_anim slick-slide slick-active');
    divEl175.setAttribute('style', 'width: 198px;');
    divEl175.setAttribute('tabindex', '0');
    divEl175.setAttribute('data-slick-index', '1');
    divEl175.setAttribute('aria-hidden', 'false');

    const imgEl43 = document.createElement('img');
    imgEl43.setAttribute('class', 'lozad');
    imgEl43.setAttribute('title', 'Total Claims Paid');
    imgEl43.setAttribute('alt', 'Total Claims Paid');
    imgEl43.setAttribute('width', '80');
    imgEl43.setAttribute('height', '80');
    imgEl43.setAttribute('loading', 'lazy');
    imgEl43.setAttribute('src', 'https://www.careinsurance.com/images/7 Lakh+Total-claims-paid.svg');
    // imgEl43.setAttribute('data-src', '');
    divEl175.append(imgEl43);

    const pEl124 = document.createElement('p');

    const strongEl63 = document.createElement('strong');
    strongEl63.textContent = '48 Lakh + Claims Settled**';
    pEl124.append(strongEl63);
    divEl175.append(pEl124);
    divEl173.append(divEl175);

    const divEl176 = document.createElement('div');
    divEl176.setAttribute('class', 'line_anim slick-slide slick-active');
    divEl176.setAttribute('style', 'width: 198px;');
    divEl176.setAttribute('tabindex', '0');
    divEl176.setAttribute('data-slick-index', '2');
    divEl176.setAttribute('aria-hidden', 'false');

    const imgEl44 = document.createElement('img');
    imgEl44.setAttribute('class', 'lozad');
    imgEl44.setAttribute('title', 'Cashless Claim');
    imgEl44.setAttribute('alt', 'Cashless Claim');
    imgEl44.setAttribute('width', '80');
    imgEl44.setAttribute('height', '80');
    imgEl44.setAttribute('loading', 'lazy');
    imgEl44.setAttribute('src', 'https://www.careinsurance.com/images/hospital-networks.svg');
    // imgEl44.setAttribute('data-src', '');
    divEl176.append(imgEl44);

    const pEl125 = document.createElement('p');

    const strongEl64 = document.createElement('strong');

    const brEl4 = document.createElement('br');
    strongEl64.append(brEl4);
    pEl125.append(strongEl64);
    divEl176.append(pEl125);
    divEl173.append(divEl176);
    divEl172.append(divEl173);
    divEl171.append(divEl172);
    divEl170.append(divEl171);

    const divEl177 = document.createElement('div');

    const smallEl6 = document.createElement('small');

    const supEl2 = document.createElement('sup');
    supEl2.textContent = '**';
    smallEl6.append(supEl2);
    divEl177.append(smallEl6);

    const smallEl7 = document.createElement('small');

    const supEl3 = document.createElement('sup');
    supEl3.textContent = '*';
    smallEl7.append(supEl3);
    divEl177.append(smallEl7);
    divEl170.append(divEl177);
    divEl169.append(divEl170);
    divEl168.append(divEl169);
    divEl86.append(divEl168);
    divEl83.append(divEl86);
    sectionEl23.append(divEl83);
    divEl82.append(sectionEl23);
    container.append(divEl82);

    const sectionEl24 = document.createElement('section');
    sectionEl24.setAttribute('class', 'custom_block faq custom_container');
    sectionEl24.setAttribute('id', 'FaqDetails');

    const articleEl43 = document.createElement('article');
    articleEl43.setAttribute('class', 'cn_container_text_header_content');

    const h2El28 = document.createElement('h2');
    h2El28.setAttribute('id', 'faqs');
    h2El28.textContent = 'FAQs on Health Insurance';
    articleEl43.append(h2El28);

    const divEl178 = document.createElement('div');
    divEl178.setAttribute('class', 'faq_contant');

    const sectionEl25 = document.createElement('section');
    sectionEl25.setAttribute('class', 'faq_tab_section');
    const ulEl30 = document.createElement('ul');
    ulEl30.setAttribute('class', 'faq_tab_section_tabs');

    const tabData = [
        { text: 'General', contentId: 'content-general' },
        { text: 'Insurance Terms', contentId: 'content-insurance' },
        { text: 'Coverage', contentId: 'content-coverage' },
        { text: 'Renewal', contentId: 'content-renewal' },
        { text: 'Claim', contentId: 'content-claim' }
    ];

    tabData.forEach((tab, index) => {
        const li = document.createElement('li');
        li.textContent = tab.text;
        li.dataset.target = tab.contentId;
        if (index === 0) li.classList.add('active');
        ulEl30.append(li);
    });

    sectionEl25.append(ulEl30);



    const articleEl44 = document.createElement('article');
    articleEl44.setAttribute('class', 'faq_tab_section_tab_content content-general');

    const asideEl19 = document.createElement('aside');
    asideEl19.setAttribute('class', 'faq_acc');

    const h3El44 = document.createElement('h3');
    h3El44.textContent = 'Q. Should You Get a Health Insurance Policy at an Early Age?';
    asideEl19.append(h3El44);

    const divEl179 = document.createElement('div');

    const pEl126 = document.createElement('p');
    pEl126.textContent = 'Health insurance protects your savings by covering medical expenses. Care Health Insurance offers various benefits, including cashless claims, tax savings, and coverage for hospitalisation, critical illnesses, and more.';
    divEl179.append(pEl126);
    asideEl19.append(divEl179);
    articleEl44.append(asideEl19);

    const asideEl20 = document.createElement('aside');
    asideEl20.setAttribute('class', 'faq_acc');

    const h3El45 = document.createElement('h3');
    h3El45.textContent = 'Q. Why is Health Insurance Policy Important to Protect Your Loved Ones?';
    asideEl20.append(h3El45);

    const divEl180 = document.createElement('div');

    const pEl127 = document.createElement('p');
    pEl127.textContent = 'Health insurance is important to protect your loved ones as it offers financial security for medical costs, ensuring access to care and peace of mind.';
    divEl180.append(pEl127);
    asideEl20.append(divEl180);
    articleEl44.append(asideEl20);

    const asideEl21 = document.createElement('aside');
    asideEl21.setAttribute('class', 'faq_acc');

    const h3El46 = document.createElement('h3');
    h3El46.textContent = 'Q. Does Health Insurance Cover COVID-19 Expenses?';
    asideEl21.append(h3El46);

    const divEl181 = document.createElement('div');

    const pEl128 = document.createElement('p');
    pEl128.textContent = 'The Insurance Regulatory and Development Authority of India has stated that companies should offer coverage for standard treatment of COVID-19 infections if the insured is affected by the infection and has to get hospitalised for the treatment.';
    divEl181.append(pEl128);
    asideEl21.append(divEl181);
    articleEl44.append(asideEl21);

    const asideEl22 = document.createElement('aside');
    asideEl22.setAttribute('class', 'faq_acc');

    const h3El47 = document.createElement('h3');
    h3El47.textContent = 'Q. How much health policy insurance coverage do I need?';
    asideEl22.append(h3El47);

    const divEl182 = document.createElement('div');

    const pEl129 = document.createElement('p');
    pEl129.textContent = 'The amount of insurance coverage you will need depends on your medical needs, age and health risks, the city you live in, and various other factors. Also, you must consider the treatment costs for your specific health condition before deciding how much sum insured is enough for you and your loved ones.';
    divEl182.append(pEl129);
    asideEl22.append(divEl182);
    articleEl44.append(asideEl22);

    const asideEl23 = document.createElement('aside');
    asideEl23.setAttribute('class', 'faq_acc');

    const h3El48 = document.createElement('h3');
    h3El48.textContent = 'Q. What documents do I need to purchase mediclaim health insurance?';
    asideEl23.append(h3El48);

    const divEl183 = document.createElement('div');

    const pEl130 = document.createElement('p');
    pEl130.textContent = 'While purchasing a mediclaim insurance policy, you will require a few important documents to complete the process. Some of the documents required include ID proof, age proof, income proof documents, age proof, photographs, and relevant medical records.';
    divEl183.append(pEl130);
    asideEl23.append(divEl183);
    articleEl44.append(asideEl23);

    const asideEl24 = document.createElement('aside');
    asideEl24.setAttribute('class', 'faq_acc');

    const h3El49 = document.createElement('h3');
    h3El49.textContent = 'Q. Can I buy health insurance and use it immediately?';
    asideEl24.append(h3El49);

    const divEl184 = document.createElement('div');

    const pEl131 = document.createElement('p');
    pEl131.textContent = 'Yes, you can get immediate coverage under medical policies for any accidents or injuries. However, you can only avail of the policy\'s coverage for any illness- related hospitalisation after a standard waiting period of 30 days from the day your policy becomes effective.';
    divEl184.append(pEl131);
    asideEl24.append(divEl184);
    articleEl44.append(asideEl24);

    const asideEl25 = document.createElement('aside');
    asideEl25.setAttribute('class', 'faq_acc');

    const h3El50 = document.createElement('h3');
    h3El50.textContent = 'Q. What is the right age to invest in Health Insurance? Which is the best health insurance for myself and my family?';
    asideEl25.append(h3El50);

    const divEl185 = document.createElement('div');

    const pEl132 = document.createElement('p');
    pEl132.textContent = 'The earlier you get health cover, the lesser the premium you get to bear. The premium costs of health plans increase with age. Besides, the chances of having a pre-existing health condition also increase as we grow older- resulting in an increased premium. Thus, going for a health cover early in life is a wise decision.';
    divEl185.append(pEl132);
    asideEl25.append(divEl185);
    articleEl44.append(asideEl25);

    const asideEl26 = document.createElement('aside');
    asideEl26.setAttribute('class', 'faq_acc');

    const h3El51 = document.createElement('h3');
    h3El51.textContent = 'Q. What is the benefit of porting health insurance?';
    asideEl26.append(h3El51);

    const divEl186 = document.createElement('div');

    const pEl133 = document.createElement('p');
    pEl133.textContent = 'Medical insurance portability can help you switch a health insurance plan without having to go through a new waiting period. Once you have finished the waiting period in your previous plan, you do not have to serve it again.';
    divEl186.append(pEl133);
    asideEl26.append(divEl186);
    articleEl44.append(asideEl26);

    const asideEl27 = document.createElement('aside');
    asideEl27.setAttribute('class', 'faq_acc');

    const h3El52 = document.createElement('h3');
    h3El52.textContent = 'Q. How much does health insurance cost?';
    asideEl27.append(h3El52);

    const divEl187 = document.createElement('div');

    const pEl134 = document.createElement('p');
    pEl134.textContent = 'At Care Health Insurance, a 5-lakh medical cover starts with a premium as low as Rs. 358/month, subject to specific policy terms and conditions. Factors like the sum insured, type of coverage, policy term, count and age of insured members, and their pre-existing medical conditions, impact the chosen health plan\'s premium cost.';
    divEl187.append(pEl134);
    asideEl27.append(divEl187);
    articleEl44.append(asideEl27);

    const asideEl28 = document.createElement('aside');
    asideEl28.setAttribute('class', 'faq_acc');

    const h3El53 = document.createElement('h3');
    h3El53.textContent = 'Q. How can I get tax benefits from medical covers?';
    asideEl28.append(h3El53);

    const divEl188 = document.createElement('div');

    const pEl135 = document.createElement('p');
    pEl135.textContent = 'With our medical insurance, you get a chance to increase your savings as you become eligible to get income tax benefits under Section 80D of the Income Tax Act. That is, you will be allowed to claim a tax deduction on the policy premium for which you have made a payment to us.';
    divEl188.append(pEl135);
    asideEl28.append(divEl188);
    articleEl44.append(asideEl28);

    const asideEl29 = document.createElement('aside');
    asideEl29.setAttribute('class', 'faq_acc');

    const h3El54 = document.createElement('h3');
    h3El54.textContent = 'Q. Can I have multiple health insurance plans in India?';
    asideEl29.append(h3El54);

    const divEl189 = document.createElement('div');

    const pEl136 = document.createElement('p');
    pEl136.textContent = 'Yes, you can buy yourself multiple health policies. If you have opted for more than one indemnity-based plan with other insurers or us, then you can opt for any of these plans to settle your claims, provided that the claim amount payable is up to the sum insured of the chosen policy. If the claim amount under a single policy exceeds the sum insured, you have the right to select the insurer to settle the claim.';
    divEl189.append(pEl136);
    asideEl29.append(divEl189);
    articleEl44.append(asideEl29);

    const asideEl30 = document.createElement('aside');
    asideEl30.setAttribute('class', 'faq_acc');

    const h3El55 = document.createElement('h3');
    h3El55.textContent = 'Q. Can I add my ageing parents to my medical insurance policy?';
    asideEl30.append(h3El55);

    const divEl190 = document.createElement('div');

    const pEl137 = document.createElement('p');
    pEl137.textContent = 'Yes, you can include ageing parents in your health insurance plan easily by informing us during renewal. However, for elderly parents above 60 years, we recommend medical insurance for senior citizens that will better meet their age-related healthcare needs.';
    divEl190.append(pEl137);
    asideEl30.append(divEl190);
    articleEl44.append(asideEl30);

    const asideEl31 = document.createElement('aside');
    asideEl31.setAttribute('class', 'faq_acc');

    const h3El56 = document.createElement('h3');
    h3El56.textContent = 'Q. How does smoking affect the insurance premium for medical cover?';
    asideEl31.append(h3El56);

    const divEl191 = document.createElement('div');

    const pEl138 = document.createElement('p');
    pEl138.textContent = 'Insurers consider the habit of smoking as a factor when assessing your hea health risks and calculating insurance premium rates. Generally, smokers need to bear a higher premium for any health cover, given that smoking makes people more vulnerable to chronic diseases and other health hazards.';
    divEl191.append(pEl138);
    asideEl31.append(divEl191);
    articleEl44.append(asideEl31);

    const asideEl32 = document.createElement('aside');
    asideEl32.setAttribute('class', 'faq_acc');

    const h3El57 = document.createElement('h3');
    h3El57.textContent = 'Q. I\'m covered under a corporate group policy. Do I still need a separate health cover?';
    asideEl32.append(h3El57);

    const divEl192 = document.createElement('div');

    const pEl139 = document.createElement('p');
    pEl139.textContent = 'Yes, it is wiser always to have separate healthcare insurance besides the employer health plan because the corporate plan does not offer extensive coverage, no tax benefits, and customisable features. Thus, it is better to protect your finances and health with a separate cover that meets all your healthcare needs effectively.';
    divEl192.append(pEl139);
    asideEl32.append(divEl192);
    articleEl44.append(asideEl32);

    const asideEl33 = document.createElement('aside');
    asideEl33.setAttribute('class', 'faq_acc');

    const h3El58 = document.createElement('h3');
    h3El58.textContent = 'Q. Can I take a health insurance policy for my 5 years old kid?';
    asideEl33.append(h3El58);

    const divEl193 = document.createElement('div');

    const pEl140 = document.createElement('p');
    pEl140.textContent = 'Yes, you can include your children aged 5 years or above under an individual health plan. For children under 5 years of age, you can include them in a family floater plan with other family members who are 18 years and above.';
    divEl193.append(pEl140);
    asideEl33.append(divEl193);
    articleEl44.append(asideEl33);

    const asideEl34 = document.createElement('aside');
    asideEl34.setAttribute('class', 'faq_acc');

    const h3El59 = document.createElement('h3');
    h3El59.textContent = 'Q. Are medical tests mandatory while buying health and medical insurance?';
    asideEl34.append(h3El59);

    const divEl194 = document.createElement('div');

    const pEl141 = document.createElement('p');
    pEl141.textContent = 'Pre-policy medical tests are usually required for older individuals, those with a pre-existing condition, or opted for a higher sum insured. However, it is best to go for a medical check-up when opting for a health insurance plan to ensure hassle-free claim settlement.';
    divEl194.append(pEl141);
    asideEl34.append(divEl194);
    articleEl44.append(asideEl34);

    const asideEl35 = document.createElement('aside');
    asideEl35.setAttribute('class', 'faq_acc');

    const h3El60 = document.createElement('h3');
    h3El60.textContent = 'Q. How can I increase the sum insured for my health insurance?';
    asideEl35.append(h3El60);

    const divEl195 = document.createElement('div');

    const pEl142 = document.createElement('p');
    pEl142.textContent = 'You can increase the sum insured of your health plan at the time of policy renewal. The same can be done after specific medical tests and a revision of the claim history. But the sum insured cannot be increased further if the existing sum has already met the sum insured limit of your policy.';
    divEl195.append(pEl142);
    asideEl35.append(divEl195);
    articleEl44.append(asideEl35);
    sectionEl25.append(articleEl44);

    const articleEl45 = document.createElement('article');
    articleEl45.setAttribute('class', 'faq_tab_section_tab_content content-insurance');

    const asideEl36 = document.createElement('aside');
    asideEl36.setAttribute('class', 'faq_acc');

    const h3El61 = document.createElement('h3');
    h3El61.textContent = 'Q. What is the waiting period for health insurance?';
    asideEl36.append(h3El61);

    const divEl196 = document.createElement('div');

    const pEl143 = document.createElement('p');
    pEl143.textContent = 'The waiting period is the time you must wait before making a claim for specific conditions, as stated in your policy documents.';
    divEl196.append(pEl143);
    asideEl36.append(divEl196);
    articleEl45.append(asideEl36);

    const asideEl37 = document.createElement('aside');
    asideEl37.setAttribute('class', 'faq_acc');

    const h3El62 = document.createElement('h3');
    h3El62.textContent = 'Q. What is copayment in health insurance?';
    asideEl37.append(h3El62);

    const divEl197 = document.createElement('div');

    const pEl144 = document.createElement('p');
    pEl144.textContent = 'Co-payment can be defined as a cost-sharing feature in which the insured must pay a fixed amount of the costs incurred while filing a claim; the insurer will cover the rest.';
    divEl197.append(pEl144);
    asideEl37.append(divEl197);
    articleEl45.append(asideEl37);

    const asideEl38 = document.createElement('aside');
    asideEl38.setAttribute('class', 'faq_acc');

    const h3El63 = document.createElement('h3');
    h3El63.textContent = 'Q. What is a deductible in health insurance?';
    asideEl38.append(h3El63);

    const divEl198 = document.createElement('div');

    const pEl145 = document.createElement('p');
    pEl145.textContent = 'A deductible is the amount the insured must pay out-of-pocket before the insurance cover comes into effect.';
    divEl198.append(pEl145);
    asideEl38.append(divEl198);
    articleEl45.append(asideEl38);

    const asideEl39 = document.createElement('aside');
    asideEl39.setAttribute('class', 'faq_acc');

    const h3El64 = document.createElement('h3');
    h3El64.textContent = 'Q. What is a network hospital?';
    asideEl39.append(h3El64);

    const divEl199 = document.createElement('div');

    const pEl146 = document.createElement('p');
    pEl146.textContent = 'A network hospital is a hospital which has partnered with your insurance company, enabling you to seek cashless treatment.';
    divEl199.append(pEl146);
    asideEl39.append(divEl199);
    articleEl45.append(asideEl39);

    const asideEl40 = document.createElement('aside');
    asideEl40.setAttribute('class', 'faq_acc');

    const h3El65 = document.createElement('h3');
    h3El65.textContent = 'Q. What is the sum insured in health insurance?';
    asideEl40.append(h3El65);

    const divEl200 = document.createElement('div');

    const pEl147 = document.createElement('p');
    pEl147.textContent = 'The Sum Insured is the maximum amount the insurer will cover for medical expenses. A higher sum insured means a higher premium.';
    divEl200.append(pEl147);
    asideEl40.append(divEl200);
    articleEl45.append(asideEl40);

    const asideEl41 = document.createElement('aside');
    asideEl41.setAttribute('class', 'faq_acc');

    const h3El66 = document.createElement('h3');
    h3El66.textContent = 'Q. What are exclusions in health insurance?';
    asideEl41.append(h3El66);

    const divEl201 = document.createElement('div');

    const pEl148 = document.createElement('p');
    pEl148.textContent = 'Exclusions can be defined as certain conditions which are not covered by the health insurance policy.';
    divEl201.append(pEl148);
    asideEl41.append(divEl201);
    articleEl45.append(asideEl41);

    const asideEl42 = document.createElement('aside');
    asideEl42.setAttribute('class', 'faq_acc');

    const h3El67 = document.createElement('h3');
    h3El67.textContent = 'Q. What are top-up plans in health insurance?';
    asideEl42.append(h3El67);

    const divEl202 = document.createElement('div');

    const pEl149 = document.createElement('p');
    pEl149.textContent = 'Top-up plans provide extra coverage over your base sum insured, ensuring additional protection during medical emergencies.';
    divEl202.append(pEl149);
    asideEl42.append(divEl202);
    articleEl45.append(asideEl42);

    const asideEl43 = document.createElement('aside');
    asideEl43.setAttribute('class', 'faq_acc');

    const h3El68 = document.createElement('h3');
    h3El68.textContent = 'Q. What are pre-existing diseases in health insurance?';
    asideEl43.append(h3El68);

    const divEl203 = document.createElement('div');

    const pEl150 = document.createElement('p');
    pEl150.textContent = 'Pre-existing diseases are conditions that the insured has before purchasing a plan. They usually lead to higher premiums or waiting periods.';
    divEl203.append(pEl150);
    asideEl43.append(divEl203);
    articleEl45.append(asideEl43);

    const asideEl44 = document.createElement('aside');
    asideEl44.setAttribute('class', 'faq_acc');

    const h3El69 = document.createElement('h3');
    h3El69.textContent = 'Q. What is claim intimation in health insurance?';
    asideEl44.append(h3El69);

    const divEl204 = document.createElement('div');

    const pEl151 = document.createElement('p');
    pEl151.textContent = 'Claim intimation is the process of informing your insurer about an upcoming claim, mostly before hospitalisation. This helps ease the claim process.';
    divEl204.append(pEl151);
    asideEl44.append(divEl204);
    articleEl45.append(asideEl44);

    const asideEl45 = document.createElement('aside');
    asideEl45.setAttribute('class', 'faq_acc');

    const h3El70 = document.createElement('h3');
    h3El70.textContent = 'Q. What is a cashless hospitalisation claim?';
    asideEl45.append(h3El70);

    const divEl205 = document.createElement('div');

    const pEl152 = document.createElement('p');
    pEl152.textContent = 'Cashless claim settlement is when the insurer directly compensates the hospital for your treatment, bypassing the need for upfront payment.';
    divEl205.append(pEl152);
    asideEl45.append(divEl205);
    articleEl45.append(asideEl45);

    const asideEl46 = document.createElement('aside');
    asideEl46.setAttribute('class', 'faq_acc');

    const h3El71 = document.createElement('h3');
    h3El71.textContent = 'Q. What is a reimbursement claim?';
    asideEl46.append(h3El71);

    const divEl206 = document.createElement('div');

    const pEl153 = document.createElement('p');
    pEl153.textContent = 'A reimbursement claim is one in which the insurer pays the medical costs upfront and then gets reimbursed by the insurance company.';
    divEl206.append(pEl153);
    asideEl46.append(divEl206);
    articleEl45.append(asideEl46);

    const asideEl47 = document.createElement('aside');
    asideEl47.setAttribute('class', 'faq_acc');

    const h3El72 = document.createElement('h3');
    h3El72.textContent = 'Q. What is a No Claim Bonus in health insurance?';
    asideEl47.append(h3El72);

    const divEl207 = document.createElement('div');

    const pEl154 = document.createElement('p');
    pEl154.textContent = 'It is a bonus for policyholders who do not make any claims during a policy year; this often increases the coverage amount.';
    divEl207.append(pEl154);
    asideEl47.append(divEl207);
    articleEl45.append(asideEl47);

    const asideEl48 = document.createElement('aside');
    asideEl48.setAttribute('class', 'faq_acc');

    const h3El73 = document.createElement('h3');
    h3El73.textContent = 'Q. What are Sublimits in health insurance?';
    asideEl48.append(h3El73);

    const divEl208 = document.createElement('div');

    const pEl155 = document.createElement('p');
    pEl155.textContent = 'Sublimits can be defined as the maximum limit of the amount the insurance company will pay for certain medical expenses.';
    divEl208.append(pEl155);
    asideEl48.append(divEl208);
    articleEl45.append(asideEl48);

    const asideEl49 = document.createElement('aside');
    asideEl49.setAttribute('class', 'faq_acc');

    const h3El74 = document.createElement('h3');
    h3El74.textContent = 'Q. What is the Room Rent Proportionate Charge?';
    asideEl49.append(h3El74);

    const divEl209 = document.createElement('div');

    const pEl156 = document.createElement('p');
    pEl156.textContent = 'This is the maximum limit of the daily room cost covered by the insurance company; any extra amount is your responsibility.';
    divEl209.append(pEl156);
    asideEl49.append(divEl209);
    articleEl45.append(asideEl49);

    const asideEl50 = document.createElement('aside');
    asideEl50.setAttribute('class', 'faq_acc');

    const h3El75 = document.createElement('h3');
    h3El75.textContent = 'Q. What is domiciliary hospitalisation?';
    asideEl50.append(h3El75);

    const divEl210 = document.createElement('div');

    const pEl157 = document.createElement('p');
    pEl157.textContent = 'Domiciliary hospitalisation is a situation in which the insured receives treatment at home either because the doctor has declared that they cannot be admitted to the hospital, or there is a non-availability of rooms at the hospital.';
    divEl210.append(pEl157);
    asideEl50.append(divEl210);
    articleEl45.append(asideEl50);

    const asideEl51 = document.createElement('aside');
    asideEl51.setAttribute('class', 'faq_acc');

    const h3El76 = document.createElement('h3');
    h3El76.textContent = 'Q. What are network and non-network hospitals?';
    asideEl51.append(h3El76);

    const divEl211 = document.createElement('div');

    const pEl158 = document.createElement('p');
    pEl158.textContent = 'Network hospitals are empanelled with a health insurer and provide you with cashless medical treatment. Here, you can present your health card to avail yourself of a cashless hospitalisation facility, and the insurer will directly settle the claim with the hospital. Meanwhile, non-network hospitals are not empanelled with the insurer and thus require reimbursement claim filing.';
    divEl211.append(pEl158);
    asideEl51.append(divEl211);
    articleEl45.append(asideEl51);

    const asideEl52 = document.createElement('aside');
    asideEl52.setAttribute('class', 'faq_acc');

    const h3El77 = document.createElement('h3');
    h3El77.textContent = 'Q. What are the pre-existing diseases in health insurance? Will my health policy cover the same?';
    asideEl52.append(h3El77);

    const divEl212 = document.createElement('div');

    const pEl159 = document.createElement('p');
    pEl159.textContent = 'Pre-existing diseases are illnesses, injuries, or related conditions for which a medical practitioner diagnosed a person within 36 months before the effective date of policy issuance by the insurer or its reinstatement. Yes, Care Health Insurance policies cover pre-existing medical conditions but come with a waiting period as per the chosen policy.';
    divEl212.append(pEl159);
    asideEl52.append(divEl212);
    articleEl45.append(asideEl52);
    sectionEl25.append(articleEl45);

    const articleEl46 = document.createElement('article');
    articleEl46.setAttribute('class', 'faq_tab_section_tab_content content-coverage');

    const asideEl53 = document.createElement('aside');
    asideEl53.setAttribute('class', 'faq_acc');

    const h3El78 = document.createElement('h3');
    h3El78.textContent = 'Q. What is the Smart Select Hospitals benefit at Care Health Insurance?';
    asideEl53.append(h3El78);

    const divEl213 = document.createElement('div');

    const pEl160 = document.createElement('p');
    pEl160.textContent = 'It is an additional cover option that reduces your premium by 15%, provided you use Care\'s Smart Select Network Hospitals, but using non-network hospitals may result in a 20% co-payment.';
    divEl213.append(pEl160);
    asideEl53.append(divEl213);
    articleEl46.append(asideEl53);

    const asideEl54 = document.createElement('aside');
    asideEl54.setAttribute('class', 'faq_acc');

    const h3El79 = document.createElement('h3');
    h3El79.textContent = 'Q. How does Room Type affect my health insurance coverage?';
    asideEl54.append(h3El79);

    const divEl214 = document.createElement('div');

    const pEl161 = document.createElement('p');
    pEl161.textContent = 'The type of room you choose during your hospitalisation impacts your hospital bill. Policies usually have coverage limits for each room type.';
    divEl214.append(pEl161);
    asideEl54.append(divEl214);
    articleEl46.append(asideEl54);

    const asideEl55 = document.createElement('aside');
    asideEl55.setAttribute('class', 'faq_acc');

    const h3El80 = document.createElement('h3');
    h3El80.textContent = 'Q. Is overseas treatment of an illness covered in my insurance plan?';
    asideEl55.append(h3El80);

    const divEl215 = document.createElement('div');

    const pEl162 = document.createElement('p');
    pEl162.textContent = 'Generally, any type of treatment taken overseas is not covered. However, you can opt for a global coverage option if you wish to continue treatment abroad.';
    divEl215.append(pEl162);
    asideEl55.append(divEl215);
    articleEl46.append(asideEl55);

    const asideEl56 = document.createElement('aside');
    asideEl56.setAttribute('class', 'faq_acc');

    const h3El81 = document.createElement('h3');
    h3El81.textContent = 'Q. How does no claim bonus work in a healthcare insurance policy?';
    asideEl56.append(h3El81);

    const divEl216 = document.createElement('div');

    const pEl163 = document.createElement('p');
    pEl163.textContent = 'A no-Claim Bonus (NCB) that is given to the policyholder for not raising any claim during a policy year. It is a bonus amount that becomes available as an increased sum insured for every claim-free year. The NCB amount will not exceed 50% of the sum insured under any medical policy insurance. The accrued bonus is reduced by 10% in the next policy year, if the insurer claims in a policy year.';
    divEl216.append(pEl163);
    asideEl56.append(divEl216);
    articleEl46.append(asideEl56);

    const asideEl57 = document.createElement('aside');
    asideEl57.setAttribute('class', 'faq_acc');

    const h3El82 = document.createElement('h3');
    h3El82.textContent = 'Q. Do health insurance policies cover robotic surgery & modern treatments?';
    asideEl57.append(h3El82);

    const divEl217 = document.createElement('div');

    const pEl164 = document.createElement('p');
    pEl164.textContent = 'Yes, our specialised health insurance plans cover various expenses under advanced medical treatments, including robotic surgery and modern-day care treatments. We offer cover for more than 541 daycare procedures';
    divEl217.append(pEl164);
    asideEl57.append(divEl217);
    articleEl46.append(asideEl57);
    sectionEl25.append(articleEl46);

    const articleEl47 = document.createElement('article');
    articleEl47.setAttribute('class', 'faq_tab_section_tab_content content-renewal');

    const asideEl58 = document.createElement('aside');
    asideEl58.setAttribute('class', 'faq_acc');

    const h3El83 = document.createElement('h3');
    h3El83.textContent = 'Q. Is there a grace period for renewal under health insurance?';
    asideEl58.append(h3El83);

    const divEl218 = document.createElement('div');

    const pEl165 = document.createElement('p');
    pEl165.textContent = 'Yes, an insured person is allowed a grace period of 30 days immediately following the policy period end date to pay the renewal premium for a Care insurance policy. You can pay the premium within the grace period to renew the benefits of your medical health insurance policy.';
    divEl218.append(pEl165);
    asideEl58.append(divEl218);
    articleEl47.append(asideEl58);

    const asideEl59 = document.createElement('aside');
    asideEl59.setAttribute('class', 'faq_acc');

    const h3El84 = document.createElement('h3');
    h3El84.textContent = 'Q. Does health insurance get renewed automatically?';
    asideEl59.append(h3El84);

    const divEl219 = document.createElement('div');

    const pEl166 = document.createElement('p');
    pEl166.textContent = 'No, you might have to pay a premium and follow a renewal policy to get your health plan renewed.';
    divEl219.append(pEl166);
    asideEl59.append(divEl219);
    articleEl47.append(asideEl59);

    const asideEl60 = document.createElement('aside');
    asideEl60.setAttribute('class', 'faq_acc');

    const h3El85 = document.createElement('h3');
    h3El85.textContent = 'Q. What happens if I cannot renew my insurance on time?';
    asideEl60.append(h3El85);

    const divEl220 = document.createElement('div');

    const pEl167 = document.createElement('p');
    pEl167.textContent = 'Health insurance renewal should be done before the policy expiry date or within the grace period to retain all the bonuses and and get continued coverage.';
    divEl220.append(pEl167);
    asideEl60.append(divEl220);
    articleEl47.append(asideEl60);

    const asideEl61 = document.createElement('aside');
    asideEl61.setAttribute('class', 'faq_acc');

    const h3El86 = document.createElement('h3');
    h3El86.textContent = 'Q. Is it safe to renew health insurance online?';
    asideEl61.append(h3El86);

    const divEl221 = document.createElement('div');

    const pEl168 = document.createElement('p');
    pEl168.textContent = 'Yes, you can visit your insurer\'s official website to renew your health insurance plan from the comfort of your home.';
    divEl221.append(pEl168);
    asideEl61.append(divEl221);
    articleEl47.append(asideEl61);
    sectionEl25.append(articleEl47);

    const articleEl48 = document.createElement('article');
    articleEl48.setAttribute('class', 'faq_tab_section_tab_content content-claim');

    const asideEl62 = document.createElement('aside');
    asideEl62.setAttribute('class', 'faq_acc');

    const h3El87 = document.createElement('h3');
    h3El87.textContent = 'Q. What is the process for a reimbursement claim settlement of medical insurance?';
    asideEl62.append(h3El87);

    const divEl222 = document.createElement('div');

    const pEl169 = document.createElement('p');
    pEl169.textContent = 'Typically, you will have to inform the insurance company about your hospitalisation. Submit the claim form and all the stamped and verified documents within the stipulated timeline. Once the claim is verified, it will be settled within 2-3 weeks.';
    divEl222.append(pEl169);
    asideEl62.append(divEl222);
    articleEl48.append(asideEl62);

    const asideEl63 = document.createElement('aside');
    asideEl63.setAttribute('class', 'faq_acc');

    const h3El88 = document.createElement('h3');
    h3El88.textContent = 'Q. How many claims can I make in a medical insurance policy?';
    asideEl63.append(h3El88);

    const divEl223 = document.createElement('div');

    const pEl170 = document.createElement('p');
    pEl170.textContent = 'You can make multiple insurance claims during the policy term, provided that it remains within the sum insured limit.';
    divEl223.append(pEl170);
    asideEl63.append(divEl223);
    articleEl48.append(asideEl63);

    const asideEl64 = document.createElement('aside');
    asideEl64.setAttribute('class', 'faq_acc');

    const h3El89 = document.createElement('h3');
    h3El89.textContent = 'Q. What are the details required to make a health insurance claim?';
    asideEl64.append(h3El89);

    const divEl224 = document.createElement('div');

    const pEl171 = document.createElement('p');
    pEl171.textContent = 'For a cashless claim, you need to submit the pre-authorization form at the hospital\'s TPA desk. Also, you need to present your health card and identity proof at the network hospital. Under a reimbursement claim, submit the claim form and documents, such as identity proofs and hospital bills. The details required include name, contact information, policy number, past medical history, proposed line of treatment, duration of treatment, etc.';
    divEl224.append(pEl171);
    asideEl64.append(divEl224);
    articleEl48.append(asideEl64);

    const asideEl65 = document.createElement('aside');
    asideEl65.setAttribute('class', 'faq_acc');

    const h3El90 = document.createElement('h3');
    h3El90.textContent = 'Q. What is the process for a reimbursement claim settlement of medical insurance?';
    asideEl65.append(h3El90);

    const divEl225 = document.createElement('div');

    const pEl172 = document.createElement('p');
    pEl172.textContent = 'Typically you will have to inform the insurance company about your hospitalisation. Submit the claim form and all the stamped and verified documents within the stipulated timeline. Once the claim is verified, it will be settled within 2-3 weeks.';
    divEl225.append(pEl172);
    asideEl65.append(divEl225);
    articleEl48.append(asideEl65);
    sectionEl25.append(articleEl48);
    divEl178.append(sectionEl25);
    articleEl43.append(divEl178);
    sectionEl24.append(articleEl43);
    container.append(sectionEl24);

    const sectionEl26 = document.createElement('section');
    sectionEl26.setAttribute('class', 'custom_block disclaimer-section custom_container');

    const articleEl49 = document.createElement('article');

    const pEl173 = document.createElement('p');
    pEl173.textContent = 'Disclaimer:';
    articleEl49.append(pEl173);

    const pEl174 = document.createElement('p');
    pEl174.textContent = '#Please read the policy T & C, brochure, and prospectus to know more about our medical plans cover as it may vary.';
    articleEl49.append(pEl174);

    const pEl175 = document.createElement('p');
    pEl175.textContent = '^Get exclusive 5% off on Total premium on purchasing the plan from website';
    articleEl49.append(pEl175);

    const pEl176 = document.createElement('p');
    pEl176.textContent = '*Base premium for Ultimate Care is calculated as ₹12/day for an insured member (25 years) who has coverage of 5 Lacs in a zone 3 city (inclusive of 18% GST & 5% digital discount).';
    articleEl49.append(pEl176);

    const pEl177 = document.createElement('p');
    pEl177.textContent = '~Tax benefit is subject to changes in tax laws. Standard T&C Apply';
    articleEl49.append(pEl177);

    const pEl178 = document.createElement('p');
    pEl178.textContent = '**Number of Claims Settled as of 31st March 2024';
    articleEl49.append(pEl178);

    const pEl179 = document.createElement('p');
    pEl179.textContent = '^^ Number of Cashless Healthcare Providers as of Feb 2025';
    articleEl49.append(pEl179);
    sectionEl26.append(articleEl49);
    container.append(sectionEl26);


    block.textContent = '';
    block.append(container);
    accordion()
}

function accordion() {
    const tabs = document.querySelectorAll('.faq_tab_section_tabs > li');
    const contents = document.querySelectorAll('.faq_tab_section_tab_content');

    // Tab click logic
    tabs.forEach(li => {
        li.addEventListener('click', function () {
            tabs.forEach(el => el.classList.remove('active'));
            contents.forEach(el => el.style.display = "none");

            this.classList.add('active');
            const containerId = this.getAttribute("data-target");

            const contentEl = document.querySelector(".faq_tab_section_tab_content." + containerId);
            if (contentEl) contentEl.style.display = "block";
        });
    });

    // Default active (first tab)
    if (tabs.length > 0) {
        tabs[0].click();
    }

    // Toggle behavior for <aside class="faq_acc">
    const asideElements = document.querySelectorAll('.faq_acc');
    asideElements.forEach(aside => {
        aside.addEventListener('click', function () {
            const isActive = this.classList.contains('active');

            // Remove active from all
            asideElements.forEach(el => el.classList.remove('active'));

            // If this wasn't active before, make it active
            if (!isActive) {
                this.classList.add('active');
            }
        });
    });
}


