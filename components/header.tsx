type HeaderProps = {
  title: string;
  subtitle: string;
};

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-balance text-subtle">{subtitle}</p>
    </div>
  );
}
