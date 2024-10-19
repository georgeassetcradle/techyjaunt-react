export const validateSurvey = (formData, update) => {
  let errors = {};
  let isValid = true;
  if (formData.firstName === "") {
    errors.firstName = "enter your first name";
    isValid = false;
  }
  if (formData.lastName === "") {
    errors.lastName = "enter your last name";
    isValid = false;
  }
  if (formData.emailAddress === "") {
    errors.emailAddress = "email is required";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
    errors.emailAddress = "enter a valid email address";
    isValid = false;
  }
  if (formData.phoneNumber.trim().length <= 4) {
    errors.phoneNumber = "phone number is required";
    isValid = false;
  }
  // apartment type
  if (formData.apartmentType === "") {
    errors.apartmentType = "please select an option";
    isValid = false;
  }
  if (
    formData.apartmentType === "Others" &&
    formData.otherApartmentType === ""
  ) {
    errors.otherApartmentType = "please enter your apartment type";
    isValid = false;
  }
  // bedroom number
  if (formData.bedroomNumber === "") {
    errors.bedroomNumber = "please select an option";
    isValid = false;
  }
  if (
    formData.bedroomNumber === "Others" &&
    formData.otherBedroomNumber === ""
  ) {
    errors.otherBedroomNumber = "please enter the number of bedrooms";
    isValid = false;
  }
  // location
  if (formData.prptyLocation === "") {
    errors.prptyLocation = "please select your apartment location";
    isValid = false;
  }
  // apartment rent
  if (formData.apartmentRent === "") {
    errors.apartmentRent = "please select an option";
    isValid = false;
  }
  if (
    formData.apartmentRent === "Others" &&
    formData.otherApartmentRent === ""
  ) {
    errors.otherApartmentRent = "please enter the apartment rent";
    isValid = false;
  }

  // prpty mgmt
  if (formData.prptyMgmt === "") {
    errors.prptyMgmt = "please select an option";
    isValid = false;
  }
  if (formData.prptyMgmt === "Others" && formData.otherPrptyMgmt === "") {
    errors.otherPrptyMgmt = "please enter your response";
    isValid = false;
  }

  // prptymgmt reason
  if (formData.prptyMgmtReason === "") {
    errors.prptyMgmtReason = "please select an option";
    isValid = false;
  }
  if (
    formData.prptyMgmtReason  === "Others" &&
    formData.otherPrptyMgmtReason === ""
  ) {
    errors.otherPrptyMgmtReason = "please enter you response";
    isValid = false;
  }

  // prpty hire
  if (formData.prptyHireReason === "") {
    errors.prptyHireReason = "please select an option";
    isValid = false;
  }
  if (
    formData.prptyHireReason === "Others" &&
    formData.otherPrptyHireReason === ""
  ) {
    errors.otherPrptyHireReason = "please enter your response";
    isValid = false;
  }

  // prpty app
  if (formData.prptyApp === "") {
    errors.prptyApp = "please select an option";
    isValid = false;
  }

  update(errors);
  return isValid;
};
