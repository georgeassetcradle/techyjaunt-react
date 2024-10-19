import GlobalText from "../../globalcomponents/GlobalText";
import GlobalSelect from "../../globalcomponents/GlobalSelect";
import PhoneNumber from "../../globalcomponents/PhoneNumber";
import {
  advancedBootcampSkils,
  hackathonSkills,
  howHeard,
  state,
} from "../../resources/resources";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { GlobalRadio } from "../../globalcomponents/GlobalRadio";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: "90vh", // Restrict modal height
  overflowY: "auto", // Enable scrollbar
  p: 4,
};

const AdvancedForm = ({
  phoneval,
  openModal,
  closeModal,
  handleChange,
  handleSubmit,
  formErrors,
  formData,
  handleSelect1,
  handleSelect2,
  handleChange2,
  shake,
  phone,
}) => {
  const gender = [{ label: "Male" }, { label: "Female" }];
  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style} className="rounded-lg w-[90%] md:w-[80%] xl:w-[60%]">
          <button
            onClick={closeModal}
            className="text-red-500 absolute text-3xl top-4 right-4"
          >
            <i class="ri-close-circle-line"></i>
          </button>
          <h2 className="text-center font-semibold my-2 text-lg md:text-xl">
            TECHYJAUNT ADVANCED BOOTCAMP
          </h2>
          <form
            className="space-y-5 pt-10"
            onSubmit={handleSubmit}
            method="POST"
            action="/event-register"
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
                  inputType="text"
                  id="first-name"
                  inputName="firstName"
                  handleChange={handleChange}
                  errorTxt={formErrors.firstname}
                  placeTxt="enter your first name"
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
                  inputType="text"
                  labelTxt=""
                  id="last-name"
                  inputName="lastName"
                  handleChange={handleChange}
                  errorTxt={formErrors.lastname}
                  placeTxt="enter your last name"
                />
              </div>
            </div>
            <div className="-my-3">
              <div className="font-medium  text-sm text-gray-500 flex items-center">
                <p className="mr-5">Gender:</p>
                <div className="">
                  <GlobalRadio
                    className=""
                    handleChange={handleChange}
                    options={gender}
                    inputName="gender"
                    data={formData.gender}
                  />
                </div>
              </div>
              {formErrors.gender && (
                <p className="text-xs text-red-500">{formErrors.gender}</p>
              )}
            </div>
            <div className="grid md:grid-cols-2 md:gap-6 gap-y-5">
              <div className=" w-full">
                <label
                  htmlFor="phone"
                  className="mb-5 font-medium  text-sm text-gray-500"
                >
                  Phone Number
                </label>
                <PhoneNumber
                  id="phone"
                  inputName="phoneNumber"
                  inputVal={phoneval}
                  handleChange={handleChange2}
                  errorTxt={formErrors.phoneNumber}
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
                />
              </div>
            </div>
            <div className="relative w-full group text-gray-500 grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-y-5">
              <div>
                <label
                  htmlFor=""
                  className="mr-2 font-medium  text-sm text-gray-500 whitespace-nowrap"
                >
                  Which course would you like to advance in?
                </label>
                <GlobalSelect
                  menuClass={`bg-black text-white`}
                  options={advancedBootcampSkils}
                  name="selectedCourse"
                  inputVal={formData.selectedCourse}
                  handleChange={handleSelect1}
                  errorTxt={formErrors.selectedCourse}
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="mr-2 font-medium  text-sm text-gray-500"
                >
                  How did you hear about TechyJaunt?
                </label>
                <div className="w-full">
                  <GlobalSelect
                    menuClass={`bg-black text-white`}
                    options={howHeard}
                    name="knowlegeOfTechyJaunt"
                    inputVal={formData.knowlegeOfTechyJaunt}
                    handleChange={handleSelect2}
                    errorTxt={formErrors.knowlegeOfTechyJaunt}
                  />
                </div>
              </div>
            </div>
            <div>
              <div>
                <label
                  htmlFor="extra"
                  className="mr-2 font-medium text-sm text-gray-500"
                >
                  Why should you be considered for our Advanced Bootcamp?
                </label>
                <div className="w-full">
                  <textarea
                    className={`${
                      formErrors.reasonForConsideration ? "border-red-500" : ""
                    } resize-none focus:ring-0 w-full rounded-md focus:border-2 focus:border-black`}
                    name="reasonForConsideration"
                    id="extra"
                    onChange={handleChange}
                    value={formData.reasonForConsideration}
                    placeholder="enter your response...."
                  ></textarea>
                </div>
              </div>
              {formErrors.reasonForConsideration && (
                <p className="text-xs text-red-500">
                  {formErrors.reasonForConsideration}
                </p>
              )}
            </div>
            <div className="w-full flex justify-center">
              <button
                id="btn"
                onClick={handleSubmit}
                type="submit"
                className={`mx-auto bg-blue-500 text-white p-4 rounded hover:bg-gray-500 transition-all  ease-linear duration-200 ${
                  shake ? "shake" : ""
                }`}
              >
                REGISTER
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
};
export default AdvancedForm;
