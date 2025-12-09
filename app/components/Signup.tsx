"use client";
import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { axiosInstance } from "../lib/axios";

export interface SignupProps {
  switchPage: () => void;
}

export default function SignUp({ switchPage }: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [signup, setSignup] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    password: "",
  });

  const handleSingup = async () => {
    if (!signup.name || !signup.phone || !signup.password) {
      toast.error("Name, phone, and password are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await axiosInstance.post("/auth/sign-up", signup);
      localStorage.setItem("token", res.data.token);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error in signup", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="overflow-hidden w-full lg:max-w-lg">
        <div className="p-2">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Create an account
            </h1>
            <p className="text-gray-600 text-sm">
              Explore the latest deals, track payments, and manage orders.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={signup.name}
                onChange={(e) =>
                  setSignup((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Peter Parker"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 000-000-0000"
                value={signup.phone}
                onChange={(e) =>
                  setSignup((prev) => ({ ...prev, phone: e.target.value }))
                }
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
                  value={signup.password}
                  onChange={(e) =>
                    setSignup((prev) => ({ ...prev, password: e.target.value }))
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="yourmail123@mail.com"
                value={signup.email}
                onChange={(e) =>
                  setSignup((prev) => ({ ...prev, email: e.target.value }))
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-gray-500">(optional)</span>
              </label>
              <input
                type="text"
                name="address"
                value={signup.address}
                onChange={(e) =>
                  setSignup((prev) => ({ ...prev, address: e.target.value }))
                }
                placeholder="Tokyo, Japan"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              onClick={handleSingup}
              disabled={loading}
              className="w-full bg-black text-white font-semibold py-2 rounded-lg transition mt-6 disabled:opacity-50 hover:scale-[99%]
             flex items-center justify-center shadow-[inset_6px_4px_12px_rgba(255,255,255,0.6),inset_-4px_-6px_8px_rgba(255,255,255,0.3),2px_6px_10px_rgba(0,0,0,0.2)]"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <Loader2 className="animate-spin text-white" />
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={switchPage}
              className="text-orange-600 font-semibold hover:underline"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
