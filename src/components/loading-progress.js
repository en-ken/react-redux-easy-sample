import React from "react";
import { CircularProgress } from "material-ui/Progress";

const LoadingProgress = props =>
  (
    <div className={props.classes.loading}>
      <CircularProgress size={100} />
    </div>
  );

export default LoadingProgress;

