import React from "react";

export type FormData = {
  Name: string;
  Email: string;
  Password: string;
};

type SetFormData = React.Dispatch<React.SetStateAction<FormData>>;

export const handleTextChange = (
  text: string,
  field: string,
  setFormData: SetFormData
): void => {
  setFormData((prevState) => ({
    ...prevState,
    [field]: text,
  }));
};
