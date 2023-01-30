export default interface Letter {
  id: number;
  author: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  };
  to: {
    name: string;
    surname: string;
    email: string;
    avatar?: string;
  }[];
  title: string;
  text: string;
  bookmark: boolean;
  important: boolean;
  read: boolean;
  folder?: string;
  flag?: string;
  date: string;
  doc?: {
    img: string;
  };
}
