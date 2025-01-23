import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "MGC (official Page)",
      description: "The official website of MGC Karachi, showcasing services, achievements, and updates about the organization.",
      image: "/projects/mgc.jpg",
      link: "https://mgckarachi.vercel.app/",
    },
    {
      title: "ZEX Expense Tracker",
      description: "A user-friendly tool to track and manage your daily expenses efficiently.",
      image: "/projects/zexc.jpg",
      link: "https://zexpencia.vercel.app/",
    },
    {
      title: "ZEX Pressure Converter",
      description: "Quickly convert pressure units with accuracy and ease",
      image: "/projects/pc.jpg",
      link: "https://zexpc.vercel.app/",
    },
    {
      title: "ZEX Currency Converter",
      description: "Simplify global transactions by converting currencies effortlessly",
      image: "/projects/cc.jpg",
      link: "https://zexcc.vercel.app/",
    },
    {
      title: "ZEX Time Converter",
      description: "Convert time across multiple formats.",
      image: "/projects/tc.jpg",
      link: "https://zextc.vercel.app/",
    },
    {
      title: "ZEX Power Converter",
      description: "Convert power measurements with ease.",
      image: "/projects/ppc.jpg",
      link: "https://zexpower.vercel.app/",
    },
    {
      title: "ZEX Angle Converter",
      description: "Easily convert angles to different units.",
      image: "/projects/ac.jpg",
      link: "https://angleconverter.vercel.app/",
    },
    {
      title: "ZEX Document Library",
      description: "library of books various Programming languages.",
      image: "/projects/doc.jpg",
      link: "https://zex-docs.vercel.app/",
    },
    {
      title:"Gemini chatbot",
      description:"Gemini Chatbot is an advance chatbot application powered by gemii API,",
      image:"/projects/chat.png",
      link:"https://chatbot-minam.vercel.app/"
    },
    {
      title:"Number guessing game",
      description:"an interactive geme in which user has 3 attempts to guess the correct number between 1-10",
      image:"/projects/number.jpg",
      link:"https://numbergame-minam.vercel.app/"
    },
    {
      title:"antashari character generator",
      description:"a minimal interface to play game Called antshari",
      image:"/projects/ant.jpg",
      link:"https://antashari.vercel.app/"
    },
    {
      title:"Zarak landing page",
      description:"a minimal landing page for Zarak Global",
      image:"/projects/zarakha.jpg",
      link:"https://zarakha.vercel.app/"
    },
    {
      title:"World Clocks",
      description:"A simple page showing time of various zones",
      image:"/projects/wc.jpg",
      link:"https://worldcl.vercel.app/"
    },
    {
      title:"clock",
      description:"a simple page  showing current time",
      image:"/projects/clock.jpg",
      link:"#"
    },
    {
      title:"stop watch",
      description:"a simple page of stop watch",
      image:"/projects/clock.jpg",
      link:"https://stpwtch.vercel.app/"
    },
    {
      title:"Timer",
      description:"a simple page of timer",
      image:"/projects/timer.jpg",
      link:"https://timersea.vercel.app/"
    },
  ];

  return (
    <section className="bg-gradient-to-b from-neutral-900 to-neutral-700 text-white py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">My Projects</h1>
        <p className="text-gray-400 text-sm">A showcase of my work</p>
      </div>
      <div className="container mx-auto">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="bg-neutral-700  hover:bg-gradient-to-t from-neutral-700 to-neutral-400 rounded-lg overflow-hidden hover:scale-105 transition transform duration-300 shadow-lg hover:shadow-2xl">
                <Image
                  height="192"
                  width="340"
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-400 text-sm mt-2">{project.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
