import Image from "next/image";
import { FC } from "react";
import type { About as AboutProps } from "../../types";
import Statistics from "./Statistics";

const About: FC<AboutProps> = ({ title, subtitle, stats = [], aboutImage }) => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image alt="" width={300} height={300} src={aboutImage} className="w-[300px] object-contain rounded-lg" />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">{title}</h2>
              <p className="text-xl text-muted-foreground mt-4">{subtitle}</p>
            </div>

            <Statistics stats={stats} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
