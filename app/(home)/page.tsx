import Link from "next/link";
import styles from "../styles/home.module.css";
import { Suspense } from "react";
import Loading from "../components/loading";

async function getBestSellers() {
  try {
    const response = await fetch(
      "https://books-api.nomadcoders.workers.dev/lists"
    );
    if (!response.ok) throw new Error("Failed to fetch best sellers");
    return (await response.json()).results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const list = await getBestSellers();
  return (
    <Suspense fallback={<Loading />}>
      <div className={styles.container}>
        <h1 className={styles.header}>
          The New York Times Best Seller Explorer
        </h1>
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.list_name_encoded} className={styles.listItem}>
              <Link href={`/list/${item.list_name_encoded}`}>
                {item.display_name} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Suspense>
  );
}
