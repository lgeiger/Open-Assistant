import { StoryFn } from "@storybook/react";
import React from "react";

import { SessionDecorator } from "../../../.storybook/decorators";
import { MessageEmojiButton } from "./MessageEmojiButton";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Messages/MessageEmojiButton",
  component: MessageEmojiButton,
  decorators: [SessionDecorator],
};

const Template: StoryFn<any> = ({
  emoji,
  count,
  ...rest
}: {
  emoji: string;
  count: number;
  checked?: boolean;
  userIsAuthor: boolean;
  disabled?: boolean;
  userReacted: boolean;
}) => {
  return <MessageEmojiButton emoji={{ name: emoji, count }} onClick={undefined} {...rest} />;
};

export const Default = {
  render: Template,

  args: {
    emoji: "+1",
    count: 7,
    checked: false,
    userIsAuthor: false,
    disabled: false,
    userReacted: true,
  },
};

export const BigNumber = {
  render: Template,

  args: {
    emoji: "+1",
    count: 999,
    checked: false,
    showCount: true,
  },
};

export const Checked = {
  render: Template,

  args: {
    emoji: "+1",
    count: 2,
    checked: true,
    showCount: true,
  },
};
