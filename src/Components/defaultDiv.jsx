export default function App({ children, bgColor, className }) {
  return (
    <div className={`bg-[#110424] text-white ${bgColor}`}>
      <div className={`w-7xl mx-auto ${className}`}>{children}</div>
    </div>
  );
}
