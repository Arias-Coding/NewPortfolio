import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"pt-60 pb-26"}>
        <div className="flex gap-12 justify-between items-center">
          <div className="w-135 h-60">
            <h1 className="text-5xl font-black">Hola, Soy yo 👋</h1>
            <p className="pt-4 font-semibold text-gray-800 dark:text-neutral-300 text-lg w-135">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Architecto deserunt sapiente sint eius expedita optio ab! Quo sed
              voluptatum dicta ab, nisi nihil quia sequi aut debitis a vel nulla
              perspiciatis natus vero at voluptatem!
            </p>
          </div>
          <div className="relative w-130 h-100">
            <img
              className="w-130 h-100 object-cover object-[25%_75%] relative z-20"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
              alt=""
            />
            <div className="w-130 h-100 bg-slate-300 dark:bg-slate-800 absolute -top-9 -right-9 z-10" />
          </div>
      </div>
      <div className="flex items-center gap-2">
        <img
          className="w-6 h-6 dark:invert"
          src="/pin-sharp-circle-624-svgrepo-com.svg"
        />
        <span className="text-lg">Buenos Aires, Argentina</span>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <div className="w-6 h-6 flex items-center justify-center">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
        </div>
        <span className="text-lg">Disponible para nuevos proyectos</span>
      </div>
      <div className="flex items-center gap-5 mt-14">
        <a href="">
          {" "}
          <img
            className="w-8 h-8 dark:invert"
            src="./github-142-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          {" "}
          <img
            className="w-10 h-10 dark:invert"
            src="./linkedin-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          {" "}
          <img
            className="w-10 h-10 dark:invert"
            src="./twitter-3-svgrepo-com.svg"
            alt=""
          />
        </a>
      </div>
    </DefaultDiv>
  );
}
