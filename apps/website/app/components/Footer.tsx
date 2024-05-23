import { Icons } from "@repo/ui/components/icons";
import Link from "next/link";
import { FC } from "react";
import type { Footer as FooterProps } from "../../types";

const Footer: FC<FooterProps> = ({ brand, ...rest }) => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />
      <section className={`container py-20 grid grid-cols-2 md:grid-cols-${Object.keys(rest).length + 1} gap-x-12 gap-y-8`}>
        <div className="col-span-full xl:col-span-2">
          {brand?.map(({ href, label, target, icon }) => {
            const Icon = icon && Icons?.[icon];
            return (
              <Link key={href} href={href || ""} target={target} className="flex justify-start items-center gap-2">
                {Icon && <Icon />}
                <span className="font-bold text-xl">{label}</span>
              </Link>
            )
          })}
        </div>
        {Object.keys(rest)?.map((key) => {
          if (key === "brand") return null;

          return (
            <div key={key}>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-lg">{key}</h3>
                {rest[key]?.map(({ href, label, target }) => (
                  <a key={href} href={href || ""} target={target} className="opacity-60 hover:opacity-100">
                    {label}
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </section>
      <section className="container pb-6 text-muted-foreground text-center">
        <h3>
          Super credits to&nbsp;
          <a className="underline underline-offset-4" href="https://github.com/leoMirandaa" target="_blank">Leopoldo Miranda</a>
          &nbsp;for this awesome creation In perpetual β
        </h3>
      </section>
    </footer>
  );
};

export default Footer;
