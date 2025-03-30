import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={"bg-slate-950"} className={"py-26"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-slate-800 tex-sm">
          About Me
        </span>
      </div>
      <div className="mt-25 flex justify-center gap-12">
        <div className="relative">
          <img
            className="w-120 h-140 object-cover object-[25%_75%] relative z-10"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbor.forbes.com%2Fthumbor%2Ffit-in%2F900x510%2Fhttps%3A%2F%2Fwww.forbes.com%2Fadvisor%2Fwp-content%2Fuploads%2F2023%2F07%2Fcomputer-coding.jpg&f=1&nofb=1&ipt=84138113da605b06405c0e671a99cc3850972a8bd00f4bf9aab27fbc34c9f882&ipo=images"
            alt=""
          />
          <div className="w-120 h-140 border-2 border-amber-200 absolute -top-9 -left-9 z-20"/>
        </div>
        <div className="w-130">
          <h2 className="text-2xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam.
          </h2>
          <p className="mt-3 text-neutral-300 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            temporibus nostrum consequuntur, placeat sapiente maxime, quis
            eligendi ducimus id quia excepturi nobis ab dolores cupiditate
            fugiat beatae. Pariatur similique, rem quia saepe neque iste
            dignissimos impedit minima quos dolores maiores.
          </p>
          <p className="mt-3 text-neutral-300 text-lg">
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
