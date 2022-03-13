import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

const Arrow: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="1em" height="1em" viewBox="0 0 20 13" fill="none" {...props}>
      <Path
        d="M1.87.49L.1 2.26l9.9 9.9 9.9-9.9L18.13.49 10 8.62 1.87.49z"
        fill="#545454"
      />
    </Svg>
  );
}

const MemoArrow = React.memo(Arrow);
export default MemoArrow;
