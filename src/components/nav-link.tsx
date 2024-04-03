import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}
//extends ComponentProps<'a'> extende as propriedades de um elemento nativo do HTML (no caso da tag 'a') e as repassa para dentro do elemento no componente

export function NavLink(props: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm">
      {props.children}
    </a>
  );
}
