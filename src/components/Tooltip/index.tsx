import { Tooltip, TooltipProps } from "@nextui-org/tooltip";

type CustomTooltipType = {
  title: string;
};

export default function CustomTooltip({
  title,
  ...props
}: TooltipProps & CustomTooltipType) {
  return (
    <Tooltip
      {...props}
      content={
        <div
          className={`bg-primary p-2 border-black border-solid border-2 shadow-[5px_5px_black]`}
        >
          <h6 className="text-background">{title}</h6>
        </div>
      }
    >
      {props.children}
    </Tooltip>
  );
}
