import React from "react";
import Marquee from "react-fast-marquee";
import partner1 from "../assets/images/partners/partner1.png";
import partner2 from "../assets/images/partners/partner2.png";
import partner3 from "../assets/images/partners/partner3.png";
import partner4 from "../assets/images/partners/partner4.png";
import partner5 from "../assets/images/partners/partner5.png";
import partner6 from "../assets/images/partners/partner6.png";
import partner7 from "../assets/images/partners/partner7.png";
import partner8 from "../assets/images/partners/partner8.png";
import partner9 from "../assets/images/partners/partner9.png";
import partner10 from "../assets/images/partners/partner10.png";
import partner11 from "../assets/images/partners/partner11.png";
import partner12 from "../assets/images/partners/partner12.png";

function Partners() {
  const partners = [
    { imageUrl: partner1 },
    { imageUrl: partner2 },
    { imageUrl: partner3 },
    { imageUrl: partner4 },
    { imageUrl: partner5 },
    { imageUrl: partner6 },
    { imageUrl: partner7 },
    { imageUrl: partner8 },
    { imageUrl: partner9 },
    { imageUrl: partner10 },
    { imageUrl: partner11 },
    { imageUrl: partner12 },
  ];
  return (
    <div className="">
      <Marquee
        delay={5}
        pauseOnHover={true}
        gradient={true}
        gradientWidth={50}
        gradientColor={[163, 239, 190, 0]}
        className="py-5 flex items-center"
      >
        {partners.map((partner, index) => (
          <div key={index} className=" mx-2">
            <img
              src={partner.imageUrl}
              alt=""
              className="h-[3rem] md:h-[5rem] rounded-lg shadow-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Partners;
