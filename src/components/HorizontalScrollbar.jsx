import { Box } from "@mui/material";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import { BodyPart } from "./BodyPart";

// eslint-disable-next-line
export function HorizontalScrollbar({ data, bodyPart, setBodyPart }) {
  return (
    <ScrollMenu>
    {/* eslint-disable-next-line */}
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}