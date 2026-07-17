// Home.tsx

import { useState } from "react";
import BlogForm from "../component/blogForm";
import BlogLists from "../component/blogList";
import type { BlogType } from "../component/types";

export default function Home() {
  const [refresh, setRefresh] = useState(0);
  const [openForm, setOpenForm] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<BlogType | null>(null);

  const handleRefresh = () => {
    setRefresh((prev) => prev + 1);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  function handleSelect(blog: BlogType) {
    setSelectedBlog(blog);
  }
  return (
    <section className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto flex max-w-7xl gap-8">
        {/* Left Sidebar */}
        <aside className="w-1/3 rounded-xl bg-white p-6 shadow-lg">
          <button
            onClick={() => setOpenForm(true)}
            className="mb-6 w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
          >
            + New Blog
          </button>

          <BlogLists refresh={refresh} onSelect={handleSelect} />
        </aside>

        {/* Right Side */}
        <main className="flex-1 rounded-xl bg-white p-8 shadow-lg">
          {openForm ? (
            <BlogForm
              onRefresh={handleRefresh}
              onClose={closeForm}
              selectedBlog={selectedBlog}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="text-lg text-gray-500">
                Select a blog or create a new one.
              </p>
            </div>
          )}
        </main>
      </div>
    </section>
    // <section className="flex flex-row gap-5 p-4">
    //   <div className="flex flex-col gap-5 w-3xs">
    //     <button
    //       onClick={() => setOpenForm(true)}
    //       className="text-white bg-black rounded px-4 py-2 w-fit"
    //     >
    //       + new blog
    //     </button>
    //     <BlogLists refresh={refresh} onSelect={handleSelect} />
    //   </div>

    //   <div className="flex-1 gap-4 p-6 ">
    //     {openForm && (
    //       <BlogForm
    //         onRefresh={handleRefresh}
    //         onClose={closeForm}
    //         selectedBlog={selectedBlog}
    //       />
    //     )}
    //   </div>
    // </section>
  );
}

// prop are ways of sending data from parents to children
// props is the actual data
// type describes the prop

// variables
// functions
// destructuring and spread operator
// async
// array and objects map and filter
// props types
// usestate hooks
// event handling
// conditional rendering
// useeffect
// api fetching
// routing
// global state management
// jsx and tsx

// react
// components
// props
// reuseable components
// state hooks and routing
//

// lookup empty states
