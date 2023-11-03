"use client";

import {
  ForwardRefComponent,
  HTMLMotionProps,
  Target,
  motion,
  useReducedMotion,
} from "framer-motion";
import { ReactHTML } from "react";

type Without<T, K> = Pick<T, Exclude<keyof T, K>>;

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  to?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  value?: number;
  as?: Without<keyof ReactHTML, "template" | "slot">;
  initial?: Target;
  animate?: Target;
  exit?: Target;
  startOnScrollIntersect?: boolean;
}

export function FadeIn({
  children,
  to = "right",
  delay = 0,
  duration = 0.2,
  value = 20,
  as = "div",
  initial,
  animate,
  exit,
  startOnScrollIntersect = false,
  ...props
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const animation = {
    left: {
      direction: "x",
      value: value,
    },
    right: {
      direction: "x",
      value: value * -1,
    },
    top: {
      direction: "y",
      value: value,
    },
    bottom: {
      direction: "y",
      value: value * -1,
    },
  }[to];

  // @ts-expect-error
  const Component = motion[as] as ForwardRefComponent<
    HTMLDivElement,
    HTMLMotionProps<"div">
  >;

  const defaultStyles = {
    opacity: shouldReduceMotion ? 1 : 0,
    [animation.direction]: shouldReduceMotion ? 0 : animation.value,
  };
  const animationStyles = { opacity: 1, [animation.direction]: 0, ...animate };

  return (
    <Component
      initial={{ ...defaultStyles, ...initial }}
      animate={startOnScrollIntersect ? undefined : animationStyles}
      whileInView={startOnScrollIntersect ? animationStyles : undefined}
      exit={startOnScrollIntersect ? undefined : { ...defaultStyles, ...exit }}
      transition={{ delay, duration }}
      viewport={{
        once: startOnScrollIntersect,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
