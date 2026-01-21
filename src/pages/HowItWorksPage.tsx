import ContactSub from "@/components_/ContactSub";
import Faqs from "@/components_/Faqs";
import HowHero from "@/components_/HowHero";
import HowItWorks from "@/components_/HowItWorks";

export default function HowItWorksPage() {
  return (
    <div className="">
      <HowHero /> 
      <div className=""><HowItWorks /></div>
      <div className="mb-20"><Faqs /></div>
      <div className=""><ContactSub /></div>
    </div>
  );
}