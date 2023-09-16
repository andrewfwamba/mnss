import React, { useEffect, useState } from "react";
import Appbar from "../components/Appbar";
import { BsCalendarEvent, BsGraphUp } from "react-icons/bs";
import { SiSololearn } from "react-icons/si";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { ImStatsDots } from "react-icons/im";
import { FcIdea } from "react-icons/fc";
import Footer from "../components/Footer";
import sylvester from "../assets/images/Dr.Sylvester.jpg";
import shisia from "../assets/images/Mrs.Shisia.jpg";
import bilha from "../assets/images/MrsBilha.jpg";
import Kentice from "../assets/images/Kentice.jpg";
import wachana from "../assets/images/Kalistus.jpg";
import wafukho from "../assets/images/ErickWafukho.jpg";
import paul from "../assets/images/Paulmakokha.jpg";
import luke from "../assets/images/Luke.jpg";

const CountdownTimer = ({ deadline }) => {
  const calculateTimeRemaining = () => {
    const currentTime = new Date();
    const timeDifference = deadline - currentTime;

    const daysRemaining = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutesRemaining = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondsRemaining = Math.floor((timeDifference % (1000 * 60)) / 1000);

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
      setTimeRemaining(calculateTimeRemaining());
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
  // Set deadline date here (year, month - 1, day, hours, minutes, seconds)
  const deadline = new Date(2023, 10, 25, 23, 59, 59);
  const speakers = [
    {
      name: "Dr. Sylvester Anami",
      title: "",
      agenda: "Mulembe Nation Socioeconomic transformation Theory of Change",
      src: sylvester,
    },
    {
      name: "Mrs Julia Shisia",
      title: "County: Busia",
      agenda: "Demystifying insurance in Risk mitigation",
      src: shisia,
    },
    {
      name: "Mrs. Bilha Joyce",
      title: "County: Vihiga",
      agenda: "Mental health and wellbeing",
      src: bilha,
    },
    {
      name: "Kentice Tikolo",
      title: "County: Kakamega",
      agenda: "Nurturing sports for business.",
      src: Kentice,
    },
    {
      name: "Mr. Calistus Wachana",
      title: "County: Bungoma",
      agenda:
        "Climate as a forgotten factor of production:  Harnessing government change initiatives to eradicate poverty",
      src: wachana,
    },
    {
      name: "Mr. Erick Wafukho.",
      title: "County: Trans-Nzoia",
      agenda: "Strategic Mulembe Community Collaborations",
      src: wafukho,
    },
    {
      name: "Mr. Paul Makokha.",
      title: "County: Kakamega",
      agenda: "Business and the Law",
      src: paul,
    },
    {
      name: "Mr. Luke Shikanga.",
      title: "County: Kakamega",
      agenda: "Culture as an economic asset",
      src: luke,
    },
  ];
  return (
    <div className="mt-[5rem] md:mt-1">
      <Appbar />
      <div className="bg-white/90 border z-10 border-amber-400 rounded p-1 md:p-5 fixed text-green-900 shadow-xl right-5 top-[5rem] ">
        <p>
          <CountdownTimer deadline={deadline} />
        </p>
      </div>
      <div className="bg-[url('https://unsplash.com/photos/OKLqGsCT8qs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk0MjAzNjIzfA&force=true&w=1920')] mt-10">
        <div className="bg-white/90 px-2 md:px-36 py-4">
          <div className="mt-10 md:mt-[15%] flex  space-x-6">
            <img
              src={require("../assets/images/mulembelogo.jpg")}
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
          <div className="mt-8 text-green-700 text-[15px] md:text-[20px]">
            <p>
              CONNECTING THE MULEMBE NATION TO BUSINESS IDEAS AND OPPORTUNITIES
            </p>
          </div>
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
              <div className="w-full h-full border border-amber-600"></div>
            </div>
            <div className="absolute border top-10 left-[30%] border-amber-600 h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-green-600"></div>
            </div>
            <div className="absolute border hidden md:block top-10 left-[55%] border-green-600 h-32 rotate-45 w-32 p-6">
              <div className="w-full h-full border border-amber-600"></div>
            </div>
            <div className="absolute border top-10 hidden md:block left-[80%] border-amber-600 h-32 rotate-45 w-32 p-6">
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
          {/* <div className="flex space-x-5 mt-6">
            <SiSololearn />
            <p className="text-[12px]">
              Venue. Masinde Muliro University of agriculture and Technology
            </p>
          </div> */}
          <div className="flex my-6 space-x-5">
            <SiSololearn />
            <p className="text-[15px]">
              Masinde Muliro University of Science and Technology Summit
              discussions, Exhibitions, and Luncheon 8am to 5 pm
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
                className="rounded-full h-[3rem] w-auto shadow-md"
              />
            </div>
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
                  Title: {speaker.agenda}
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
            An engine for the Mulembe Nation's scietal and economic development.
          </p>
          <p id="" className="text-gray-200 mt-4 mb-2 font-bold text-[20px]">
            Mission
          </p>
          <p>
            To inculcate a profund sense of communal consciousness among the
            Mulembe Nation and secure scioeconomic transformation
          </p>
          <p id="" className="text-gray-200 mt-4 mb-2 font-bold text-[20px]">
            Objectives
          </p>
          <ul className="text-left p-10 list-decimal">
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
        </div>
      </div>

      {/* Host and support */}
      <div className="py-10 px-4 md:px-[10%] bg-white">
        <div className="flex justify-between items-center">
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
            <div>
              <img
                src={require("../assets/images/mulembeagenda.png")}
                alt=""
                className="rounded-full h-[5rem] w-auto mt-5"
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
      </div>

      {/* Register */}
      <div className="flex items-center p-8 bg-amber-500 justify-center">
        <div className="md:w-8/12 w-full flex md:flex-row flex-col space-y-10 md:space-y-0 md:justify-between items-center">
          <p>
            <a
              href="https://forms.gle/mVEBnA2S6FzX8XYR6"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A PARTICIPANT
            </a>
          </p>
          <p>
            <a
              href="https://forms.gle/XQRJ4kCnRjAoeRkRA"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A SPONSOR
            </a>
          </p>
          <p>
            <a
              href="https://forms.gle/ihFciXn2sDER5pXs8"
              target="_blank"
              rel="noreferrer"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
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
    </div>
  );
}

export default Home;
