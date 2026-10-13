import React from "react";
import { Home, ChevronRight } from "lucide-react";

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
                <ChevronRight
                  className="w-3 h-3 text-[#A0988E] mx-1 inline-block shrink-0"
                  aria-hidden="true"
                />
              )}
              {isLast || !item.href ? (
                <span className="sf-breadcrumb-current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a href={item.href} className="sf-breadcrumb-link flex items-center gap-1.5">
                  {index === 0 && (
                    <Home
                      className="w-3.5 h-3.5 text-[#FF5500] shrink-0"
                      aria-hidden="true"
                    />
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
