"use client";
import { PopupButton } from "@typeform/embed-react";
import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SixdegreesIcon } from "@/app/icons/6degrees.jsx";

export default function EntryForm() {
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Form submitted successfully");
    router.push("./demo/rewards");
  };

  return (
    <>
      <Card>
        <CardHeader className="flex justify-center">
          <p className="mt-4 text-lg animate-fadeIn">Accept your invite </p>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center">
            <PopupButton
              id="SumFZWsT"
              style={{
                fontSize: 20,
                backgroundColor: "#FF5700",
                color: "white",
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "8px",
              }}
              className="my-button"
              onSubmit={handleSubmit}
            >
              <SixdegreesIcon style={{ marginRight: "8px" }} />
              Enter app
            </PopupButton>
          </div>
        </CardBody>

        <div id="typeform-container"></div>
      </Card>
    </>
  );
}
