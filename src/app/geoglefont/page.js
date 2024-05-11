const GeogleFont = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <p className="font-mono text-[30px] font-bold">
        Welcome to readable font!
      </p>
      <div className="mt-10">
        <h1 className="font-sans font-bold text-[20px]">
          This is font Open_Sans
        </h1>
        <h1 className="font-mono font-bold text-[20px]">
          This is font Roboto_Mono
        </h1>
        <h1 className="font-monts font-bold text-[20px]">
          This is font Montserrat
        </h1>
      </div>
    </div>
  );
};

export default GeogleFont;
