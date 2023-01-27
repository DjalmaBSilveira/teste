export interface Animal {
  id: number;
  postdate: Date;
  url: string;
  description: string;
  allowComments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
