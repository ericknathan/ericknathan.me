type ExperienceDate = `${number}-${number}-${number}`;
export type ExperienceModel = {
  company: string;
  role: string;
  startDate: ExperienceDate;
  endDate?: ExperienceDate;
  image: string;
};


export const experiencesList: ExperienceModel[] = [
  {
    company: "Pagtel",
    role: "Junior Front-end developer",
    startDate: "2022-07-01",
    image: "/images/experiences/pagtel.png",
  },
  {
    company: "Senai",
    role: "Systems development student",
    startDate: "2021-08-13",
    endDate: "2022-06-30",
    image: "/images/experiences/senai.png",
  },
  {
    company: "FIAP",
    role: "Analysis and systems development student",
    startDate: "2023-01-16",
    image: "/images/experiences/fiap.png",
  },
];
