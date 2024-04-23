import { Card } from "components/Quation/QuationsCard";
import { useState } from "react";

function Quation() {
  const [open, setOpen] = useState(false);
  const handleAction = () => {
    console.log("hi");
    console.log(open)
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
    console.log(open)
  };
  return (
    <>
      <Card open={open} onAction={handleAction}>
        heloosgh
      </Card>
    </>
  );
}

export default Quation;
