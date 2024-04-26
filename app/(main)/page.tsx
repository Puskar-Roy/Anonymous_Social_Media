"use client";
import { useState, useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { logout } from "@/redux/features/authSlice";

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const handleLogout = () => {
    dispatch(logout());
  };
  const user = useSelector((state: RootState) => state.authReducer.value);
  
  useEffect(() => {
    setName(user.userName);
    if (user.isAuth === false) {
      return router.push("/login");
    }
  }, []);

  
  return (
    <main className="h-screen">
      <div className="flex justify-center items-center flex-col gap-3 h-screen">
        <h1 className="text-orange-600 text-lg">Hello 🖐️ {name}</h1>
        <h2>Role - User</h2>
        <div className="p-3 bg-orange-300 rounded-lg cursor-pointer" onClick={handleLogout}>Log out</div>
      </div>
    </main>
  );
}
