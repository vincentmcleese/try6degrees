"use client";

import {
  CircularProgress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
  Divider,
} from "@nextui-org/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Image from "next/image";
import ScoreCard from "@/components/score-card";

export default function Rewards() {
  const [selectedStatus, setSelectedStatus] = useState("1");
  const filteredData = data.filter((item) => item.status === selectedStatus);
  const notify = () =>
    toast("This is a product Alpha. We will notify you once we're live!");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className=" left-0 top-0 flex w-full justify-center border border-[#FF5700] bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <Image
            src="/6degrees_black.png"
            alt="6 Degrees Logo"
            width={150} // Adjust the width as needed
            height={50} // Adjust the height as needed
          />
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full max-w-5xl">
        {filteredData.map((item, index) => (
          <div key={index} onClick={notify}>
            <Card className="bg-white shadow-lg rounded-lg" isHoverable={true}>
              <CardHeader className="font-bold text-lg">
                {item.title}
              </CardHeader>
              <Divider />
              <CardBody>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
                <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                <p className="mt-2 text-sm text-gray-600">
                  Status: {item.status}
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Value: {item.value}
                </p>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
      <ToastContainer />
    </main>
  );
}

const data = [
  {
    title: "Card 1",
    image: "/path/to/image1.jpg",
    status: "1",
    description: "This is the description for card 1.",
    value: "$100",
  },
  {
    title: "Card 2",
    image: "/path/to/image2.jpg",
    status: "1",
    description: "This is the description for card 2.",
    value: "$150",
  },
  {
    title: "Card 3",
    image: "/path/to/image3.jpg",
    status: "1",
    description: "This is the description for card 3.",
    value: "$200",
  },
  {
    title: "Card 4",
    image: "/path/to/image4.jpg",
    status: "2",
    description: "This is the description for card 4.",
    value: "$250",
  },
  {
    title: "Card 5",
    image: "/path/to/image5.jpg",
    status: "2",
    description: "This is the description for card 5.",
    value: "$300",
  },
  {
    title: "Card 6",
    image: "/path/to/image6.jpg",
    status: "2",
    description: "This is the description for card 6.",
    value: "$350",
  },
  {
    title: "Card 7",
    image: "/path/to/image7.jpg",
    status: "3",
    description: "This is the description for card 7.",
    value: "$400",
  },
  {
    title: "Card 8",
    image: "/path/to/image8.jpg",
    status: "3",
    description: "This is the description for card 8.",
    value: "$450",
  },
  {
    title: "Card 9",
    image: "/path/to/image9.jpg",
    status: "3",
    description: "This is the description for card 9.",
    value: "$500",
  },
];

const buttons = [
  { label: "Level 1", status: "1" },
  { label: "Level 2", status: "2" },
  { label: "Level 3", status: "3" },
];
