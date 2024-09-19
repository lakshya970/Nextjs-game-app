"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Game } from "@/types/game";

const Genres = () => {
  const [genres, setGenres] = useState<Game[]>([]);
  const [click, setClick] = useState<boolean>(false);

  useEffect(() => {
    const fetchGenra = async () => {
      try {
        const res = await axios.get(
          `https://api.rawg.io/api/genres?key=${process.env.API_KEY}`
        );
        console.log("data genra", res);
        setGenres(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchGenra();
  }, []);

  return (
    <div className="px-2 py-3 ">
      <button onClick={() => setClick(!click)} className=" md:hidden">
        <HiOutlineMenuAlt2 size={23} />
      </button>
      {click ? <h1 className="font-bold text-xl py-2">Game Genres</h1> : null}
      <h1 className="font-bold text-xl py-2 hidden md:block">Game Genres</h1>
      <ul className="text-white py-2 flex flex-col overflow-y-auto">
        {genres.map((genre) => (
          <Link href={`/genres/${genre.id}`} key={genre.id}>
            <li className="flex items-center justify-between py-1 my-2 hover:bg-white/30 px-3 rounded-md my-3">
              {click ? <p>{genre.name}</p> : null}
              <p className="hidden md:block">{genre.name}</p>
              <Image
                src={genre.image_background}
                alt=""
                height={50}
                width={50}
                className="w-[40px] h-[40px] object-cover object-center rounded-md"
              />
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Genres;
