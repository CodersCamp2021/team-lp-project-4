export interface Rating {
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
