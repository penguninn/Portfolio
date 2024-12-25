import Navbar from "./components/Navbar"
import Content from "./components/Content"
import About from "./components/About"
import Experiences from "./components/Experiences"
const App = () => {
  return (
    <div className="antialiased text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">

          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        <Navbar />
        <Content />
        <About />
        <Experiences />
      </div>
    </div>
  )
}

export default App