import { Eye, EyeOff, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { SignupProps } from "./Signup";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { axiosInstance } from "../lib/axios";

const Login = ({ switchPage }: SignupProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [login, setLogin] = useState({
    phone: "",
    password: "",
  });

  const handleLogin = async () => {
    if (!login.phone || !login.password) {
      toast.error("Name, phone, and password are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/login", login);
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error in signup", error);
      toast.error("Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="max-w-lg w-full overflow-hidden">
        <div className="p-2">
          <div className="mb-6 ">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Welcome back
            </h1>
            <p className="text-gray-600 text-sm">
              Login in to your account to continue
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
                onChange={(e) =>
                  setLogin((prev) => ({ ...prev, phone: e.target.value }))
                }
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
                  onChange={(e) =>
                    setLogin((prev) => ({ ...prev, password: e.target.value }))
                  }
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
              className="w-full bg-black shadow-[inset_6px_4px_12px_rgba(255,255,255,0.6),inset_-4px_-6px_8px_rgba(255,255,255,0.3),2px_6px_10px_rgba(0,0,0,0.2)] text-white font-semibold py-2 rounded-lg transition mt-6 disabled:opacity-50 hover:scale-[99%]
             flex items-center justify-center"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin text-white" />
                </span>
              ) : (
                "Login"
              )}
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
