const inputNameValue = document.getElementById("inputNameValue");
const inputEmailValue = document.getElementById("inputEmailValue");
const inputPhoneValue = document.getElementById("inputPhoneValue");
const onlineServiceValue = document.getElementById(
  "checkboxValueOnlineService"
);
const largerStorageValue = document.getElementById(
  "checkboxValueLargerStorage"
);
const customProfileValue = document.getElementById(
  "checkboxValueCustomProfile"
);
const pickAddOnsPlan = document.getElementsByClassName("pick_cards");
const switchPlanValues = document.getElementById("switchPlan");
const monthlyFree = document.getElementsByClassName("monthlyFree");
let steps = document.getElementsByClassName("step");
const monthly = document.getElementsByClassName("monthly_plan")[0];
const yearly = document.getElementsByClassName("yearly_plan")[0];
const arcadeDiv = document.getElementsByClassName("arcade")[0];
const advancedDiv = document.getElementsByClassName("advanced")[0];
const proDiv = document.getElementsByClassName("pro")[0];
const arcadePlanPrice = document.getElementById("arcade_plan_price");
const advancedPlanPrice = document.getElementById("advanced_plan_price");
const proPlanPrice = document.getElementById("pro_plan_price");
const pickAdonsPlanPrice = document.getElementsByClassName(
  "pickAdons_plan_price"
);
const resultPlan = document.getElementById("resultPlan");
const resultPlanPrice = document.getElementById("finishUp_plan_price");
const totalPaidPlan = document.getElementById("totalPaidPlan");
const total_sum = document.getElementById("total_sum");
const button = document.getElementById("myButton");
const regexInputName = /^(?=.*[a-zA-Z])[^\s]{4,15}$/;
const regexInputEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexInputPhone = /^\d{10}$/;
let arraySteps = document.getElementsByClassName("steps");
