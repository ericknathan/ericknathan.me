import Image from "next/image";
import React from "react";
import { Dialog } from "../ui";

interface ProjectImageDialogProps {
  children: React.ReactNode;
  imageUrl: string;
  projectName: string;
}

export function ProjectImageDialog({
  children,
  imageUrl,
  projectName,
}: ProjectImageDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Content className="p-0 !w-[90vw] max-w-7xl border-transparent overflow-hidden" closeClassName="mix-blend-difference">
        <Image
          src={imageUrl}
          alt={`Preview of ${projectName} project`}
          className="w-full"
          width={1280}
          height={720}
        />
      </Dialog.Content>
    </Dialog.Root>
  );
}
