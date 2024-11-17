import Link from "next/link";

async function getBestSellers() {
    return (await (await fetch("https://books-api.nomadcoders.workers.dev/lists")).json()).results;
}

export default async function Home() {
    const list = await getBestSellers();
    return (
    <>
        <h1>The New York Times Best Seller Explorer</h1>
        <ul>
            {list.map((item, index) => <li key={index}><Link href={`/list/${item.list_name_encoded}`}>{item.display_name}</Link></li>)}
        </ul>
    </>);
}