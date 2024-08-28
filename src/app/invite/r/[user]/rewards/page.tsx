"use client";

import { Button, ButtonGroup, Avatar } from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Image from "next/image";
import RewardCard from "@/components/reward-card";

export default function Rewards() {
  const [selectedStatus, setSelectedStatus] = useState("1");
  const filteredData = data.filter((item) => item.status === selectedStatus);
  const notify = () =>
    toast("This is a demo. We will notify you once we're live!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" left-0 top-0 flex w-full justify-center border border-[#FF5700] bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image
            src="/6degrees_black.png"
            alt="6 Degrees Logo"
            width={150}
            height={50}
          />
        </div>
        <div className=" left-0 top-0 flex w-full justify-center border border-[#FF5700] bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Avatar onClick={notify} />
          <div className="ml-4">
            <p> Level 2</p>
            <p> Username </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col mt-8">
        <ButtonGroup>
          {buttons.map((button, index) => (
            <Button
              key={index}
              color={selectedStatus === button.status ? "secondary" : "default"}
              onClick={() => setSelectedStatus(button.status)}
            >
              {button.label}
            </Button>
          ))}
        </ButtonGroup>
      </div>
      <div className="w-full max-w-5xl mt-8 p-4  bg-gray-200 p-4 rounded-lg border border-[#FF5700]">
        Explanation about the level and status here.{" "}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
        {filteredData.map((item, index) => (
          <div key={index} onClick={notify}>
            <RewardCard item={item} />
          </div>
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}

const data = [
  {
    title: "3 months free Webflow",
    image: "/rewards/webflow.png",
    status: "1",
    description: "from Webflow in Website Builder",
    value: "$69 value",
    unlocked: true,
  },
  {
    title: "3 months free Pictory AI",
    image: "/rewards/pictory.jpeg",
    status: "1",
    description: "from Pictory.AI in Design",
    value: "$147 value",
    unlocked: true,
  },
  {
    title: "$5k fee free Stripe payments",
    image: "/rewards/stripe.avif",
    status: "1",
    description: "from Stripe in Payment Processing",
    value: "$150 value",
    unlocked: true,
  },
  {
    title: "$1,000 credit for Team Plan",
    image: "/rewards/miro.png",
    status: "2",
    description: "from Miro (Miro.com) in Collaboration",
    value: "$1,000 value",
    unlocked: true,
  },
  {
    title: "1 Year of GitHub Enterprise",
    image: "/rewards/github.png",
    status: "2",
    description: "from GitHub in Development",
    value: "$5,000 value",
    unlocked: true,
  },
  {
    title: "Up to 90% off DocSend",
    image: "/rewards/docsend.jpg",
    status: "2",
    description: "from DocSend in Collaboration",
    value: "$1,620 value",
    unlocked: true,
  },
  {
    title: "Up to 75% off Hubspot CRM",
    image: "/rewards/hubspot.png",
    status: "3",
    description: "from HubSpot for Startups in CRM",
    value: "$30,000 value",
    unlocked: false,
  },
  {
    title: "Up to $350k GCP start-up credits",
    image: "/rewards/GCP.png",
    status: "3",
    description: "from Google Cloud Platform (GCP)",
    value: "$350,000 value",
    unlocked: false,
  },
  {
    title: "Up to $100k OVH Hosting",
    image: "/rewards/ovh.png",
    status: "3",
    description: "from OVH in Hosting",
    value: "$100,000 value",
    unlocked: false,
  },
];

const buttons = [
  { label: "Level 1", status: "1" },
  { label: "Level 2", status: "2" },
  { label: "Level 3", status: "3" },
];
