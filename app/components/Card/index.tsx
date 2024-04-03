import React from "react";
import { CardPropsType } from "./Card.types";

const Card = ({ title = "", children }: CardPropsType) => (
  <div className="rounded-lg border bg-white text-gray-500 font-semibold py-4 px-6 my-2">
    <span>{title}</span>
    {children}
  </div>
);

export default Card;
