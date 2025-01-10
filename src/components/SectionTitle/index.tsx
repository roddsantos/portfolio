type SectionTitleType = {
  icon?: string;
  title: string;
  className?: string;
};

export default function SectionTitle({
  icon,
  title,
  className,
}: SectionTitleType) {
  return (
    <div className={`mr-auto w-full flex items-center ${className}`}>
      {icon && (
        <i className="text-[32px] material-icons icon mr-2 text-frontground">
          {icon}
        </i>
      )}
      <h3>{title}</h3>
    </div>
  );
}
