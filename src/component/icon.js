import React from "react";

export default function Icon({ icon, title, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img src={icon} alt={title} />
    </a>
  );
}
