import FooterSection from "../../globalcomponents/FooterSection";
import FeaturePage from "../homepage/new-website/new-homepage/FeaturePage";
import Partners from "../homepage/partners/Partners";
import AdvancedApply from "./AdvancedApply";
import AdvancedBenefit from "./AdvancedBenefit";
import AdvancedHead from "./AdvancedHead";
import AdvancedVideo from "./AdvancedVideo";

const AdvancedHome = () => {
  return (
    <>
      <AdvancedHead/>
      <AdvancedVideo/>
      <AdvancedBenefit/>
      <AdvancedApply/>
      {/* <Partners/> */}
      <FeaturePage/>
      <FooterSection/>
    </>
  );
};
export default AdvancedHome;
