export interface Game {
  _id: string;
  title: string;
  category: string;
  description: string;
  platform: string[];
  developer: string;
  releaseDate?: string;
  cover: string;
  rating: number;
  ratedBy: string[];
  __v: number;
}
