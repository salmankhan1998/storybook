import Typography from "../Typography";

interface HeaderProps {
  title: string;
  description: string;
}

export default function DeepReadingHeader({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col gap-y-6 mt-8">
      <Typography variant="H3" title={title} className="text-start" />
      <Typography variant="H5" title={description} />
    </div>
  );
}
