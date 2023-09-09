import React from "react";

function Footer() {
  return (
    <div>
      <div className="py-5 px-4 md:px-20 flex flex-col md:flex-row justify-between space-y-4 md:items-center text-gray-200 text-[14px] bg-blue-700">
        <p>
          &copy; {new Date().getFullYear()} Mulembe Nation SocioEconomic Summit
        </p>
        <p className="text-[11px]">
          <a href="tel:+254743047823"> Powered by Fwamba&trade;</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
