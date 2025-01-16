import React from 'react'

export const runtime = "edge";
export default async function Blog({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  return (
    <div>{post?.name}</div>
  )
}

  async function fetchPost(id: string): Promise<{ id:string,name: string; description: string }> {
    // const res = await fetch(`https://api.example.com/posts/${id}`, {
    //     cache: 'no-store', // Fetch fresh data for each request
    // });
    // if (!res.ok) {
    //     throw new Error('Failed to fetch post');
    // }
    // console.log(id)
    return {id:id, name: 'blog name', description: 'blog description' };
  }

