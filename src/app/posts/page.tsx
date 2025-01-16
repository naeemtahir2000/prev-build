import axios from "axios";
import Link from "next/link";

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

type Posts = Post[];

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
export default async function Solana() {
    const response = await axios.get<Posts>(POSTS_URL);
    const posts = response?.data;

    return (
        <>
            <main className="container mx-auto my-5">
                {posts?.map((post: Post) => (
                    <div className="mb-5 border p-3 rounded" key={post.id}>
                        <h2 className="text-lg">{post.title}</h2>
                        <Link href={`/posts/${post.id}`} className="text-blue-500">read more...</Link>
                    </div>
                ))}
            </main>
        </>
    );
}
