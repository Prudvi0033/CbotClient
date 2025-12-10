import React, { useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

interface ProductItem {
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl: string;
}

const Products = ({ products }: { products: ProductItem[] }) => {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);

  const handleImageError = (productId: string) => {
    setImageErrors((prev) => new Set(prev).add(productId));
  };

  const handleOrderBooking = async (productId: string) => {
    try {
      setLoading(true);
      await axiosInstance.post("/orders/create", { productId: productId });
      toast.success("Order Placed");
    } catch (error) {
      console.log("Error in placing order", error);
    } finally {
      setLoading(false);
    }
  };

  const isImageBroken = (productId: string) => imageErrors.has(productId);

  return (
    <div className="min-h-screen px-2">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 w-fit">
          {products.map((p, idx) => (
            <div
              key={idx}
              className="bg-neutral-200 p-1 rounded-xl shadow-md overflow-hidden flex flex-col border border-slate-100"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-74 h-68 bg-linear-to-br from-slate-100 to-slate-50 overflow-hidden flex items-center justify-center">
                {isImageBroken(p._id) ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-100 p-6">
                    <div className="text-center">
                      <img
                        src="./not-found.png"
                        alt="Not found"
                        className="w-full rounded-sm h-full object-contain mx-auto opacity-60"
                      />
                    </div>
                  </div>
                ) : (
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    onError={() => handleImageError(p._id)}
                    className="w-full rounded-sm h-full object-cover"
                  />
                )}
              </div>

              {/* CONTENT */}
              <div className="p-3 flex flex-col">
                <h3 className="text-sm font-bold text-slate-900 mb-1 line-clamp-2">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-500 uppercase tracking-wide mb-2 font-semibold">
                  {p.category}
                </p>

                <div className="mb-3">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold text-slate-900">
                      ₹{p.price}
                    </span>
                    <span className="text-xs text-slate-500">INR</span>
                  </div>
                </div>

                {/* CTA BUTTON */}
                <button
                  disabled={loading}
                  onClick={() => handleOrderBooking(p._id)}
                  className="w-full bg-neutral-900 shadow-[inset_8px_8px_12px_rgba(255,255,255,0.5),4px_2px_6px_rgba(0,0,0,0.1)] text-white font-semibold py-2 px-3 rounded-lg flex items-center justify-center gap-2 text-[16px] hover:scale-[99%] cursor-pointer"
                >
                  {loading ? (
                    "Loading"
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g fill="none" className="nc-icon-wrapper">
                          <path
                            d="M17.9003 4.87875C19.0617 6.05204 19.0569 7.94319 17.8895 9.11055L15.1214 11.8787C13.9498 13.0503 12.0503 13.0503 10.8787 11.8787L8.13209 9.13207C6.95634 7.95631 6.96116 6.04855 8.14284 4.87875L10.939 2.11073C12.1165 0.94505 14.016 0.954691 15.1816 2.13226L17.9003 4.87875Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_0_1owsn3hyx)"
                            data-glass="origin"
                            mask="url(#js1w752thfg-1752500502772-3118546_cart_mask_rwmj8x6ry)"
                          ></path>
                          <path
                            d="M17.9003 4.87875C19.0617 6.05204 19.0569 7.94319 17.8895 9.11055L15.1214 11.8787C13.9498 13.0503 12.0503 13.0503 10.8787 11.8787L8.13209 9.13207C6.95634 7.95631 6.96116 6.04855 8.14284 4.87875L10.939 2.11073C12.1165 0.94505 14.016 0.954691 15.1816 2.13226L17.9003 4.87875Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_0_1owsn3hyx)"
                            data-glass="clone"
                            filter="url(#js1w752thfg-1752500502772-3118546_cart_filter_js42b848j)"
                            clipPath="url(#js1w752thfg-1752500502772-3118546_cart_clipPath_ihp7ijxaz)"
                          ></path>
                          <path
                            d="M3 21C3 19.8954 3.89543 19 5 19C6.10457 19 7 19.8954 7 21C7 22.1046 6.10457 23 5 23C3.89543 23 3 22.1046 3 21Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_1_zb3rzrkq4)"
                          ></path>
                          <path
                            d="M17 21C17 19.8954 17.8954 19 19 19C20.1046 19 21 19.8954 21 21C21 22.1046 20.1046 23 19 23C17.8954 23 17 22.1046 17 21Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_2_sy6gfg1e9)"
                          ></path>
                          <path
                            d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_3_azrksosyr)"
                            data-glass="blur"
                          ></path>
                          <path
                            d="M19.9827 5C21.2697 5 22.2217 6.19837 21.9309 7.45215L20.4622 13.7842C20.0882 15.6538 18.446 17 16.5393 17H7.60084C5.61063 16.9996 3.92235 15.5357 3.64088 13.5654L2.58033 6.1416C2.5394 5.85488 2.6251 5.56364 2.81471 5.34473C3.00449 5.12591 3.28094 5.00021 3.57057 5H19.9827ZM3.51686 5.75586C3.46456 5.76741 3.41619 5.79471 3.38111 5.83496C3.33377 5.8896 3.31338 5.96357 3.3235 6.03516L4.38404 13.459C4.61272 15.0597 5.98376 16.2496 7.60084 16.25H16.5393C18.0885 16.25 19.423 15.1558 19.7268 13.6367C19.7283 13.6293 19.73 13.6216 19.7317 13.6143L21.2005 7.28223C21.3819 6.4986 20.7868 5.75 19.9827 5.75H3.57154L3.51686 5.75586Z"
                            fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_4_83mwfs93y)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="js1w752thfg-1752500502772-3118546_cart_existing_0_1owsn3hyx"
                              x1="13.011"
                              y1="1.243"
                              x2="13.011"
                              y2="12.757"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(87, 87, 87, 1)"
                                data-glass-11="on"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="rgba(21, 21, 21, 1)"
                                data-glass-12="on"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="js1w752thfg-1752500502772-3118546_cart_existing_1_zb3rzrkq4"
                              x1="5"
                              y1="19"
                              x2="5"
                              y2="23"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(87, 87, 87, 1)"
                                data-glass-11="on"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="rgba(21, 21, 21, 1)"
                                data-glass-12="on"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="js1w752thfg-1752500502772-3118546_cart_existing_2_sy6gfg1e9"
                              x1="19"
                              y1="19"
                              x2="19"
                              y2="23"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(87, 87, 87, 1)"
                                data-glass-11="on"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="rgba(21, 21, 21, 1)"
                                data-glass-12="on"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="js1w752thfg-1752500502772-3118546_cart_existing_3_azrksosyr"
                              x1="10.992"
                              y1="1"
                              x2="10.992"
                              y2="17"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(227, 227, 229, 0.6)"
                                data-glass-21="on"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="rgba(187, 187, 192, 0.6)"
                                data-glass-22="on"
                              ></stop>
                            </linearGradient>
                            <linearGradient
                              id="js1w752thfg-1752500502772-3118546_cart_existing_4_83mwfs93y"
                              x1="14"
                              y1="5"
                              x2="11.5"
                              y2="9.5"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                stopColor="rgba(255, 255, 255, 1)"
                                data-glass-light="on"
                              ></stop>
                              <stop
                                offset="1"
                                stopColor="rgba(255, 255, 255, 1)"
                                stopOpacity="0"
                                data-glass-light="on"
                              ></stop>
                            </linearGradient>
                            <filter
                              id="js1w752thfg-1752500502772-3118546_cart_filter_js42b848j"
                              x="-100%"
                              y="-100%"
                              width="400%"
                              height="400%"
                              filterUnits="objectBoundingBox"
                              primitiveUnits="userSpaceOnUse"
                            >
                              <feGaussianBlur
                                stdDeviation="2"
                                x="0%"
                                y="0%"
                                width="100%"
                                height="100%"
                                in="SourceGraphic"
                                edgeMode="none"
                                result="blur"
                              ></feGaussianBlur>
                            </filter>
                            <clipPath id="js1w752thfg-1752500502772-3118546_cart_clipPath_ihp7ijxaz">
                              <path
                                d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z"
                                fill="url(#js1w752thfg-1752500502772-3118546_cart_existing_3_azrksosyr)"
                              ></path>
                            </clipPath>
                            <mask id="js1w752thfg-1752500502772-3118546_cart_mask_rwmj8x6ry">
                              <rect
                                width="100%"
                                height="100%"
                                fill="#FFF"
                              ></rect>
                              <path
                                d="M1.26562 1C2.75848 1.00011 4.02423 2.0983 4.23535 3.57617L4.43848 5H19.9834C21.2703 5.00015 22.2224 6.19845 21.9316 7.45215L20.4629 13.7842C20.0889 15.6539 18.4468 17 16.54 17H7.60156C5.61111 16.9998 3.9231 15.5359 3.6416 13.5654L2.58105 6.1416C2.58027 6.13608 2.5798 6.13052 2.5791 6.125L2.25488 3.8584C2.18441 3.36594 1.7631 3.00011 1.26562 3H1C0.447715 3 0 2.55228 0 2C0 1.44772 0.447715 1 1 1H1.26562Z"
                                fill="#000"
                              ></path>
                            </mask>
                          </defs>
                        </g>
                      </svg>
                      <span>Add to Cart</span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-500 text-lg">No products available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
