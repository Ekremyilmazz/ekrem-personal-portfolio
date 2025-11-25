import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="py-10 bg-black">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4 text-center text-gray-300">
          <div className="flex justify-center gap-6 mb-4 text-blue-500">
            <a href="https://github.com/Ekremyilmazz" target="_blank">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ekrem-y%C4%B1lmaz-309474205/" target="_blank">
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-gray-300">&copy; 2025 Ekrem</p>
        </div>
      </RevealOnScroll>
    </footer>
  );
};
