import { ArticleCardProps } from ".";

export const ArticleCards: ArticleCardProps = {
  title: "Here goes the headline",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua... ",
  time: "8",
  author: "Author",
  authorImage: "/images/accountAvatar.svg",
  cardImage: "/images/card.svg",
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
