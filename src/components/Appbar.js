import React, { useState } from "react";

function Appbar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      title: "Opportunities",
      id: "opps",
    },

    {
      title: "The Organizer",
      id: "orgs",
    },
    {
      title: "Sponsors",
      id: "sps",
    },
    {
      title: "Register",
      id: "register",
    },
  ];
  return (
    <div>
      <nav className="py-3 lg:py-5 fixed top-0 w-full flex px-4 lg:px-32 justify-between items-center shadow-lg bg-white/90 z-10">
        <div className="hidden lg:block">
          <ul className="flex space-x-4">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className="text-green-700 font-[300] transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:font-[500] hover:scale-110"
              >
                <a href={`#${menu.id}`}>{menu.title}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile menu */}
        <div>
          {/* Mobile menu */}
          <div className="block lg:hidden py-2">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 text-green-700 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 text-green-700 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        <div>
          <a
            href="https://forms.gle/XQRJ4kCnRjAoeRkRA"
            target="_blank"
            rel="noreferrer"
            className="w-fit px-3 py-2 rounded text-[14px] md:text-[16px] hover:bg-orange-500  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
          >
            BECOME A SPONSOR
          </a>
        </div>
      </nav>
      {open && (
        <div className="top-[4rem] lg:hidden fixed z-10 uppercase w-full bg-green-600">
          <ul className="flex px-10 flex-col mt-5 w-full text-gray-200 font-[500]">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className="flex space-x-3 justify-between items-center cursor-pointer hover:border-b-2 pb-4 border-green-900/50"
              >
                <a href={`#${menu.id}`}>
                  <p>{menu.title}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Appbar;
