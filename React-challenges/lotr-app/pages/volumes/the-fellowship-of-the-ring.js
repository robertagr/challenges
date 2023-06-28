import React from "react";
import { volumes } from "../../lib/data";
import Link from "next/link";
import Image from "next/image";

export default function Volume1() {
  const DataVolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  return (
    <>
      <li>
        <Link href="/volumes"> ⬅️ All Volumes</Link>
      </li>
      <h1>The Fellowship of the ring </h1>
      <p>{DataVolume.description}</p>
      <ul>
        {DataVolume.books.map((book) => (
          <li key={book.ordinal}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image src={DataVolume.cover} height={230} width={140} alt="" />
      <Link href="/volumes/the-return-of-the-king">Next Page</Link> <br />
      <Link href="/volumes">Prev Page</Link>
    </>
  );
}
