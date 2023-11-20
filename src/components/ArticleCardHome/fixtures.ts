import { ArticleProps } from "./ArticleCardHome";

export const ArticleCardDefault: ArticleProps = {
  id: 1,
  title: "Default Title",
  text: "Default Text",
  image: "/images/article.svg",
  author: "Default Author",
  date: "Default Date",
  onClick: () => {
    console.log("Btn Clicked");
  },
};
