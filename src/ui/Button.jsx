function Button({ size, color, text, icon, onClick }) {
  return (
    <button onclick={onClick} className={`button ${size} ${color}`}>
      {icon && { icon }}
      {text && { text }}
    </button>
  );
}

export default Button;
