import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={"bg-slate-300"} className={"py-19 md:py-26"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-cyan-700 text-amber-50 tex-sm">
          About Me
        </span>
      </div>

      <div className="mt-14 lg:mt-25 flex flex-wrap justify-center gap-10 lg:gap-18">
        <div className="relative w-80 h-90 md:w-100 md:h-120 2xl:w-120 2xl:h-140">
          <img
            className="w-full h-full object-cover object-[25%_75%] relative z-10"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
            alt=""
          />
          <div className="w-full h-full border-3 border-indigo-700 absolute -top-3 -left-3 lg:-top-9 lg:-left-9 z-20"/>
        </div>

        <div className="2xl:w-130">
          <h2 className="text-2xl lg:text-3xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
          </h2>
          <p className="mt-4 text-gray-800 font-semibold lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            temporibus nostrum consequuntur, placeat sapiente maxime, quis
            eligendi ducimus id quia excepturi nobis ab dolores cupiditate
            fugiat beatae. Pariatur similique, rem quia saepe neque iste
            dignissimos impedit minima quos dolores maiores.
          </p>
          <p className="mt-4 text-gray-800 font-semibold lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            temporibus nostrum consequuntur, placeat sapiente maxime, quis
            eligendi ducimus id quia excepturi nobis ab dolores cupiditate
            fugiat beatae. Pariatur similique, rem quia saepe neque iste
            dignissimos impedit minima quos dolores maiores.
          </p>
        </div>
      </div>
    </DefaultDiv>
  );
}
