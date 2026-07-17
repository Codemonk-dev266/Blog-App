// blogList.tsx

import { useEffect, useState } from "react";
import { DeleteBlog, GetBlogs } from "../services/blogApi";
import type { BlogType } from "./types";
import BlogItems from "./blogItems";

type BlogListType = {
  refresh: number;
  onSelect: (blog: BlogType) => void;
};

export default function BlogLists({ refresh, onSelect }: BlogListType) {
  const [blogs, setBlogs] = useState<BlogType[]>();

  useEffect(() => {
    async function fetchBlog() {
      const blogsData = await GetBlogs();
      setBlogs(blogsData);

      console.log(blogsData);
    }

    fetchBlog();
  }, [refresh]);

  async function handleDelete(id: string) {
    await DeleteBlog(id);

    setBlogs((prev) => prev?.filter((blog) => blog.id !== id));
  }

  return (
    <div>
      <h1 className="mb-5 text-2xl font-bold">Blog List</h1>

      <ul className="space-y-4">
        {blogs?.map((blog) => (
          <BlogItems
            key={blog.id}
            blog={blog}
            onDelete={handleDelete}
            onSelect={onSelect}
          />
        ))}
      </ul>
    </div>
  );
}
