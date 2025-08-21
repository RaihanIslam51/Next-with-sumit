import Link from 'next/link';
import React from 'react';

export default function Page() {
  const blogs = [
    { id: 1, title: "Blogs 1", des: "blogs 1 description" },
    { id: 2, title: "Blogs 2", des: "blogs 2 description" },
  ];

  return (
    <div className='mt-5'>
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-2">


          <Link href={`/blogs/${blog.id}`}>
                        {blog.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
