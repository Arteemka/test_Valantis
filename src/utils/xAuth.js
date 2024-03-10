import md5 from "md5";
import { BASE_PASSWORD } from "../.env";

export default function xAuth() {
  const currentDate = new Date();
  const formatDate = ["year", "month", "day"].map((e) =>
    new Intl.DateTimeFormat("ru", {
      [e]: "numeric",
    })
      .format(currentDate)
      .padStart(2, "0")
  ).join``;

  return md5(`${BASE_PASSWORD}${formatDate}`);
}
