import useTranslation from "next-translate/useTranslation";
import IconGeneretor from "components/IconGeneretor";

export default function SphereItem({ item, className }) {
  const { lang } = useTranslation();

  return (
    <p className={className}>
      <IconGeneretor icon={item?.sphere_icon} />
      <p>{item[`${lang}_name`]}</p>
    </p>
  );
}
