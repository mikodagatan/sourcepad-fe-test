const Home = () => {
  return (
    <div className="h-noNav w-full flex flex-col justify-center items-center">
      <p className="text-gray-500 text-[64px] pb-2 text-center md:text-left">
        Welcome!
      </p>
      <p>This an app with the following tech stack:</p>
      <ul className="pt-4 ">
        <li>React</li>
        <li>TailwindCSS</li>
        <li>Typescript</li>
        <li>Prettier</li>
        <li>Recoil</li>
      </ul>
    </div>
  );
};

export default Home;
