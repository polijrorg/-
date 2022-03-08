import * as React from "react";
import { Svg } from "expo";

function Arrow(props) {
  return (
    <Svg width={20} height={13} fill="none" {...props}>
      <Svg.Path
        d="M1.87.49L.1 2.26l9.9 9.9 9.9-9.9L18.13.49 10 8.62 1.87.49z"
        fill="#545454"
      />
    </Svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
