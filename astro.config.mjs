// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "server",
  adapter: netlify(),

  // Replace with your actual Netlify site URL
  site: "https://productiv-ai.netlify.app/",

  integrations: [
    starlight({
      title: "ProductivAI Learning",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Start Learning",
          items: [
            {
              label: "Deploy Linux & Docker/Portainer",
              slug: "start/wsl2-portainer",
            },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
