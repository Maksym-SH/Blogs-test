export interface IBlogItem {
  createdAt: string;
  title: string;
  preview: string;
  description: string;
  id: string;
  image: string;
  operationName?: string;
  variables: object;
  query: string;
  imageLoaded?: boolean;
}

export enum Lenght {
  BLOGS_IN_PAGE = 6,
}
