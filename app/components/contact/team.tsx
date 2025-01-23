import Link from "next/link";
import MapEmbed from "../map";
import { FaInstagram, FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import {  FaMobileRetro, FaRegEnvelopeOpen} from "react-icons/fa6";

const TeamSection = () => {
  return (
    <main className="bg-gradient-to-b from-neutral-900 to-neutral-700 py-4">
      <div className="flex justify-between items-center bg-gradient-to-t from-neutral-900 to-neutral-700 max-w-7xl h-screen mx-auto rounded-3xl text-white">
        <div className="text-center px-20 flex-1">
          <MapEmbed />
        </div>
        <div className="text-justify px-20 flex-1">
          <h3 className="text-3xl font-mono font-bold py-5">Contact Me</h3>
          <p className="text-xl flex items-center">
            <FaMobileRetro className="mr-2" /> Phone No
          </p>
          <p className="text-base py-2">
            <Link href="tel:+923369289269">+92-336-9289269</Link>
          </p>
          <p className="text-xl flex items-center">
            <FaRegEnvelopeOpen className="mr-2" /> Email Me
          </p>
          <p className="text-base py-2">
            <Link
              href="mailto:minamrahman727@gmail.com?subject=Inquiry&body=Hello, I want to contact you for hiring you"
            >
              minamrahman727@gmail.com
            </Link>
          </p>
          <div className="flex justify-start gap-2 mt-4">
            <Link
              href="https://instagram.com/syedminam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={35} className="text-white" />
            </Link>
            <Link
              href="https://linkedin.com/syedminamurrehman"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={35} className="text-white" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={35} className="text-white" />
            </Link>
            <Link
              href="https://github.com/minamrahman727"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={35} className="text-white" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TeamSection;
