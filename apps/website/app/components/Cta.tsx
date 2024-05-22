import { Button } from "@repo/ui/components/ui/button";
import { FC } from "react";
import type { Banner as CtaProps } from "../../types";

const Cta: FC<CtaProps> = ({ title, subtitle, primaryButtonText, secondaryButtonText, onPrimaryButtonClick, onSecondaryButtonClick}) => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">{title}</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">{subtitle}</p>
        </div>
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" onClick={onPrimaryButtonClick}>
            {primaryButtonText}
          </Button>
          <Button variant="outline" className="w-full md:w-auto" onClick={onSecondaryButtonClick}>
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
