import Ease from "@/components_/Ease";
import FeaturesComponent from "@/components_/FeaturesComponent";
import Hero from "@/components_/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="-mt-20">
        <FeaturesComponent />
      </div>
      <div className="md:-mt-0 -mt-20"><Ease /></div>
    </div>
  );
}