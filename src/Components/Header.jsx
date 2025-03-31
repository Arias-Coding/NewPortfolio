import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv className={"pt-34 pb-22 md:pt-42 md:pb-32"}>
      <div className="flex flex-wrap-reverse gap-12 justify-between items-center">
        <div className="xl:w-150 xl:h-60 mt-10 2xl:mt-0">
          <h1 className="text-5xl font-black">Hola, Soy yo 👋</h1>
          <p className="pt-4 font-semibold text-gray-800 md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto
            deserunt sapiente sint eius expedita optio ab! Quo sed voluptatum
            dicta ab, nisi nihil quia sequi aut debitis a vel nulla perspiciatis
            natus vero at voluptatem!
          </p>

          <div className="mt-6 2xl:mt-12">
            <div className="flex items-center gap-2">
              <img
                className="w-4 h-4 lg:w-6 lg:h-6"
                src="/pin-sharp-circle-624-svgrepo-com.svg"
              />
              <span className="md:text-lg">Buenos Aires, Argentina</span>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-4 h-4 lg:w-6 lg:h-6 flex items-center justify-center">
                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-green-500 rounded-full" />
              </div>
              <span className="md:text-lg">Disponible para nuevos proyectos</span>
            </div>
          </div>
        </div>
        
        <div className="relative h-75 sm:h-90 xl:w-130 flex justify-center items-center xl:h-100">
          <img
            className="w-full h-full xl:w-130 xl:h-100 object-cover object-[25%_75%] relative z-20"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
            alt=""
          />
          <div className="w-full h-full xl:w-130 xl:h-100 bg-slate-300 absolute -bottom-11 xl:-right-11 z-10" />
        </div>
      </div>

      
      <div className="flex items-center gap-5 pt-10 xl:pt-20">
        <a href="">
          <img
            className="w-6 h-6 lg:w-8 lg:h-8"
            src="./github-142-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            className="w-8 h-8 lg:w-10 lg:h-10"
            src="./linkedin-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            className="w-8 h-8 lg:w-10 lg:h-10"
            src="./twitter-3-svgrepo-com.svg"
            alt=""
          />
        </a>
      </div>

    </DefaultDiv>
  );
}
