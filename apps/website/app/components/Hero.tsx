import AnimatedGradientText from "@repo/ui/components/animated-gradient-text";
import GridPattern from "@repo/ui/components/grid-pattern";
import { Icons } from "@repo/ui/components/icons";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { useState } from "react";
import HeroCards from "./HeroCards";
import { HERO } from "../../config";

const Hero = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx create-thestartuptemplate my-app");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [6, 6],
          [10, 5],
          [13, 3],
        ]}
        className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-50%] h-[200%] skew-y-12")}
      />
      <div className="text-center lg:text-start space-y-6">
        <AnimatedGradientText className="mx-auto lg:mx-0">
          🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
          <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#F596D3] via-[#1fc0f1] to-[#D247BF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>{HERO?.pretitle}</span>
        </AnimatedGradientText>
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">Simplify</span>
            &nbsp; your side
          </h1>
          &nbsp;
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">hustle</span>
            &nbsp; journey
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">{HERO?.subtitle}</p>

        <div className="mx-auto lg:mx-0 flex gap-2 flex-col-reverse lg:flex-row justify-start items-center w-fit">
          <Button className="w-fit" onClick={() => copyToClipboard()} variant={!isCopied ? "secondary" : "secondary"}>
            {!isCopied ? <Icons.clipboard className="w-4 h-4 mr-2" /> : <Icons.check className="w-4 h-4 mr-2" />}
            {HERO?.primaryButtonText}
          </Button>
          <p className="hidden lg:block">|</p>
          <p className="block lg:hidden">or</p>
          <Link className="w-full" href="/dashboard">
            <Button className="w-full">{HERO?.secondaryButtonText}</Button>
          </Link>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
