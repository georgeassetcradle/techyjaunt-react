import { useState } from "react";
import AdvancedForm from "./AdvancedForm";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import { gender, howHeard } from "../../resources/resources";
import Loader from "../../globalcomponents/Loader";

export const ApplyBtn = () => {
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };
  const [pending, setPending] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [phone, setPhone] = useState();
  const [shake, setShake] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    selectedCourse: "",
    knowlegeOfTechyJaunt: "",
    gender: "",
    reasonForConsideration: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    selectedCourse: formData.selectedCourse,
    knowlegeOfTechyJaunt: formData.knowlegeOfTechyJaunt,
    gender: formData.gender,
    reasonForConsideration: formData.reasonForConsideration,
  };
  const [formErrors, setFormErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      errors.firstname = "enter your first name";
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      errors.lastname = "enter your first name";
      isValid = false;
    }
    if (!formData.email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "enter a valid email address";
      isValid = false;
    }

    if (formData.phoneNumber.trim().length <= 4) {
      errors.phoneNumber = "phone number is required";
      isValid = false;
    }
    if (formData.selectedCourse === "") {
      errors.selectedCourse = "please select a course";
      isValid = false;
    }
    if (formData.reasonForConsideration === "") {
      errors.reasonForConsideration = "please fill in your answer";
      isValid = false;
    }
    if (formData.gender === "") {
      errors.gender = "please select an option";
      isValid = false;
    }
    if (formData.knowlegeOfTechyJaunt === "") {
      errors.knowlegeOfTechyJaunt = "please select an option";
      isValid = false;
    }
    setFormErrors(errors);
    return isValid;
  };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setPending(true);
      setShake(false);
      // Submit the form data or perform other actions https://techyjaunt-react.onrender.com/advanced-register
      axios
        .post("https://techyjaunt-react.onrender.com/advanced-register", {
          ...payload,
        })
        .then((res) => {
          setPending(false);
          if (res.data.status === "registered") {
            sessionStorage.setItem("advancedRegistered", true);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <button
        onClick={() => setOpenModal(true)}
        className="py-5 px-4 inline-block text-white bg-tech-blue text-2xl font-bold rounded-lg hover:bg-gray-500 transition-all  ease-linear duration-200"
      >
        APPLY NOW
      </button>

      {openModal && (
        <AdvancedForm
          openModal={openModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          formErrors={formErrors}
          formData={formData}
          handleChange2={(phone, e) => {
            setPhone(phone);
            setFormData({
              ...formData,
              phoneNumber: phone,
            });
          }}
          handleSelect1={(e) => {
            setFormData({
              ...formData,
              selectedCourse: e,
            });
          }}
          handleSelect2={(e) => {
            setFormData({
              ...formData,
              knowlegeOfTechyJaunt: e,
            });
          }}
          shake={shake}
          closeModal={() => {
            setOpenModal(false);
            setFormErrors({});
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phoneNumber: "",
              selectedCourse: "",
              knowlegeOfTechyJaunt: "",
              gender: "",
              reasonForConsideration: "",
            });
          }}
        />
      )}
      {pending && <Loader />}
    </>
  );
};

const AdvancedApply = () => {
  return (
    <div className="bg-no-repeat bg-cover bg-center launchcta py-5 bg-blend-multiply bg-gray-500">
      <div className="p-20 flex justify-center">
        <ApplyBtn />
      </div>
    </div>
  );
};
export default AdvancedApply;
