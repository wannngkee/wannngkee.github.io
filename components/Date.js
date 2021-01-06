import dayjs from "dayjs";
export default function Date({ dateString }) {
  return (
    <time dateTime={dateString}>{dayjs(dateString).format("MMM D, YYYY")}</time>
  );
}
