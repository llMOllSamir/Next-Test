import React from "react";

export default async function Categories() {
  const data = await fetch("http://localhost:4000/category", {
    cache: "no-cache",
 
  }).then((res) => res.json());

  return (
    <section className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-3xl font-extrabold text-red-600 ">Categories Page</h1>
      <div className="w-full mt-16">
        {data.map((category) => (
          <h2
            className=" text-xl font-extrabold text-red-600"
            key={category.id}
          >
            {category.title}
          </h2>
        ))}
      </div>
    </section>
  );
}

/**
 * SSG Bulding Time App
 * Static Side Genration /category
 * ISR
 */
