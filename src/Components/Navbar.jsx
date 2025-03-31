import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"relative"}>
      <div className="fixed z-50 top-6 left-0 right-0 mx-auto w-4/5 lg:w-3xl xl:w-6xl rounded-full bg-slate-400/25 backdrop-blur-md flex items-center gap-3 py-3 px-8 justify-between">
        <span className="text-lg uppercase text-bol font-bold ">Portfolio Web</span>

        <div className="flex items-center gap-12 justify-between">
          <div className="items-center gap-3 hidden lg:flex">
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">About</a>
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">Skills</a>
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">Works</a>
          </div>

          <div className="flex items-center gap-3">
            <button>
              <img src="/moon-svgrepo-com.svg" className="w-7 h-7" />
            </button>
            <button className="text-sm bg-white text-black py-1 px-3 rounded-2xl hover:bg-gray-700 hover:text-gray-100 hover:cursor-pointer duration-200 ease-in">Download CV</button>
          </div>
        </div>
      </div>
    </DefaultDiv>
  );
}
