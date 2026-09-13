import type { Preview } from "@storybook/react";
import "./storybook.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "oled-black",
      values: [
        {
          name: "oled-black",
          value: "#000000",
        },
        {
          name: "clinical-surface",
          value: "#090A0F",
        },
        {
          name: "google-light",
          value: "#FFFFFF",
        },
        {
          name: "google-surface",
          value: "#F8F9FA",
        },
      ],
    },
    layout: "centered",
  },
};

export default preview;
