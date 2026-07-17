// BlogItems.tsx

import type { BlogType } from "./types";

type blogItemType = {
  blog: BlogType;
  onDelete: (id: string) => void;
  onSelect: (blog: BlogType) => void;
};

export default function BlogItems({ blog, onDelete, onSelect }: blogItemType) {
  return (

    <li className="rounded-lg border bg-gray-50 p-4 shadow-sm transition hover:shadow-md">
  <h2 className="mb-2 text-lg font-semibold">
    {blog.title}
  </h2>

  <p className="mb-4 line-clamp-3 text-gray-600">
    {blog.content}
  </p>

  <div className="flex gap-3">
    <button
      onClick={() => onSelect(blog)}
      className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
    >
      Edit
    </button>

    <button
      onClick={() => onDelete(blog.id)}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
    >
      Delete
    </button>
  </div>
</li>
    // <li key={blog.id}>
    //   <h1>{blog.title}</h1>
    //   <p>{blog.content}</p>

    //   <button onClick={() => onDelete(blog.id)}>Delete</button>
    //   <button onClick={() => onSelect(blog)}>Edit blog</button>
    // </li>
  );
}
