import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalText from "../globalcomponents/GlobalText";
import { courses } from "../resources/resources";
import { PaystackButton } from "react-paystack";
import GlobalSelect from "../globalcomponents/GlobalSelect";
import PhoneNumber from "../globalcomponents/PhoneNumber";
import logoImg from "../images/techy_jaunt_logo.svg";

const Checkout = () => {
    const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber:"",
    selectedCourse: ""
  });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstname = "enter your name";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastname = "enter your name";
      isValid = false;
    }
    
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }
    if (formData.selectedCourse === "") {
      errors.selectedCourse = "select an option";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };
    const config = {
      reference: new Date().getTime().toString(),
      email: formData.email,
      amount: 500000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
      publicKey: import.meta.env.VITE_PUBLIC_TEST_KEY,
    };
  const componentProps = {
    ...config,
    text: "PAY NOW",
    onSuccess: () => {
      sessionStorage.setItem("isPaid", true)
      setTimeout(()=>{
        navigate(import.meta.env.VITE_PAID_GROUP);
      },2000)
    },
    onClose: () => {
     console.log('transaction canceled')
    },
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="grid place-items-center h-screen bg-stone-100">
      <div className="w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] my-20">
        <img src={logoImg} alt="" className="scale-150 mx-auto my-5" />
        <h1 className=" text-black text-center font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest">
          <span className="techy text-blue-500">TECHYJAUNT</span> COHORT 3.0 SCHOLARSHIP
        </h1>
        <p className="text-center py-5 font-medium text-base md:text-lg leading-8">
          Kickstart your Tech journey, learn tech skills & gain access to a 6
          month mentorship with industry experts. Gain access now!
        </p>
        <form
          method="POST"
          action="/checkout"
          className="w-full grid grid-cols-1 gap-y-5 gap-x-5"
        >
          <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
            <div className="">
              <label
                htmlFor="phone"
                className="mb-5 font-medium  text-sm text-gray-500"
              >
                First Name
              </label>
              <GlobalText
                labelTxt=""
                id="first-name"
                inputName="firstName"
                handleChange={handleChange}
                errorTxt={formErrors.firstname}
                placeTxt={`enter your first name`}
              />
            </div>
            <div className="">
              <label
                htmlFor="phone"
                className="mb-5 font-medium  text-sm text-gray-500"
              >
                Last Name
              </label>
              <GlobalText
                labelTxt=""
                id="last-name"
                inputName="lastName"
                handleChange={handleChange}
                errorTxt={formErrors.lastname}
                placeTxt={`enter your last name`}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
            <div>
              <label
                htmlFor="amount"
                className="font-medium text-sm text-gray-500"
              >
                Amount to be paid
              </label>
              <GlobalText
                id="amount"
                inputVal={`NGN: ${config.amount / 100}`}
                isDisabled={true}
              />
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="font-medium text-sm text-gray-500"
              >
                Email Address
              </label>
              <GlobalText
                inputType="email"
                inputName="email"
                id="email"
                handleChange={handleChange}
                errorTxt={formErrors.email}
                placeTxt={`enter your email`}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 gap-y-5">
            <div className="w-full">
              <label
                htmlFor="phone"
                className="mb-5 font-medium  text-sm text-gray-500"
              >
                Phone Number
              </label>
              <PhoneNumber
                id="phone"
                inputName="phoneNumber"
                handleChange={handleChange}
                errorTxt={formErrors.phoneNumber}
                classes=""
              />
            </div>

            <div className="">
              <label
                htmlFor="skill-choice"
                className="mr-2 font-medium  text-sm text-gray-500"
              >
                Select your course
              </label>
              <div className="w-full">
                <GlobalSelect
                  options={courses}
                  name="selectedCourse"
                  inputVal={formData.selectedCourse}
                  handleChange={(e) => {
                    setFormData({
                      ...formData,
                      selectedCourse: e,
                    });
                  }}
                  errorTxt={formErrors.selectedCourse}
                />
              </div>
            </div>
          </div>
          <PaystackButton
            className={`mx-auto bg-blue-500 text-white p-4 rounded`}
            {...componentProps}
          />
        </form>
      </div>
    </section>
  );
};
export default Checkout;