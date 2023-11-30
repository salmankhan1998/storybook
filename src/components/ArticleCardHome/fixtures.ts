import { ArticleProps } from "./ArticleCardHome";

export const ArticleCardDefault: ArticleProps = {
  id: 1,
  title: "Default Title",
  text: "Default Text",
  articleImage: "../../assets/image.jpg",
  author: "Default Author",
  date: "Default Date",
  onClick: () => {
    console.log("Btn Clicked");
  },
};
