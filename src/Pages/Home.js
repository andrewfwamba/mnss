import React from "react";
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

function Home() {
  const speakers = [
    {
      name: "Dr. Sylvester Anami",
      title: "Lead Coordinator,",
      agenda: "Mulembe Nation Socioeconomic theory of Change",
      src: sylvester,
    },
    {
      name: "Mrs Julia Shisia",
      title: "Busia,",
      agenda: "Demystifying insurance in Risk mitigation",
      src: shisia,
    },
    {
      name: "Mrs. Bilha Joyce",
      title: "Vihiga,",
      agenda: "Mental health and wellness for socioeconomic transformation",
      src: bilha,
    },
    {
      name: "Kentice Tikolo",
      title: "Kakamega,",
      agenda: "Nurturing sports for business.",
      src: Kentice,
    },
    {
      name: "Mr. Calistus Wachana",
      title: "Bungoma,",
      agenda:
        "Climate as a forgotten factor of production: How can we harness government climate change initiatives to eradicate poverty",
      src: wachana,
    },
    {
      name: "Mr. Erick Wafukho.",
      title: "Trans-Nzioa,",
      agenda: "Strategic Mulembe Community Collaborations",
      src: wafukho,
    },
  ];
  return (
    <div className="mt-[5rem] md:mt-1">
      <Appbar />
      <div className="bg-[url('https://unsplash.com/photos/OKLqGsCT8qs/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk0MjAzNjIzfA&force=true&w=1920')] mt-10">
        <div className="bg-white/90 px-2 md:px-36 py-4">
          <div className="mt-10 md:mt-[15%] flex  space-x-6">
            <img
              src={require("../assets/images/mulembelogo.jpg")}
              alt=""
              className="rounded-lg h-[5rem]  md:h-auto md:w-auto shadow-md"
            />
            <div className="text-base md:text-[30px] font-[500] flex flex-col justify-center items-start text-green-900">
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
            </div>
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
        <div className="bg-red-500 rounded shadow-xl shadow-red-500/40 p-8 text-gray-100">
          <div className="flex space-x-5">
            <BsCalendarEvent className="text-white text-xl" />
            <div>
              <p className="text-gray-200 text-[20px]">Saturday 25th</p>
              <p>November, 2023</p>
            </div>
          </div>
          <div className="flex space-x-5 mt-6">
            <SiSololearn />
            <p className="text-[12px]">
              Venue. Masinde Muliru University of agriculture and Technology
            </p>
          </div>
          {/* <div className="flex my-6 space-x-5">
            <SiSololearn />
            <p className="text-[12px]">
              Sarova Imperial , Kisumu Award, Black Tie, Red Carpet Dinner //
              7pm till late
            </p>
          </div> */}
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

        <div className="bg-amber-500 rounded shadow-xl shadow-amber-500/40 p-8 text-gray-100">
          <div className="flex space-x-5">
            <div>
              <p className="text-gray-100 text-[30px] border-b border-l rounded shadow-2xl border-green-300 px-2">
                Official Partner
              </p>
            </div>
          </div>
          <div className="flex mt-5 space-x-5">
            <SiSololearn />
            <p className="text-[12px]">
              Ciala Resort, Kisumu Summit discussions and Exhibitions // 9am –
              5pm
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-700 px-5 mt-5 py-10 md:px-16 md:py-20 flex justify-center items-center">
        <p className="text-center text-gray-200">
          The first Mulembe Nation SocioEconomic Summit brings together multiple
          players within the business environment to achieve collective growth
          and advancement of the community. The summit aims to help Kenyan
          businesses accelerate and learn from each other, while charting a
          collaborative course towards growth.
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
      <div id="opps" className="py-10 bg-blue-700/30">
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
      <div id="orgs" className="bg-blue-700 p-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={require("../assets/images/mulembeagenda.png")}
            alt=""
            className="rounded-full h-[5rem] w-auto mt-5"
          />
          <p id="opps" className="text-gray-200 my-4 font-bold text-[30px]">
            The Organizer
          </p>
          <p className="text-gray-200 text-[16px] text-center">
            The IMC People Ltd is an award-winning Kenyan PR agency with the aim
            of redefining Public Relations in Africa through the lenses of
            incorporative PR and Marketing elements into one philosophy referred
            to as Integrated Marketing and Communications. This dream has
            remained a driving force in the growth of the company and has seen
            it develop a global footprint. The IMC People Ltd are ready and
            already championing activities that align with the current
            disruptions in the world like offering trainings and drafting
            strategies on sustainable investing; casing points Environmental
            Social Governance and Socially Responsible Investing which ensure
            your company is noticed by investors.
          </p>
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
              href="/"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A DELEGATE
            </a>
          </p>
          <p>
            <a
              href="/"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS A SPONSOR
            </a>
          </p>
          <p>
            <a
              href="/"
              className="w-fit px-3 py-2 rounded hover:bg-red-700  shadow-lg bg-green-600 transition transform motion-reduce:transition-none motion-reduce:hover:transform-none hover:scale-105 text-gray-100"
            >
              REGISTER AS AN EXHIBITOR
            </a>
          </p>
        </div>
      </div>

      {/* Why register for the summit */}
      <div className="py-10 px-5 md:px-24 bg-blue-700/30">
        <p className="text-green-800 text-center text-[25px]">
          Why should you register for the Inaugural Mulembe Nation SocioEconomic
          Summit?
        </p>
        <p className="text-center">
          COVID-19 has shaken up the business world, and Kenya is no exception.
          But amidst the chaos, there's a silver lining: the rise of business
          ecosystems. In the wake of the COVID-19 pandemic, it has become
          increasingly evident that businesses must embrace the concept of
          business ecosystems to thrive in the new normal: The pandemic
          disrupted traditional business models, and companies that were not
          part of a robust ecosystem have struggled to survive. However,
          companies that were part of a strong ecosystem have been able to adapt
          quickly and continue to serve their customers.
        </p>
        <p className="text-center my-4">
          Therefore, it is crucial for businesses in Kenya to recognize the
          importance of building and maintaining strong ecosystems. This
          involves collaborating with other businesses, sharing resources, and
          leveraging technology to create new opportunities for growth. It is
          time for businesses in Kenya to take action and invest in building
          strong ecosystems that will drive growth and create value for all
          stakeholders.
        </p>
        <p className="text-center">
          Join us to be part of the pioneers in creating of Government
          Recognized Business Ecosystems on 25th November 2023 in Masinde
          Muliro.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
