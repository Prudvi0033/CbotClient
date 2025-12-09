'use client'
import React, { useState } from "react";
import AnimatedBot from "./AnimatedBot";
import SignUp from "./Signup";
import Login from "./Login";

const Home = () => {
    const [currentPage, setCurrentPage] = useState<'signup' | 'login'>("signup")
  return (
    <div className="flex items-center justify-around min-h-screen">
      <div className="h-screen w-[50%]  p-2 hidden md:block">
        <div className="h-full w-full rounded-lg bg-linear-to-br from-orange-800 via-orange-500 to-orange-300 flex items-center justify-center backdrop-blur-3xl p-4">
          <AnimatedBot strokeColor="white" height={100} width={100} />
        </div>
      </div>

      <div className="h-screen w-[50%]">
        {currentPage === 'signup' ? (
            <div>
                <SignUp switchPage={() => setCurrentPage('login')} />
            </div>
        ) : (
            <div>
                <Login switchPage={() => setCurrentPage('signup')}/>
            </div>
        )}
      </div>
    </div>
  );
};

export default Home;
