// Updated Multi-step Form with working back button and stepper logic

import createField from "../form/form-fields.js";
var productConfig;

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
    form.querySelectorAll(`[data-fieldset="${fieldset.name}"]`).forEach((field) => {
      fieldset.append(field);
    });
  });

  return form;
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
              if (msg && msg.classList.contains("error-msg")) {
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
          if (index < steps.length - 1) {
            step.style.display = "none";
            steps[index + 1].style.display = "block";
            updateStepper(steps[index + 1]);
          } else {
            form.submit();
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
  productConfig = json.data.filter(
    (item) => item.CONFIG_PRODUCTNAME === urlParm
  );
  console.log(productConfig);
}

export default async function decorate(block) {
  const formlink = block.querySelector("a[href]").getAttribute("title");
  const form = await createFormMulti(formlink);
  block.replaceWith(form);
  enableStepNavigation(form);
  await getProductConfig(
    "https://main--health-insurance-demo--eds-dwao.aem.page/productconfig.json"
  );
}
