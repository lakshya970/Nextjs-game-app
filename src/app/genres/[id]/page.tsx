import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  description: string;
  image_background: string;
}

async function fetchGenre(id: string): Promise<Genre> {
  try {
    const res = await fetch(
      `https://api.rawg.io/api/genres/${id}?key=${process.env.API_KEY}`
    );
    console.log(res);

    if (!res.ok) {
      throw new Error("Failed to fetch genre");
    }

    return res.json();
  } catch (error) {
    notFound();
  }
}

export const metadata: Metadata = {
  title: "Genre Details",
  description: "Details about the selected genre",
};

export default async function GenrePage({
  params,
}: {
  params: { id: string };
}) {
  const genre = await fetchGenre(params.id);

  if (!genre) {
    return <div>Loading...</div>;
  }

  return (
    <div
      style={{ backgroundImage: `url(${genre.image_background})` }}
      className="h-screen bg-cover bg-center pt-5 md:pt-10  px-10 relative "
    >
      <div className=" absolute top-0 inset-0 bg-black/50"></div>
      <div className=" space-y-3 md:space-y-10">
        <h1 className="font-bold text-4xl md:text-6xl text-center isolate">
          {genre.name}
        </h1>
        <p className="text-center isolate">
          <span className=" font-extralight tracking-widest">
            {genre.description}
          </span>
        </p>
        <p className="text-center isolate font-bold">
          <span className="font-extralight text-slate-200 uppercase">
            slug:
          </span>{" "}
          {genre.slug}
        </p>
        <p className="text-center isolate font-bold">
          {" "}
          <span className="font-extralight text-slate-200 uppercase">
            game count:
          </span>{" "}
          {genre.games_count}
        </p>
      </div>
    </div>
  );
}
