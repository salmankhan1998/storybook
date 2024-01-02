import { ArticleProps } from "./ArticleCardHome";

export const ArticleCardDefault: ArticleProps = {
  id: 1,
  title: "Title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
  articleImage:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  author: "Natalia",
  date: "12/09/2023",
  onClick: () => {
    console.log("Btn Clicked");
  },
};
