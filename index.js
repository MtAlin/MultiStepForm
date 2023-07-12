const infoValues = {
  name: "",
  email: "",
  phone: "",
  plan: "monthly",
  arcadePriceMonth: "",
  advancedPriceMonth: "",
  proPriceMonth: "",
  arcadePriceYear: "",
  advancedPriceYear: "",
  proPriceYear: "",
  onlineService: 0,
  largerStorage: 0,
  customProfile: 0,
  arcade: "",
  advanced: "",
  pro: "",
  arcadePrice: 0,
  advancedPrice: 0,
  proPrice: 0,
};
const subscriptionPlan = {
  arcadePriceMonth: 9,
  advancedPriceMonth: 12,
  proPriceMonth: 15,
  arcadePriceYear: 90,
  advancedPriceYear: 120,
  proPriceYear: 150,
  onlineServiceMonth: 1,
  largerStorageMonth: 2,
  customProfileMonth: 2,
  onlineServiceYear: 10,
  largerStorageYear: 20,
  customProfileYear: 20,
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
};

// change visual subscription text for add-ons
function changeSubscriptionAddOns() {
  switchPlanValues.checked
    ? (pickAdonsPlanPrice[0].innerHTML =
        "$" + subscriptionPlan.onlineServiceYear + "/yo")
    : (pickAdonsPlanPrice[0].innerHTML =
        "$" + subscriptionPlan.onlineServiceMonth + "/mo");

  switchPlanValues.checked
    ? (pickAdonsPlanPrice[1].innerHTML =
        "$" + subscriptionPlan.largerStorageYear + "/yo")
    : (pickAdonsPlanPrice[1].innerHTML =
        "$" + subscriptionPlan.largerStorageMonth + "/mo");

  switchPlanValues.checked
    ? (pickAdonsPlanPrice[2].innerHTML =
        "$" + subscriptionPlan.customProfileYear + "/yo")
    : (pickAdonsPlanPrice[2].innerHTML =
        "$" + subscriptionPlan.customProfileMonth + "/mo");
}
// change plan monthly or yearly by checking tooggle
function planMonthlySwitchYearly() {
  switchPlanValues.checked
    ? (arcadePlanPrice.innerHTML =
        "$" + subscriptionPlan.arcadePriceYear + "/yr")
    : (arcadePlanPrice.innerHTML =
        "$" + subscriptionPlan.arcadePriceMonth + "/mo");

  switchPlanValues.checked
    ? (advancedPlanPrice.innerHTML =
        "$" + subscriptionPlan.advancedPriceYear + "/yr")
    : (advancedPlanPrice.innerHTML =
        "$" + subscriptionPlan.advancedPriceMonth + "/mo");

  switchPlanValues.checked
    ? (proPlanPrice.innerHTML = "$" + subscriptionPlan.proPriceYear + "/yr")
    : (proPlanPrice.innerHTML = "$" + subscriptionPlan.proPriceMonth + "/mo");

  // add paragraf with 2 months free
  for (let i = 0; i < monthlyFree.length; i++) {
    switchPlanValues.checked
      ? (monthlyFree[i].innerHTML = "2 months free")
      : (monthlyFree[i].innerHTML = "");
  }
}

// change class plan style ussing toggle
function toggle() {
  if (switchPlanValues.checked) {
    yearly.classList.add("yearly_plan_new");
    monthly.classList.add("monthly_plan_new");
    infoValues.plan = "yearly";
  } else {
    yearly.classList.remove("yearly_plan_new");
    monthly.classList.remove("monthly_plan_new");
    infoValues.plan = "monthly";
  }
  planMonthlySwitchYearly();
  changeSubscriptionAddOns();
}

function getNameValue() {
  if (
    inputNameValue.value !== "" &&
    regexInputName.test(inputNameValue.value)
  ) {
    inputNameValue.style.border = " 2px solid green";
    document.getElementById("nameValidationError").innerHTML = "";
    infoValues.name = inputNameValue.value;
  } else {
    inputNameValue.style.border = " 2px solid red";
    document.getElementById("nameValidationError").innerHTML =
      "Min 4 - max 15 characters,no whitespace, include letter ";
  }
}
function getEmailValue() {
  if (
    regexInputEmail.test(inputEmailValue.value) &&
    inputEmailValue.value !== ""
  ) {
    inputEmailValue.style.border = " 2px solid green";
    infoValues.email = inputEmailValue.value;
    document.getElementById("emailValidationError").innerHTML = " ";
  } else {
    inputEmailValue.style.border = " 2px solid red";
    document.getElementById("emailValidationError").innerHTML =
      "Must include @gmail/email ";
  }
}
function getPhoneValue() {
  if (
    regexInputPhone.test(inputPhoneValue.value) &&
    inputPhoneValue.value !== ""
  ) {
    inputPhoneValue.style.border = " 2px solid green";
    infoValues.phone = inputPhoneValue.value;
    document.getElementById("phonelValidationError").innerHTML = "";
  } else {
    inputPhoneValue.style.border = " 2px solid red";
    document.getElementById("phonelValidationError").innerHTML =
      "Must be a number, min 10 caracters";
  }
}
function validatePersonalField() {
  const validateName =
    inputNameValue.value !== "" && regexInputName.test(inputNameValue.value);
  const validateEmail =
    regexInputEmail.test(inputEmailValue.value) && inputEmailValue.value !== "";
  const validatePhone =
    regexInputPhone.test(inputPhoneValue.value) && inputPhoneValue.value !== "";
  if (validateName && validateEmail && validatePhone) {
    inputNameValue.style.border = " 1px solid green";
    inputEmailValue.style.border = " 1px solid green";
    inputPhoneValue.style.border = " 1px solid green";
    return true;
  } else {
    inputNameValue.style.border = " 1px solid red";
    inputEmailValue.style.border = " 1px solid red";
    inputPhoneValue.style.border = " 1px solid red";
    return false;
  }
}

let number = 0;
function nextStep() {
  if (validatePersonalField()) {
    if (
      steps[number].classList.contains("stepShow") &&
      number < steps.length - 1
    ) {
      steps[number].classList.remove("stepShow");
      steps[number + 1].classList.add("stepShow");
      number += 1;
    } else {
      steps[steps.length - 1].classList.add("stepShow");
    }
  }
  confirmResultPlan();
  extendSelectPlan();
  extendOnlineServicePlan();
  extendLargeStoragePlan();
  extendCustomProfilePlan();
  extendConfirmPickAddOns();
  totalSubscriptionPaiment();
  colorStepsBg();
  changeSubscriptionAddOns();
  console.log(infoValues);
}

function backStep() {
  if (steps[number].classList.contains("stepShow") && number > 0) {
    steps[number].classList.remove("stepShow");
    steps[number - 1].classList.add("stepShow");
    number -= 1;
  }
  colorStepsBg();
}

function selectArcadePlan() {
  const contains = arcadeDiv.classList.contains("planActive");
  if (
    advancedDiv.classList.contains("planActive") ||
    proDiv.classList.contains("planActive")
  ) {
  } else {
    if (contains) {
      arcadeDiv.classList.remove("planActive");
      infoValues.arcade = "Select plan";
      resultPlan.innerHTML = "Select a plan";
    } else {
      arcadeDiv.classList.add("planActive");
      infoValues.arcade = subscriptionPlan.arcade;
    }
  }
}
function extendSelectPlan() {
  const containsArcade = arcadeDiv.classList.contains("planActive");
  const containsAdvanced = advancedDiv.classList.contains("planActive");
  const containsPro = proDiv.classList.contains("planActive");
  if (containsArcade) {
    infoValues.plan == "yearly"
      ? (infoValues.arcadePrice = subscriptionPlan.arcadePriceYear)
      : (infoValues.arcadePrice = subscriptionPlan.arcadePriceMonth);
  } else if (!containsArcade) {
    infoValues.arcadePrice = 0;
  }
  if (containsAdvanced) {
    infoValues.plan == "yearly"
      ? (infoValues.advancedPrice = subscriptionPlan.advancedPriceYear)
      : (infoValues.advancedPrice = subscriptionPlan.advancedPriceMonth);
  } else if (!containsArcade) {
    infoValues.advancedPrice = 0;
  }
  if (containsPro) {
    infoValues.plan == "yearly"
      ? (infoValues.proPrice = subscriptionPlan.proPriceYear)
      : (infoValues.proPrice = subscriptionPlan.proPriceMonth);
  } else if (!containsPro) {
    infoValues.proPrice = 0;
  }
}

function selectAdvancedPlan() {
  const contains = advancedDiv.classList.contains("planActive");
  if (
    proDiv.classList.contains("planActive") ||
    arcadeDiv.classList.contains("planActive")
  ) {
  } else {
    if (contains) {
      advancedDiv.classList.remove("planActive");
      infoValues.advancedPrice = 0;
      infoValues.advanced = "";
      resultPlan.innerHTML = "Select a plan";
    } else {
      infoValues.advanced = subscriptionPlan.advanced;
      advancedDiv.classList.add("planActive");
      infoValues.advancedPrice =
        infoValues.plan == "yearly"
          ? subscriptionPlan.advancedPriceYear
          : subscriptionPlan.advancedPriceMonth;
    }
  }
}
function selectProPlan() {
  const contains = proDiv.classList.contains("planActive");
  if (
    advancedDiv.classList.contains("planActive") ||
    arcadeDiv.classList.contains("planActive")
  ) {
  } else {
    if (contains) {
      proDiv.classList.remove("planActive");
      infoValues.proPrice = 0;
      infoValues.pro = "";
      resultPlan.innerHTML = "Select a plan";
    } else {
      infoValues.pro = subscriptionPlan.pro;
      proDiv.classList.add("planActive");
      infoValues.proPrice = planPrice[2].innerHTML;
    }
  }
}

function onlineServicePlan(index) {
  if (onlineServiceValue.checked) {
    pickAddOnsPlan[index].classList.add("pick_cards_active");
  } else {
    pickAddOnsPlan[index].classList.remove("pick_cards_active");
  }
}
function extendOnlineServicePlan() {
  if (onlineServiceValue.checked) {
    infoValues.plan == "yearly"
      ? (infoValues.onlineService = subscriptionPlan.onlineServiceYear)
      : (infoValues.onlineService = subscriptionPlan.onlineServiceMonth);
  } else if (!onlineServiceValue.checked) {
    infoValues.onlineService = 0;
  }
}

function largerStoragePlan(index) {
  if (largerStorageValue.checked) {
    pickAddOnsPlan[index].classList.add("pick_cards_active");
    infoValues.largerStorage = switchPlanValues.checked
      ? subscriptionPlan.largerStorageYear
      : subscriptionPlan.largerStorageMonth;
  } else {
    infoValues.largerStorage = 0;
    pickAddOnsPlan[index].classList.remove("pick_cards_active");
  }
}

function extendLargeStoragePlan() {
  if (largerStorageValue.checked) {
    infoValues.plan == "yearly"
      ? (infoValues.largerStorage = subscriptionPlan.largerStorageYear)
      : (infoValues.largerStorage = subscriptionPlan.largerStorageMonth);
  } else if (!largerStorageValue.checked) {
    infoValues.largerStorage = 0;
  }
}

function customProfilePlan(index) {
  if (customProfileValue.checked) {
    pickAddOnsPlan[index].classList.add("pick_cards_active");
    infoValues.customProfile = switchPlanValues.checked
      ? subscriptionPlan.customProfileYear
      : subscriptionPlan.customProfileMonth;
  } else {
    infoValues.customProfile = 0;
    pickAddOnsPlan[index].classList.remove("pick_cards_active");
  }
}

function extendCustomProfilePlan() {
  if (customProfileValue.checked) {
    infoValues.plan == "yearly"
      ? (infoValues.customProfile = subscriptionPlan.customProfileYear)
      : (infoValues.customProfile = subscriptionPlan.customProfileMonth);
  } else if (!customProfileValue.checked) {
    infoValues.customProfile = 0;
  }
}
function confirmResultPlan() {
  const arcadeIsActive = arcadeDiv.classList.contains("planActive");
  const advancedIsActive = advancedDiv.classList.contains("planActive");
  const proIsActive = proDiv.classList.contains("planActive");
  if (arcadeIsActive) {
    resultPlan.innerHTML = infoValues.arcade + "(" + `${infoValues.plan}` + ")";
    switchPlanValues.checked
      ? (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.arcadePriceYear + "/yo")
      : (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.arcadePriceMonth + "/mo");
  }
  if (advancedIsActive) {
    resultPlan.innerHTML =
      infoValues.advanced + "(" + `${infoValues.plan}` + ")";
    switchPlanValues.checked
      ? (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.advancedPriceYear + "/yo")
      : (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.advancedPriceMonth + "/mo");
  }
  if (proIsActive) {
    resultPlan.innerHTML = infoValues.pro + "(" + `${infoValues.plan}` + ")";
    switchPlanValues.checked
      ? (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.proPriceYear + "/yo")
      : (resultPlanPrice.innerHTML =
          "$" + subscriptionPlan.proPriceMonth + "/mo");
  }
}

// final step cofrmation and total calculation of subscription
let addOnsArray = [];
function confirmPickAdOns(checked, servicePick, picksValue, ids) {
  const parentElement = document.getElementById("finishUp_cards_element");
  let htmlString;

  if (checked) {
    const exist = addOnsArray.some((item) => item.service === servicePick);
    if (!exist) {
      addOnsArray.push({
        service: servicePick,
        value: picksValue,
        id: ids,
      });
    }
  } else {
    addOnsArray = addOnsArray.filter((e) => e.service !== servicePick);
  }
  for (let i = 0; i <= addOnsArray.length - 1; i++) {
    if (addOnsArray[i].id === ids) {
      addOnsArray[i].value = picksValue;
    }
  }
  htmlString = addOnsArray.map(
    (item) => ` <div class="finishUp_cards">  <div>
   <h6>${item.service}</h6>
  </div>
  <div>
   <p>$<span class="pickAdons_plan_price">${item.value}</span>${
      switchPlanValues.checked ? "/yo" : "/mo"
    }</p> 
    </div></div>`
  );

  // Insert the HTML string into the parent element as a child
  parentElement.innerHTML = htmlString.join("");
}

function extendConfirmPickAddOns() {
  confirmPickAdOns(
    onlineServiceValue.checked,
    "Online Services",
    infoValues.onlineService,
    1
  );
  confirmPickAdOns(
    largerStorageValue.checked,
    "Larger Storage",
    infoValues.largerStorage,
    2
  );
  confirmPickAdOns(
    customProfileValue.checked,
    "Custom Profile",
    infoValues.customProfile,
    3
  );
}

function totalSubscriptionPaiment() {
  totalPaidPlan.innerHTML = "Total" + "(" + infoValues.plan + ")";
  let sum =
    infoValues.onlineService +
    infoValues.largerStorage +
    infoValues.customProfile +
    infoValues.arcadePrice +
    infoValues.advancedPrice +
    infoValues.proPrice;

  let nr = parseInt(sum);
  switchPlanValues.checked
    ? (total_sum.innerHTML = `$${nr}/yo`)
    : (total_sum.innerHTML = `$${nr}/mo`);
}

function colorStepsBg() {
  let arrayTwo = [0, 1, 2, 3];
  // let verify = arrayTwo.find((item) => item === number);
  for (let i = 0; i <= arrayTwo.length - 1; i++) {
    if (arrayTwo[i] === number) {
      arraySteps[i].classList.add("active");
    } else if (number > arrayTwo.length - 1) {
      arraySteps[number - 1].classList.add("active");
    } else {
      arraySteps[i].classList.remove("active");
    }
  }
}

function changeSubscriptionPlan() {
  number = 1;
  steps[1].classList.add("stepShow");
  steps[3].classList.remove("stepShow");
  arraySteps[1].classList.add("active");
  arraySteps[3].classList.remove("active");
}
