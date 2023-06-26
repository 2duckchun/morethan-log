const CONFIG = {
  // profile setting (required)
  profile: {
    name: "2DC",
    image: "/2DC.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "사고할 수 있는 개발자가 되기 위해 열심히 공부하고 있습니다.",
    email: "kkts9308@gmail.com",
    linkedin: "",
    github: "2duckchun",
    instagram: "kts9308",
  },
  projects: [
    {
      name: `momovivie`,
      href: "https://github.com/2duckchun/momovivie",
    },
    {
      name: `deverymarkit`,
      href: "https://github.com/deverymarkit",
    },
  ],
  // blog setting (required)
  blog: {
    title: "의미있는 기록 저장소",
    description: "Welcome to my Log!",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://morethan-2dc.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://avatars.githubusercontent.com/u/92588154?v=4", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "2duckchun/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
