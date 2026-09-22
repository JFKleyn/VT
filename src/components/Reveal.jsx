import { useEffect, useRef, useState } from "react";
import "./Reveal.css";

export function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.18,
  ...props
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: amount, rootMargin: "0px 0px -7% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [amount]);

  return (
    <Tag
      ref={elementRef}
      className={`reveal reveal--${direction} ${
        visible ? "is-visible" : ""
      } ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...props}
    >
      {children}
    </Tag>
  );
}
