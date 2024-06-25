type BulletPointsProps = {
  items: string[];
};

export function BulletPoints({ items }: BulletPointsProps) {
  return (
    <ul className="text-gold list-disc list-outside ml-5 space-y-1">
      {items.map((item, index) => (
        <li key={`${index}-${item})`}>
          <span className="text-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}
