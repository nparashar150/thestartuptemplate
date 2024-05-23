import Image from "next/image";
import React from "react";
import * as runtime from "react/jsx-runtime";
import Callout from "./Callout";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
};

interface MdxProps {
  code: string;
}

const MDXContent = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
};

export default MDXContent;
