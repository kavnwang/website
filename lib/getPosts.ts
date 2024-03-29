import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from './types';

export const POSTS_PATH = path.join(process.cwd(), "posts");


//need error handling, check what type of file it is / if it exists
export const postFiles = fs
  .readdirSync(POSTS_PATH)
  .filter((f: string) => /\.mdx$/.test(f))
  .reduce((files: { path: string; slug: string }[], f) => {
      files.push({
        path: f,
        slug: f.replace(/\.mdx$/, ""),
      });
    return files;
  }, []);

export const getPosts = (): Post[] => {
    return postFiles.map((file) => {
        const filePath = path.join(POSTS_PATH, file.path);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const {content, data} = matter(fileContent);
        
        const date = data.date;
        return {
          content,
          data: {
            ...data,
            date,
          },
          slug: file.slug,
        } as Post; 
    });
}

export const getPostsByDate = (): Post[] => {
  const posts = getPosts();
  posts.sort((a : Post, b : Post) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  return posts;
}