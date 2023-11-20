import React from "react";
import Typo from "../Typography/Typo";
import ArticleCard from "../ArticleCardHome/ArticleCardHome";

const data = [
  {
    title: "Here goes the title",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageURL: "/images/article.svg",
    author: "Author",
    date: "Date",
  },
];

export default function ArticlesSlider() {
  return (
    <section
      data-testid="ArticlesSlider"
      className="lg:col-start-3 lg:col-span-8 flex flex-col mt-32 max-w-56 w-full"
    >
      <div className="border-b-8 border-green-500 w-fit">
        <Typo
          variant="H5"
          title="Curated articles by t2"
          className="leading-[45px]"
        />
      </div>
      {data.map((x, i) => (
        <React.Fragment key={i}>
          <ArticleCard
            id={i}
            title={x.title}
            text={x.text}
            image={x.imageURL}
            author={x.author}
            date={x.date}
          />
        </React.Fragment>
      ))}
    </section>
  );
}
