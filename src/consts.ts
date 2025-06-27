export const website: string = "sitename";
export const siteName: string = "SiteName";
export const siteTitle: string = "SiteName - small description";
export const siteDescription: string = "site description";

export type categoryName = "category1" | "category2" | "category3";
export const categoryInfo: {
  [key: string]: { title: string; description: string };
} = {
  category1: {
    title: "Category1",
    description: "category1 description",
  },
  category2: {
    title: "Category2",
    description: "category2 description",
  },
  category3: {
    title: "Category3",
    description: "category3 description",
  },
};

export const socialInfo: {
  [key: string]: { url: string; username: string };
} = {
  x: {
    url: "https://x.com/username",
    username: "@username",
  },
  reddit: {
    url: "https://www.reddit.com/r/username",
    username: "r/username",
  },
  instagram: {
    url: "https://www.instagram.com/username",
    username: "@username",
  },
  threads: {
    url: "https://www.threads.net/@username",
    username: "@username",
  },
  mastodon: {
    url: "https://mastodon.social/@username",
    username: "@username",
  },
  pinterest: {
    url: "https://www.pinterest.com/username/",
    username: "@username",
  },
  rss: {
    url: "/feed/",
    username: "Our RSS feed",
  },
};

export const dotMenuMap: { [key: string]: string } = {
  "content-index": "Content Index",
  about: "About",
};

export const contentTypeInfo: {
  [key: string]: { title: string; description: string };
} = {
  news: {
    title: "News",
    description: "news description",
  },
  review: {
    title: "Review",
    description: "review description",
  },
  list: {
    title: "List",
    description: "list description",
  },
};
