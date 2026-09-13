/// <reference types="react" />

declare module "@storybook/react" {
  export type Meta<T = any> = {
    title?: string;
    component?: T;
    tags?: string[];
    argTypes?: Record<string, any>;
    parameters?: Record<string, any>;
    decorators?: any[];
  };

  export type StoryObj<T = any> = {
    args?: any;
    render?: (args: any) => React.ReactNode;
    parameters?: Record<string, any>;
  };

  export type Preview = {
    parameters?: Record<string, any>;
    decorators?: any[];
  };
}

declare module "@storybook/react-vite" {
  export type StorybookConfig = {
    stories: string[];
    addons: string[];
    framework: {
      name: string;
      options?: Record<string, any>;
    };
    docs?: Record<string, any>;
  };
}
