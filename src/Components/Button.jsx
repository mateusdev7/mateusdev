const Button = ({ text, img, href }) => {
  return (
    <a
      target="_blank"
      href={href}
      className="flex flex-row items-center gap-3 px-6 py-2 md:px-8 md:py-2 border-2 border-blueColor font-audioWide text-xs md:text-sm text-whiteColor rounded-full"
      rel="noreferrer"
    >
      {text}
      <img src={img} alt="Logo" />
    </a>
  );
};

export default Button;
