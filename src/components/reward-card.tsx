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
  Chip,
} from "@nextui-org/react";
import { CheckIcon } from "@/app/icons/check";
import { LockIcon } from "@/app/icons/lock";

import Image from "next/image";

interface RewardCardProps {
  item: {
    title: string;
    image: string;
    description: string;
    status: string;
    value: string;
    unlocked: boolean;
  };
}

const RewardCard: React.FC<RewardCardProps> = ({ item }) => {
  return (
    <Card className="bg-white shadow-lg rounded-lg" isHoverable={true}>
      <CardHeader className="font-bold text-lg flex justify-between items-center">
        {item.title}

        <Chip
          startContent={<LockIcon size={18} />}
          variant="faded"
          color="success"
        >
          unlocked
        </Chip>
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
        <p className="mt-2 text-sm text-gray-600">Status: {item.status}</p>
        <p className="mt-2 text-sm text-gray-600">Value: {item.value}</p>
      </CardBody>
    </Card>
  );
};

export default RewardCard;
