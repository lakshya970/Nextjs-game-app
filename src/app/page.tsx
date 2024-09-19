import React, { FC } from "react";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Home from "./pages/Home";
import { GameResponse } from "@/types/game";

interface pageProps {
  searchParams: {
    query: string;
  };
}

const page: FC<pageProps> = async ({ searchParams }) => {
  const query = searchParams.query;

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.API_KEY}&search=${query}`
  );

  const data: GameResponse = await res.json();
  console.log(data);

  return (
    <div>
      {query && (
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {data.results.map((value) => (
            <Link href={`/${value.id}`} key={value.id}>
              <Card
                image={value.background_image}
                name={value.name}
                rating={value.rating}
                releas={value.released}
                slug={value.slug}
              />
            </Link>
          ))}
        </div>
      )}
      {query ? null : <div>{<Home />}</div>}
    </div>
  );
};

export default page;
