import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"relative"}>
      <div className="bg-gray-900 fixed z-50 top-6 w-6xl bg-gray-0 rounded-full backdrop-blur-sm flex items-center gap-3 py-3 px-8 justify-between">
        <span className="text-lg uppercase text-bol font-bold ">Portfolio Web</span>
        <div className="flex items-center gap-12 justify-between">
          <div className="flex items-center gap-3">
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">About</a>
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">Skills</a>
            <a href="" className="hover:text-gray-400 hover:cursor-pointer hover:underline">Works</a>
          </div>
          <div className="flex items-center gap-3">
            <button>
              <img src="/moon-svgrepo-com.svg" className="w-10 h-10" />
            </button>
            <button className="text-sm bg-white text-black py-1 px-3 rounded-2xl hover:bg-gray-700 hover:text-gray-100 hover:cursor-pointer duration-200 ease-in">Download CV</button>
          </div>
        </div>
      </div>
    </DefaultDiv>
  );
}
