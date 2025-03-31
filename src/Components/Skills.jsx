import DefaultDiv from "./defaultDiv";
import Logo from "./Logo";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"pt-22 pb-24"}>
      <div className="flex justify-center">
        <span className="py-1.5 px-4 rounded-4xl bg-cyan-800 text-amber-50 dark:bg-slate-800 tex-sm">
          Skills
        </span>
      </div>
      <h3 className="text-center text-2xl font-semibold mt-6">
        Las tecnologias y herramientas con las que suelo trabajar:
      </h3>
      <div className="mt-12 2xl:w-190 mx-auto flex flex-wrap gap-9 justify-center">
        <Logo
          Name={"Javascript"}
          ImgLink={
            "https://logospng.org/download/javascript/logo-javascript-1024.png"
          }
        />
        <Logo
          Name={"React"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A512%2F1*zXu2vsYPZ5mqF0tOB7kupA.png&f=1&nofb=1&ipt=b6972018ec901f92b1f357213f48dbf3eca2a0717a99d6f2aeccb827577a437e&ipo=images"
          }
        />
        <Logo
          Name={"Tailwind"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Ffluency%2F452%2Ftailwind_css.png&f=1&nofb=1&ipt=f6722238e5d0aef3ad48b6dd530b849ca481f6582f2430c4efd902210b8218fb&ipo=images"
          }
        />
        <Logo
          Name={"Git"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffutureys.tokyo%2Fapp%2Fuploads%2F2018%2F09%2Fimg-icon-git.png&f=1&nofb=1&ipt=098a93d067fa6f017e38fc5e0279e0e69877a53d8680de72d536beb8d5c745b2&ipo=images"
          }
        />
      </div>

      <h3 className="text-center text-2xl font-semibold mt-18">
        Tecnologias las cuales me encuentro estudiando:
      </h3>
      <div className="mt-12 2xl:w-190 mx-auto flex flex-wrap gap-9 justify-center">
        <Logo
          Name={"TypeScript"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogospng.org%2Fdownload%2Ftypescript%2Ftypescript-4096.png&f=1&nofb=1&ipt=17b766d58dc6878b902081abe92e28bde62ac9d428320431eed468c15d9fcc49&ipo=images"
          }
        />
        <Logo
          Name={"NextJS"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fe3%2F82%2F52%2Fe3825274a94bafc3f0282cae29c19972.png&f=1&nofb=1&ipt=606de380a87d850441afca82a8435e178c5b50ca1acc14df5b80afcc07feed89&ipo=images"
          }
        />
        <Logo
          Name={"Nodejs"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fnodejs-icon-logo-png-transparent.png&f=1&nofb=1&ipt=ce8f203406b940ca20ecd84e59d3c388316376f1cd006d6f4233900ca27ac19f&ipo=images"
          }
        />
        <Logo
          Name={"EXpress"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.icons8.com%2Fcolor%2F100%2Fexpress-js.png&f=1&nofb=1&ipt=29385acbc7818269af46d554441f5d8540581c1ff5b2604e4a0e229f3479c8e2"
          }
        />
        <Logo
          Name={"MongoDB"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.icon-icons.com%2Ficons2%2F2415%2FPNG%2F512%2Fmongodb_original_logo_icon_146424.png&f=1&nofb=1&ipt=d9d9f95cea82adc29f364db4a4170cec99284b3d3cbd94eb9af982d34491cc95&ipo=images"
          }
        />
        <Logo
          Name={"Vercel"}
          ImgLink={"https://pipedream.com/s.v0/app_XaLh2x/logo/orig"}
        />
      </div>

      <h3 className="text-center text-2xl font-semibold mt-18">
        Tecnologias en las que estoy interesado en aprender:
      </h3>
      <div className="mt-12 2xl:w-190 mx-auto flex flex-wrap gap-9 justify-center">
        <Logo
          Name={"Redux"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1600%2F1*WcRnU2ERqYHZBKBQ0zXCvg.png&f=1&nofb=1&ipt=86b3b896d7147ffa8113ac65719ffe87dda586dff29b7b1313830a0d3f7b3e17&ipo=images "
          }
        />
        <Logo
          Name={"RESTful APIs"}
          ImgLink={
            "https://miro.medium.com/v2/resize:fit:440/1*J3G3akaMpUOLegw0p0qthA.png"
          }
        />
        <Logo
          Name={"AWS Services"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fv2%2Fresize%3Afit%3A1358%2F1*hMMpWf62JkxAZs0wqmLXsw.png&f=1&nofb=1&ipt=5f8012b9574a46383193b87dc70a13ce8d466cf5b12003ac0175fd062c4ae8a7&ipo=images"
          }
        />
        <Logo
          Name={"GitHub Actions"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fd%2Fgithub_PNG80.png&f=1&nofb=1&ipt=cafa816ed2e58b5d9d8441ff99fdb709c83f968d7ec840d2f2773e16cf81a047&ipo=images"
          }
        />
        <Logo
          Name={"CI/CD"}
          ImgLink={
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.cellenza.com%2Fwp-content%2Fuploads%2F2021%2F06%2Fschemas_Plan-de-travail-1.png&f=1&nofb=1&ipt=00318c86021a193226f2fab50b985cbf4a492af3ec6586bccc79af68b4615c48&ipo=images"
          }
        />
      </div>
    </DefaultDiv>
  );
}
