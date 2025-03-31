import DefaultDiv from "./defaultDiv";

export default function App() {
  return (
    <DefaultDiv bgColor={""} className={"py-26"}>
      <h3 className="text-4xl font-bold">Contact Me</h3>
      <p className="md:text-lg 2xl:w-160 mt-7">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore nisi
        veritatis consectetur, odit molestiae repellat saepe error pariatur
        excepturi aut animi repellendus, fugiat nemo et quaerat alias,
        blanditiis itaque laudantium enim fugit?
      </p>
      <p className="text-lg mt-7">uhfdiua@gmail.com</p>

      <div className="flex items-center gap-5 mt-14">
        <a href="">
          <img
            className="w-8 h-8"
            src="./github-142-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            className="w-10 h-10"
            src="./linkedin-svgrepo-com.svg"
            alt=""
          />
        </a>
        <a href="">
          <img
            className="w-10 h-10"
            src="./twitter-3-svgrepo-com.svg"
            alt=""
          />
        </a>
      </div>
    </DefaultDiv>
  );
}
