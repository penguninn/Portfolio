import { HERO_CONTENT } from "../constants"
import avatar from "../assets/avatar.jpg"
const About = () => {
    return (
        <div className="border-b border-neutral-100 pb-4 mt-28 h-screen flex flex-col">
            <div className="text-center text-4xl flex-shrink-0">
                About Me
            </div>
            <div className="flex flex-wrap flex-grow">
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-5xl">Macvuanh Dai</h1>
                        <span className="text-4xl bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text tracking-tighter text-transparent">
                            Software Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center lg:w-1/2 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img src={avatar} alt="" className="w-96 rounded-md" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About