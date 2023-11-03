export type ProjectModel = {
  id: string;
  name: string;
  shortDescription: string;
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
    shortDescription:
      "A white-label application to rent any vehicle, developed during the BRQ Easy Carros Challenge on FIAP.",
    projectUrl: "https://easy-aluga.vercel.app",
    sourceUrl: "https://github.com/ericknathan/easy-aluga/settings",
    imagePreviewUrl: "/images/projects/easy-aluga.png",
    highlight: true,
  },
  {
    id: "stone-currency",
    name: "Stone Currency",
    shortDescription:
      "Web application developed to facilitate the conversion of monetary values from US dollars to Brazilian reals.",
    projectUrl: "https://the-stone-currency.vercel.app",
    sourceUrl: "https://github.com/ericknathan/stone-currency",
    imagePreviewUrl: "/images/projects/stone-currency.png",
    highlight: true,
  },
  {
    id: "3d-product-preview",
    name: "3D Product Preview",
    shortDescription:
      "A simple 3D sofa product previewer made with Svelte and Threlte, a ThreeJS library for Svelte.",
    projectUrl: "https://the-3d-product-preview.vercel.app",
    sourceUrl: "https://github.com/ericknathan/3d-product-preview",
    imagePreviewUrl: "/images/projects/3d-product-preview.png",
    highlight: true,
  },
  {
    id: "devify",
    name: "Devify",
    shortDescription:
      "Web application to displays the song currently playing on my spotify account.",
    projectUrl: "https://devify-music.vercel.app",
    sourceUrl: "https://github.com/ericknathan/devify",
    imagePreviewUrl: "/images/projects/devify.png",
  },
  {
    id: "codeleap-network",
    name: "Codeleap Network",
    shortDescription:
      "CodeLeap Network is a social network application developed to manage posts on an API provided by CodeLeap.",
    projectUrl: "https://thecodeleapnetwork.vercel.app",
    sourceUrl: "https://github.com/ericknathan/codeleap-network",
    imagePreviewUrl: "/images/projects/codeleap-network.png",
  },
  {
    id: "igtimer",
    name: "Ig.timer",
    shortDescription:
      "A project that allows the user to time their daily tasks, in addition to allowing them to see a history of all the tasks already carried out.",
    projectUrl: "https://igtimer.vercel.app",
    sourceUrl: "https://github.com/ericknathan/ig.timer",
    imagePreviewUrl: "/images/projects/igtimer.png",
  },
  {
    id: "four-dev",
    name: "4Dev",
    shortDescription:
      "A social network application for registering questionnaires, including functionalities for synthesizing knowledge in React with Typescript and Hooks, using TDD, Clean Architecture, Design Patterns and SOLID.",
    projectUrl: "https://fourdev.vercel.app/signin",
    sourceUrl: "https://github.com/ericknathan/react-clean-architecture",
    imagePreviewUrl: "/images/projects/four-dev.png",
    highlight: true,
  },
  {
    id: "foodie",
    name: "Foodie",
    shortDescription:
      "A landing page developed with HTML and CSS during the Marking Language classes at Senai.",
    projectUrl: "https://ericknathan.github.io/foodie",
    sourceUrl: "https://github.com/ericknathan/foodie",
    imagePreviewUrl: "/images/projects/foodie.png",
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe",
    shortDescription:
      "A simple tic tac toe game developed with HTML, CSS and Javascript during the Web Front-End Programming classes at Senai.",
    projectUrl: "https://ericknathan.github.io/tic-tac-toe",
    sourceUrl: "https://github.com/ericknathan/tic-tac-toe",
    imagePreviewUrl: "/images/projects/tic-tac-toe.png",
  },
];
