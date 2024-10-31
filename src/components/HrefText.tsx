import Link from 'next/link';

export default function HrefText({
  link,
  text,
}: {
  link: string;
  text?: string;
}) {
  return (
    // ref: https://nextjs.org/docs/pages/api-reference/components/link
    <Link href={link} prefetch={true} target="_blank">
      {text ? text : link}
    </Link>
  );
}
