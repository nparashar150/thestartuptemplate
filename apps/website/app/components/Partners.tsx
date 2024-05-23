import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar";
import { FC } from "react";
import type { Partners as PartnersProps } from "../../types";

const Partners: FC<PartnersProps> = ({ title, subtitle, partners = [] }) => {
  return (
    <section id="Partners" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">{title}</h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-10">
        {partners?.map(({ name, logoUrl }) => (
          <div key={name} className="flex items-center gap-2 text-muted-foreground/60">
            <Avatar className="border border-white bg-white">
              <AvatarImage src={logoUrl} alt={name} className="rounded-full" />
              <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <h3 className="text-xl text-muted-foreground font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
