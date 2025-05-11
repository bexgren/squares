const Button = ({ onClick, text }) => {
  return (
    <button
      className="bg-purple-800 text-blue-50 text-xl hover:bg-purple-950 py-2 px-4 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
