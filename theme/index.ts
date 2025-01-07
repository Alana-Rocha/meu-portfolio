"use client"

import { createSystem, defaultConfig } from "@chakra-ui/react"

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Jaro Variable" },
        body: { value: "Jaro Variable" },
      },
    },
  },
})
