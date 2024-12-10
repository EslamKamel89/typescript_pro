import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button"> & { href?: never };
type AncharProps = ComponentPropsWithoutRef<"a"> & { href?: string };

function isAnchorProps(props: ButtonProps | AncharProps): props is AncharProps {
  return "href" in props;
}

export default function Button(props: ButtonProps | AncharProps) {
  if (isAnchorProps(props)) {
    return (
      <a className="button" {...props}>
        {props.children}
      </a>
    );
  } else {
    return (
      <button className="button" {...props}>
        {props.children}
      </button>
    );
  }
}
/*
Type '{ props: Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">; } | { ...; }' is not assignable to type 
              'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.
  Type '{ props: Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref">; }' has no properties in common with type 'DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>'.ts(2322)
*/
