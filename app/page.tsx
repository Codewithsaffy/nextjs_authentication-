// page.js
import React from "react";
const simulateDelay = (ms:number) => new Promise((resolve) => setTimeout(resolve, ms));

const Page = async () => {
  await simulateDelay(7000);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Content Loaded!</h1>
    </div>
  );
};

export default Page;
