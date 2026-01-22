import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykkawov";

const Waitlist = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    try {
      setIsSubmitting(true);

      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Formspree submission failed");
      }

      // Success → open existing dialog
      setIsOpen(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      // Optional: toast / inline error later
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-4 font-sans bg-background text-foreground">
      {/* Background Grid (Light) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "96px 64px, 96px 64px",
        }}
      />

      {/* Background Grid (Dark) */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "96px 64px, 96px 64px",
        }}
      />

      {/* Hero */}
      <div className="max-w-4xl text-center mb-12 z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Be the <span className="text-[#FFB800]">First</span> to Experience <br />
          Smarter Digital <span className="text-[#FFB800]">Trading</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          We're launching soon. Join the waitlist to get early access and exclusive updates.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 z-10"
      >
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email*
          </label>
          <Input
            id="email"
            type="email"
            placeholder="enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 rounded-xl bg-background border border-input focus:ring-2 focus:ring-ring"
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 rounded-full text-base font-medium bg-foreground text-background hover:opacity-90 transition-all disabled:opacity-60"
        >
          {isSubmitting ? "Joining..." : "Join Waitlist"}
        </Button>
      </form>

      {/* Success Dialog (UNCHANGED, reused) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[500px] p-12 rounded-[2rem] border-none bg-white dark:bg-black text-foreground flex flex-col items-center text-center">
          <DialogHeader>
            <DialogTitle className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              You have been added <br /> to our{" "}
              <span className="text-[#FFB800]">waitlist</span>
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base py-4">
              Thanks for joining the Rexpond waitlist. <br />
              We'll notify you as soon as you're granted access.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                >
                  <img
                    src={`https://i.pravatar.cc/150?u=${i}`}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground font-medium">
              You are not alone{" "}
              <span className="text-[#FFB800]">1,500+</span> people joined!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Waitlist;
