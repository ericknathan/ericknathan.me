export type ProjectModel = {
  id: string;
  name: string;
  projectUrl?: string;
  sourceUrl?: string;
  imagePreviewUrl: string;
  iconUrl?: string;
  highlight?: boolean;
};

export const projectsList: ProjectModel[] = [
  {
    id: "easy-aluga",
    name: "Easy Aluga",
    projectUrl: "https://easy-aluga.vercel.app",
    sourceUrl: "https://github.com/ericknathan/easy-aluga/settings",
    imagePreviewUrl: "/images/projects/easy-aluga.png",
    highlight: true,
  },
  {
    id: "stone-currency",
    name: "Stone Currency",
    projectUrl: "https://the-stone-currency.vercel.app",
    sourceUrl: "https://github.com/ericknathan/stone-currency",
    imagePreviewUrl: "/images/projects/stone-currency.png",
    highlight: true,
  },
  {
    id: "3d-product-preview",
    name: "3D Product Preview",
    projectUrl: "https://the-3d-product-preview.vercel.app",
    sourceUrl: "https://github.com/ericknathan/3d-product-preview",
    imagePreviewUrl: "/images/projects/3d-product-preview.png",
    highlight: true,
  },
  {
    id: "devify",
    name: "Devify",
    projectUrl: "https://devify-music.vercel.app",
    sourceUrl: "https://github.com/ericknathan/devify",
    imagePreviewUrl: "/images/projects/devify.png",
  },
  {
    id: "codeleap-network",
    name: "Codeleap Network",
    projectUrl: "https://thecodeleapnetwork.vercel.app",
    sourceUrl: "https://github.com/ericknathan/codeleap-network",
    imagePreviewUrl: "/images/projects/codeleap-network.png",
  },
  {
    id: "igtimer",
    name: "Ig.timer",
    projectUrl: "https://igtimer.vercel.app",
    sourceUrl: "https://github.com/ericknathan/ig.timer",
    imagePreviewUrl: "/images/projects/igtimer.png",
  },
  {
    id: "four-dev",
    name: "4Dev",
    projectUrl: "https://fourdev.vercel.app/signin",
    sourceUrl: "https://github.com/ericknathan/react-clean-architecture",
    imagePreviewUrl: "/images/projects/four-dev.png",
    highlight: true,
  },
  {
    id: "foodie",
    name: "Foodie",
    projectUrl: "https://ericknathan.github.io/foodie",
    sourceUrl: "https://github.com/ericknathan/foodie",
    imagePreviewUrl: "/images/projects/foodie.png",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    projectUrl: "https://ericknathan.github.io/tic-tac-toe",
    sourceUrl: "https://github.com/ericknathan/tic-tac-toe",
    imagePreviewUrl: "/images/projects/tic-tac-toe.png",
  },
];
