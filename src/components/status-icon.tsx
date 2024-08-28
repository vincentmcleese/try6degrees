"use client";

import { Chip } from "@nextui-org/react";
import { CheckIcon } from "@/app/icons/check";
import { LockIcon } from "@/app/icons/lock";

export default function StatusIcon({
  unlocked,
}: Readonly<{
  unlocked: boolean;
}>) {
  return (
    <Chip
      startContent={unlocked ? <CheckIcon size={18} /> : <LockIcon size={18} />}
      variant="faded"
      color={unlocked ? "success" : "danger"}
    >
      {unlocked ? "unlocked" : "locked    "}
    </Chip>
  );
}
