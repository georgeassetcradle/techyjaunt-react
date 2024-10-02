import { useState } from "react";
import { GlobalRadio } from "../../globalcomponents/GlobalRadio";
import GlobalText from "../../globalcomponents/GlobalText";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import { state } from "../../resources/resources";
import { validateSurvey } from "../../validation/SurveyValidation";
import Loader from "../../globalcomponents/Loader";
import axios from "axios";
import useCustomSnackbar from "../../hooks/UseCustomSnackbar";
import { useNavigate } from "react-router-dom";

const house = [
  { label: "Bungalow" },
  { label: "Duplex" },
  { label: "Terrace" },
  { label: "Detached house" },
  { label: "Apartment" },
  { label: "Others" },
];
const bedrooms = [
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
  { label: "5" },
  { label: "Others" },
];
const apartmentRent = [
  { label: "150,000" },
  { label: "250,000" },
  { label: "500,000" },
  { label: "1 Million" },
  { label: "Others" },
];
const prptyMgmt = [
  { label: "Agent" },
  { label: "Lawyer" },
  { label: "Property Management Company" },
  { label: "Agent & Lawyer" },
  { label: "Agent, Lawyer & Management Firm" },
  { label: "Agent & Myself" },
  { label: "Others" },
];
const prptyMgmtReason = [
  { label: "I can handle it myself" },
  { label: "I'm not too busy" },
  { label: "I feel safer doing it on my own" },
  { label: "Others" },
];
const prptyHireReason = [
  { label: "No time" },
  { label: "Need someone with knowledge of property management" },
  { label: "Need help finding clients" },
  { label: "Others" },
];
const prptyApp = [{ label: "Yes" }, { label: "No" }];

const Survey = () => {
  const [shake, setShake] = useState(false);
  const { handleSnackbar } = useCustomSnackbar();
  const [formData, setFormData] = useState({
    apartmentType: "",
    userName: "",
    phoneNumber: "",
    emailAddress:"",
    apartmentRent: "",
    prptyApp: "",
    prptyMgmt: "",
    otherPrptyMgmt: "",
    prptyHireReason: "",
    otherPrptyHireReason: "",
    prptyLocation: "",
    prptyMgmtReason: "",
    otherPrptyMgmtReason: "",
    bedroomNumber: "",
    otherBedroomNumber: "",
    otherApartmentType: "",
    otherApartmentRent: "",
    prptyProblems:""
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState({});
  const [phone, setPhone] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const payloadCreation = (formData) => {
    if (formData.apartmentType && formData.apartmentType != "Others") {
      delete formData.otherApartmentType;
    }
    if (formData.bedroomNumber && formData.bedroomNumber != "Others") {
      delete formData.otherBedroomNumber;
    }
    if (formData.apartmentRent && formData.apartmentRent != "Others") {
      delete formData.otherApartmentRent;
    }
    if (formData.prptyMgmt && formData.prptyMgmt != "Others") {
      delete formData.otherPrptyMgmt;
    }
    if (formData.prptyHireReason && formData.prptyHireReason != "Others") {
      delete formData.otherPrptyHireReason;
    }
    if (formData.prptyMgmtReason && formData.prptyMgmtReason != "others") {
      delete formData.otherPrptyMgmtReason;
    }
    return formData;
  };
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    let data = payloadCreation(formData);
    let isValid = validateSurvey(data, setError);
    if (isValid) {
      setPending(true);
      setShake(false);
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-react.onrender.com/survey", {
          ...data,
        })
        .then((res) => {
          setPending(false);
          if (res.data.status === "registered") {
            // setFormData({})
            sessionStorage.setItem("surveyComplete", true);
            navigate("thank-you");
          }
          if (res.data.status === "existing") {
            handleSnackbar("this email already exists!", "error");
          }
          if (res.data.status === "failed") {
            handleSnackbar("registration failed, please try again!", "error");
          }
        })
        .catch((error) => {
          setPending(false);
          // Handle error
          if (error.response) {
            handleSnackbar("registration failed, please try again!", "error");
          } else if (error.request) {
            handleSnackbar("please check your internet connection!", "error");
            // The request was made but no response was received
          } else {
            handleSnackbar("registration failed, please try again!", "error");
          }
        });
    }
    if (!isValid) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 300);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit}
          id="surveyform"
          action=""
          className="shadow-2xl border bg-gray-100 p-10 rounded-lg my-20 w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto grid grid-cols-1 gap-10"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="">What is your name?</label>
            <GlobalText
              handleChange={handleChange}
              inputType="text"
              inputName="userName"
              placeTxt="enter the your name"
              inputVal={formData.userName}
              errorTxt={error.userName}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Phone Number</label>
            <PhoneNumber
              errorTxt={error.phoneNumber}
              inputVal={formData.phoneNumber}
              bg="white"
              inputName="phoneNumber"
              handleChange={(phone, e) => {
                setPhone(phone);
                setFormData({
                  ...formData,
                  phoneNumber: phone,
                });
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">What type of apartment do you have?</label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={house}
              inputName="apartmentType"
              inputVal={formData.apartmentType}
              data={formData.apartmentType}
              errorTxt={error.apartmentType}
            />
            {formData.apartmentType === "Others" && (
              <GlobalText
                handleChange={handleChange}
                inputType="text"
                inputName="otherApartmentType"
                placeTxt="enter the apartment type"
                inputVal={formData.otherApartmentType}
                errorTxt={error.otherApartmentType}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">How many bedrooms?</label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={bedrooms}
              inputName="bedroomNumber"
              data={formData.bedroomNumber}
              errorTxt={error.bedroomNumber}
            />
            {formData.bedroomNumber === "Others" && (
              <GlobalText
                placeTxt="enter the number of bedrooms"
                handleChange={handleChange}
                inputType="text"
                inputName="otherBedroomNumber"
                inputVal={formData.otherBedroomNumber}
                errorTxt={error.otherBedroomNumber}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Where is your property located?</label>
            <GlobalSelect
              options={state}
              handleChange={(e) => {
                setFormData({
                  ...formData,
                  prptyLocation: e,
                });
              }}
              errorTxt={error.prptyLocation}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">How much is the rent?</label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={apartmentRent}
              inputName="apartmentRent"
              data={formData.apartmentRent}
              errorTxt={error.apartmentRent}
            />
            {formData.apartmentRent === "Others" && (
              <GlobalText
                handleChange={handleChange}
                inputType="text"
                inputName="otherApartmentRent"
                placeTxt="enter the rent amount"
                inputVal={formData.otherApartmentRent}
                errorTxt={error.otherApartmentRent}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Who manages the property?</label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={prptyMgmt}
              inputName="prptyMgmt"
              data={formData.prptyMgmt}
              errorTxt={error.prptyMgmt}
            />
            {formData.prptyMgmt === "Others" && (
              <GlobalText
                handleChange={handleChange}
                inputType="text"
                inputName="otherPrptyMgmt"
                placeTxt="enter your responnse"
                inputVal={formData.otherPrptyMgmt}
                errorTxt={error.otherPrptyMgmt}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              If nobody is managing your property, why is that?
            </label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={prptyMgmtReason}
              inputName="prptyMgmtReason"
              data={formData.prptyMgmtReason}
              errorTxt={error.prptyMgmtReason}
            />
            {formData.prptyMgmtReason === "Others" && (
              <GlobalText
                handleChange={handleChange}
                inputType="text"
                inputName="otherPrptyMgmtReason"
                placeTxt="enter your response"
                inputVal={formData.otherPrptyMgmtReason}
                errorTxt={error.otherPrptyMgmtReason}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              What usually makes you give your property to another party to
              manage?
            </label>
            <GlobalRadio
              className="flex flex-col justify-between flex-wrap"
              handleChange={handleChange}
              options={prptyHireReason}
              inputName="prptyHireReason"
              data={formData.prptyHireReason}
              errorTxt={error.prptyHireReason}
            />
            {formData.prptyHireReason === "Others" && (
              <GlobalText
                handleChange={handleChange}
                inputType="text"
                inputName="otherPrptyHireReason"
                placeTxt="enter your response"
                inputVal={formData.otherPrptyHireReason}
                errorTxt={error.otherPrptyHireReason}
              />
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Would you use an app that connects you to clients or tenants?
            </label>
            <GlobalRadio
              className="flex flex-col flex-wrap"
              handleChange={handleChange}
              options={prptyApp}
              inputName="prptyApp"
              data={formData.prptyApp}
              errorTxt={error.prptyApp}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Can you share any current problems you're facing with your
              property or the person/firm managing your property? that you'd
              like us to know about?
            </label>
            <textarea
              className="resize-none border-gray-400 focus:border-black focus:ring-0 w-full rounded-md"
              name="prptyProblems"
              id="extra"
              onChange={handleChange}
              value={formData.prptyProblems}
              placeholder="enter your response"
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">
              Add your email address below  So you'd be contacted when we have
              a solution to your problem
            </label>
            <GlobalText
              handleChange={handleChange}
              inputType="email"
              inputName="emailAddress"
              placeTxt="enter your email address"
              inputVal={formData.emailAddress}
              errorTxt={error.emailAddress}
            />
          </div>
          <button
            className={`${
              shake ? "shake" : ""
            } mx-auto font-bold text-3xl px-4 py-2 bg-black rounded hover:bg-gray-500 transition-all ease-linear duration-200 text-white`}
          >
            SUBMIT
          </button>
        </form>
      </div>
      {pending && <Loader />}
    </>
  );
};
export default Survey;
