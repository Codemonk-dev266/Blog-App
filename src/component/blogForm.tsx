// BlogForm.tsx

import { useForm } from "react-hook-form";
import type { BlogType } from "./types";
import { CreateBlog, UpdateBlog } from "../services/blogApi";
import { useEffect } from "react";

type BlogFormType = {
  onRefresh: () => void;
  onClose: () => void;
  selectedBlog: BlogType | null;
};

export default function BlogForm({
  onRefresh,
  onClose,
  selectedBlog,
}: BlogFormType) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BlogType>();

  useEffect(() => {
    if (selectedBlog) {
      reset({ title: selectedBlog.title, content: selectedBlog.content });
    }
  }, [selectedBlog, reset]);

  async function onSubmitForm(data: BlogType) {
    try {
      if (selectedBlog) {
        await UpdateBlog(selectedBlog.id, data);
      } else {
        await CreateBlog(data);
      }
      reset();
      onRefresh();
      onClose();
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="mx-auto flex max-w-2xl flex-col gap-6 rounded-lg"
    >
      <h2 className="text-2xl font-bold">
        {selectedBlog ? "Edit Blog" : "Create Blog"}
      </h2>

      <div>
        <input
          type="text"
          placeholder="Blog title"
          className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
          {...register("title", {
            required: "Title is required",
          })}
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-500">{errors.title.message}</p>
        )}
      </div>

      <div>
        <textarea
          rows={8}
          placeholder="Write your blog..."
          className="w-full rounded-md border border-gray-300 p-3 outline-none focus:border-blue-500"
          {...register("content", {
            required: "Content is required",
          })}
        />

        {errors.content && (
          <p className="mt-1 text-sm text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex gap-4">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          {isSubmitting ? "Saving..." : "Save Blog"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100"
        >
          Cancel
        </button>
      </div>
    </form>

    // <form
    //   onSubmit={handleSubmit(onSubmitForm)}
    //   className="flex flex-col border w-fit gap-4"
    // >
    //   <div>
    //     <input
    //       type="text"
    //       className="border rounded-sm"
    //       placeholder="Blog title"
    //       {...register("title", { required: "title is required" })}
    //     />
    //     {errors.title && <p>{errors.title.message}</p>}
    //   </div>
    //   <div>
    //     <textarea
    //       className="border rounded-sm"
    //       placeholder="content"
    //       {...register("content", { required: "content is required" })}
    //     ></textarea>
    //     {errors.title && <p>{errors.title.message}</p>}
    //   </div>
    //   <button>{isSubmitting ? "saving..." : "save blog"}</button>
    // </form>
  );
}
