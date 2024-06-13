import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@media only (max-width: 768px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#div-1 {\npadding: 0px !important;\n}\n#a-1 {\nmargin-top: 0px !important; margin-right: auto !important; margin-bottom: 0px !important; margin-left: auto !important;\n}\n#img-1 {\ndisplay: none !important;\n}\n#ul-1 {\ndisplay: none !important;\n}\n#div-2 {\nmargin-right: -10px !important;\n}\n#a-8 {\npadding-left: 10px !important; padding-right: 10px !important;\n}\n#a-9 {\ndisplay: none !important; padding-left: 10px !important; padding-right: 10px !important; margin-left: -4px !important;\n}\n#span-1 {\ndisplay: none !important;\n}\n#a-10 {\npadding-left: 10px !important; padding-right: 10px !important; margin-left: -4px !important;\n}\n#span-2 {\ndisplay: none !important;\n}\n}\n@media only (max-width: 959px) {\n/* DivMagic Note: Tailwind does not support max-width. We will fix this soon. */\n\n#a-2 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-3 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-4 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-5 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-6 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-7 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-8 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-9 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n#a-10 {\npadding-top: 16px !important; padding-right: 20px !important; padding-bottom: 16px !important; padding-left: 20px !important;\n}\n}\n",
        }}
      />

      <div className="text-sm py-1 relative bg-neutral-900" id="div-1">
        <div className="max-w-[93.75rem] m-auto">
          <div className="items-center flex">
            <div className="items-center basis-[6.25rem] break-all flex text-2xl">
              <h1 className="relative my-3 min-[769px]:mt-0  min-[769px]:mr-8 min-[769px]:mb-5 min-[769px]:ml-0">
                <span className="bottom-[2.00rem] left-0 absolute right-[6.38rem] top-0 w-0 h-0 overflow-hidden -m-0">
                  Deka Teknology
                </span>

                <a
                  className="text-white items-center flex max-w-full w-24 min-[769px]:w-24"
                  href="https://soapycosmetics.com/"
                  id="a-1"
                  style={{
                    wordBreak: "break-word",
                  }}
                >
                  <img
                    className="cursor-pointer object-cover w-24 mt-5 h-8 max-w-full block"
                    id="img-1"
                    src="https://media.licdn.com/dms/image/C4D0BAQFFoqXUZu0Q-Q/company-logo_200_200/0/1630524550776/dekatechs_logo?e=2147483647&v=beta&t=FcCXfcn1Zt6RbqW0xedZNN4KqU8iPo54pbsJcfSSiS8"
                  />
                </a>
              </h1>
            </div>
            <div className="items-center flex-grow flex text-white">
              <ul className="list-disc" id="ul-1">
                <li className="inline-block">
                  <Link
                    className="py-4 px-5 align-middle inline-block"
                    to="/profile/:id"
                    id="a-2"
                  >
                    Profile Detail
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="py-4 px-5 align-middle inline-block"
                    to="/"
                    id="a-3"
                  >
                    Profile List
                  </Link>
                </li>
                <li className="inline-block">
                  <Link
                    className="py-4 px-5 align-middle inline-block"
                    to="/create"
                    id="a-4"
                  >
                    Profile Create
                  </Link>
                </li>
              </ul>
            </div>
            <div className="items-center flex-grow justify-end flex text-white">
              <div id="div-2">
                <div className="items-center flex">
                  <a
                    className="items-center py-4 px-3 flex"
                    href="https://soapycosmetics.com/search"
                    id="a-8"
                  >
                    <svg
                      className="cursor-pointer inline-block w-7 h-7"
                      fill="rgb(255, 255, 255)"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 64 64"
                    >
                      <defs fill="rgb(255, 255, 255)" />
                      <path
                        d="M47.16 28.58A18.58 18.58 0 1 1 28.58 10a18.58 18.58 0 0 1 18.58 18.58zM54 54L41.94 42"
                        fill="none"
                        stroke="#ffffff"
                      />
                    </svg>

                    <span className="bottom-[2.25rem] cursor-pointer left-[73.88rem] absolute right-[10.63rem] top-[2.25rem] w-0 h-0 overflow-hidden -m-0">
                      Ara
                    </span>
                  </a>
                  <a
                    className="items-center py-4 px-3 flex"
                    href="https://soapycosmetics.com/account"
                    id="a-9"
                  >
                    <svg
                      className="cursor-pointer inline-block w-7 h-7"
                      fill="rgb(255, 255, 255)"
                      focusable="false"
                      role="presentation"
                      viewBox="0 0 64 64"
                    >
                      <defs fill="rgb(255, 255, 255)" />
                      <path
                        d="M35 39.84v-2.53c3.3-1.91 6-6.66 6-11.42 0-7.63 0-13.82-9-13.82s-9 6.19-9 13.82c0 4.76 2.7 9.51 6 11.42v2.53c-10.18.85-18 6-18 12.16h42c0-6.19-7.82-11.31-18-12.16z"
                        fill="none"
                        stroke="#ffffff"
                      />
                    </svg>

                    <span
                      className="bottom-[2.25rem] cursor-pointer left-[77.00rem] absolute right-[6.50rem] top-[2.25rem] w-0 h-0 -mt-0 -mr-0 -mb-0 ml-3.5 overflow-hidden"
                      id="span-1"
                    >
                      Hesap
                    </span>
                  </a>
                  <a
                    className="items-center py-4 px-3 flex"
                    href="https://soapycosmetics.com/cart"
                    id="a-10"
                  >
                    <span className="cursor-pointer inline-block">
                      <svg
                        className="inline-block w-7 h-7"
                        fill="rgb(255, 255, 255)"
                        focusable="false"
                        role="presentation"
                        viewBox="0 0 64 64"
                      >
                        <defs fill="rgb(255, 255, 255)" />
                        <path
                          d="M24.23 18c0-7.75 3.92-14 8.75-14s8.74 6.29 8.74 14M14.74 18h36.51l3.59 36.73h-43.7z"
                          fill="none"
                          stroke="#ffffff"
                        />
                      </svg>
                    </span>

                    <span
                      className="bottom-[2.25rem] cursor-pointer left-[80.25rem] absolute right-[3.25rem] top-[2.25rem] w-0 h-0 -mt-0 -mr-0 -mb-0 ml-3.5 overflow-hidden"
                      id="span-2"
                    >
                      Sepet
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
