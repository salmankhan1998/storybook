import React, { useState } from "react";
// import "./Typo.module.css";

export interface TypoProps {
  title?: string;
  className?: string;
  variant?:
  | "H1"
  | "H2"
  | "H3"
  | "H4"
  | "H5"
  // | "H6"
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7"
  | undefined;
  fontWeight?: "normal" | "medium" | "semibold" | "bold";
}

const Typo: React.FC<TypoProps> = ({
  title,
  className,
  variant,
  fontWeight,
}) => {
  return (
    <>
      {variant === "H1" && (
        <H1 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "H2" && (
        <H2 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "H3" && (
        <H3 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "H4" && (
        <H4 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "H5" && (
        <H5 title={title} fontWeight={fontWeight} className={className} />
      )}
      {/* {variant === "H6" && <H6 title={title} className={className} />} */}
      {variant === "p1" && (
        <P1 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "p2" && (
        <P2 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "p3" && (
        <P3 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "p4" && (
        <P4 title={title} fontWeight={fontWeight} className={className} />
      )}
      {variant === "p5" && <P5 title={title} className={className} />}
      {variant === "p6" && <P6 title={title} className={className} />}
      {variant === "p7" && <P7 title={title} className={className} />}
    </>
  );
};

export default Typo;

const H1 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <h1
      data-testid="h1"
      className={`font-nanum-myeongjo text-[32px] leading-[36px] md:text-[56px] md:leading-[64px] font-${fontWeight} not-italic text-[#27303E] ${className}`}
    >
      {title}
    </h1>
  );
};

const H2 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <h2
      data-testid="h2"
      className={`font-nanum-myeongjo text-2xl leading-[28px] md:text-5xl md:leading-[52px] font-${fontWeight} not-italic text-[#27303E] ${className}`}
    >
      {title}
    </h2>
  );
};

const H3 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <h3
      className={`font-nanum-myeongjo text-xl leading-[24px] md:text-[40px] md:leading-[36px] font-${fontWeight} text-center not-italic ${className}`}
    >
      {title}
    </h3>
  );
};

const H4 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <h4
      className={`font-nanum-myeongjo text-base leading-tight md:text-[32px] md:leading-[28px] font-${fontWeight} text-center not-italic ${className}`}
    >
      {title}
    </h4>
  );
};

const H5 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <h5
      className={`font-nanum-myeongjo text-base leading-tight md:text-[24px] md:leading-[28px] font-${fontWeight} not-italic ${className}`}
    >
      {title}
    </h5>
  );
};

// const H6 = ({ title, className } : TypoProps) => {
//   return (
//     <h6
//       className={`font-Overlock text-4xl leading-[44px] font-bold not-italic ${className}`}
//     >
//       {title}
//     </h6>
//   );
// };

const P1 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-base leading-normal md:text-lg md:leading-[28px] font-${fontWeight} text-[#27303E] not-italic  ${className}`}
    >
      {title}
    </p>
  );
};

const P2 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-sm leading-tight md:text-base md:leading-normal font-${fontWeight} text-[#27303E] not-italic ${className}`}
    >
      {title}
    </p>
  );
};

const P3 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-sm leading-tight text-[#2C2543] font-${fontWeight} not-italic ${className}`}
    >
      {title}
    </p>
  );
};

const P4 = ({ title, className, fontWeight }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-xs font-${fontWeight} leading-4 not-italic text-[#6C6C6C] ${className}`}
    >
      {title}
    </p>
  );
};

const P5 = ({ title, className }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-lg leading-normal font-medium not-italic ${className}`}
    >
      {title}
    </p>
  );
};

const P6 = ({ title, className }: TypoProps) => {
  return (
    <p
      className={`font-mukta text-base font-normal leading-tight not-italic text-[#334155] ${className}`}
    >
      {title}
    </p>
  );
};

const P7 = ({ title, className }: TypoProps) => {
  return (
    <p
      className={`font-overlock text-sm leading-[15px] font-normal not-italic tracking-[0.02em] ${className}`}
    >
      {title}
    </p>
  );
};
