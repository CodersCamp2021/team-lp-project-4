export interface InnerRating {
  _id: string;
  gameId: string;
  userId: string;
  __v: number;
  rating: number;
  userInfo: [
    {
      firstName: string;
      lastName: string;
      username: string;
    },
  ];
}

export interface Rating {
  rating: InnerRating[];
}
