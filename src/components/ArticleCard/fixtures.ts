import { ArticleCardProps } from ".";

export const ArticleCards: ArticleCardProps = {
  title: "Here goes the headline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ",
  time: "8",
  author: "Natalia",
  authorImage:
    "https://images.unsplash.com/photo-1599103892985-253246c5558e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  cardImage:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  date: "12/09/2023",
  horizontal: true,
  completed: false,
  pillTitle: "t2 world",
  pillVariant: "blue",
  avatars: [
    "https://images.unsplash.com/photo-1670918346745-248c1a10b79d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1670918346745-248c1a10b79d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1599103892985-253246c5558e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1670918346745-248c1a10b79d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  onClick: () => {
    console.log("Btn onClick !");
  },
};
