"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useEffect , useState } from "react";
export default function Home() {
  const [user , setUser] = useState("")
  const userdata = useSelector((state: RootState) => state.authReducer.value);
  if(!userdata) return null
  return (
    <main className="h-screen">
      <div className="flex justify-center items-center flex-col gap-3 h-screen">
        <h1 className="text-orange-600 text-lg">
          Hello 🖐️
          {userdata?.userName}
        </h1>
        <h2>Role - User</h2>
        <div className="p-3 bg-orange-300 rounded-lg ">Log out</div>
      </div>
    </main>
  );
}
