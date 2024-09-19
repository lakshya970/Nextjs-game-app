import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-2xl font-extrabold uppercase tracking-wider dark:text-white">
          dwag
        </h1>
      </Link>
    </div>
  );
};

export default Logo;
