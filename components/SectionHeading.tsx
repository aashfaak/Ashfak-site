export default function SectionHeading({
  title,
  action,
}: {
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="mb-6 flex items-baseline justify-between gap-4">
      <div>
        <span className="mb-2 block h-1 w-10 rounded-full bg-clay" aria-hidden="true" />
        <h2 className="font-serif text-2xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
