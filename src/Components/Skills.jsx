import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"pt-22 pb-24"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-cyan-800 text-amber-50 dark:bg-slate-800 tex-sm">
          Skills
        </span>
      </div>
      <h3 className="text-center text-2xl font-semibold mt-6">
        Las tecnologias, herramientas y servicios con los que suelo trabajar:
      </h3>
      <div className="mt-12 w-190 mx-auto flex flex-wrap gap-9 justify-center">
        <div className="text-center"> 
          <img className="w-22 h-22" src="https://logospng.org/download/javascript/logo-javascript-1024.png" alt="" />
          <span className="text-xl">Javascript</span>
        </div>
        <div className="text-center"> 
          <img className="w-22 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Ftypescript%2Ftypescript-4096.png&f=1&nofb=1&ipt=17b766d58dc6878b902081abe92e28bde62ac9d428320431eed468c15d9fcc49&ipo=images" alt="" />
          <span className="text-xl">TypeScript</span>
        </div>
        <div className="text-center"> 
          <img className="w-22 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A512%2F1*zXu2vsYPZ5mqF0tOB7kupA.png&f=1&nofb=1&ipt=b6972018ec901f92b1f357213f48dbf3eca2a0717a99d6f2aeccb827577a437e&ipo=images" alt="" />
          <span className="text-xl">React</span>
        </div>
        <div className="text-center"> 
          <img className="w-22 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe3%2F82%2F52%2Fe3825274a94bafc3f0282cae29c19972.png&f=1&nofb=1&ipt=606de380a87d850441afca82a8435e178c5b50ca1acc14df5b80afcc07feed89&ipo=images" alt="" />
          <span className="text-xl">NextJS</span>
        </div>
        <div className="text-center"> 
          <img className="w-20 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fnodejs-icon-logo-png-transparent.png&f=1&nofb=1&ipt=ce8f203406b940ca20ecd84e59d3c388316376f1cd006d6f4233900ca27ac19f&ipo=images" alt="" />
          <span className="text-xl">Nodejs</span>
        </div>
        <div className="text-center"> 
          <img className="w-20 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F100%2Fexpress-js.png&f=1&nofb=1&ipt=29385acbc7818269af46d554441f5d8540581c1ff5b2604e4a0e229f3479c8e2" alt="" />
          <span className="text-xl">EXpress</span>
        </div>
        <div className="text-center"> 
          <img className="w-20 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2415%2FPNG%2F512%2Fmongodb_original_logo_icon_146424.png&f=1&nofb=1&ipt=d9d9f95cea82adc29f364db4a4170cec99284b3d3cbd94eb9af982d34491cc95&ipo=images" alt="" />
          <span className="text-xl">MongoDB</span>
        </div>
        <div className="text-center"> 
          <img className="w-23 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogonoid.com%2Fimages%2Fsass-logo.png&f=1&nofb=1&ipt=1170aa83be51883a369b14516c9fcb2358f27afbcb2bc3c2eed0b3173d43d1e6&ipo=images" alt="" />
          <span className="text-xl">Sass</span>
        </div>
        <div className="text-center"> 
          <img className="w-23 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F452%2Ftailwind_css.png&f=1&nofb=1&ipt=f6722238e5d0aef3ad48b6dd530b849ca481f6582f2430c4efd902210b8218fb&ipo=images" alt="" />
          <span className="text-xl">Tailwind</span>
        </div>
        <div className="text-center"> 
          <img className="w-23 h-22" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffutureys.tokyo%2Fapp%2Fuploads%2F2018%2F09%2Fimg-icon-git.png&f=1&nofb=1&ipt=098a93d067fa6f017e38fc5e0279e0e69877a53d8680de72d536beb8d5c745b2&ipo=images" alt="" />
          <span className="text-xl">Git</span>
        </div>
      </div>
    </DefaultDiv>
  );
}
