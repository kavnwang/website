import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getMDXComponent } from 'mdx-bundler/client';
import { getPosts, postFiles} from '@/lib/getPosts';
import {bundleMDX} from 'mdx-bundler';
import { useMemo } from 'react';
import Link from 'next/link';
import rehypeKatex from 'rehype-katex';
import remarkMath from "remark-math";
import { format } from 'date-fns';

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

  const { code } = await bundleMDX({
    source: post.content,
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkMath,
      ];

      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeKatex,
      ];
      return options;
    },
  });
  

  return { props: {
    code,
    frontMatter: post.data,
    slug,
  } };
};

export default function PostPage ({ code, frontMatter, slug }: PostPageProps) {

  const Content = useMemo(
    () => getMDXComponent(code, frontMatter),
    [code, frontMatter]
  );

  const date = new Date(frontMatter.date);

  return (
    <div className={'flex pl-48 pr-96 pt-32 flex-col font-normal text-lg space-y-12'}>
      <div className={'flex flex-col space-y-2'}>
        <h2 className={'text-xl font-semibold'}>{frontMatter.title}</h2>
        <div className={'flex flex-row space-x-4 text-lg'}>
          <Link href={'/writing'} className={'font-normal hover:underline hover:decoration-dotted hover:underline-offset-8'}>
            Kevin Wang
          </Link>
          <h4>
          •
          </h4>
          <h4 className={'font-light'}>
            {format(date, 'MMMM dd, yyyy')}
          </h4>
        </div>
      </div>
      <div className={'font-serif flex flex-col space-y-8 post'}>
        <Content {...frontMatter} />
      </div>
    </div>
  )
  
};
