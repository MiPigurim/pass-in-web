import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
// o Tailwind Merge é uma biblioteca que facilita a criação de classes de forma dinâmica, auxiliará na união de classes do tailwind com classes que estão vindo do componente

interface TableCellProps extends ComponentProps<"td"> {}

export function TableCell(props: TableCellProps) {
  return (
    <td
      {...props}
      className={twMerge("py-3 px-4 text-ms text-zinc-300", props.className)}
    />
  );
}

//twMerge("classes que o componente sempre vai ter", novas classes ou props.className que estão vindo do componente)
