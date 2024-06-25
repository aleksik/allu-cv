import { cn } from "@/lib/utils";

type KeywordsProps = {
  items: string[];
  small?: boolean;
};

export function Keywords({ items, small = false }: KeywordsProps) {
  return (
    <ul className="flex flex-row flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={cn("rounded-full bg-foam/10 text-foam", {
            "py-2 px-3 text-sm": small === false,
            "py-1 px-2 text-xs": small === true,
          })}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
