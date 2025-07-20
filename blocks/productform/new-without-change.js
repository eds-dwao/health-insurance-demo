// Clean Multi-step Form with working checkboxes and dynamic dropdowns

import createField from "../form/form-fields.js";
var productConfig;
var selectedFamilyMembers = [];

function createBackButton(index, steps) {
  const backBtn = document.createElement("button");
  backBtn.classList.add("back-btn");
  backBtn.type = "button";
  backBtn.innerHTML = "←";

  backBtn.addEventListener("click", () => {
    steps[index].style.display = "none";
    steps[index - 1].style.display = "block";
    updateStepper(steps[index - 1]);
  });

  return backBtn;
}

function updateStepper(currentStep) {
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

function navigateToNextStep(currentStep) {
  const allSteps = document.querySelectorAll('.form-step');
  const currentIndex = parseInt(currentStep.dataset.stepIndex);
  
  if (currentIndex < allSteps.length - 1) {
    currentStep.style.display = 'none';
    allSteps[currentIndex + 1].style.display = 'block';
    updateStepper(allSteps[currentIndex + 1]);
    
    // If moving to step 3, create age dropdowns
    if (allSteps[currentIndex + 1].id === 'step3') {
      setTimeout(() => {
        createAgeDropdownsForSelectedMembers(allSteps[currentIndex + 1]);
      }, 100);
    }
  }
}

function initializeStep2(step2) {
  console.log('Initializing step 2 with dynamic checkboxes');
  createFamilyMemberCheckboxes(step2);
}

function handleCheckboxChange(checkbox) {
  const familyRelContainer = checkbox.closest('.family-rel');
  
  if (!familyRelContainer) {
    console.error('Could not find family-rel container for checkbox:', checkbox);
    return;
  }
  
  let memberName = checkbox.value;
  if (!memberName) {
    const label = familyRelContainer.querySelector('label');
    memberName = label ? label.textContent.trim() : `Member_${Date.now()}`;
  }
  
  const displayName = memberName.charAt(0).toUpperCase() + memberName.slice(1).replace(/_/g, ' ');
  
  if (checkbox.checked) {
    familyRelContainer.classList.add('checked');
    if (!selectedFamilyMembers.includes(displayName)) {
      selectedFamilyMembers.push(displayName);
    }
  } else {
    familyRelContainer.classList.remove('checked');
    const index = selectedFamilyMembers.indexOf(displayName);
    if (index > -1) {
      selectedFamilyMembers.splice(index, 1);
    }
  }
  
  updateContainerVisualState(familyRelContainer, checkbox.checked);
}

function updateContainerVisualState(container, isChecked) {
  if (isChecked) {
    container.style.backgroundColor = '#e8f5e8';
    container.style.borderColor = '#28a745';
    container.style.fontWeight = '500';
  } else {
    container.style.backgroundColor = '';
    container.style.borderColor = '';
    container.style.fontWeight = '';
  }
}

function createFamilyMemberCheckboxes(step2) {
  // Clear existing content except stepper and back button
  const stepper = step2.querySelector('.stepper');
  const backBtn = step2.querySelector('.back-btn');
  
  Array.from(step2.children).forEach(child => {
    if (child !== stepper && child !== backBtn) {
      child.remove();
    }
  });
  
  const familyMembers = [
    { id: 'self', label: 'Self', value: 'self', icon: '👤' },
    { id: 'spouse', label: 'Spouse', value: 'spouse', icon: '💑' },
    { id: 'son', label: 'Son', value: 'son', icon: '👦' },
    { id: 'daughter', label: 'Daughter', value: 'daughter', icon: '👧' },
    { id: 'father', label: 'Father', value: 'father', icon: '👨' },
    { id: 'mother', label: 'Mother', value: 'mother', icon: '👩' },
    { id: 'father_in_law', label: 'Father-in-law', value: 'father_in_law', icon: '👴' },
    { id: 'mother_in_law', label: 'Mother-in-law', value: 'mother_in_law', icon: '👵' }
  ];
  
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('family-selection-container');
  mainContainer.style.padding = '20px 0';
  
  const title = document.createElement('h3');
  title.textContent = 'Select Family Members';
  title.style.marginBottom = '20px';
  title.style.fontSize = '1.5em';
  title.style.fontWeight = '600';
  mainContainer.appendChild(title);
  
  const instruction = document.createElement('p');
  instruction.textContent = 'Choose the family members you want to include in your health insurance plan:';
  instruction.style.marginBottom = '20px';
  instruction.style.color = '#666';
  mainContainer.appendChild(instruction);
  
  const checkboxContainer = document.createElement('div');
  checkboxContainer.classList.add('checkbox-grid');
  checkboxContainer.style.display = 'grid';
  checkboxContainer.style.gridTemplateColumns = 'repeat(auto-fit, minmax(200px, 1fr))';
  checkboxContainer.style.gap = '15px';
  checkboxContainer.style.marginBottom = '20px';
  
  familyMembers.forEach(member => {
    const familyRelDiv = document.createElement('div');
    familyRelDiv.classList.add('family-rel');
    familyRelDiv.style.cssText = `
      border: 2px solid #e1e5e9;
      border-radius: 8px;
      padding: 15px;
      cursor: pointer;
      transition: all 0.3s ease;
      background-color: #fff;
      user-select: none;
    `;
    
    familyRelDiv.addEventListener('mouseenter', function() {
      if (!this.classList.contains('checked')) {
        this.style.borderColor = '#007bff';
        this.style.backgroundColor = '#f8f9fa';
      }
    });
    
    familyRelDiv.addEventListener('mouseleave', function() {
      if (!this.classList.contains('checked')) {
        this.style.borderColor = '#e1e5e9';
        this.style.backgroundColor = '#fff';
      }
    });
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = `family_${member.id}`;
    checkbox.name = 'family_members[]';
    checkbox.value = member.value;
    checkbox.style.cssText = 'margin-right: 10px; transform: scale(1.2);';
    
    const label = document.createElement('label');
    label.htmlFor = `family_${member.id}`;
    label.textContent = member.label;
    label.style.cssText = `
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      display: flex;
      align-items: center;
    `;
    
    const icon = document.createElement('span');
    icon.style.cssText = 'margin-left: 10px; font-size: 20px;';
    icon.textContent = member.icon;
    
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(member.label));
    label.appendChild(icon);
    
    familyRelDiv.appendChild(label);
    checkboxContainer.appendChild(familyRelDiv);
    
    familyRelDiv.addEventListener('click', function(e) {
      if (e.target.type !== 'checkbox' && e.target.tagName !== 'LABEL') {
        e.preventDefault();
        e.stopPropagation();
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event('change', { bubbles: true }));
      }
    });
    
    checkbox.addEventListener('change', function() {
      handleCheckboxChange(this);
    });
  });
  
  mainContainer.appendChild(checkboxContainer);
  
  const validationMsg = document.createElement('div');
  validationMsg.classList.add('validation-message');
  validationMsg.style.cssText = `
    color: #dc3545;
    font-size: 14px;
    margin-top: 10px;
    display: none;
  `;
  validationMsg.textContent = 'Please select at least one family member to continue.';
  mainContainer.appendChild(validationMsg);
  
  const nextButton = document.createElement('button');
  nextButton.type = 'button';
  nextButton.classList.add('next-cta');
  nextButton.textContent = 'Next Step';
  nextButton.style.cssText = `
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 20px;
    transition: background-color 0.3s ease;
  `;
  
  nextButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#0056b3';
  });
  
  nextButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#007bff';
  });
  
  nextButton.addEventListener('click', function(e) {
    e.preventDefault();
    const validationMsg = step2.querySelector('.validation-message');
    
    if (selectedFamilyMembers.length === 0) {
      if (validationMsg) {
        validationMsg.style.display = 'block';
      }
      return;
    } else {
      if (validationMsg) {
        validationMsg.style.display = 'none';
      }
    }
    
    navigateToNextStep(step2);
  });
  
  mainContainer.appendChild(nextButton);
  
  if (backBtn) {
    step2.insertBefore(mainContainer, backBtn.nextSibling);
  } else {
    step2.insertBefore(mainContainer, stepper.nextSibling);
  }
}

function createAgeDropdownsForSelectedMembers(step3) {
  const fieldsContainer = step3.querySelector('.fields-container') || step3;
  
  const existingDropdowns = fieldsContainer.querySelectorAll('.age-dropdown-container');
  existingDropdowns.forEach(dropdown => dropdown.remove());
  
  selectedFamilyMembers.forEach(memberName => {
    const dropdownContainer = document.createElement('div');
    dropdownContainer.classList.add('age-dropdown-container');
    dropdownContainer.style.marginBottom = '15px';
    
    const label = document.createElement('label');
    label.textContent = `${memberName} Age`;
    label.style.cssText = 'display: block; margin-bottom: 5px; font-weight: 500;';
    
    const select = document.createElement('select');
    select.name = `${memberName.toLowerCase().replace(/\s+/g, '_')}_age`;
    select.style.cssText = `
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    `;
    select.setAttribute('required', 'true');
    
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = `Select ${memberName} Age`;
    select.appendChild(defaultOption);
    
    for (let age = 18; age <= 80; age++) {
      const option = document.createElement('option');
      option.value = age;
      option.textContent = `${age} years`;
      select.appendChild(option);
    }
    
    dropdownContainer.appendChild(label);
    dropdownContainer.appendChild(select);
    fieldsContainer.appendChild(dropdownContainer);
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
  
  const step2 = form.querySelector('#step2');
  if (step2) {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.id === 'step2' && target.style.display !== 'none' && !target.hasAttribute('data-initialized')) {
            target.setAttribute('data-initialized', 'true');
            setTimeout(() => initializeStep2(target), 50);
          }
        }
      });
    });
    
    observer.observe(step2, { attributes: true, attributeFilter: ['style'] });
    
    if (step2.dataset.stepIndex === '0' || step2.style.display !== 'none') {
      step2.setAttribute('data-initialized', 'true');
      setTimeout(() => initializeStep2(step2), 100);
    }
  }

  form.addEventListener('click', function(e) {
    const submitBtn = e.target.closest('button[type="submit"], button.next-cta, button[name="next-cta"]');
    
    if (submitBtn) {
      e.preventDefault();
      
      const step = submitBtn.closest('.form-step');
      const index = parseInt(step.dataset.stepIndex);
      
      if (step.id === 'step2') {
        return;
      }
      
      const inputs = step.querySelectorAll("input, select, textarea");
      let allValid = true;

      inputs.forEach((input) => {
        const isRequired = input.hasAttribute("required") || input.getAttribute("mandatory") === "true";
        input.classList.remove("field-error");

        if (isRequired) {
          const value = input.type === "checkbox" ? input.checked : input.value.trim();
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
          navigateToNextStep(step);
        } else {
          const formElement = document.createElement('form');
          formElement.method = 'POST';
          formElement.style.display = 'none';
          
          const allInputs = form.querySelectorAll('input, select, textarea');
          allInputs.forEach(input => {
            if (input.type !== 'button' && input.name) {
              const hiddenInput = document.createElement('input');
              hiddenInput.type = 'hidden';
              hiddenInput.name = input.name;
              hiddenInput.value = input.type === 'checkbox' ? input.checked : input.value;
              formElement.appendChild(hiddenInput);
            }
          });
          
          const membersInput = document.createElement('input');
          membersInput.type = 'hidden';
          membersInput.name = 'selected_family_members';
          membersInput.value = JSON.stringify(selectedFamilyMembers);
          formElement.appendChild(membersInput);
          
          document.body.appendChild(formElement);
          formElement.submit();
        }
      }
    }
  });
}

async function getProductConfig(formHref) {
  try {
    const resp = await fetch(formHref);
    const json = await resp.json();

    let urlParam = window.location.search.split("=")[1];
    productConfig = json.data.filter(
      (item) => item.CONFIG_PRODUCTNAME === urlParam
    );
    console.log("Product config loaded:", productConfig);
  } catch (error) {
    console.error("Failed to load product config:", error);
  }
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