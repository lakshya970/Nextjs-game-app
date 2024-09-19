"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";
import { Game } from "@/types/game";

const Herosection: React.FC = () => {
  const [game, setGame] = useState<Game[]>([]);
  const [loading, setLaoding] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=${process.env.API_KEY}&page=${page}`
        );
        const data = await res.json();
        setGame(data.results);
        setLaoding(false);
      } catch (error) {
        console.log("somthing went wrong");
      }
    };
    fetchGame();
  }, [page]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <div className="px-5 py-4">
      <h2 className="px-3 py-2 capitalize tracking-wider font-bold text-2xl">
        games
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {game.map((value) => (
          <Link href={`/`} key={value.id}>
            <Card
              name={value.name || ""}
              image={value.background_image}
              slug={value.slug}
              releas={value.released}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-around items-center py-5">
        <button
          className="border-[1px] border-slate-400 px-3 py-2 rounded-md hover:bg-white/20 hover:text-white capitalize font-bold tracking-widest hover:scale-90 transition-all ease-in"
          defaultValue={0}
          onClick={() => {
            setPage(page - 1), window.scrollTo({ top: 0 }), setLaoding(true);
          }}
        >
          &larr; previous
        </button>
        <button
          className="border-[1px] border-slate-400 px-3 py-2 rounded-md hover:bg-white/20 hover:text-white capitalize font-bold tracking-widest hover:scale-90 transition-all ease-in"
          onClick={() => {
            setPage(page + 1), window.scrollTo({ top: 0 }), setLaoding(true);
          }}
        >
          next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Herosection;
