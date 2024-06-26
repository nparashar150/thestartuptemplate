import { Icons } from "@repo/ui/components/icons";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { FC } from "react";
import type { FeatureCards as HowItWorksProps } from "../../types";

const HowItWorks: FC<HowItWorksProps> = ({ title, subtitle, features, tags }) => {
  return (
    <section id="howItWorks" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
        {title}
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features?.map(({ icon, title, description }) => {
          const Icon = icon && Icons?.[icon];
          return (
            <Card key={title} className="bg-muted/50">
              <CardHeader>
                <CardTitle className="grid gap-4 place-items-center">
                  {Icon && <Icon className="w-8 h-8 text-primary" />}
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>{description}</CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  );
};

export default HowItWorks;
