export type Game = {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  rating: number;
  image_background: string;
  genres: { id: number; name: string }[]; // Array of genres
};

export type GameResponse = {
  results: Game[];
  count: number;
};
