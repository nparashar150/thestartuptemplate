import { BorderBeam } from "@repo/ui/components/border-beam";
import { Icons } from "@repo/ui/components/icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@repo/ui/components/ui/avatar";
import { Badge } from "@repo/ui/components/ui/badge";
import { buttonVariants } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";

const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage alt="" src="https://github.com/shadcn.png" />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">John Doe</CardTitle>
            <CardDescription>@john_doe</CardDescription>
          </div>
        </CardHeader>

        <CardContent>This landing page is awesome!</CardContent>
        <BorderBeam />
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex justify-center items-center pb-2">
          <CardTitle className="text-center">Naman Parashar</CardTitle>
          <CardDescription className="font-medium text-primary">Product Developer</CardDescription>
        </CardHeader>

        <CardContent className="text-center text-muted-foreground pb-2">
          <p>I really enjoy transforming ideas into functional software that exceeds expectations</p>
        </CardContent>
        <CardFooter className="z-10">
          <a
            rel="noreferrer noopener"
            href="https://github.com/nparashar150"
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
            href="https://twitter.com/nparashar150"
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
            href="https://www.linkedin.com/in/nparashar150"
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
        <BorderBeam />
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Free
            <Badge variant="secondary" className="text-sm text-primary">
              Most popular
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">$0</span>
            <span className="text-muted-foreground"> /month</span>
          </div>

          <CardDescription>All the tools you need to launch fast and efficiently.</CardDescription>
        </CardHeader>
        <hr className="w-4/5 m-auto -mt-2 mb-4" />
        <CardFooter className="flex">
          <div className="space-y-4">
            {["Pre-built Authentication", "Email Notifications", "Pre-built Components", "Plug-and-Play Database", "Live Playground"].map((benefit: string) => (
              <span key={benefit} className="flex">
                <Icons.check className="text-green-500" /> <h3 className="ml-2">{benefit}</h3>
              </span>
            ))}
          </div>
        </CardFooter>
        <BorderBeam />
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[50px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <Icons.funkyLightbulbIcon className="fill-black dark:fill-[#F596D3]" />
          </div>
          <div>
            <CardTitle>Theme Switcher</CardTitle>
            <CardDescription className="text-md mt-2">Give your users the choice to switch between themes effortlessly, enhancing the experience.</CardDescription>
          </div>
        </CardHeader>
        <BorderBeam />
      </Card>
    </div>
  );
};

export default HeroCards;
