import Image from 'next/image';
import Link from 'next/link';
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6';
import { SiTypescript, SiTailwindcss, SiCplusplus, SiNextdotjs } from 'react-icons/si';

const ProfileCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-700 p-10">
      <div className="w-full max-w-5xl bg-gradient-to-b from-neutral-800 to-neutral-600 shadow-2xl rounded-2xl overflow-hidden transform transition hover:scale-105 p-6">
        {/* Top Section: Profile Picture and Details */}
        <div className="flex flex-col items-center text-center border-b-2 border-neutral-400 pb-6">
          <Image
            src="/minam.png"
            width={128}
            height={128}
            className=" mb-4  hover:animate-pulse"
            alt="Profile picture of Syed Minam Ur Rehman"
          />
          <h1 className="text-3xl font-extrabold font-mono text-blue-200">سید منعام الرحمٰن</h1>
          <h2 className="text-base font-medium font-mono text-blue-300">Front-End Developer</h2>
          <p className="text-sm font-light text-blue-400">(Next.js Enthusiast)</p>
        </div>

        {/* Bottom Section: About and Additional Info */}
        <div className="mt-6">
          {/* About Me Section */}
          <h2 className="text-base font-extrabold font-serif text-white text-center mb-4">About Me</h2>
          <p className="text-neutral-100 leading-relaxed text-center text-base">
            I am Syed Minam, a passionate front-end developer from Karachi, Pakistan. I specialize in crafting engaging user interfaces and developing seamless web experiences using modern tools like TypeScript, Tailwind CSS, and Next.js.
          </p>
          <p className="mt-4 text-neutral-100 leading-relaxed text-center text-base">
            Beyond development, I am the founder of <span className="font-semibold text-white">Zarak</span>, a fashion brand that merges creativity and technology to cater to Pakistan and the Middle East. I also explore innovative tech projects like CLI-based systems using Node.js.
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h3 className="text-base font-bold text-white mb-2 text-center">Skills</h3>
            <ul className="flex flex-wrap justify-center gap-2 text-sm text-white">
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaHtml5 size={30} className="mr-2 text-red-600 hover:text-neutral-400" />
                HTML
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <SiTypescript size={30} className="mr-2 text-blue-400 hover:text-neutral-400" />
                TypeScript
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaCss3Alt size={30} className="mr-2 text-blue-600 hover:text-neutral-400" />
                CSS
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaJs size={30} className="mr-2 text-amber-400 hover:text-neutral-400" />
                JavaScript
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaPython size={30} className="mr-2 text-blue-300 hover:text-neutral-400" />
                Python
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <SiNextdotjs size={30} className="mr-2 hover:text-neutral-400" />
                Next.js
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <SiTailwindcss size={30} className="mr-2 text-blue-300 hover:text-neutral-400" />
                Tailwind CSS
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <SiCplusplus size={30} className="mr-2 text-blue-500 hover:text-neutral-400" />
                C++
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaGithub size={30} className="mr-2 hover:text-neutral-400" />
                GitHub
              </li>
              <li className="flex items-center  px-3 py-1 rounded-full hover:scale-105 transform transition hover:blur-sm">
                <FaNodeJs size={30} className="mr-2 text-green-400 hover:text-neutral-400" />
                Node.js
              </li>
              
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h3 className="text-base font-bold text-green-400 mb-4 text-center">Connect With Me</h3>
            <ul className="flex justify-center gap-6">
              {[
              { name: 'LinkedIn', link: 'https://www.linkedin.com/in/syed-minam-ur-rehman/', icon: <FaLinkedinIn size={40} className="text-white hover:text-neutral-400" /> },
              { name: 'GitHub', link: 'https://github.com/minamrahman727', icon: <FaGithub size={40} className="text-white hover:text-neutral-400" /> },
              { name: 'Instagram', link: 'https://instagram.com/syedminamurrehman', icon: <FaInstagram size={40} className="text-white hover:text-neutral-400" /> },
              { name: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100078720140776', icon: <FaFacebookF size={40} className="text-white hover:text-neutral-400 " /> }
              ].map(({ name, link, icon }) => (
              <li key={name}>
                <Link href={link} target="_blank" rel="noopener noreferrer">
                <div className="  transition flex items-center justify-center">
                  {icon}
                </div>
                </Link>
              </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
