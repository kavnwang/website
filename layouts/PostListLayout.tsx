import PageLayout from "@/layouts/PageLayout";
import Link from 'next/link';
import { Post } from "@/lib/types";
import { format } from 'date-fns';

export default function PostListLayout({ posts }: {posts: Post[]}) {

  return (
    <div>
        <ul className={'flex flex-col space-y-8 pb-32'}>
            {
                posts.map((post) => {
                    return (
                    <li key={post.slug} className={'flex flex-row space-x-12'}>
                        <p>{post.data.date}</p>
                        <Link href={`/writing/${post.slug}`} className={'text-xl font-semibold'}>{post.data.title} </Link>

                    </li>
                    )
                })
            }
        </ul>
    </div>
  );
}
