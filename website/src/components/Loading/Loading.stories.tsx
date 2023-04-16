import { LoadingScreen } from "./LoadingScreen";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Example/LoadingScreen",
  component: LoadingScreen,
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = {};

export const WithText = {
  args: { text: "Loading Text ..." },
};
