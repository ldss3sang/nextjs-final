import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/detail.module.css";
import { Suspense } from "react";
import Loading from "../../components/loading";

type DetailParams = {
  id: string;
};

async function getDetail(id: string) {
  try {
    const response = await fetch(
      `https://books-api.nomadcoders.workers.dev/list?name=${id}`
    );
    if (!response.ok) throw new Error("Failed to fetch details");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Detail({
  params,
}: {
  params: Promise<DetailParams>;
}) {
  const id: string = (await params).id;
  const detail = await getDetail(id);
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1 className={styles.heading}>{detail.display_name}</h1>
        <ul className={styles.bookList}>
          {detail.books.map((book) => (
            <li key={book.title} className={styles.bookItem}>
              <Image
                src={book.book_image}
                width="330"
                height="500"
                alt={`${book.title} cover`}
                className={styles.bookImage}
              />
              <div className={styles.bookDetails}>
                <h2 className={styles.bookTitle}>{book.title}</h2>
                <p className={styles.bookAuthor}>by {book.author}</p>
                <Link href={book.amazon_product_url} className={styles.buyLink}>
                  Buy now →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
