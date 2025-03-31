export default function Logo({ Name, ImgLink }) {
  return (
    <div className="text-center">
      <img
        className="w-content h-8 lg:h-18 mx-auto"
        src={ImgLink}
        alt=""
      />
      <span className="ld:text-xl">{Name}</span>
    </div>
  );
}
