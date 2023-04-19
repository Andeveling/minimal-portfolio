export type ImagesCollectionT = {
  id: number | string;
  title: string;
  url: string;
};
export type ProjectT = {
  id: number | string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  imagesUrl: ImagesCollectionT[];
  repository: string;
  deploy: string;
  role: string;
  tech: string[];
  contribution: string;
};
