interface Cover {
  cover_small: string;
  cover_big: string;
  screenshot_med: string;
  screenshot_big: string;
  screenshot_huge: string;
  logo_med: string;
  thumb: string;
  micro: string;
  '720p': string;
  '1080p': string;
}

export interface Game {
  _id: string;
  title: string;
  category: string;
  description: string;
  platform: string[];
  developer: string;
  releaseDate?: string;
  cover: Cover;
  rating: number;
  ratedBy: string[];
  ratings: {
    _id: string;
    likes: number;
    dislikes: number;
    stars: number;
  }[];
  __v: number;
}
