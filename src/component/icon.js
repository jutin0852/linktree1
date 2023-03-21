import React from "react";

export default function Icon({ icon, title, href }) {
  return (
    <a href={href}>
      <img src={icon} alt={title} />
    </a>
  );
}
