"use server";

import Image from "next/image";
import ScoreCard from "@/components/score-card";
import EntryForm from "@/components/entry-form";
import { Input, Button, Card } from "@nextui-org/react";
import Link from "next/link";

const data = [
  {
    title: "Top Subreddit",
    loaddelay: 3000,
    result: "r/entrepreneurship",
  },
  {
    title: "Influence Factor",
    loaddelay: 6000,
    result: "Top 5% of voices",
  },
  {
    title: "6degrees Status",
    loaddelay: 9000,
    result: "Level 2",
  },
];

const logos = [
  "/logos/typeform.webp",
  "/logos/retool.webp",
  "/logos/miro.webp",
  "/logos/gcp.webp",
  "/logos/hubspot.webp",
  "/logos/zendesk.webp",
  "/logos/openai.webp",
  "/logos/webflow.webp",
  "/logos/stripe.webp",
  "/logos/notion.webp",
  "/logos/airtable.webp",
  "/logos/aws.webp",
];

export default async function Home({ params }: { params: any }) {
  const { user } = params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed left-0 top-0 flex w-full justify-center border border-gray-200 sm:border-[#FF5700] bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          {" "}
          <Image
            src="/PrimaryLogo_1.svg"
            alt="6 Degrees Logo"
            width={150}
            height={50}
          />
        </div>
      </div>
      <div className="w-full max-w-5xl mt-24 sm:mt-16 text-center">
        <h1 className=" lg:text-6xl text-4xl font-bold animate-fadeIn">
          <span className="text-[#FF5700]">
            {user.charAt(0).toUpperCase() + user.slice(1)}
          </span>
          , you&lsquo;re Invited.
        </h1>
        <p className="mt-4 text-lg animate-fadeIn">
          You&apos;re one of 100 entrepreneurs chosen for the exclusive 6degrees
          Beta based on your authentic content on Reddit.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row w-full max-w-5xl mt-12 space-y-4 lg:space-y-0 lg:space-x-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 bg-gray-200 p-4 rounded-lg border border-[#FF5700]"
          >
            <ScoreCard data={item} index={index} />
          </div>
        ))}
      </div>

      <div className="w-full max-w-5xl mt-12 text-center">
        <h2 className="text-2xl font-bold">
          Unlock tailored rewards worth thousands of dollars from your top
          subreddit
        </h2>
      </div>

      <div className="scroll-container mt-12">
        <div className="scroll-content">
          {logos.concat(logos).map((logo, index) => (
            <div key={index}>
              <Image
                src={logo}
                width={50}
                height={50}
                alt={`Logo ${index}`}
                className="object-contain w-full h-full filter grayscale opacity-50"
              />
            </div>
          ))}
        </div>
        <div className="scroll-content" aria-hidden="true">
          {logos.concat(logos).map((logo, index) => (
            <div key={index}>
              <Image
                src={logo}
                width={50}
                height={50}
                alt={`Logo ${index}`}
                className="object-contain w-full h-full filter grayscale opacity-50"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full max-w-5xl mt-12 p-4  bg-gray-200 p-4 rounded-lg border border-[#FF5700]">
        <EntryForm />
      </div>
    </main>
  );
}
