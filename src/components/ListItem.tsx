import React from 'react';

export default function ListItem({
  title,
  body,
}: {
  title: string;
  body: React.ReactNode;
}) {
  return (
    <li className="space-x-3">
      <span className="font-bold">{title}:</span>
      {body}
    </li>
  );
}
