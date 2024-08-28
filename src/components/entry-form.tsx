"use client";
import { PopupButton } from "@typeform/embed-react";
import { Input, Button, Card, CardHeader, CardBody } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { SixdegreesIcon } from "@/app/icons/6degrees.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EntryForm() {
  const router = useRouter();
  const handleSubmit = () => {
    console.log("Form submitted successfully");
    router.push("./demo/rewards");
  };
  const handlePopupClose = () => {
    console.log("Form was abandoned without completion. Please try again.");
    toast("Form was abandoned without completion. Please try again.");
  };

  return (
    <>
      <Card>
        <CardHeader className="flex justify-center">
          <p className="mt-4 text-lg animate-fadeIn">
            Your spot is reserved—join now and see the offers you&apos;d be
            eligible for!
          </p>
        </CardHeader>
        <CardBody>
          <div className="flex justify-center">
            <PopupButton
              id="K9mlVzTr"
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
              onClose={handlePopupClose}
            >
              <SixdegreesIcon style={{ marginRight: "8px" }} />
              Enter app
            </PopupButton>
          </div>
        </CardBody>

        <div id="typeform-container"></div>
        <ToastContainer />
      </Card>
    </>
  );
}
