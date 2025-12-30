import Ease from "@/components_/Ease";
import Everything from "@/components_/Everything";
import FeaturesComponent from "@/components_/FeaturesComponent";
import Hero from "@/components_/Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <div className="-mt-20">
        <FeaturesComponent />
      </div>
      <div className="mt-0 md:mt-10"><Ease /></div>
      <div className=""><Everything /></div>
    </div>
  );
}