import { UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost normal-case text-xl">Home</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
            <li><Link href="/map">Map</Link></li>
        </ul>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div>
            <UserButton afterSignOutUrl="/"></UserButton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
