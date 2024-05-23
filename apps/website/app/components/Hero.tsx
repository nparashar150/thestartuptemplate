import AnimatedGradientText from "@repo/ui/components/animated-gradient-text";
import GridPattern from "@repo/ui/components/grid-pattern";
import { Icons } from "@repo/ui/components/icons";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { FC, useState } from "react";
import { Hero as HeroProps } from "../../types";
import HeroCards from "./HeroCards";
import Image from "next/image";
import { Happy_Monkey } from "next/font/google";

const happyMonkey = Happy_Monkey({ preload: true, weight: ["400"], subsets: ["latin"] });

const Hero: FC<HeroProps> = ({ pretitle, title, subtitle, curlyText, primaryButtonText, secondaryButtonText, cards }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("npx create-thestartuptemplate my-app");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const replacePlaceholders = (title: string) => {
    return title.replace(/{{(.*?)}}/g, (match, p1) => `<span className="inline bg-gradient-to-r bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">${p1}</span>`);
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
          <span className={cn(`inline animate-gradient bg-gradient-to-r from-[#F596D3] via-[#1fc0f1] to-[#D247BF] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`)}>{pretitle}</span>
        </AnimatedGradientText>
        <main className="text-5xl md:text-6xl font-bold">
          <h1
            className="inline custom-title"
            dangerouslySetInnerHTML={{
              __html: replacePlaceholders(title),
            }}
          ></h1>
        </main>
        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">{subtitle}</p>
        <div className="relative mx-auto lg:mx-0 flex gap-2 flex-col-reverse lg:flex-row justify-start items-center w-fit">
          <Button className="w-fit" onClick={() => copyToClipboard()} variant={!isCopied ? "secondary" : "secondary"}>
            {!isCopied ? <Icons.clipboard className="w-4 h-4 mr-2" /> : <Icons.check className="w-4 h-4 mr-2" />}
            {primaryButtonText}
          </Button>
          <p className="hidden lg:block">|</p>
          <p className="block lg:hidden">or</p>
          <Link className="w-full" href="/dashboard">
            <Button className="w-full">{secondaryButtonText}</Button>
          </Link>
          <div className="pointer-events-none dark:invert -scale-x-100 absolute -bottom-14 right-20 inline-flex justify-center items-center gap-1">
            <Image src="/curly-arrow.png" width={35} height={35} alt="Curly arrow" />
            <span style={happyMonkey.style} className="mt-10 font-bold text-black -scale-x-100 text-sm">
              {curlyText}
            </span>
          </div>
        </div>
      </div>
      <div className="z-10">
        <HeroCards cards={cards} />
      </div>
      <div className="shadow"></div>
    </section>
  );
};

export default Hero;
