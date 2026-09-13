export default function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <div className="h-px w-24 bg-gradient-to-r from-terminal-accent to-transparent shadow-[0_0_8px_theme(colors.terminal-accent)]" />
    </div>
  );
}