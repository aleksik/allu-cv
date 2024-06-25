import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row justify-start items-start">
      <div className="w-1/4 min-w-[200px] text-xl lg:text-base">
        <span className="lg:text-subtle">{title}</span>
      </div>
      <div className="flex flex-col gap-12 flex-1">{children}</div>
    </div>
  );
}
