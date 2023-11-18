type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  company: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
  highlight?: boolean;
};

export const experiencesList: ExperienceModel[] = [
  {
    company: "Pagtel",
    startDate: "2022-07-01",
    image: "/images/experiences/pagtel.png",
    highlight: true
  },
  {
    company: "Senai",
    startDate: "2021-01-01",
    endDate: "2022-06-30",
    image: "/images/experiences/senai.png",
  },
  {
    company: "FIAP",
    startDate: "2023-01-01",
    image: "/images/experiences/fiap.png",
  },
  {
    company: "Rocketseat",
    startDate: "2021-11-01",
    endDate: "2022-11-01",
    image: "/images/experiences/rocketseat.png",
  },
];
