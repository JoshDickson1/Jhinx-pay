import ContactSub from "@/components_/ContactSub";
import FeatHero from "@/components_/FeatHero";
import GameCTA from "@/components_/GameCTA";
import GameSlideshow from "@/components_/GameSlideshow";
import HowItWorks from "@/components_/HowItWorks";
import Testimonials from "@/components_/Testimonials";

export default function Features() {
  return (
    <div className="">
      <FeatHero /> 
      <div><GameSlideshow /></div>
      <div className="mt-10 mb-10"><GameCTA /></div>
      <div className=""><HowItWorks /></div>
      <div className="mb-20"><Testimonials /></div>
      <div className=""><ContactSub /></div>
    </div>
  );
}