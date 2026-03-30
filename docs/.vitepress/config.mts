import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Studio Purring",
  description: "keyboard createor site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Build Guides", link: "/build-guides" },
      { text: "Shop", link: "https://tamaroh.booth.pm/" },
    ],

    sidebar: [
      {
        text: "Build Guides",
        items: [{ text: "Maggie42x", link: "/maggie42x" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/tamaroh" },
      { icon: "twitter", link: "https://twitter.com/tamaroh" },
    ],
  },
});
