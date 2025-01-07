"use client";

import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      color: "#FFF",
      bg: "#000",
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Jaro Variable" },
        body: { value: "Jaro Variable" },
      },
    },
  },
});
