interface RegionCardProps {
  isSelected: boolean;
  title: string;
  onClick: () => void;
}

export const RegionCard = ({ isSelected, title, onClick }: RegionCardProps) => (
  <li
    onClick={onClick}
    className={`py-[11px] px-5 w-full border-b cursor-pointer duration-150 hover:bg-secondary/80
      ${isSelected && "bg-secondary"}`}
  >
    {title}
  </li>
);
