import { Tooltip, Button } from "@nextui-org/react";

export const InformationTooltip = (props) => {
  const { content } = props;
  return (
    <Tooltip content={content} placement="bottom">
      <Button
        style={{
          margin: 0,
          marginLeft: 15,
          padding: 0,
          height: 15,
          minWidth: 15,
          width: 15,
        }}
      >
        i
      </Button>
    </Tooltip>
  );
};
