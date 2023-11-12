"use client";

import { useTheme } from "@/contexts";
import { useTranslations } from "next-intl";
import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface AvatarProps
  extends Omit<ImageProps, "width" | "height" | "src" | "alt"> {
  size: number;
}

export function Avatar({ size, ...props }: AvatarProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const { colorScheme } = useTheme();
  const userData = useTranslations("config.userData");

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;
  return (
    <Image
      src={userData("avatarUrl", { colorScheme })}
      alt={userData("avatarAltDescription", { colorScheme })}
      width={size}
      height={size}
      {...props}
    />
  );
}
