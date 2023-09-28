import { Carousel } from "./Carousel";

export const Branches = () => {
  return (
    <div class="mx-auto  flex max-w-lg flex-col px-4 py-20 lg:max-w-screen-xl lg:flex-row">
      <div class="mb-10 max-w-lg lg:mb-0 lg:pr-16 xl:pr-20">
        <div class="mb-10 text-4xl text-green-500 font-light">
          <div>
            <div class="rounded bg-amber-300 p-8 ">
              <h1 class="text-green-500 ">
                Trusted by Farmers All Over
                <span className="font-bold"> Mindanao!</span>
              </h1>
            </div>
            <div class="mx-auto h-2 w-11/12 rounded-b bg-amber-500 opacity-75"></div>
            <div class="mx-auto h-2 w-10/12 rounded-b bg-amber-500 opacity-50"></div>
            <div class="mx-auto h-2 w-9/12 rounded-b bg-amber-500 opacity-25"></div>
          </div>
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
