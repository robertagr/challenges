import React from "react";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume3() {
  const DataVolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  return (
    <>
      <li>
        <Link href="/volumes"> ⬅️ All Volumes</Link>
      </li>
      <h1>The Return of the King </h1>
      <p>{DataVolume.description}</p>
      <ul>
        {DataVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={DataVolume.cover} height={230} width={140} alt="" />
      <Link href="/volumes/the-two-towers">Next Page</Link> <br />
      <Link href="/volumes/the-fellowship-of-the-ring">Prev Page</Link>
    </>
  );
}
