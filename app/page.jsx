import React from "react";
import logo from "../public/6.jpeg"
import Image from "next/image";

export default function Home() {

  return (
    <section className="flex min-h-screen flex-col items-center justify-start gap-16 p-24">
      <h1 className="text-3xl font-extrabold text-red-600 ">Home Page</h1>
      <Image src={logo.src} alt="Logo" width={720} height={720} />
    </section>
  );
}
