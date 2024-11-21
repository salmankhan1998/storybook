import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import {
  BookIcon,
  BookOpenIcon,
  SettingIcon,
  BookmarkIcon,
  FeatherIcon,
  DiscordIcon,
  LinkedInIcon,
  TwitterIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowDownIcon,
  CrossIcon,
  WalletIcon,
  CompressIcon,
  HourglassIcon,
  TextSizeIcon,
  EditIcon,
  ChevronRightIcon,
  FooterLogoIcon
} from "./fixtures";
import IconComp, { IconProps } from "./index";
export default { title: "Components/Icons", component: IconComp } as Meta;

const Template = (args: IconProps) => <IconComp {...args} />;

export const Wallet = Template.bind({});
export const Book = Template.bind({});
export const BookOpen = Template.bind({});
export const Bookmark = Template.bind({});
export const Discord = Template.bind({});
export const Feather = Template.bind({});
export const LinkedIn = Template.bind({});
export const Setting = Template.bind({});
export const Twitter = Template.bind({});
export const ArrowRight = Template.bind({});
export const ArrowDown = Template.bind({});
export const ArrowLeft = Template.bind({});
export const Cross = Template.bind({});
export const Compress = Template.bind({});
export const Hourglass = Template.bind({});
export const TextSize = Template.bind({});
export const Edit = Template.bind({});
export const ChevronRight = Template.bind({});
export const FooterLogo = Template.bind({});


Wallet.args = WalletIcon;
Book.args = BookIcon;
BookOpen.args = BookOpenIcon;
Setting.args = SettingIcon;
Bookmark.args = BookmarkIcon;
Feather.args = FeatherIcon;
Discord.args = DiscordIcon;
LinkedIn.args = LinkedInIcon;
Twitter.args = TwitterIcon;
ArrowRight.args = ArrowRightIcon;
ArrowLeft.args = ArrowLeftIcon;
ArrowDown.args = ArrowDownIcon;
Cross.args = CrossIcon;
Compress.args = CompressIcon;
Hourglass.args = HourglassIcon;
TextSize.args = TextSizeIcon;
Edit.args = EditIcon;
ChevronRight.args = ChevronRightIcon;
FooterLogo.args = FooterLogoIcon