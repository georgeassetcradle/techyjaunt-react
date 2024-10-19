import CountdownTimer from "../../globalcomponents/Countdown";
import FooterSection from "../../globalcomponents/FooterSection";
import src from "../../images/crypto-bootcamp/trader.jpg";
import src1 from "../../images/crypto-bootcamp/crypto-flier.webp";
import Fade from "react-reveal";
import CryptoForm from "./CryptoForm";
import { useState } from "react";
import EmailLoading from "../../globalcomponents/EmailLoading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { cryptoBenefits, gender } from "../../resources/resources";
import icon1 from "../../images/crypto-bootcamp/icons/binance-coin-cryptocurrency.svg";
import icon2 from "../../images/crypto-bootcamp/icons/bitcoin-cryptocurrency.svg";
import icon3 from "../../images/crypto-bootcamp/icons/bitcoin-gold-cryptocurrency.svg";
import icon4 from "../../images/crypto-bootcamp/icons/tether-cryptocurrency.svg";
import { Element, Link } from "react-scroll";
import TypingAnimation from "../../globalcomponents/TypingAnimation";
import TextCarousel from "../../globalcomponents/TextCarousel";
import { useSnackbar } from "notistack";
import Loader from "../../globalcomponents/Loader";

const CryptoBootCamp = () => {
  const [pending, setPending] = useState(false);
  // reg modal
  const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState();
  const [shake, setShake] = useState(false);
  const countryCode = sessionStorage.getItem("countryCode");
  const [message, setMessage] = useState("");
  const [modalError, setModalError] = useState(true);
  const [scrollNumber, setScrollNumber] = useState();
  window.addEventListener("scroll", () => {
    setScrollNumber(window.scrollY);
  });
  const { enqueueSnackbar } = useSnackbar();
  const handleSnackbar = (message, variant) => {
    enqueueSnackbar(message, { variant });
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cryptoCourse: "",
    cryptoKnowledge: "",
  });

  const payload = {
    firstName: formData.firstName.trim(),
    lastName: formData.lastName.trim(),
    email: formData.email.trim(),
    phoneNumber: formData.phoneNumber.trim(),
    cryptoKnowledge: formData.cryptoKnowledge,
    cryptoCourse: formData.cryptoCourse,
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
    if (formData.cryptoCourse === "") {
      errors.cryptoCourse = "choose a course of interest";
      isValid = false;
    }
    if (formData.cryptoKnowledge === "") {
      errors.cryptoKnowledge = "select an option";
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
      // Submit the form data or perform other actions
      axios
        .post("https://techyjaunt-react.onrender.com/crypto-bootcamp-reg", {
          ...payload,
        })
        .then((res) => {
          setPending(false);
          if (res.data.status === "registered") {
            sessionStorage.setItem("cryptoRegistered", true);
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
      <CryptoForm
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
            cryptoKnowledge: e,
          });
        }}
        handleSelect2={(e) => {
          setFormData({
            ...formData,
            cryptoCourse: e,
          });
        }}
        handleSelect3={(e) => {
          setFormData({
            ...formData,
            country: e,
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
          });
        }}
      />
      <section class="bg-center bg-no-repeat crypto-bg bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 md:py-32">
          <h1 class="mb-5 text-3xl font-extrabold tracking-tight leading-none text-white md:text-5xl">
            Crypto Scholarship Opportunity!
          </h1>
          <p class="mb-5 text-base font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Techyjaunt is offering a 100% funded scholarship for you to learn
            how to trade like a pro or start your crypto journey alongside
            thousands of beneficiaries across Africa.
          </p>
          <div className="my-8">
            <button
              onClick={() => setOpenModal(true)}
              className="cursor-pointer bg-white font-bold hover:bg-blue-500 hover:text-white transition-all ease-linear duration-200 text-blue-500 rounded-md py-4 px-4"
            >
              APPLY NOW
            </button>
          </div>
          <div className="counter w-full text-white">
            <CountdownTimer
              crypto={true}
              targetDate={`December 31, 2030, 07:00:00`}
            />
          </div>
        </div>
      </section>
      <section className="">
        <div className="px-4 py-16 mx-auto max-w-screen-xl text-center relative">
          <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-y-5">
            <img
              src={icon1}
              alt=""
              className="absolute top-10 opacity-50 scale-150"
            />
            <img
              loading="lazy"
              src={icon2}
              alt=""
              className="absolute right-5 md:-right-20 opacity-50 scale-150"
            />
            <img
              loading="lazy"
              src={icon3}
              alt=""
              className="absolute opacity-50 -bottom-10 right-11 scale-150"
            />
            <img
              loading="lazy"
              src={icon4}
              alt=""
              className="absolute opacity-50 -bottom-12 md:bottom-4 left-10 scale-150"
            />
            <Fade>
              <div className=" grid place-content-center py-10">
                <h2 className="py-5 text-2xl text-center sm:text-3xl font-bold tracking-tight leading-none md:text-4xl">
                  CURIOUS ABOUT CRYPTO?
                </h2>
                <p className="text-left">
                  Here's your chance to become a Crypto Expert and learn from
                  the best industry leaders across the world. This programme
                  offers much benefits to attendees such as:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                  {cryptoBenefits.map((el, i) => (
                    <div className="flex items-center py-2">
                      <i class="ri-arrow-right-s-fill text-blue-500"></i>
                      <p className="text-left">{el}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg md:px-3">
                <img src={src} alt="" className="rounded-lg w-full h-full" />
              </div>
            </Fade>
          </div>
        </div>
      </section>
      <Element name="reg">
        <Fade>
          <section className="bg-gray-100">
            <div className="px-4 py-16 mx-auto max-w-screen-xl text-center">
              <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-y-5">
                <div className="rounded-lg md:px-3">
                  <img
                    src={src1}
                    alt=""
                    className="rounded-lg w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px]"
                  />
                </div>
                <div className=" grid place-content-center ">
                  <h3 className="py-5 text-xl sm:text-2xl font-bold tracking-tight leading-none md:text-3xl">
                    LIMITED SLOTS AVAILABLE
                  </h3>
                  <button
                    onClick={() => setOpenModal(true)}
                    className="mb-5 border-blue-500 border-2 bg-white font-bold hover:bg-blue-500 hover:text-white transition-all ease-linear duration-200 text-blue-500 rounded-md py-4 px-2"
                  >
                    APPLY HERE FOR FREE
                  </button>
                </div>
              </div>
            </div>
          </section>
        </Fade>
      </Element>
      <FooterSection />
      {pending && <Loader />}
    </>
  );
};
export default CryptoBootCamp;
