import Link from "next/link";
import Typo from "../Typography/Typo";
import Typography from "../Typography";

interface LinkButtonProp {
  href: string;
}
export default function LinkButton({ href }: LinkButtonProp) {
  return (
    <div data-testid="LinkButton" className="flex justify-center">
      <Link href={href}>
        <div className="relative cursor-pointer">
          {/* <Typo variant="H5" title="home.t2" />
          <div className="absolute left-0 w-full h-3 bg-blue-900 -z-10 bottom-1" /> */}
          <Typography
            variant="p1"
            title="home.t2"
            className="underline decoration-[8px] decoration-blue-900"
          />
        </div>
      </Link>
    </div>
  );
}
