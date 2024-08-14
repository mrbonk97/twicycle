interface RegionCardProps {
  isSelected: boolean;
  title: string;
  onClick: () => void;
}

export const RegionCard = ({ isSelected, title, onClick }: RegionCardProps) => (
  <li
    onClick={onClick}
    className={`p-4 w-full border-b cursor-pointer duration-150 hover:bg-secondary
      ${isSelected && "bg-secondary"}`}
  >
    {title}
  </li>
);
