import { Button } from "@repo/ui/components/ui/button";
import { BANNER } from "../../config";

const Cta = () => {
  return (
    <section id="cta" className="bg-muted/50 py-16 my-24 sm:my-32">
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-bold ">{BANNER?.title}</h2>
          <p className="text-muted-foreground text-xl mt-4 mb-8 lg:mb-0">{BANNER?.subtitle}</p>
        </div>
        <div className="space-y-4 lg:col-start-2">
          <Button className="w-full md:mr-4 md:w-auto" onClick={BANNER?.onPrimaryButtonClick}>
            {BANNER?.primaryButtonText}
          </Button>
          <Button variant="outline" className="w-full md:w-auto" onClick={BANNER?.onSecondaryButtonClick}>
            {BANNER?.secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
