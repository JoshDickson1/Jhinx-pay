import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="relative w-full h-max bg-[url('/bg-img.svg')] dark:bg-[url('/bg-img-dark.svg')] bg-cover bg-center"
    >
      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-5 lg:px-15 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: TEXT + CTAs */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
              Trade Crypto & Gift Cards Seamlessly with <br />
              <span className="text-[#FFB703]"> Jhinx Pay</span>
            </h1>

            <p className="max-w-xl text-base md:text-lg text-foreground/70">
              Fast, secure, and reliable trading platform designed for instant payments.
            </p>

            {/* BS */}
            <div className="flex flex-wrap items-center gap-4">
              <img
                src="./Google Play.svg"
                alt="Get it on Google Play"
                className="h-8 cursor-pointer hover:scale-105 transition"
              />
              <img
                src="./App Store.svg"
                alt="Download on the App Store"
                className="h-8 cursor-pointer hover:scale-105 transition"
              />

              <Button
                className="
                  px-6 py-3 rounded-full
                  border border-foreground/20
                  backdrop-blur-md
                  bg-white/10 dark:bg-white/5
                  text-sm font-semibold
                  hover:bg-white/20
                  text-black 
                  dark:text-white
                  shadow-[0_8px_30px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.2)]
                  transition-all
                "
              >
                Join the waitlist
              </Button>
            </div>
          </div>

          {/* RIGHT: MOCKUP */}
          <div className="relative flex justify-center lg:justify-end">
            <img
              src="./phone mockup.svg"
              alt="App Mockup"
              className="w-[100%] md:w-[70%] xl:w-[400px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* DARK OVERLAY FOR READABILITY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70" />
    </section>
  );
};

export default Hero;
