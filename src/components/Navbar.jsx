import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
const Navbar = () => {
  return <div className="flex flex-shrink-0 h-20 justify-between items-center sticky top-0 z-50 backdrop-blur-md">
    <img src={logo} className="w-12"></img>
    <div className="p-4 flex items-center justify-center gap-8">
      <div className="flex gap-8">
        <a href="#" className="text-purple-600 active:text-neutral-300 hover:text-neutral-300 text-sm">Home</a>
        <a href="#" className="text-purple-600 active:text-neutral-300 hover:text-neutral-300 text-sm">Project</a>
        <a href="#" className="text-purple-600 active:text-neutral-300 hover:text-neutral-300 text-sm">Experience</a>
        <a href="#" className="text-purple-600 active:text-neutral-300 hover:text-neutral-300 text-sm">About</a>
      </div>

      <div className="items-center justify-center gap-4 flex">
        <a href="#" className="text-purple-600 hover:text-neutral-300 "><FaLinkedin /></a>
        <a href="#" className="text-purple-600 hover:text-neutral-300"><FaGithub /></a>
        <a href="#" className="text-purple-600 hover:text-neutral-300"><FaInstagram /></a>
        <a href="#" className="text-purple-600 hover:text-neutral-300 "><FaFacebook /></a>
      </div>
    </div>
  </div>
}

export default Navbar