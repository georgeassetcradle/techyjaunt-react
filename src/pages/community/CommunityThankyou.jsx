import { useEffect, useState } from "react";
import src from "../../images/launchpad/thankyou.webp";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";

const CommunityThankYou = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [whatsappLink, setWhatsappLink] = useState("");
  useEffect(() => {
    const isRegistered = sessionStorage.getItem("isCommunityRegistered");
    const handleSnackbar = (message, variant) => {
      enqueueSnackbar(message, { variant });
    };
    if (isRegistered) {
      handleSnackbar("registration successful", "success");
    }
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-[90%]  mx-auto py-20 md:py-14 gap-5">
        <div>
          <h2 className="text-center md:text-left text-tech-blue font-bold text-xl md:text-3xl lg:text-5xl">
            TechyJaunt
          </h2>
          <img src={src} alt="" className="h-72 md:h-full mx-auto" />
        </div>
        <div className="flex flex-col justify-center gap-5">
          <h2 className="text-tech-blue font-semibold text-xl md:text-2xl text-center order-2 md:order-1">
            YOU HAVE SUCCESSFULLY SIGNED UP FOR OUR COMMUNITY
          </h2>
          <p className="text-gray-700 text-center order-3 md:order-2">
            We’ve sent you an email with details about our communities in
            different states and regions. Please join a TechyJaunt chapter in
            your state or region.
          </p>
          <p className="text-gray-700 text-center order-3 md:order-2">
            If you encounter any difficulties joining, feel free to email us at{" "}
            <a href="mailto:support@techyjaunt.com" className="text-tech-blue">
              support@techyjaunt.com
            </a>
             for assistance.
          </p>
        </div>
      </div>
    </div>
  );
};
export default CommunityThankYou;
