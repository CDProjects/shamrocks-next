"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { useEffect, useState } from "react";

export default function StudioPage() {
  // Use this state to track if the browser has finished loading
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // As soon as the page loads, set mounted to true
    setIsMounted(true);
  }, []);

  // If the browser isn't ready yet, return nothing (this prevents the crash)
  if (!isMounted) return null;

  return <NextStudio config={config} />;
}