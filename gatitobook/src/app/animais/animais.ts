export interface Animal {
  id: number;
  postdate: Date;
  url: string;
  description: string;
  allowcomments: boolean;
  likes: number;
  comments: number;
  userId: number;
}

export type Animais = Array<Animal>;
