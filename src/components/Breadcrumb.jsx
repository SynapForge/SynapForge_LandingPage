import React from "react";

export default function Breadcrumb({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="sf-breadcrumb" aria-label="Breadcrumb">
      <ol className="sf-breadcrumb-list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li
              key={index}
              className={`sf-breadcrumb-item ${isLast ? "is-active" : ""}`}
            >
              {index > 0 && (
                <span className="sf-breadcrumb-sep" aria-hidden="true">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span className="sf-breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="sf-breadcrumb-link">
                  {index === 0 && (
                    <span
                      className="sf-breadcrumb-home-icon"
                      aria-hidden="true"
                    >
                      ⌂
                    </span>
                  )}
                  <span>{item.label}</span>
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
