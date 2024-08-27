"use client";
import { PopupButton } from "@typeform/embed-react";
import { Input, Button, Card } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function EntryForm() {
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Form submitted successfully");
    router.push("./demo/rewards");
  };

  return (
    <>
      <Card>
        <p className="mt-4 text-lg animate-fadeIn">
          How can we best notify you about future rewards?
        </p>
        <PopupButton
          id="SumFZWsT"
          style={{ fontSize: 20 }}
          className="my-button"
          onSubmit={handleSubmit}
        >
          click to open form in popup
        </PopupButton>

        <div id="typeform-container"></div>
      </Card>
    </>
  );
}
