// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        mdx({
            remarkPlugins: [remarkGfm],
            rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
        })
    ],
    markdown: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark' }]],
    },
});