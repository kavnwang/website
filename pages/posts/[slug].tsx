import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getMDXComponent } from 'mdx-bundler/client';
import { getPosts, postFiles} from '@/lib/getPosts';
import {bundleMDX} from 'mdx-bundler';
import { useMemo } from 'react';

type PostPageProps = {
  code: string;
  frontMatter: {
    [key: string]: string;
  };
  slug: string;
};

export async function getStaticPaths() {

  const paths = postFiles.map((file) => ({params: {slug: file.slug}}));

    return {
      paths,
      fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const slug = params?.slug;
  const posts = getPosts(); 
  const post = posts.find(p => p.slug === slug);

  if(!post) {
    return {notFound: true};
  }

  const { code, frontmatter } = await bundleMDX({
    source: post.content,
  });
  
  return { props: {
    code,
    frontMatter: frontmatter,
    slug,
  } };
};

export default function PostPage ({ code, frontMatter, slug }: PostPageProps) {

  const Content = useMemo(
    () => getMDXComponent(code, frontMatter),
    [code, frontMatter]
  );
  
  return (
    <div>
      <Content {...frontMatter} />
    </div>
  )
  
};
