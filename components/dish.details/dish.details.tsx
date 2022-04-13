import { DishDetailsProps } from "./types";
import Styles from "./dish.details.module.css";
import { IconCategory, IconDelivery, IconReviews } from "icons/icons";

export function DishDetails({ type, title, subtitle }: DishDetailsProps) {
  const Icon =
    type === "delivery"
      ? IconDelivery
      : type === "category"
      ? IconCategory
      : IconReviews;
  return (
    <div className={Styles.detalhes}>
      <div className={Styles.icon}>
        <Icon />
      </div>
      {subtitle && <span>{subtitle}</span>}
      {title}
    </div>
  );
}
