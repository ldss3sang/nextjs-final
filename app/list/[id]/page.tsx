import Image from "next/image";
import Link from "next/link";

type DetailParams = {
    id: string
}

async function getDetail(id: string) {
    return (await (await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`)).json()).results;
}

export default async function Detail({ params } : { params: Promise<DetailParams>}) {
    const id: string = (await params).id;
    const detail = await getDetail(id);
    return (
        <>
            <h1>{detail.display_name}</h1>
            <ul>
                {detail.books.map((book, index) => <li key={index}>
                    <Image src={book.book_image} width={book.book_image_width} height={book.book_image_height} alt={book.title}/>
                    <div>{book.title}</div>
                    <div>{book.author}</div>
                    <Link href={book.amazon_product_url}>Buy now →</Link>
                </li>)}
            </ul>
        </>
    );
}