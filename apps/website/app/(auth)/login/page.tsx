import GridPattern from "@repo/ui/components/grid-pattern";
import { Icons } from "@repo/ui/components/icons";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { GithubSignInButton, GoogleSignInButton } from "../../components/AuthButton";

export default function AuthenticationPage() {
  return (
    <div className="relative h-screen overflow-hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900">
          <GridPattern
            squares={[
              [4, 4],
              [5, 1],
              [8, 2],
              [6, 6],
              [10, 5],
              [13, 3],
            ]}
            className={cn("[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-50%] h-[200%] -skew-y-12")}
          />
        </div>
        <Link href="/" className="relative z-20 flex items-center text-lg font-medium">
          <Icons.logo className="h-6 w-6 mr-2" />
          The Startup
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">&ldquo;Every second counts — kickstart your project with The Startup&rdquo;</p>
            <footer className="text-sm">The Startup</footer>
          </blockquote>
        </div>
      </div>
      <div className="p-4 lg:p-8 h-full flex items-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
            <p className="text-sm text-muted-foreground">Enter your email below to create your account</p>
          </div>
          <div className="grid gap-4">
            <GoogleSignInButton />
            <GithubSignInButton />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline underline-offset-4 hover:text-primary">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
