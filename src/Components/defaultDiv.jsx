export default function App({ children, bgColor, className }) {
  return (
    <div className={`bg-indigo-50 text-cyan-950 dark:bg-[#110424]  dark:text-white tracking-wide ${bgColor}`}>
      <div className={`w-xs sm:w-sm md:w-lg lg:w-2xl xl::w-5xl 2xl:w-7xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}
