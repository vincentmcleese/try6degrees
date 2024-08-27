"use client";

import {
  CircularProgress,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ScoreCardProps {
  data: {
    title: string;
    loaddelay: number;
    result: string;
  };
  index: number;
}

export default function ScoreCard({ data, index }: ScoreCardProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = data.loaddelay / 100;
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prevProgress + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [data.loaddelay]);

  return (
    <Card>
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          src="/6degrees_black.png"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{data.title}</p>
        </div>
      </CardHeader>
      <CardBody className="flex justify-center items-center min-h-[100px] md:min-h-[150px]">
        {progress < 100 ? (
          <CircularProgress
            aria-label="Calculating..."
            label="Calculating..."
            value={progress}
            color="default"
            size="lg"
          />
        ) : (
          <p className="text-base md:text-lg text-[#FF5700]">{data.result}</p>
        )}
      </CardBody>
    </Card>
  );
}
