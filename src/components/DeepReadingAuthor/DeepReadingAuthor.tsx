import Avatar from "../Avatar";
import Typography from "../Typography";

interface AuthorProps {
  author: string;
  date: string;
  readingLength: number;
}

export default function DeepReadingAuthor({
  date,
  author,
  readingLength,
}: AuthorProps) {
  return (
    <div className="flex flex-row gap-x-4">
      <Avatar variant="medium-avatar" radius="full" />
      <div className="flex flex-col justify-between">
        <Typography variant="p6" title={author} />
        <div className="flex flex-1 items-center gap-x-1">
          <Typography variant="p6" title={date} /> -
          <Typography variant="p6" title={`${readingLength} min read`} />
        </div>
      </div>
    </div>
  );
}
