import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-10 ml-40">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-5xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Discover The{" "}
          <span className="red-gradient">Enchanting World of </span>
          Anime Wonders
        </h1>
      </div>
    </header>
  );
}

export default Hero;
