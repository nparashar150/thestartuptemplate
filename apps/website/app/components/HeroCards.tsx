import { BorderBeam } from "@repo/ui/components/border-beam";
import { Icons } from "@repo/ui/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button, buttonVariants } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { FC } from "react";
import Image from "next/image";
import { Hero } from "../../types";
import { Happy_Monkey } from "next/font/google";

const happyMonkey = Happy_Monkey({ preload: true, weight: ["400"], subsets: ["latin"] });

const HeroCards: FC<Hero["cards"]> = ({ cards }) => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt={cards?.tweetCard?.name} src={cards?.tweetCard?.avatarUrl} />
            <AvatarFallback>{cards?.tweetCard?.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <CardTitle className="text-lg">{cards?.tweetCard?.name}</CardTitle>
            <CardDescription>{cards?.tweetCard?.username}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>{cards?.tweetCard?.tweet}</CardContent>
        <BorderBeam className="-z-10" />
      </Card>

      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex justify-center items-center pb-2">
          <CardTitle className="text-center">{cards?.aboutCard?.name}</CardTitle>
          <CardDescription className="font-medium text-primary">{cards?.aboutCard?.designation}</CardDescription>
        </CardHeader>

        <CardContent className="text-center text-muted-foreground pb-2">
          <p>{cards?.aboutCard?.description}</p>
        </CardContent>
        <CardFooter>
          <a
            rel="noreferrer noopener"
            href={cards?.aboutCard?.socialLinks?.github}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Github icon</span>
            <Icons.gitHub className="w-5 h-5" />
          </a>
          <a
            rel="noreferrer noopener"
            href={cards?.aboutCard?.socialLinks?.twitter}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">X icon</span>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="fill-foreground w-5 h-5">
              <title>X</title>
              <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
            </svg>
          </a>

          <a
            rel="noreferrer noopener"
            href={cards?.aboutCard?.socialLinks?.linkedIn}
            target="_blank"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
            })}
          >
            <span className="sr-only">Linkedin icon</span>
            <Icons.linkedin className="h-8 w-8" />
          </a>
        </CardFooter>
        <BorderBeam className="-z-10" />
      </Card>

      <Card className="absolute top-[170px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            {cards?.pricingCard?.planName}
            <Badge variant="secondary" className="text-sm text-primary">
              {cards?.pricingCard?.badgeTitle}
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">{cards?.pricingCard?.pricePerMonth}</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>{cards?.pricingCard?.description}</CardDescription>
          <Button size="sm" className="w-full" onClick={cards?.pricingCard?.onPrimaryButtonClick}>
            {cards?.pricingCard?.primaryButtonText}
          </Button>
        </CardHeader>
        <hr className="w-4/5 m-auto -mt-2 mb-4" />
        <CardFooter className="flex">
          <div className="space-y-3">
            {cards?.pricingCard?.features.map((benefit: any) => {
              const Icon = Icons[benefit?.icon as keyof typeof Icons];
              return (
                <span key={benefit} className="inline-flex justify-center items-center gap-x-3">
                  {Icon ? <Icon className="size-5" /> : <Image className="bg-white rounded-full" src={benefit?.icon} width={25} height={25} alt={benefit?.title} />} <h3>{benefit?.title}</h3>
                </span>
              );
            })}
          </div>
        </CardFooter>
        <BorderBeam className="-z-10" />
        <div className="pointer-events-none dark:invert -scale-x-100 absolute w-36 top-[9.5rem] -left-[7.5rem] inline-flex justify-center items-center gap-1">
          <Image src="/curly-arrow.png" width={35} height={35} alt="Curly arrow" />
          <span style={happyMonkey.style} className="mt-10 font-bold text-black -scale-x-100 text-sm">
            {cards?.pricingCard?.curlyText}
          </span>
        </div>
      </Card>
      <Card className="absolute w-[350px] -right-[10px] bottom-[50px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <Icons.funkyLightbulbIcon className="fill-black dark:fill-[#F596D3]" />
          </div>
          <div>
            <CardTitle>{cards?.serviceCard?.title}</CardTitle>
            <CardDescription className="text-md mt-2">{cards?.serviceCard?.description}</CardDescription>
          </div>
        </CardHeader>
        <BorderBeam className="-z-10" />
      </Card>
    </div>
  );
};

export default HeroCards;
