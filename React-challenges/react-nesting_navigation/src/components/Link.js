import React from "react";

// COMBINING CHILDREN AND PROS
export default function Link({ href, children }) {
  return (
    <a className="navigation__link" href={href}>
      {children}
    </a>
  );
}
