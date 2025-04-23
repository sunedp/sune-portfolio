export function Button({ children, className = '', variant, ...props }) {
  const base = variant === 'outline'
    ? 'border border-[#567277] text-[#567277] bg-white'
    : 'bg-[#567277] text-white';
  return (
    <button className={`${base} px-4 py-2 rounded-xl ${className}`} {...props}>
      {children}
    </button>
  );
}