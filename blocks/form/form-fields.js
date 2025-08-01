import { toClassName } from "../../scripts/aem.js";

function createFieldWrapper(fd) {
  const fieldWrapper = document.createElement("div");
  if (fd.Style) {
    fieldWrapper.className = fd.Style;
  }
  fieldWrapper.classList.add("field-wrapper", `${fd.Type}-wrapper`);

  fieldWrapper.dataset.fieldset = fd.Fieldset;

  return fieldWrapper;
}

const ids = [];
function generateFieldId(fd, suffix = "") {
  const slug = toClassName(`form-${fd.Name}${suffix}`);
  ids[slug] = ids[slug] || 0;
  const idSuffix = ids[slug] ? `-${ids[slug]}` : "";
  ids[slug] += 1;
  return `${slug}${idSuffix}`;
}

function createLabel(fd) {
  const label = document.createElement("label");
  label.id = generateFieldId(fd, "-label");
  label.textContent = fd.Label || fd.Name;
  label.setAttribute("for", fd.Id);
  return label;
}

function setCommonAttributes(field, fd) {
  field.disabled =
    fd.Disabled && (fd.Disabled.toLowerCase() === "true" ? "true" : false);
  fd.Autocomplete && (field.autocomplete = fd.Autocomplete.toLowerCase());
  field.id = fd.Id;
  field.name = fd.Name;
  field.required =
    fd.Mandatory &&
    (fd.Mandatory.toLowerCase() === "true" ||
      fd.Mandatory.toLowerCase() === "x");
  fd.Placeholder && (field.placeholder = fd.Placeholder);
  field.value = fd.Value;
}

const createHeading = (fd) => {
  const fieldWrapper = createFieldWrapper(fd);

  const level = fd.Style && fd.Style.includes("sub-heading") ? 3 : 2;
  const heading = document.createElement(`h${level}`);
  heading.textContent = fd.Value || fd.Label;
  heading.id = fd.Id;

  fieldWrapper.append(heading);

  return { field: heading, fieldWrapper };
};

const createPlaintext = (fd) => {
  const fieldWrapper = createFieldWrapper(fd);

  const text = document.createElement("p");
  text.textContent = fd.Value || fd.Label;
  text.id = fd.Id;

  fieldWrapper.append(text);

  return { field: text, fieldWrapper };
};

const createSelect = async (fd) => {
  const select = document.createElement("select");
  setCommonAttributes(select, fd);
  const addOption = ({ text, value }) => {
    const option = document.createElement("option");
    option.text = text.trim();
    option.value = value.trim();
    if (option.value === select.value) {
      option.setAttribute("selected", "");
    }
    select.add(option);
    return option;
  };

  if (fd.Placeholder) {
    const ph = addOption({ text: fd.Placeholder, value: "" });
    ph.setAttribute("disabled", "");
  }

  if (fd.Options) {
    let options = [];
    if (fd.Options.startsWith("https://")) {
      const optionsUrl = new URL(fd.Options);
      const resp = await fetch(`${optionsUrl.pathname}${optionsUrl.search}`);
      const json = await resp.json();
      json.data.forEach((opt) => {
        options.push({
          text: opt.Option,
          value: opt.Value || opt.Option,
        });
      });
    } else {
      options = fd.Options.split(",").map((opt) => ({
        text: opt.trim(),
        value: opt.trim().toLowerCase(),
      }));
    }

    options.forEach((opt) => addOption(opt));
  }

  const fieldWrapper = createFieldWrapper(fd);
  fieldWrapper.append(select);
  fieldWrapper.append(createLabel(fd));

  return { field: select, fieldWrapper };
};

const createConfirmation = (fd, form) => {
  form.dataset.confirmation = new URL(fd.Value).pathname;

  return {};
};

const createSubmit = (fd) => {
  const button = document.createElement("button");
  button.textContent = fd.Label || fd.Name;
  button.classList.add("button");
  button.type = "submit";
  button.id=fd?.ID ? fd.ID :"";

  const fieldWrapper = createFieldWrapper(fd);
  fieldWrapper.append(button);
  return { field: button, fieldWrapper };
};

const createTextArea = (fd) => {
  const field = document.createElement("textarea");
  setCommonAttributes(field, fd);

  const fieldWrapper = createFieldWrapper(fd);
  const label = createLabel(fd);
  field.setAttribute("aria-labelledby", label.id);
  fieldWrapper.append(label);
  fieldWrapper.append(field);

  return { field, fieldWrapper };
};

const createErrMsg = (fd) => {
  const errField = document.createElement("span");
  errField.classList.add("errorMsg");
  errField.textContent = fd.ErrMsg;

  return { errField };
};
const createInput = (fd) => {
  const field = document.createElement("input");
  field.type = fd.Type;
  setCommonAttributes(field, fd);

  const fieldWrapper = createFieldWrapper(fd);
  const label = createLabel(fd);
  field.setAttribute("aria-labelledby", label.id);
  fieldWrapper.append(label);
  fieldWrapper.append(field);
  if ((fd.Mandatory = "true")) {
    const { errField } = createErrMsg(fd);
    fieldWrapper.append(errField);
  }

  return { field, fieldWrapper };
};

const createFieldset = (fd) => {
  const field = document.createElement("fieldset");
  setCommonAttributes(field, fd);

  if (fd.Label) {
    const legend = document.createElement("legend");
    legend.textContent = fd.Label;
    field.append(legend);
  }

  const fieldWrapper = createFieldWrapper(fd);
  fieldWrapper.append(field);

  return { field, fieldWrapper };
};

function createFieldWrapperDiv(fd, className) {
  const fieldWrapper = document.createElement("div");
  // if (fd.Style) fieldWrapper.className = fd.Style;
  fieldWrapper.classList.add(className);
  return fieldWrapper;
}

const createToggle = (fd) => {
  const { field, fieldWrapper } = createInput(fd);
  field.type = "checkbox";
  if (!field.value) {
    field.value = "on";
  }
  field.classList.add("toggle");
  fieldWrapper.classList.add("selection-wrapper");

  const toggleSwitch = document.createElement("div");
  toggleSwitch.classList.add("switch");
  toggleSwitch.append(field);
  fieldWrapper.append(toggleSwitch);

  const slider = document.createElement("span");
  slider.classList.add("slider");
  toggleSwitch.append(slider);
  slider.addEventListener("click", () => {
    field.checked = !field.checked;
  });

  return { field, fieldWrapper };
};

const createCheckbox = (fd) => {
  const { field, fieldWrapper } = createInput(fd);
  if (fd.Checked) {
    field.value = field.value;
    field.setAttribute("checked", true);
  }
  fieldWrapper.classList.add("selection-wrapper");

  return { field, fieldWrapper };
};

const createRadio = (fd) => {
  const { field, fieldWrapper } = createInput(fd);
  if (!field.value) {
    field.value = fd.Label || "on";
  }
  if (fd.Checked) {
    field.setAttribute("checked", true);
  }
  fieldWrapper.classList.add("selection-wrapper");

  return { field, fieldWrapper };
};

const createRange = (fd) => {
  // let fieldWrapper = createFieldWrapper(fd);

  const { field, fieldWrapper } = createInput(fd);
  (field.value = fd.Value),
    (field.min = fd.Min),
    (field.max = fd.Max),
    (field.step = fd.Step);

  return { field, fieldWrapper };
};

const createCalculatorRange = (fd) => {
  fd.Type = "range";

  const outerWrapper = createFieldWrapperDiv(fd, "outerdiv");
  const label = createLabel(fd);
  const dataDiv = createFieldWrapperDiv(fd, "data");
  dataDiv.appendChild(label);
  const inputDiv = createFieldWrapperDiv(fd, "inputDiv");
  const spanVal = document.createElement("span");
  spanVal.classList.add("inputinnerspan");
  spanVal.textContent = fd.Symbols;

  const calValinput = document.createElement("input");
  calValinput.type = "text";
  calValinput.classList.add("calValinput");

  calValinput.value = fd.Min;
  inputDiv.appendChild(calValinput);
  inputDiv.appendChild(spanVal);
  dataDiv.appendChild(inputDiv);

  outerWrapper.appendChild(dataDiv);

  const fieldWrapperParent = createFieldWrapperDiv(fd, "rangediv");
  // fieldWrapper.append(field);
  const { field } = createInput(fd);
  if (!field.value) field.value = fd.Label || "on";
  field.min = fd.Min;
  field.max = fd.Max;
  field.step = fd.Step;
  field.value = fd.Value;

  fieldWrapperParent.appendChild(field);
  const rangLimiteWrapper = createRangeLimit(fd);
  fieldWrapperParent.appendChild(rangLimiteWrapper);
  // const { field, fieldWrapper } = createInputNew(fd);
  outerWrapper.appendChild(fieldWrapperParent);

  const fieldWrapper = createFieldWrapper(fd);
  fieldWrapper.append(outerWrapper);
  return { fieldWrapper };
};
const createRangeLimit = (fd) => {
  const rangeVal = [fd.Min, fd.Max];
  const rangeLimitDiv = document.createElement("div");
  rangeLimitDiv.classList.add("values");
  rangeVal.forEach((val) => {
    const spanVal = document.createElement("span");
    spanVal.classList.add("text");
    spanVal.textContent = val;
    rangeLimitDiv.appendChild(spanVal);
  });
  return rangeLimitDiv;
};
const createButton = (fd) => {
  const field = document.createElement("button");
  // field.type = fd.Type;
  setCommonAttributes(field, fd);
field.textContent=fd.Value
  const fieldWrapper = createFieldWrapper(fd);
  // const label = createLabel(fd);
  // field.setAttribute("aria-labelledby", label.id);
  // fieldWrapper.append(label);
  fieldWrapper.append(field);
  // if ((fd.Mandatory = "true")) {
  //   const { errField } = createErrMsg(fd);
  //   fieldWrapper.append(errField);
  // }

  return { field, fieldWrapper };
};

const createInputButton = (fd) => {
  const field = document.createElement("input");
  field.type = fd.Type;
  field.value=fd.Label? fd.Label:fd.Value
  setCommonAttributes(field, fd);

  const fieldWrapper = createFieldWrapper(fd);
  // const label = createLabel(fd);
  // field.setAttribute("aria-labelledby", label.id);
  // fieldWrapper.append(label);
  fieldWrapper.append(field);
  // if ((fd.Mandatory = "true")) {
  //   const { errField } = createErrMsg(fd);
  //   fieldWrapper.append(errField);
  // }

  return { field, fieldWrapper };
};
const createMultiStepForm = (fd) => {
  
  const fieldWrapper = createFieldWrapper(fd);
 
  // Optionally add an ID or class
 //  button.id = 'myButton';
   return {fieldWrapper};
 };

//  const createDivWrapper = (fd) => {
  
//   const fieldWrapper = document.createElement("div");
 
//   // Optionally add an ID or class
//  //  button.id = 'myButton';
//    return {fieldWrapper};
//  };

 const createDivWrapper=(fd)=> {
  const fieldWrapper = document.createElement("div");
  if (fd.Style) {
    fieldWrapper.className = fd.Style;
  }

  fieldWrapper.id=fd.Id?fd.ID:""
  return {fieldWrapper};
}

const createImageCheckbox = (fd) => {

  fd.Type="checkbox"
  const { field, fieldWrapper } = createInput(fd);
  if (fd.Checked) {
    field.value = field.value;
    field.setAttribute("checked", true);
  }
  fieldWrapper.classList.add("selection-wrapper");

  const imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'lozad');
    imgEl.setAttribute('src', '');
    imgEl.setAttribute('src', fd.Placeholder);
    imgEl.setAttribute('alt', fd.Value);
    imgEl.setAttribute('width', '39');
    imgEl.setAttribute('height', '41');
    fieldWrapper.append(imgEl);

    if(fd.Value=="Son"||fd.Value=="Daughter"){
      let html=`<div class="number-control">
   <button class="decrement" id="decrement">-</button>
  <span class="counter" id="counter">0</span>
 <button class="increment"id="increment">+</button>
 </div>`
fieldWrapper.insertAdjacentHTML("beforeend", html);
    }
  return { field, fieldWrapper };  

    
  // if ((fd.Mandatory = "true")) {
  //   const { errField } = createErrMsg(fd);
  //   fieldWrapper.append(errField);
  // }

};




const FIELD_CREATOR_FUNCTIONS = {
  select: createSelect,
  heading: createHeading,
  plaintext: createPlaintext,
  textarea: createTextArea,
  toggle: createToggle,
  submit: createSubmit,
  confirmation: createConfirmation,
  fieldset: createFieldset,
  checkbox: createCheckbox,
  radio: createRadio,
  range: createRange,
  label: createLabel,
  calrange: createCalculatorRange,
  button:createInputButton,
  multistep:createMultiStepForm,
  div:createDivWrapper,
  imagecheckbox:createImageCheckbox
};

export default async function createField(fd, form) {
  fd.Id = fd.Id || generateFieldId(fd);
  const type = fd.Type.toLowerCase();
  const createFieldFunc = FIELD_CREATOR_FUNCTIONS[type] || createInput;
  const fieldElements = await createFieldFunc(fd, form);

  return fieldElements.fieldWrapper;
}
