type Field = {
  title: string;
  isPassword: boolean;
};

export const fields: Field[] = [
  { title: "Name", isPassword: false },
  { title: "Email", isPassword: false },
  { title: "Password", isPassword: true },
];
