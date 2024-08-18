"use client";
import { FeedbackCard } from "@/components/card/feedback-card";
import { RequestCard } from "@/components/card/request-card";
import { useState } from "react";

export const RequestCards = () => {
  const [isSubmitOk, setIsSubmitOk] = useState(false);
  const [place, setPlace] = useState("");

  const handlePlace = (name: string) => setPlace(name);

  if (isSubmitOk) return <FeedbackCard name={place} />;
  return (
    <RequestCard
      setPlace={handlePlace}
      handleSuccess={() => setIsSubmitOk(true)}
    />
  );
};
