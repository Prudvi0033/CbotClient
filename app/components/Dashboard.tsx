'use client'
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import GlowButton from "./GlowButton";
import Header from "./Header";
import MenuDeck from "./MenuDeck";
import Content from "./Content";
import { axiosInstance } from "../lib/axios";

const Dashboard = () => {
  const [menu, setMenu] = useState(true);
  const [username, setUsername] = useState(null)
  const[loading, setLoading] = useState(false)

  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true)
        const res = await axiosInstance.get("/auth/profile");
        setUsername(res.data.name || ""); 
        console.log(res);
        
      } catch (error) {
        console.log("Error in getting username", error);
      } finally {
        setLoading(false)
      }
    })();
  }, []);

  const handleData = (section: string, data: any) => {
    setContentData((prev) => [
      ...prev,
      { section, data, timestamp: Date.now()}
    ]);
  };

  return (
    <div className="p-4 flex min-h-screen items-center justify-center bg-neutral-100">
      <div className="h-[95vh] max-w-3xl w-full rounded-2xl border-[6px] border-neutral-200/70 shadow-[8px_8px_20px_rgba(0,0,0,0.18),-8px_-8px_20px_rgba(255,255,255,0.8)] inset-shadow bg-neutral-100 relative flex flex-col">

        <div className="absolute inset-0 rounded-xl shadow-[inset_4px_4px_10px_rgba(0,0,0,0.1),inset_-4px_-4px_12px_rgba(255,255,255,0.7)] pointer-events-none" />

        <Header />

        {/* Pass all accumulated data */}
        <Content data={contentData} userName={username} loading={loading}/>
        <div className="py-11"></div>

        {/* Input box */}
        <div className="w-full absolute bottom-0 p-4 flex justify-center">
          <div className="flex w-[98%] items-center gap-2">
            <textarea
              placeholder="Type your message..."
              className="
                flex-1 h-16 p-3 rounded-lg border border-neutral-300/70
                resize-none overflow-y-auto scrollbar-none
                focus:outline-none focus:ring-2 focus:ring-orange-400
                bg-white
              "
            />
            <button className="h-16 flex items-center justify-center w-16 px-4 bg-black text-white rounded-full shadow-[inset_2px_2px_12px_rgba(255,255,255,0.6),inset_-4px_-6px_8px_rgba(255,255,255,0.3),2px_6px_10px_rgba(0,0,0,0.2)] hover:scale-[99%]">
              <ArrowUpRight size={32} />
            </button>
          </div>
        </div>
      </div>

      {/* Menu Deck */}
      <div className="relative">
        {menu ? (
          <div className="absolute mx-12 inset-0 flex items-center">
            <MenuDeck 
              onClose={() => setMenu(false)} 
              onData={handleData} 
            />
          </div>
        ) : (
          <div onClick={() => setMenu(true)} className="absolute inset-0 flex items-center">
            <GlowButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
