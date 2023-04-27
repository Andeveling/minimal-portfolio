export type ImagesCollectionT = {
  id: string;
  title: string;
  url: string;
};
export type WorkData = {
  client: string;
  date: string;
  industries: string;
  roles: string[];
  problem: string;
  solution: string;
  outcome: string;
};
export type ProjectT = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imagesUrl: ImagesCollectionT[];
  repository: string;

  deploy: string;
  role: string;
  tech: string[];
  features: string[];
  contribution: string;
  isAWork: boolean;
  workData: WorkData;
};
