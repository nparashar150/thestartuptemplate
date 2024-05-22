import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import axios from "axios";
import { FormEvent, useState } from "react";
import { NEWSLETTER_CONFIG } from "../../config";

const Newsletter = () => {
  const [submissionStage, setSubmissionStage] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setSubmissionStage("loading");
    try {
      e.preventDefault();
      await axios.post("/api/newsletter", { email: (e.target as any)[0].value });
      setSubmissionStage("success");
    } catch (error) {
      console.error(error);
      setSubmissionStage("error");
    } finally {
      setTimeout(() => {
        setSubmissionStage("idle");
      }, 5000);
    }
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />
      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-5xl font-bold bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">{NEWSLETTER_CONFIG?.title}</h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">{NEWSLETTER_CONFIG?.subtitle}</p>
        <form className="flex flex-col w-full md:flex-row md:w-6/12 lg:w-4/12 mx-auto gap-4 md:gap-2" onSubmit={(e) => handleSubmit(e)}>
          <Input placeholder={NEWSLETTER_CONFIG?.inputPlaceholder} className="bg-muted/50 dark:bg-muted/80 " aria-label="email" disabled={submissionStage === "loading"} />
          <Button disabled={submissionStage === "loading"}>{NEWSLETTER_CONFIG?.buttonText}</Button>
        </form>
        {submissionStage === "success" && <p className="text-center text-green-500 mt-2">Subscribed successfully!</p>}
        {submissionStage === "error" && <p className="text-center text-red-500 mt-2">Something went wrong, please try again later.</p>}
      </div>
      <hr className="w-11/12 mx-auto" />
    </section>
  );
};

export default Newsletter;
