import React from "react";

export default function withClass(WrappedComponent, className) {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
}
