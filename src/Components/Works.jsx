import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={"bg-slate-300"} className={"py-19 md:py-26"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-cyan-700 text-amber-50 tex-sm">
          Works
        </span>
      </div>
      <div className="pt-18 flex flex-col gap-20 lg:gap-34">
        <div className="flex flex-wrap-reverse justify-between 2xl:flex-nowrap">
          <div className="relative pt-8 2xl:pl-20">
            <span className="text-lg text-cyan-800 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-1 mb-9">Example Project</h3>
            <p className="2xl:absolute 2xl:w-160 bg-slate-800/30 backdrop-blur-md py-7 px-9 text-gray-200 text-xl rounded-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
          <img
            className="w-full 2xl:w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />
        </div>
        <div className="flex flex-wrap justify-between 2xl:flex-nowrap">
          <img
            className="w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />

          <div className="relative pt-8 pr-20 2xl:text-end">
            <span className="text-lg text-cyan-800 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-1 mb-9">Example Project</h3>
            <p className="2xl:absolute 2xl:right-20 2xl:w-160 bg-slate-800/30 backdrop-blur-md py-7 px-9 text-gray-200 text-xl rounded-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap-reverse justify-between 2xl:flex-nowrap">
          <div className="relative pt-8 2xl:pl-20">
            <span className="text-lg text-cyan-800 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-1 mb-9">Example Project</h3>
            <p className="2xl:absolute 2xl:w-160 bg-slate-800/30 backdrop-blur-md py-7 px-9 text-gray-200 text-xl rounded-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
          <img
            className="w-full 2xl:w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />
        </div>
      </div>
    </DefaultDiv>
  );
}
