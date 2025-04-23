import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import netlify from "@astrojs/netlify";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import embeds from "astro-embed/integration";

import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://productiv-ai.netlify.app/",
  integrations: [
    // Add this line
    embeds(),
    starlight({
      title: "ProductivAI Docs",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "Github",
          href: "https://github.com/Hisma/productiv-ai-site",
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
            {
              label: "Install OpenWebUI and Ollama",
              slug: "start/ollama-open-webui",
            },
          ],
        },
      ],
    }),
    icon(),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
