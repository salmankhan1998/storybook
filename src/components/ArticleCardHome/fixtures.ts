import { ArticleProps } from "./ArticleCardHome";

export const ArticleCardDefault: ArticleProps = {
  id: 1,
  title: "Default Title",
  text: "Default Text",
  articleImage:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: "Default Author",
  date: "Default Date",
  onClick: () => {
    console.log("Btn Clicked");
  },
};
