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
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const {content, data} = matter(fileContent);

        return {
          content,
          data,
          slug: file.slug,
        } as Post; 
    });
}