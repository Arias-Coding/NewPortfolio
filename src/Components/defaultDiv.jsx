export default function App({ children, bgColor, className }) {
  return (
    <div className={`bg-indigo-50 text-cyan-950 dark:bg-[#110424]  dark:text-white ${bgColor}`}>
      <div className={`w-7xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}
