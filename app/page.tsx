"use client";
import Image from "next/image";
import { useDateFormatter } from "@react-aria/i18n";
import { today, getLocalTimeZone } from "@internationalized/date";
import { useState } from "react";

export const dynamic = "force-dynamic";
export default function Home() {
  const formatter = useDateFormatter({ dateStyle: "full" });
  const [selectedDay, setSelectedDay] = useState(
    formatter.format(today(getLocalTimeZone()).toDate(getLocalTimeZone()))
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <code className="font-mono font-bold">{selectedDay}</code>
      </p>
    </main>
  );
}
