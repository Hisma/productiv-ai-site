import { v as createVNode, h as Fragment, _ as __astro_tag_component__ } from './astro/server_Bg5UpsQb.mjs';
import { d as $$CardGrid, e as $$Card } from './Code_CQXA78ls.mjs';

const frontmatter = {
  "title": "ProductivAI",
  "description": "Leverage AI tools and techniques to maximize your productivity",
  "template": "splash",
  "hero": {
    "tagline": "Learn How to Leverage AI to Boost your Productivity",
    "image": {
      "file": "../../assets/ai-productivity.png"
    },
    "actions": [{
      "text": "Get Started",
      "link": "/start/wsl2-portainer/",
      "icon": "right-arrow"
    }, {
      "text": "Connect with me on LinkedIn",
      "link": "https://www.linkedin.com/in/richard-meyer-5b606122/",
      "icon": "linkedin",
      "variant": "minimal"
    }]
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "level-up-your-ai-skills",
    "text": "Level Up Your AI Skills"
  }];
}
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<div class=\"sl-heading-wrapper level-h2\"><h2 id=\"level-up-your-ai-skills\">Level Up Your AI Skills</h2><a class=\"sl-anchor-link\" href=\"#level-up-your-ai-skills\"><span aria-hidden=\"true\" class=\"sl-anchor-icon\"><svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\"><path fill=\"currentcolor\" d=\"m12.11 15.39-3.88 3.88a2.52 2.52 0 0 1-3.5 0 2.47 2.47 0 0 1 0-3.5l3.88-3.88a1 1 0 0 0-1.42-1.42l-3.88 3.89a4.48 4.48 0 0 0 6.33 6.33l3.89-3.88a1 1 0 1 0-1.42-1.42Zm8.58-12.08a4.49 4.49 0 0 0-6.33 0l-3.89 3.88a1 1 0 0 0 1.42 1.42l3.88-3.88a2.52 2.52 0 0 1 3.5 0 2.47 2.47 0 0 1 0 3.5l-3.88 3.88a1 1 0 1 0 1.42 1.42l3.88-3.89a4.49 4.49 0 0 0 0-6.33ZM8.83 15.17a1 1 0 0 0 1.1.22 1 1 0 0 0 .32-.22l4.92-4.92a1 1 0 0 0-1.42-1.42l-4.92 4.92a1 1 0 0 0 0 1.42Z\"></path></svg></span><span class=\"sr-only\">Section titled “Level Up Your AI Skills”</span></a></div>\n"
    }), createVNode($$CardGrid, {
      children: [createVNode($$Card, {
        title: "RAG",
        icon: "open-book",
        "set:html": "<p>Build an AI-powered local knowledge base.</p>"
      }), createVNode($$Card, {
        title: "External Tools",
        icon: "puzzle",
        "set:html": "<p>Connect AI models to external tools with MCPs and A2A.</p>"
      }), createVNode($$Card, {
        title: "Agentic Programming",
        icon: "vscode",
        "set:html": "<p>Code efficiently with agentic tools in vscode like Cline and Copilot.</p>"
      }), createVNode($$Card, {
        title: "Workflows",
        icon: "seti:pipeline",
        "set:html": "<p>Automate tedious tasks with prompt techniques and productivity workflows.</p>"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}

const url = "src/content/docs/index.mdx";
const file = "/config/workspace/productiv-ai-site/src/content/docs/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/config/workspace/productiv-ai-site/src/content/docs/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
