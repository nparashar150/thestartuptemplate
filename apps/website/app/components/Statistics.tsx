import NumberTicker from "@repo/ui/components/number-ticket";
import { FC } from "react";
import type { About as AboutProps } from "../../types";

const Statistics: FC<{ stats: AboutProps["stats"]}> = ({ stats = []}) => {
  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ title, count }) => (
          <div key={title} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">
              <NumberTicker value={count} />
            </h2>
            <p className="text-xl text-muted-foreground">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
