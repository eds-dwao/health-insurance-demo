// Updated Multi-step Form with working back button and stepper logic

import createField from "../form/form-fields.js";
window.selectedData = {
  count: {
    child: 0,
    adult: 0,
  },
  members: [], // To store selected member types like "Son", "Spouse"
  tenure: "",
  coverage: "",
};
let count = 0;
const maxLimit = 2;

window.matchedItems = [];
function createBackButton(index, steps) {
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-btn");
  backBtn.type = "button";
  backBtn.innerHTML = "←"; // Unicode arrow

  backBtn.addEventListener("click", () => {
    steps[index].style.display = "none";
    steps[index - 1].style.display = "block";
    updateStepper(steps[index - 1]);
  });

  return backBtn;
}

function updateStepper(currentStep) {
  const allSteps = document.querySelectorAll(".form-step");
  const stepper = currentStep.querySelector(".stepper");
  if (!stepper) return;
  const steps = stepper.querySelectorAll(".step");
  steps.forEach((step, idx) => {
    step.classList.remove("active");
    if (idx == parseInt(currentStep.dataset.stepIndex)) {
      step.classList.add("active");
    }
  });
}

async function createFormMulti(formHref) {
  const resp = await fetch(formHref);
  const json = await resp.json();

  const form = document.createElement("div");

  const h1element = document.getElementById("form-headline-1");
  if (h1element) {
    const h4element = document.createElement("h4");
    h4element.innerHTML = h1element.innerHTML;
    h1element.replaceWith(h4element);
    h4element.classList.add("form-headline-4");
  }

  const stepMap = {};
  json.data.forEach((item) => {
    const stepKey = `step${item.Steppart}`;
    if (!stepMap[stepKey]) stepMap[stepKey] = [];
    stepMap[stepKey].push(item);
  });

  const stepKeys = Object.keys(stepMap);
  const totalSteps = stepKeys.length;
  const stepsList = [];

  for (let i = 0; i < totalSteps; i++) {
    const stepKey = stepKeys[i];
    const stepWrapper = document.createElement("form");
    stepWrapper.classList.add("form-step");
    stepWrapper.id = stepKey;
    stepWrapper.dataset.stepIndex = i;
    if (i !== 0) stepWrapper.style.display = "none";
    stepWrapper.style.position = "relative";

    const stepper = document.createElement("div");
    stepper.classList.add("stepper");

    for (let j = 0; j < totalSteps; j++) {
      const step = document.createElement("div");
      step.className = "step";
      step.setAttribute("data-step", j + 1);
      step.textContent = `${j + 1}`;
      if (j === i) step.classList.add("active");
      stepper.appendChild(step);
    }
    stepWrapper.appendChild(stepper);

    const fields = await Promise.all(
      stepMap[stepKey].map((fd) => createField(fd, form))
    );
    fields.forEach((field) => {
      if (field) stepWrapper.appendChild(field);
    });

    if (i > 0) {
      stepWrapper.appendChild(createBackButton(i, stepsList));
    }

    form.appendChild(stepWrapper);
    stepsList.push(stepWrapper);
  }

  const fieldsets = form.querySelectorAll("fieldset");
  fieldsets.forEach((fieldset) => {
    form
      .querySelectorAll(`[data-fieldset="${fieldset.name}"]`)
      .forEach((field) => {
        fieldset.append(field);
      });
  });

  return form;
}

function calculatePremium() {
  let tenureYears = window.selectedData.tenure;
  let sumInsured = window.selectedData.coverage;
  const productConfig = window.productConfig?.[0];

  if (!productConfig) {
    console.error("Missing product config");
    return 0;
  }

  const baseRate = Number(productConfig.Base);
  const tenureDiscount = getTenureDiscount(tenureYears);

  const familyMembers = window.selectedData?.members || [];

  if (!Array.isArray(familyMembers) || familyMembers.length === 0) {
    console.warn("No family members selected");
    return 0;
  }

  // Convert all ages to numbers
  const memberAges = familyMembers.map((m) => Number(m.age));

  console.log(memberAges, "memberAges");

  let totalPremium = 0;

  const anchorAge = Math.max(...memberAges);
  console.log(anchorAge, "anchorAge");

  const ageFactor = getAgeFactor(anchorAge);

  totalPremium =
    baseRate * (sumInsured / 100000) * ageFactor * tenureYears * tenureDiscount;

  console.log(ageFactor, "ageFactor");

  console.log(tenureYears, "tenureYears");
  console.log(tenureDiscount, "tenureDiscount");

  console.log(sumInsured, "sumInsured");

  console.log("Total Premium:", totalPremium);
  return Math.round(totalPremium);
}

function getAgeFactor(age) {
  // Example logic — replace with actual logic as per your rates
  if (age <= 17) return 1.0;
  if (age <= 30) return 1.2;
  if (age <= 45) return 1.5;
  if (age <= 60) return 2.0;
  if (age <= 70) return 2.2;
  if (age <= 80) return 2.4;

  return 2.5;
}

const discountTiers = [
  { years: 1, discount: 0 },
  { years: 2, discount: 0.05 },
  { years: 3, discount: 0.1 },
  // You can add more tiers here easily
  // { years: 4, discount: 0.15 }
];

function checkMemberAllowed(selectedData) {
  let selectedAdults = selectedData.adult;
  let selectedChildren = selectedData.child;
  const config = window.productConfig[0];

  const totalMembers = selectedAdults + selectedChildren;

  if (totalMembers < parseInt(config.minMember)) {
    return config.ErrMsgOneMember || "Minimum number of members not met.";
  }

  if (totalMembers > parseInt(config.maxMember)) {
    return config.ErrMsgMaxMember || "Exceeds maximum allowed members.";
  }

  if (selectedAdults < parseInt(config.minMember)) {
    return config.ErrMsgOneAdult || "At least one adult is required.";
  }

  if (selectedAdults > parseInt(config.adultMember)) {
    return config.ErrMsgAdultMember || "Too many adults selected.";
  }

  if (selectedChildren > parseInt(config.child)) {
    return config.ErrMsgChildNo || "Too many children selected.";
  }

  return null; // ✅ All checks passed
}

function getTenureDiscount(tenureYears) {
  const tier = matchedItems[0].tenureAndDiscount.find(
    (t) => t.years === tenureYears
  );
  return tier ? 1 - tier.discount : 1.0;
}

function displayPremium(premium) {
  document.querySelector("#premium-amount").innerText = premium;
}
function enableStepNavigation(form) {
  const steps = form.querySelectorAll(".form-step");

  steps.forEach((step, index) => {
    const submitBtn = step.querySelector(
      'button[type="submit"], button.next-cta, button[name="next-cta"]'
    );

    if (submitBtn) {
      submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const inputs = step.querySelectorAll("input, select, textarea");
        let allValid = true;

        inputs.forEach((input) => {
          const isRequired =
            input.hasAttribute("required") ||
            input.getAttribute("mandatory") === "true";

          input.classList.remove("field-error");

          if (isRequired) {
            const value =
              input.type === "checkbox" ? input.checked : input.value.trim();
            if (!value) {
              allValid = false;
              input.classList.add("field-error");
              const msg = input.nextElementSibling;
              if (msg && msg.classList.contains("errorMsg")) {
                msg.style.display = "block";
              }
            } else {
              const msg = input.nextElementSibling;
              if (msg && msg.style.display == "block") {
                msg.style.display = "none";
              }
            }
          }
        });

        if (allValid) {
          const isFormStep2 = e.target.form && e.target.form.id === "step2";
          const isFormStep3 = e.target.form && e.target.form.id === "step3";

          if (isFormStep2) {
            const erroMsg = checkMemberAllowed(selectedData.count);
            if (erroMsg) {
              e.target.form.querySelector("#fam-error").innerText = erroMsg;
              return;
            }
            const config = window.productConfig[0]; // Get the config object
            const dropdownContainer =
              document.getElementById("person-dropdown"); // or any container

            // Clear previous dropdowns
            dropdownContainer.innerHTML = "";

            selectedData.members.forEach((member, index) => {
              const isChild = member === "Son" || member === "Daughter";
              const startAge = isChild
                ? Number(config.childMinAge)
                : Number(config.minAge);
              const endAge = isChild
                ? Number(config.childMaxAge)
                : Number(config.maxAge);

              console.log(
                `Creating dropdown for: ${member} (${
                  isChild ? "Child" : "Adult"
                })`
              );
              console.log(`Age range: ${startAge} to ${endAge}`);

              const label = document.createElement("label");
              label.textContent = `Select age for ${member}:`;
              label.setAttribute("for", `age-${member}-${index}`);

              const select = document.createElement("select");
              select.id = `age-${member}-${index}`;
              select.name = `age-${member}-${index}`;

              for (let age = startAge; age <= endAge; age++) {
                const option = document.createElement("option");
                option.value = age;
                option.textContent = `${age} Years`;
                select.appendChild(option);
              }

              dropdownContainer.appendChild(label);
              dropdownContainer.appendChild(select);
            });
          }
          if (isFormStep3) {
            const selects =
              e.target.form.querySelectorAll('select[id^="age-"]');
            window.selectedData.members = [];
            selects.forEach((select) => {
              // Get the member (Son, Daughter, etc.) and age from each select element
              const [, member, index] = select.id.split("-"); // Extract member type and index (e.g., age-Son-1)
              const selectedAge = select.value; // The selected age value

              // Add the selected member and age to the members array
              window.selectedData.members.push({ member, age: selectedAge });

              // Update the count based on whether it's a child or an adult
              if (member === "Son" || member === "Daughter") {
                window.selectedData.count.child++;
              } else {
                window.selectedData.count.adult++;
              }
            });
            console.log(window.selectedData);
          }
          if (index < steps.length - 1) {
            step.style.display = "none";
            steps[index + 1].style.display = "block";
            updateStepper(steps[index + 1]);
          } else {
            window.selectedData.tenure = parseInt(
              matchedItems[0].minimumTenure
            );
            window.selectedData.coverage = parseInt(
              matchedItems[0].defaultCoverage
            );
            const premium = calculatePremium();
            console.log("Final Premium:", premium);

            const premsec = renderpremiumsection();
            displayPremium(premium);
          }
        }
      });
    }
  });
}

async function getProductConfig(formHref) {
  const resp = await fetch(formHref);
  const json = await resp.json();

  let urlParm = window.location.search.split("=")[1];
  if (!urlParm) {
    urlParm = "careSupreme";
  }
  window.productConfig = json.data.filter(
    (item) => item.CONFIG_PRODUCTNAME === urlParm
  );
}
function renderpremiumsection() {
  document.querySelectorAll(".productform-wrapper")[0].style.display = "none";

  // Helper to format rupees to Lakhs
  function toLakh(val) {
    return val / 100000 + " L";
  }

  let html = "";
  html += '<div class="premsection">';

  html += '<div class="section">';
  html += "<label>Looking to Insure</label>";

  selectedData.members.forEach((memberObj, index) => {
    const member = memberObj.member;
    const selectedAge = Number(memberObj.age);

    const isChild = ["Son", "Daughter"].includes(member);
    const startAge = isChild
      ? Number(window.productConfig[0].childMinAge)
      : Number(window.productConfig[0].minAge);
    const endAge = isChild
      ? Number(window.productConfig[0].childMaxAge)
      : Number(window.productConfig[0].maxAge);

    const selectId = "insured_" + index;
    html += '<div class="member-age-select">';
    html += '<label for="' + selectId + '">' + member + "</label>";
    html += '<select id="' + selectId + '" data-member="' + member + '">';

    for (let age = startAge; age <= endAge; age++) {
      const selected = age === selectedAge ? " selected" : "";
      html +=
        '<option value="' +
        age +
        '"' +
        selected +
        ">" +
        age +
        " Years</option>";
    }

    html += "</select>";
    html += "</div>";
  });

  html += "</div>";

  // Slider section
  html += '<div class="section">';
  html += "<label>Total Coverage (in Lakh)</label>";
  html += '<div class="slider-container">';
  html +=
    '<div class="slider-label" id="coverageValue">' +
    toLakh(matchedItems[0].defaultCoverage) +
    "</div>";
  html +=
    '<input type="range" id="coverageSlider" min="' +
    matchedItems[0].minTotalCoverage +
    '" max="' +
    matchedItems[0].maxTotalCoverage +
    '" step="' +
    matchedItems[0].stepCoverage +
    '" value="' +
    matchedItems[0].defaultCoverage +
    '">';
  html += '<div class="coverage-range-labels">';
  html += "<span>" + toLakh(matchedItems[0].minTotalCoverage) + "</span>";
  html += "<span>" + toLakh(matchedItems[0].maxTotalCoverage) + "</span>";
  html += "</div>";
  html += "</div>";
  html += "</div>";

  // Tenure section
  html += '<div class="section">';
  html += "<label>Policy Tenure</label>";
  html += '<div class="tenure-options">';

  matchedItems[0].tenureAndDiscount.forEach((item, index) => {
    debugger;
    const isSelected = item.years === parseInt(matchedItems[0].minimumTenure);
    html +=
      '<div class="tenure-box' +
      (isSelected ? " selected" : "") +
      '" data-tenure="' +
      item.years +
      '">';
    html += item.years + " Year" + (item.years > 1 ? "s" : "");
    if (item.discount > 0) {
      html +=
        '<div class="discount">' +
        (item.discount * 100).toFixed(1) +
        "% OFF</div>";
    }
    html += "</div>";
  });

  html += "</div>"; // tenure-options
  html += "</div>"; // section
  html += '<div><h1>Premium Amount is :</h1><p id="premium-amount"></p></div>';
  html += "</div>"; // premsection

  document
    .querySelector(".productform-container")
    .insertAdjacentHTML("beforeend", html);

  const sliderinput = document.getElementById("coverageSlider");
  const sliderlabel = document.getElementById("coverageValue");
  document.querySelectorAll(".member-age-select select").forEach((select) => {
    select.addEventListener("change", (event) => {
      const selage = event.target.value;
      const selmember = event.target.getAttribute("data-member");
      console.log(`${selmember} age changed to: ${selage}`);

      selectedData.members.forEach((data) => {
        if (data.member == selmember) {
          data.age = parseInt(selage);
        }
      });
      const premium = calculatePremium();
      console.log("Final Premium:", premium);
      displayPremium(premium);
    });
  });
  sliderinput.addEventListener("input", function (e) {
    if (e.target && e.target.id === "coverageSlider") {
      const value = Number(e.target.value);
      sliderinput.innerText = value / 100000 + " L";
      sliderlabel.innerText = value / 100000 + " L";
      window.selectedData.coverage = value;
      const premium = calculatePremium();
      console.log("Final Premium:", premium);
      displayPremium(premium);
    }
  });

  document.addEventListener("click", function (e) {
    if (e.target && e.target.classList.contains("tenure-box")) {
      // Remove 'selected' class from all
      document
        .querySelectorAll(".tenure-box")
        .forEach((el) => el.classList.remove("selected"));

      // Add 'selected' to clicked box
      e.target.classList.add("selected");

      // Get selected tenure
      const selectedTenure = e.target.getAttribute("data-tenure");
      window.selectedData.tenure = parseInt(selectedTenure);
      const premium = calculatePremium();
      console.log("Final Premium:", premium);

      displayPremium(premium);
      console.log("Selected Tenure:", selectedTenure);
    }
  });
}

async function callGQL() {
  const myHeaders = new Headers();

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const shouldBustCache = true; // Set to false when you don't want to add timestamp
  let url =
    "https://publish-p102857-e1312424.adobeaemcloud.com/graphql/execute.json/wknd-shared/newpr";
  if (shouldBustCache) {
    const ts = Date.now();
    url += `?ts=${ts}`;
  }

  fetch(url, requestOptions)
    .then((response) => response.json()) // <- parse as JSON, not text
    .then((result) => {
      const configProductName = window.productConfig?.[0]?.CONFIG_PRODUCTNAME;

      matchedItems =
        result.data.productFormList.items?.filter(
          (item) => item.productname === configProductName
        ) || [];

      console.log("Matched Items:", matchedItems);
    })
    .catch((error) => console.error("Fetch error:", error));
}

export default async function decorate(block) {
  const formlink = block.querySelector("a[href]").getAttribute("title");
  const form = await createFormMulti(formlink);
  block.replaceWith(form);
  enableStepNavigation(form);
  await getProductConfig(
    "https://main--health-insurance-demo--eds-dwao.aem.page/productconfig.json"
  );

  const meme = await callGQL();

  const buttons = document.querySelectorAll(".family-rel");
  const counterSpan = document.getElementById("counter");

  document.querySelectorAll(".increment").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const container = this.closest(".family-rel");
      const counterSpan = container.querySelector(".counter");
      const checkbox = container.querySelector('input[type="checkbox"]');
      const value = checkbox.value;
      const isChild = value === "Son" || value === "Daughter";

      let count = parseInt(counterSpan.textContent, 10) || 0;

      if (count < 2) {
        count++;
        counterSpan.textContent = count;

        // ✅ Update selectedData
        if (isChild) {
          selectedData.count.child += 1;
          selectedData.members.push(value);
          // Auto-check the checkbox
          checkbox.checked = true;

          // Add to members if not already there
          if (!selectedData.members.includes(value)) {
            selectedData.members.push(value);
          }
        }

        console.log(`${value} incremented to`, count);
        console.log("Updated selectedData:", selectedData);
      }
    });
  });

  document.querySelectorAll(".decrement").forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const container = this.closest(".family-rel");
      const counterSpan = container.querySelector(".counter");
      const checkbox = container.querySelector('input[type="checkbox"]');
      const value = checkbox.value;
      const isChild = value === "Son" || value === "Daughter";

      let count = parseInt(counterSpan.textContent, 10) || 0;

      if (count > 0) {
        count--;
        counterSpan.textContent = count;

        // ✅ Update selectedData
        if (isChild) {
          selectedData.count.child = Math.max(0, selectedData.count.child - 1);
          selectedData.members.pop(value);

          // If count is 0, uncheck checkbox and remove member
          if (count === 0) {
            checkbox.checked = false;
            selectedData.members = selectedData.members.filter(
              (m) => m !== value
            );
          }
        }

        console.log(`${value} decremented to`, count);
        console.log("Updated selectedData:", selectedData);
      }
    });
  });

  buttons.forEach((button) => {
    button.addEventListener("click", function (e) {
      if (e.target.closest(".number-control")) return;

      e.preventDefault();

      const checkbox = this.querySelector('input[type="checkbox"]');
      const value = checkbox.value;
      const isChild = value === "Son" || value === "Daughter";
      const key = isChild ? "child" : "adult";

      checkbox.checked = !checkbox.checked;

      const counter = this.querySelector(".counter");

      if (checkbox.checked) {
        if (!selectedData.members.includes(value)) {
          selectedData.members.push(value);
        }

        if (isChild) {
          counter.textContent = "1";
          selectedData.count.child += 1;
        } else {
          selectedData.count.adult += 1;
        }
      } else {
        if (isChild) {
          const oldCount = parseInt(counter.textContent, 10) || 0;
          selectedData.count.child = Math.max(
            0,
            selectedData.count.child - oldCount
          );
          counter.textContent = "0";
        } else {
          selectedData.count.adult = Math.max(0, selectedData.count.adult - 1);
        }

        selectedData.members = selectedData.members.filter((m) => m !== value);
      }

      console.log("Checkbox click:", selectedData);
    });
  });
}
