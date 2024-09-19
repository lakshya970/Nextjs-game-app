import Genres from "@/components/ui/Genres";
import Herosection from "@/components/ui/Herosection";
import React from "react";

const Home = () => {
  return (
    <main className="flex">
      <div>
        <Genres />
      </div>
      <div className="w-full">
        <Herosection />
      </div>
    </main>
  );
};

export default Home;
