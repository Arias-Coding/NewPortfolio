import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={"bg-slate-300 dark:bg-slate-950"} className={"py-26"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-cyan-800 text-amber-50 dark:bg-slate-800 tex-sm">
          Works
        </span>
      </div>
      <div className="pt-18 flex flex-col gap-34">
        <div className="flex justify-between">
          <div className="relative pt-8">
            <span className="text-lg text-cyan-700 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-2 mb-9">Example Project</h3>
            <p className="absolute w-180 bg-slate-800/30 backdrop-blur-md py-8 px-12 text-gray-200  text-2xl rounded-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
          <img
            className="w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />
        </div>
        <div className="flex justify-between">
          <img
            className="w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />

          <div className="relative pt-8 text-end">
            <span className="text-lg text-cyan-700 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-2 mb-9">Example Project</h3>
            <p className="absolute right-0 w-180 bg-slate-800/30 backdrop-blur-md py-8 px-12 text-gray-200 text-2xl rounded-2xl text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="relative pt-8">
            <span className="text-lg text-cyan-700 font-bold">
              Lorem ipsum dolor sit.
            </span>
            <h3 className="font-bold text-5xl mt-2 mb-9">Example Project</h3>
            <p className="absolute w-180 bg-slate-800/30 backdrop-blur-md py-8 px-12 text-gray-200  text-2xl rounded-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              saepe vel sit, cumque excepturi minima ducimus doloremque eaque
              non laboriosam iure impedit.
            </p>
          </div>
          <img
            className="w-180"
            src="https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/f266ebed4a1ad86708140cef61e5710615a14e99/933a9266418b1ad3bf4da961e84641edc72c4a85"
            alt=""
          />
        </div>
      </div>
    </DefaultDiv>
  );
}
