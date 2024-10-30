export default function ListItem({
  title,
  description,
  link,
}: {
  title: string;
  description?: string;
  link?: string;
}) {
  return (
    <li className="space-x-3">
      <span className="font-semibold">{title}:</span>
      {description && <span>{description}</span>}
      {link && (
        <a href={link} target="_blank">
          {link}
        </a>
      )}
    </li>
  );
}
