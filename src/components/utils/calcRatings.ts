import { InnerRating } from '../../interfaces/Rating';

export const calcRatings = (ratings: InnerRating[]): string => {
  let likes = 0;
  let dislikes = 0;
  ratings.forEach((rating) => {
    if (rating.rating === 2) {
      likes += 1;
    }
    if (rating.rating === 1) {
      dislikes += 1;
    }
  });

  return ((likes * 5) / (likes + dislikes)).toFixed(1);
};
