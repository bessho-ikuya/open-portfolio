interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold tracking-tight text-primary">{title}</h2>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
