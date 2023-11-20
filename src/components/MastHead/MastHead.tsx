import Typo from "../Typography/Typo";
import Image from "next/image";

const Images = {
  Cirlce: "/images/circle.svg",
  Rectangle: "/icons/rectangle.svg",
};

export default function MastHead() {
  return (
    <section
      data-testid="masthead"
      className="relative flex flex-col items-center pt-16 lg:col-start-3 lg:col-span-8 gap-y-16"
    >
      <div className="absolute flex items-start gap-x-1 top-28 -left-28 w-44">
        <div className="w-10 h-[1px] bg-black-800 mt-2" />
        <div className="w-40 ">
          <Typo
            title="Daily newspaper across the web curated for you"
            variant="p5"
          />
        </div>
      </div>

      <div className="flex-shrink-0 w-[440px] h-[440px]">
        <Image
          src={Images.Cirlce}
          alt="circle image"
          width={440}
          height={440}
        />
      </div>
      <div className="flex flex-col gap-y-11 max-w-[910px] text-center ">
        <Typo variant="H1" title='"A world of narratives"' />
        <Typo
          variant="p1"
          title="On t2, time serves as the currency and curates subculture. 
Users read to earn and to contribute."
        />
      </div>

      <div className="flex-shrink-0 w-8 mt-5 h-14">
        <Image
          src={Images.Rectangle}
          alt="rectangle image"
          width={32}
          height={56}
        />
      </div>
    </section>
  );
}
