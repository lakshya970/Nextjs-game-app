"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      router.push(`/?query=${query}`);
    }
    setQuery("");
  };

  return (
    <div className="w-full mx-5">
      <form
        onSubmit={handleSubmit}
        className="w-full px-4 py-2 bg-black/40 dark:bg-white/40 rounded-full flex items-center"
      >
        <input
          value={query}
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search games"
          className="w-full bg-transparent outline-none"
        />
        <button type="submit">
          <IoIosSearch size={22} />
        </button>
      </form>
    </div>
  );
};

export default Search;
