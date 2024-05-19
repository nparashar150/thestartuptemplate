import NumberTicker from "@repo/ui/components/number-ticket";

const Statistics = () => {
  interface statsProps {
    quantity: React.ReactNode;
    description: string;
  }

  const stats: statsProps[] = [
    {
      description: "Users",
      quantity: <NumberTicker value={2700} />,
    },
    {
      description: "Subscribers",
      quantity: <NumberTicker value={1800} />,
    },
    {
      description: "Downloads",
      quantity: <NumberTicker value={112} />,
    },
    {
      description: "Products",
      quantity: <NumberTicker value={4} />
    },
  ];

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ quantity, description }: statsProps) => (
          <div key={description} className="space-y-2 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold ">{quantity}</h2>
            <p className="text-xl text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
