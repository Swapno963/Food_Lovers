"use client";

import { handelLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [error, setError] = useState("");
  const { auth, setAuth } = useAuth();

  const router = useRouter();

  async function handelSubmit(formData) {
    const userData = Object.fromEntries(formData);
    // console.log(userData);
    try {
      const found = await handelLogin(userData);
      found && setAuth(found[0]);
      console.log("found is : ", found);
      if (found) {
        router.push("/");
      } else {
        setError("Please provide a valid login credential");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <div className="my-2 text-red-500">{error}</div>
      <form className="login-form" action={handelSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
        >
          Login
        </button>
      </form>
    </>
  );
}
