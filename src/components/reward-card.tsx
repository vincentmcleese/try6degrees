"use client";

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react";
import StatusIcon from "@/components/status-icon";
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

        <StatusIcon unlocked={item.unlocked} />
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
