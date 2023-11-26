import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import { Modal } from "antd";
import { BsCalendarEvent, BsGraphUp } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { FcIdea } from "react-icons/fc";
import Footer from "../components/Footer";
import sylvester from "../assets/images/Dr.Sylvester.jpg";
import leonara from "../assets/images/Dr.Leonora.jpg";
import Kentice from "../assets/images/Kentice.jpg";
import wachana from "../assets/images/Kalistus.jpg";
import wafukho from "../assets/images/ErickWafukho.jpg";
import paul from "../assets/images/Paulmakokha.jpg";
import luke from "../assets/images/Luke.jpg";
import Audrine from "../assets/images/Audrine.jpg";
import posta from "../assets/images/mnssposta.jpg";
import golf from "../assets/images/golfsponsored.jpg";
import theme from "../assets/images/themeposta.jpg";
import reuben from "../assets/images/ReubenKigame.jpg";
import sindani from "../assets/images/barasasindani.jpg";
import sunguti from "../assets/images/sunguti.jpg";
import pam from "../assets/images/pamingara.jpg";
import faith from "../assets/images/faithayuma.jpg";
import justus from "../assets/images/wabuyao.jpg";
import judith from "../assets/images/judithmuseve.jpg";
import manyasi from "../assets/images/manyasi.jpg";
import Partners from "../components/Partners";

const CountdownTimer = ({ deadline }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    const daysRemaining = Math.max(
      0,
      Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    );
    const hoursRemaining = Math.max(
      0,
      Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutesRemaining = Math.max(
      0,
      Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    );
    const secondsRemaining = Math.max(
      0,
      Math.floor((timeDifference % (1000 * 60)) / 1000)
    );

    return {
      daysRemaining,
      hoursRemaining,
      minutesRemaining,
      secondsRemaining,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = calculateTimeRemaining();
      setTimeRemaining(updatedTimeRemaining);

      if (
        updatedTimeRemaining.daysRemaining <= 0 &&
        updatedTimeRemaining.hoursRemaining <= 0 &&
        updatedTimeRemaining.minutesRemaining <= 0 &&
        updatedTimeRemaining.secondsRemaining <= 0
      ) {
        clearInterval(interval);
        setTimeRemaining({
          daysRemaining: 0,
          hoursRemaining: 0,
          minutesRemaining: 0,
          secondsRemaining: 0,
        });
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 className="font-[500] text-[15px] md:text-[18px]">
        Days to Registration Close
      </h1>
      <div className="text-[12px]">
        <span>{timeRemaining.daysRemaining} Days</span>
        <span>- {timeRemaining.hoursRemaining} Hours</span>
        <span>- {timeRemaining.minutesRemaining} Mins</span>
        <span>- {timeRemaining.secondsRemaining} Secs</span>
      </div>
    </div>
  );
};

function Home() {
  const [postaModal, setPostaModal] = useState(false);
  // Set deadline date here (year, month - 1, day, hours, minutes, seconds)
  const deadline = new Date(2023, 10, 25, 23, 59, 59);
  const speakers = [
    {
      name: "Hon. Caleb Sunguti,",
      title: "Chairperson Mulembe Nation Agenda",
      agenda: "",
      src: sunguti,
    },
    {
      name: "Mr Francis Barasa Sindani",
      title:
        "Title: Mulembe Nation Agenda digital director - Professional in Communication, design and publishing",
      agenda: "",
      src: sindani,
    },
    {
      name: "Mrs. Pam Ingara",
      title: "Mulembe Nation Agenda strategist",
      agenda: "",
      src: pam,
    },
    {
      name: "Dr. Sylvester Anami",
      title: "",
      agenda:
        "Title: Mulembe Nation Socioeconomic transformation Theory of Change",
      src: sylvester,
    },
    {
      name: "Dr Leonorah Ceceliah Mugala ",
      title: " PhD Lecturer Catholic University",
      agenda:
        "Title: Luhya language as an enabler of socioeconomic transformation",
      src: leonara,
    },
    {
      name: "Mrs Faith Ayuma",
      title: "",
      agenda:
        "Title: The battle in Redeeming sports arts and culture in the mulembe Nation",
      src: faith,
    },
    {
      name: "Dr. Judith Museve",
      title: "",
      agenda: "Title: Mental health and wellbeing",
      src: judith,
    },
    {
      name: "H.E. Reuben Kigame",
      title: "Presidential Candidate 2027",
      agenda:
        "Title: Honest and trustworthy leadership in the context of socioeconomic transformation",
      src: reuben,
    },
    {
      name: "Kentice Tikolo",
      title: "County: Kakamega",
      agenda: "Title: Nurturing sports for business.",
      src: Kentice,
    },
    {
      name: "Mr. Justus Wabuyao",
      title: "",
      agenda: "Title: Key note Speaker, CEO, NuPEA",
      src: justus,
    },
    {
      name: "Mr. Baridi Manyasi",
      title: "",
      agenda:
        "Title: Mulembe Nation Counties involvement in Developing seed money for Community Growth.",
      src: manyasi,
    },
    {
      name: "Audrine Mikhala",
      title: "",
      agenda:
        "Title: Opportunities in agriculture for socioeconomic transformation",
      src: Audrine,
    },
    {
      name: "Mr. Calistus Wachana",
      title: "County: Bungoma",
      agenda:
        "Title: Climate as a forgotten factor of production:  Harnessing government climate change initiatives to eradicate poverty",
      src: wachana,
    },
    {
      name: "Mr. Erick Wafukho.",
      title: "County: Trans-Nzoia",
      agenda: "Title: Strategic Mulembe Community Collaborations",
      src: wafukho,
    },
    {
      name: "Mr. Paul Makokha.",
      title: "County: Kakamega",
      agenda: "Title: Business and the Law",
      src: paul,
    },
    {
      name: "Mr. Luke Shikanga.",
      title: "County: Kakamega",
      agenda: "Title: Culture as an economic asset",
      src: luke,
    },
  ];
  return (
    <div className="mt-[7rem] md:mt-1">
      <Appbar />
      <div className="bg-white/90 border z-10 border-amber-400 rounded p-1 md:p-5 fixed text-green-900 shadow-xl right-5 top-[5rem] ">
        <div>
          <CountdownTimer deadline={deadline} />
        </div>
      </div>
      <div className="bg-[url('https://unsplash.com/photos/OKLqGsCT8qs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk0MjAzNjIzfA&force=true&w=1920')] bg-cover bg-no-repeat mt-10">
        <div className="bg-white/90 px-2 md:px-36 py-4">
          <div className="mt-10 md:mt-[15%] flex  space-x-6">
            <img
              src={require("../assets/images/mnsslogo.jpg")}
              alt=""
              className="rounded-lg h-[10rem]  md:h-[13rem] md:w-auto shadow-md"
            />
            {/* <div className="text-base md:text-[30px] font-[500] flex flex-col justify-center items-start text-green-900">
              <p>
                <span className="font-bold text-35 text-orange-500">M</span>
                ulembe
              </p>
              <p>
                <span className="font-bold text-35 text-green-400">N</span>ation
              </p>
              <p>
                <span className="font-bold text-35 text-amber-500">S</span>
                ocioEconomic
              </p>
              <p>
                <span className="font-bold text-35 text-green-500">S</span>ummit
              </p>
            </div> */}
          </div>
          <div className="mt-6 mb-3 text-green-700 text-[15px] md:text-[20px]">
            <p>
              CONNECTING THE MULEMBE NATION TO BUSINESS IDEAS AND OPPORTUNITIES
            </p>
          </div>
          <p
            onClick={() => setPostaModal(!postaModal)}
            className="w-fit px-3 py-2 bg-green-500 cursor-pointer hover:bg-green-600 border border-amber-400 rounded shadow-lg mt-5 text-[13px] text-white"
            href={posta}
            target="_blank"
            rel="noreferrer"
          >
            View Banners
          </p>
          <div className="mt-5 flex flex-col md:flex-row">
            <p className="pr-8 pl-8 md:pl-0 text-[30px] font-bold text-amber-500 border-r border-amber-700">
              Learn
            </p>
            <p className="px-8 text-[30px] font-bold text-amber-500 border-r border-amber-700">
              Network
            </p>
            <p className="px-8 text-[30px] font-bold text-amber-500 border-r border-amber-700">
              Attract
            </p>
            <p className="px-8 text-[30px] font-bold text-amber-500 border-r border-amber-700">
              Explore
            </p>
          </div>
          <div className="relative h-[15rem] mt-5 ">
            <div className="absolute hidden md:block border top-10 border-green-600 h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-black"></div>
            </div>
            <div className="absolute border top-10 left-[30%] border-black h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-green-600"></div>
            </div>
            <div className="absolute border hidden md:block top-10 left-[55%] border-green-600 h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-black"></div>
            </div>
            <div className="absolute border top-10 hidden md:block left-[80%] border-black h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-green-600"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4 px-2 py-2 md:py-8 md:px-16">
        <div className="bg-orange-500 rounded shadow-xl shadow-red-500/40 p-8 text-gray-100">
          <div className="flex space-x-5">
            <BsCalendarEvent className="text-white text-xl" />
            <div>
              <p className="text-gray-200 text-[20px]">Saturday 25th</p>
              <p>November, 2023</p>
            </div>
          </div>
          <div className="flex space-x-5 mt-6">
            <SiSololearn className="w-10 text-[11px]" />
            <p className="text-[12px]">
              Join us at GOLF Hotel Kakamega on Saturday 25th November 2023 from
              8:00am to 5:00pm for the Mulembe Nation Socio-Economic Summit for
              a host of discussions, exhibitions and a luncheon to unveil the
              Mulembe Nation Agenda.
            </p>
          </div>
          <div className="flex my-2 space-x-5">
            <p className="mt-1">
              <SiSololearn className=" text-[10px]" />
            </p>
            <p className="text-[12px]">
              On 24th we shall have a Golf tournament at Kakamega Sports Club.
            </p>
          </div>
          <div className="flex my-2 space-x-5">
            <p className="mt-1">
              <SiSololearn className=" text-[10px]" />
            </p>
            <p className="text-[12px]">
              Bull fighting on the 25th early morning 5-6AM at Malinya stadium
            </p>
          </div>
          <div className="flex my-2 space-x-5">
            <p className="mt-1">
              <SiSololearn className=" text-[10px]" />
            </p>
            <p className="text-[12px]">
              Rugby tournament at Kakamega Show ground on the 25th from 3PM
            </p>
          </div>
        </div>
        {/* Grid section 2 */}
        <div className="bg-green-500 rounded shadow-xl shadow-green-500/40 p-8 text-gray-100">
          <div className="flex space-x-5">
            {/* <BsCalendarEvent className="text-white text-xl" /> */}
            <div>
              <p className="text-gray-100 text-[30px] border-b border-l rounded shadow-2xl border-amber-300 px-2">
                The Organizer
              </p>
            </div>
          </div>
          <div className="flex space-x-5">
            <img
              src={require("../assets/images/mulembeagenda.png")}
              alt=""
              className="rounded-full h-[6rem] w-auto mt-10 shadow-md"
            />
          </div>
          <p className="text-[20px] font-[500]">
            <span className="text-orange-900">Mulembe</span> Nation Agenda
          </p>
        </div>

        {/* Grid section 3 */}

        <div className="bg-teal-500 rounded shadow-xl shadow-teal-500/40 p-8 text-gray-100">
          <div className="flex space-x-5">
            <div>
              <p className="text-gray-100 text-[30px] border-b border-l rounded shadow-2xl border-green-300 px-2">
                Official Partner
              </p>
            </div>
          </div>
          <div className="flex mt-5 justify-between py-5 items-center space-x-5">
            <div>
              <p className="text-white text-[12px] mb-4">LUBAO FM</p>
              <img
                src={require("../assets/images/lubaologo.jpeg")}
                alt=""
                className="rounded-full h-[3.5rem] w-auto shadow-md"
              />
            </div>
            <div>
              <p className="text-white text-[12px] mb-4">County</p>
              <img
                src={require("../assets/images/partners/partner1.png")}
                alt=""
                className="rounded-sm h-[3.5rem] w-auto shadow-md"
              />
            </div>
            <div>
              <p className="text-white text-[12px] mb-4">I</p>
              <img
                src={require("../assets/images/partners/partner2.png")}
                alt=""
                className="rounded-sm h-[3.5rem] w-auto shadow-md"
              />
            </div>
            <div>
              <p className="text-white text-[12px] mb-4">I</p>
              <img
                src={require("../assets/images/partners/partner3.png")}
                alt=""
                className="rounded-sm h-[3.5rem] w-auto shadow-md"
              />
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="bg-blue-700 px-5 mt-5 py-10 md:px-16 md:py-20 flex justify-center items-center">
        <p className="text-center text-[13px] md:text-[15px] text-gray-200">
          The first-ever Mulembe Nation Socioeconomic Summit unites the Mulembe
          populace from the 5 Counties, encompassing both urban and rural
          dwellers as well as those residing abroad, in order to attain a shared
          socioeconomic transformation of the community. The primary objective
          of the Summit is to foster mutual learning on investments and business
          prospects among the participants, all while engaging in a constructive
          dialogue pertaining to economic expansion and prosperity.
        </p>
      </div>
      {/* Speakers section */}
      <div className="my-6">
        <p className="text-center text-[20px] font-bold text-green-700">
          Speakers
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="border-green-300 border rounded shadow-xl shadow-green-200 p-2"
            >
              <div className="p-2 flex rounded-lg bg-green-400 shadow-xl">
                <img src={speaker.src} alt="" className="w-[100%] rounded" />
              </div>
              <div>
                <p className="text-green-700 text-[15px] font-[500]">
                  {speaker.name}
                </p>
                <p className="text-green-400 text-[12px]">{speaker.title}</p>
                <p className="text-gray-500 text-[12px] font-medium">
                  {speaker.agenda}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Opportunities */}
      <div id="opps" className="py-10 bg-green-500/30">
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/images/mulembeagenda.png")}
            alt=""
            className="rounded-full h-[5rem] w-auto mt-10"
          />
          <p className="text-green-800 font-bold text-[30px]">
            The Opportunities
          </p>
          <div className="grid md:grid-cols-4 p-10 gap-10 text-green-900">
            <div className="flex flex-col justify-center items-center">
              <BsGraphUp className="text-[3rem] text-green-700 my-5 font-bold" />
              <p className="text-center">
                Learn about building successful businesses from each other
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FaArrowsDownToPeople className="text-[3rem] text-green-700 my-5 font-bold" />
              <p className="text-center">Network and build relationships</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <ImStatsDots className="text-[3rem] text-green-700 my-5 font-bold" />
              <p className="text-center">Attract investment</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <FcIdea className="text-[3rem] text-green-700 my-5 font-bold" />
              <p className="text-center">
                Explore innovation that will disrupt the future of business and
                work
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The organizer */}
      <div id="orgs" className="bg-amber-700 p-2 md:py-10 md:px-[8rem]">
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/images/mulembeagenda.png")}
            alt=""
            className="rounded-full h-[5rem] w-auto mt-5"
          />
          <p id="" className="text-gray-200 my-4 font-bold text-[30px]">
            The Organizer
          </p>
          <p className="text-gray-200 text-[15px] text-center">
            Mulembe Nation Agenda LTD is a fully registered socioeconomic
            transformation public entity committed to developing a strong
            feeling of community and achieving socioeconomic transformation. It
            promotes activities that are aligned with empowering people to move
            out of significant poverty through entrepreneurship training,
            cultural spectaculars, enhancing sustainable agricultural efficiency
            through the incorporation of modern technologies, digital extension
            services, and value addition to native commodities, promoting
            tourism in the region, and transforming health outcomes by
            facilitating the coordination and harmonization of traditional
            practices. It engages in vigorous efforts to address the challenges
            of climate change and implement strategies to adapt and mitigate its
            impact. Moreover, it facilitates the connection between businesses
            in the Mulembe Nation and potential investors, offering them the
            chance to network and establish benchmarks for success.
          </p>
        </div>
        <div className="text-gray-100 text-center">
          <p id="" className="text-gray-200 mt-4 mb-2 font-bold text-[20px]">
            Vision
          </p>
          <p>
            An engine for the Mulembe Nation's societal and economic
            development.
          </p>
          <p id="" className="text-gray-200 mt-4 mb-2 font-bold text-[20px]">
            Mission
          </p>
          <p>
            To inculcate a profound sense of communal consciousness among the
            Mulembe Nation and secure scioeconomic transformation
          </p>
          <p id="" className="text-gray-200 mt-4 font-bold text-[20px]">
            Objectives
          </p>
          <ul className="text-left p-4 list-decimal">
            <li>
              Enhance the Mulembe Nation Unity and identity by acknowledging and
              leveraging their diversity as a means of promoting prosperity.
            </li>
            <li>
              Consolidate and employ our numerical strength to deliver
              socioeconomic metamorphosis
            </li>
            <li>
              Facilitate scioeconomic empowerment so as to build economic
              resilience of the Mulembe Community
            </li>
            <li>
              Transforming health outcomes for individuals by facilitating the
              coordination and harmonization of traditional medicine via the
              standardization and institutionalization of traditional medicine
              within the Mulembe Nation.
            </li>
            <li>
              Strengthen Strategic partnerships to promote opportunities from
              within, county governments from westerns, professional
              associations, civil society and diaspora
            </li>
          </ul>
          <p id="" className="text-gray-200 mt-2 font-bold text-[20px]">
            Values
          </p>
          <ul className="text-left p-4 list-decimal">
            <li>
              <span className="text-[18px] text-green-300 font-[500]">
                Service -
              </span>
              Dedication to completing tasks on time and a commitment to
              carrying out socioeconomic transformation duties.
            </li>
            <li>
              <span className="text-[18px] text-green-300 font-[500]">
                Integrity -
              </span>
              We commit to follow a solid ethical code of conduct in all acts,
              to be fair, honest, and trustworthy.
            </li>
            <li>
              <span className="text-[18px] text-green-300 font-[500]">
                Leadership -
              </span>
              To set an example for others to follow in our free democratic
              governance, and have the quality of being inspired and self
              motivated.
            </li>
            <li>
              <span className="text-[18px] text-green-300 font-[500]">
                Innovation -
              </span>
              Embrace acquiring the knowledge and abilities required to develop
              innovative goods and processes and provide first rate service to
              the community.
            </li>
            <li>
              <span className="text-[18px] text-green-300 font-[500]">
                Teamwork -
              </span>
              Cooperation and the exchange of information with all stakeholders
              in supporting one another to accomplish the mission and vision.
            </li>
          </ul>
        </div>
      </div>

      {/* Host and support */}
      <div className="py-5 px-4 md:px-[5%] bg-white">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="p-6">
            <div className="flex my-6 space-x-2">
              <p className="bg-amber-400 h-5 w-5 rounded-full"></p>
              <p className="bg-green-600 h-5 w-5 rounded-full"></p>
              <p className="bg-red-700 h-5 w-5 rounded-full"></p>
            </div>
            <p className="text-green-700 text-[20px] font-[500]">
              Official Host
            </p>
            <div>
              <img
                src={require("../assets/images/mulembeagenda.png")}
                alt=""
                className="rounded-full h-[5rem] w-auto mt-5"
              />
            </div>
          </div>
          {/* Supporting */}
          <div className="p-6 md:mr-20">
            <div className="flex my-6 space-x-2">
              <p className="bg-amber-400 h-5 w-5 rounded-full"></p>
              <p className="bg-green-600 h-5 w-5 rounded-full"></p>
              <p className="bg-red-700 h-5 w-5 rounded-full"></p>
            </div>
            <p className="text-green-700 text-[20px] font-[500]">
              Supporting Partners
            </p>
            <div className="grid w-full px-2 gap-4 grid-cols-3 sm:grid-cols-4">
              <img
                src={require("../assets/images/mulembeagenda.png")}
                alt=""
                className="rounded-full h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner1.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner2.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner3.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner4.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner5.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner6.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner7.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner8.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner9.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner10.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner11.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
              <img
                src={require("../assets/images/partners/partner12.png")}
                alt=""
                className="rounded-md h-[5rem] w-auto mt-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sponsors section */}
      <div id="sps" className="py-10 px-4 md:px-[10%] bg-blue-700/30">
        <div className="flex my-6 space-x-2">
          <p className="bg-amber-400 h-5 w-5 rounded-full"></p>
          <p className="bg-green-600 h-5 w-5 rounded-full"></p>
          <p className="bg-red-700 h-5 w-5 rounded-full"></p>
        </div>
        <p className="text-[30px] font-[500] text-green-900">Sponsors</p>
        {/* List of sponsors */}
        <div>
          <Partners />
        </div>
      </div>

      {/* Register */}
      <div
        id="register"
        className="flex items-center p-8 bg-amber-500 justify-center"
      >
        <div className="md:w-8/12 w-full flex md:flex-row flex-col space-y-10 md:space-y-0 md:justify-between items-center">
          <p>
            <a
              href="https://forms.gle/mVEBnA2S6FzX8XYR6"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 text-[12px] rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A PARTICIPANT
            </a>
          </p>
          <p>
            <a
              href="https://forms.gle/XQRJ4kCnRjAoeRkRA"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 text-[12px] rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A SPONSOR
            </a>
          </p>
          <p>
            <a
              href="https://forms.gle/ihFciXn2sDER5pXs8"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 text-[12px] rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS AN EXHIBITOR
            </a>
          </p>
        </div>
      </div>

      {/* Why register for the summit */}
      <div className="py-10 px-5 md:px-24 bg-blue-700/30">
        <div className="flex my-6 space-x-2">
          <p className="bg-amber-400 h-5 w-5 rounded-full"></p>
          <p className="bg-green-600 h-5 w-5 rounded-full"></p>
          <p className="bg-red-700 h-5 w-5 rounded-full"></p>
        </div>
        <p className="text-green-800 text-center text-[18px] font-medium md:font-light md:text-[25px] my-2">
          Why should you register for the Inaugural Mulembe Nation SocioEconomic
          Summit?
        </p>
        <p className="text-center text-[13px] md:text-[15px]">
          In order to achieve socioeconomic transformation, it is imperative for
          individuals to engage in collaborative endeavors within the realm of
          business, thereby facilitating the sharing of resources, knowledge,
          and skills.
        </p>
        <p className="text-center text-[13px] md:text-[15px] my-4">
          Moreover, harnessing the potential of various technologies is crucial
          to generate novel avenues for investment and expansion. Consequently,
          it becomes vital for individuals to unite and actively participate in
          endeavors that cultivate awareness regarding investments, as well as
          establish robust networks that propel progress, engender value, and
          foster regional prosperity.
        </p>
        <p className="text-center text-[13px] md:text-[15px]">
          Join us to participate and learn about socioeconomic transformation on
          the 25th, November 2023
        </p>
      </div>
      <Footer />
      <Modal
        open={postaModal}
        onCancel={() => setPostaModal(false)}
        width={"95%"}
        footer={null}
      >
        <div className="">
          <p className="text-green-700 w-fit px-3 py-1 rounded-l border-b border-l border-green-600 shadow-lg shadow-b shadow-l shadow-green-400/20">
            View Banners
          </p>
          <div className="mt-8 grid md:grid-cols-2 gap-2">
            <div className="mx-auto w-[98%] md:w-[95%] h-auto border border-green-500 rounded overflow-hidden p-4">
              <p className="border-b border-green-300 py-1 mb-2">
                The 1st Mulembe Nation SocioEconomic Summit
              </p>
              <img src={posta} alt="" />
            </div>
            <div className="mx-auto w-[98%] md:w-[95%] h-auto border border-green-500 rounded overflow-hidden p-4">
              <p className="border-b border-green-300 py-1 mb-2">
                Golf Tournament on 24th at Kakamega Golf Club
              </p>
              <img src={golf} alt="" />
            </div>
            <div className="mx-auto w-[98%] h-auto md:col-span-2 border border-green-500 rounded overflow-hidden p-4">
              <p className="border-b border-green-300 py-1 mb-2">
                Inaugural Mulembe Nation SocioEconomic Summit{" "}
                <span className="text-[12px] italic">- Learn and have fun</span>
              </p>
              <img src={theme} alt="" />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
