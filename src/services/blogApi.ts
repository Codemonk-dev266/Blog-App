// blogAPI.ts

import type { BlogType } from "../component/types";

const BASE_URL = "https://blog-ywxv.onrender.com/api/posts/";

// fetching data

export async function GetBlogs() {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch Blogs");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

// deleting data

export async function DeleteBlog(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to Delete Blog");
    }
  } catch (e) {
    console.error(e);
  }
}

// creating new post >>>> POST method

export async function CreateBlog(blog: BlogType) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (!response.ok) {
      throw new Error("Failed to create Blog");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}

// editting post >>>> PATCH method

export async function UpdateBlog(id: string, blog: BlogType) {
  try {
    const response = await fetch(`${BASE_URL}${id}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    });

    if (!response.ok) {
      throw new Error("Data update not successful");
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e);
  }
}
