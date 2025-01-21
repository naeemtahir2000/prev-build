import axios from "axios";

type Post = {
    id: number;
    userId: number;
    title: string;
    body: string;
};

const URL = "https://jsonplaceholder.typicode.com/posts";
export default async function PostDetails({ params }: { params: { postID: string } }) {
    const { postID } = params;

    const response = await axios.get<Post>(`${URL}/${postID}`);
    const post = response.data;

    return (
        <main className="container mx-auto my-5">
            <h2 className="text-2xl text-center">{post.title}</h2>
            <p>{post.body}</p>
        </main>
    );
}
