"use client";
import React, { FC, useState } from "react";

interface cardProps {
  image?: React.ReactNode;
  name?: React.ReactNode;
  slug?: React.ReactNode;
  date?: React.ReactNode;
  rating?: React.ReactNode;
  releas?: React.ReactNode;
}

const Card: FC<cardProps> = ({ image, name, slug, date, rating, releas }) => {
  const [scroll, setScroll] = useState(false);
  return (
    <div className=" rounded-md  rounded-md m-4 hover:scale-105 duration-200 ease-linear">
      {image ? (
        <div
          onMouseEnter={() => setScroll(true)}
          onMouseLeave={() => setScroll(false)}
          className=" relative bg-white/20 rounded-md"
        >
          <div
            style={{ backgroundImage: `url(${image})` }}
            className=" aspect-[6/4] object-cover bg-cover bg-center rounded-md "
          ></div>
          <div
            className={` p-4 duration-300 ${
              scroll === true ? "md:block" : "md:hidden"
            }`}
          >
            <h1 className="text-xl font-semibold">{name}</h1>
            <p className="text-white/20 font-bold">{date}</p>
            <p className="font-bold">{Number(rating).toFixed(1)}</p>
            <p>{releas}</p>
            <p className="">{slug}</p>
          </div>
        </div>
      ) : (
        <div className=" aspect-[6/4] font-bold text-[150px] bg-slate-900 rounded-md flex justify-center items-center text-slate-400">
          NA
        </div>
      )}
    </div>
  );
};

export default Card;
