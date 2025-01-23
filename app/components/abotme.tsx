import Image from "next/image";
import Link from "next/link";
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaNodeJs, FaGithub, FaLaptopCode, FaTshirt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiCplusplus, SiNextdotjs } from "react-icons/si";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaBook } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <section className="text-center px-10 py-5 bg-gradient-to-b from-neutral-900 to-neutral-700 min-h-screen">
      <article className="max-w-6xl mx-auto border border-neutral-300 border-opacity-50 rounded-2xl px-10 text-left shadow-md bg-gradient-to-t from-neutral-900 to-neutral-700 hover:shadow-lg shadow-zinc-700 hover:shadow-amber-100 transition-shadow duration-300"> 
        
        <figure className="text-center py-4">
          <Image
            src="/team/minam2.jpg"
            alt="Syed Minam Ur Rehman smiling and professional."
            width={150}
            height={150}
            className="w-36 h-36 rounded-full object-cover border-2 hover:animate-pulse border-stone-500"
          />
        </figure>
        <h2 className="lg:text-3xl md:text-xl sm:text-4xl font-semibold py-2 font-serif text-neutral-100">Syed Minam Ur Rehman</h2>
        <p className="text-base font-mono opacity-75 py-1 text-neutral-200">
          Founder & CEO of MGC & Rahman Group, COO of Zarak
        </p>

        <section className="text-justify py-5">
          <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8">About Me</h2>
          <p className="text-base text-neutral-200">
            I am Syed Minam Ur Rehman, a passionate and skilled web developer with a deep interest in creating innovative digital experiences.
            My expertise spans a variety of programming languages and frameworks.
          </p>
          <p className="text-base py-5 text-neutral-200">
            I’m also an entrepreneur, leading Zarak, a fashion startup blending modern design with timeless elegance.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8">My Skills</h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-2 justify-center py-5">
            {[
              { Icon: FaHtml5, label: "HTML", color: "text-orange-500" },
              { Icon: SiTypescript, label: "TypeScript", color: "text-blue-500" },
              { Icon: FaCss3Alt, label: "CSS", color: "text-blue-600" },
              { Icon: FaJs, label: "JavaScript", color: "text-yellow-500" },
              { Icon: FaPython, label: "Python", color: "text-blue-400" },
              { Icon: SiNextdotjs, label: "Next.js", color: "text-neutral-100" },
              { Icon: SiTailwindcss, label: "Tailwind CSS", color: "text-teal-400" },
              { Icon: SiCplusplus, label: "C++", color: "text-blue-700" },
              { Icon: FaGithub, label: "GitHub", color: "text-white" },
              { Icon: FaNodeJs, label: "Node.js", color: "text-green-500" },
            ].map(({ Icon, label, color }) => (
              <li key={label} className="flex flex-col items-center text-neutral-200">
                <Icon size={35} className={color} />
                <span className="text-sm font-bold">{label}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="py-10">
          <h2 className="text-2xl font-bold text-center text-neutral-100 mb-8">My Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                Icon: FaLaptopCode,
                title: "Empower Businesses Through Technology",
                description: "Utilize my web development expertise to create scalable and user-centric digital solutions that address real-world problems.",
              },
              {
                Icon: FaTshirt,
                title: "Revolutionize Fashion with Technology",
                description: "Grow Zarak into a globally recognized fashion brand by integrating modern technologies to enhance the customer experience.",
              },
              {
                Icon: FaBook,
                title: "Lifelong Learning and Growth",
                description: "Continuously expand my knowledge base and skills to stay at the forefront of technological advancements and entrepreneurial innovation.",
              },
            ].map(({ Icon, title, description }) => (
              <article
                key={title}
                className="bg-neutral-800 border border-neutral-700 rounded-xl p-5 shadow-lg hover:shadow-neutral-500 hover:drop-shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={30} className="text-white hover:text-neutral-100" />
                  <h3 className="text-base font-semibold text-neutral-100">{title}</h3>
                </div>
                <p className="text-sm text-neutral-300">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="py-5">
          <h2 className="text-2xl font-extrabold font-mono text-center text-neutral-100 mb-8">
            Connect with me
          </h2>
          <nav>
            <ul className="flex justify-center gap-5 py-5">
              {[
                { href: "https://www.linkedin.com/in/syed-minam-ur-rehman/", label: "LinkedIn", Icon: FaLinkedinIn },
                { href: "https://github.com/minamrahman727", label: "GitHub", Icon: FaGithub },
                { href: "https://instagram.com/syedminamurrehman", label: "Instagram", Icon: FaInstagram },
                { href: "https://www.facebook.com/profile.php?id=100078720140776", label: "Facebook", Icon: FaFacebookF },
              ].map(({ href, label, Icon }) => (
                <li key={label}>
                  <Link href={href} aria-label={`Visit my ${label} profile`}>
                    <Icon size={35} className="text-white hover:text-neutral-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </article>
    </section>
  );
};

export default AboutMe;
