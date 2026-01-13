import ContactSub from "@/components_/ContactSub";
import Ease from "@/components_/Ease";
import Everything from "@/components_/Everything";
import FeaturesComponent from "@/components_/FeaturesComponent";
import GameCTA from "@/components_/GameCTA";
import Hero from "@/components_/Hero";
import HowItWorks from "@/components_/HowItWorks";
import Testimonials from "@/components_/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="-mt-20">
        <FeaturesComponent />
      </div>
      <div className="mt-0 md:mt-10"><Ease /></div>
      <div className=""><Everything /></div>
      <div className="mt-10 mb-10"><GameCTA /></div>
      <div className=""><HowItWorks /></div>
      <div className="mb-20"><Testimonials /></div>
      <div className=""><ContactSub /></div>
    </div>
  );
}