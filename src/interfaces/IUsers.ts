export interface IUsers {
  users: {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    avatarUrl: string | null;
  };
  total: number;
}
