const NavBar = () => {
  return (
    <nav
      className={`h-[6rem] fixed top-0 left-0 w-full flex items-center justify-center transition-colors duration-300 bg-transparent backdrop-blur-lg z-50`}
    >
      <div className="flex space-x-12 text-lg font-light tracking-wide ">
        <a
          href="about"
          className="text-[#E0E0E0] hover:text-[#FFFFFF] transition-colors duration-200 text-2xl"
        >
          About me
        </a>
        <a
          href="gallery"
          className="text-[#E0E0E0] hover:text-[#FFFFFF] transition-colors duration-200 text-2xl"
        >
          Gallery
        </a>
        <a
          href="https://example.com/buy-art"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D4A017] hover:text-[#F0B429] transition-colors duration-200 text-2xl"
        >
          Buy art
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
