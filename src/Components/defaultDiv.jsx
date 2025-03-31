export default function App({ children, bgColor, className }) {
  return (
    <div className={`bg-indigo-50 text-sky-950 tracking-wide ${bgColor}`}>
      <div className={`w-4/5 md:w-lg lg:w-2xl xl::w-5xl 2xl:w-7xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}
