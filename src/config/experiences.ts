type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  company: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
};


export const experiencesList: ExperienceModel[] = [
  {
    company: "Pagtel",
    startDate: "2022-07-01",
    image: "/images/experiences/pagtel.png",
  },
  {
    company: "Senai",
    startDate: "2021-08-13",
    endDate: "2022-06-30",
    image: "/images/experiences/senai.png",
  },
  {
    company: "FIAP",
    startDate: "2023-01-16",
    image: "/images/experiences/fiap.png",
  },
];
