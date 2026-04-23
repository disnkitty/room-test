function Button({ type = 'button', className = '', onClick, children, ...rest }) {
  return (
    <button type={type} onClick={onClick} className={className} {...rest}>
      {children}
    </button>
  );
}
// const variants = {
//   primary: "bg-[#EAFF00] text-[#1A181C] w-[262px]", 
//   secondary: "bg-[#3A3A3A] text-white w-[262px]",   
//   ghost: "bg-transparent text-[#939393] w-auto h-auto p-0", 
// };
export default Button;
