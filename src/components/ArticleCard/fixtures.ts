import { ArticleCardProps } from ".";

export const ArticleCards: ArticleCardProps = {
  title: "Here goes the headline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ",
  time: "8",
  author: "Author",
  authorImage: "/images/accountAvatar.svg",
  cardImage:
    "https://images.unsplash.com/photo-1682687982360-3fbab65f9d50?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  date: "date",
  horizontal: false,
  completed: false,
  pillTitle: "t2 world",
  pillVariant: "blue",
  avatars: [
    "/images/card-avatar.svg",
    "/images/accountAvatar.svg",
    "/images/card-avatar.svg",
    "/images/accountAvatar.svg",
  ],
  onClick: () => {
    console.log("Btn onClick !");
  },
};
