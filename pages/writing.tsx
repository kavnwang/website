import PageLayout from "@/layouts/PageLayout";
import Link from 'next/link';
import PostListLayout from "@/layouts/PostListLayout";
import { getPosts, getPostsByDate } from '@/lib/getPosts';
import { GetStaticProps } from "next";
import { Post } from "@/lib/types";

export default function Writing({ posts }: { posts: Post[] }) {

  return (
    <div>
        <PageLayout>
            <div>
              <div className={'pb-12'}>
                You can find a full archive of my writing at <a rel={"noopener noreferrer"} target={'_blank'} className={`underline`} href={'https://wangk.substack.com'}>wangk.substack.com.</a>
              </div>
              <PostListLayout posts={posts} />
            </div>
        </PageLayout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getPostsByDate();
  return {
    props: {
      posts,
    },
  };
};
