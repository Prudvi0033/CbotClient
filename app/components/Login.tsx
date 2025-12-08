import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { SignupProps } from "./Signup";

const Login = ({ switchPage }: SignupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    phone: "",
    password: ""
  })

  const handleLogin = () => {
    setLoading(true)
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg w-full overflow-hidden">
        <div className="p-2">
          <div className="mb-6 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600 text-sm">
              Sign in to your account to continue
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="number"
                maxLength={10}
                name="phone"
                value={login.phone}
                onChange={(e) => setLogin(prev => ({...prev, phone: e.target.value}))}
                placeholder="+1 000-000-0000"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  value={login.password}
                onChange={(e) => setLogin(prev => ({...prev, password: e.target.value}))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 pr-10"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
            onClick={handleLogin}
              disabled={loading}
              className="w-full bg-black shadow-[inset_4px_4px_8px_rgba(255,255,255,0.3),inset_-4px_-6px_10px_rgba(255,255,255,0.4),2px_6px_14px_rgba(0,0,0,0.3)] text-white font-semibold py-2 rounded-lg transition mt-6 disabled:opacity-50 cursor-pointer hover:scale-[99%]"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Dont have an account?{" "}
            <button
              onClick={switchPage}
              className="text-orange-600 font-semibold hover:underline"
            >
              Create one
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
