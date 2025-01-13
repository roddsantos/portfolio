import { Tooltip, TooltipProps } from "@nextui-org/tooltip";

type CustomTooltipType = {
  title: string;
  className?: string;
};

export default function CustomTooltip({
  title,
  className,
  ...props
}: TooltipProps & CustomTooltipType) {
  return (
    <Tooltip
      {...props}
      content={
        <div
          className={`bg-primary p-2 border-black border-solid border-2 shadow-[5px_5px_black] ${className}`}
        >
          <h6 className="text-foreground">{title}</h6>
        </div>
      }
    >
      {props.children}
    </Tooltip>
  );
}
