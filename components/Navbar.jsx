import Image from "next/image";
import SingnInOut from "./SingnInOut";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex justify-between py-6">
        <a href="/">
          <Image
            width={150}
            height={30}
            src="/assets/images/logo.png"
            alt=""
            className="object-cover h-[40px]"
          />
        </a>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <a href="/">Home</a>
          </li>

          <li className="py-2">
            <a href="./index.html">Recipe</a>
          </li>

          <li className="py-2">
            <a href="./index.html">About us</a>
          </li>

          {/* <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <a href="/login">Login</a>
          </li> */}
          <li className="py-2">
            <SingnInOut />
          </li>
        </ul>
      </div>
    </nav>
  );
}
