import { Carousel } from "./Carousel";

export const Branches = () => {
  return (
    <div class="mx-auto items-center flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row">
      <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
        <div class="mb-5 text-4xl text-green-500 font-light">
          Trusted by Farmers All Over <span class="font-bold">Mindanao</span>!
        </div>
        <div class="mb-5 text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus modi,
          magni repellat doloremque autem tempore facere adipisci nam ratione
          vitae quibusdam earum optio laudantium ipsum aliquid harum nulla.
        </div>
      </div>
      <Carousel />
    </div>
  );
};
