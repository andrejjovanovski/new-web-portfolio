import React from "react";

export const TechIcon = ({component}: { component: React.ElementType }) => {
  const Component = component;
  return <>
    <Component size="40"/>
  </>
}
