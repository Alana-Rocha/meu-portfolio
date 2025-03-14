import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "JavaScript",
  "MySQL",
  "TypeScript",
  "Docker",
  "React",
  "Styled Comp.",
  "Hook Form",
  "Zod",
  "NestJS",
  "Figma",
  "Cypress",
  "HTML",
  "CSS",
  "Clean Code",
  "TurboRepo",
  "R. Router",
];

const colorSkills = ["#7517EA", "#32086D", "#8429FE"];

export const SkillsAnimation = () => {
  const [stacked, setStacked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setStacked(true);
      window.removeEventListener("scroll", handleScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Flex className="relative h-screen flex justify-center items-center bg-black text-white">
      <Flex className="absolute">
        {skills.map((skill, index) => {
          const randomColor =
            colorSkills[Math.floor(Math.random() * colorSkills.length)];

          return (
            <motion.div
              key={skill}
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={
                stacked
                  ? { y: index * 10, x: 0, opacity: 1, scale: 1.1 }
                  : { y: 0, x: 0, opacity: 1 }
              }
              transition={{ duration: 0.5, delay: index * 0.05 }} 
              style={{
                textAlign: "center",
                backgroundColor: randomColor,
                minWidth: "270px",
                fontSize: "48px",
              }}
              className="px-4 py-2 m-1 rounded-lg text-center font-bold"
            >
              {skill}
            </motion.div>
          );
        })}
      </Flex>
    </Flex>
  );
};
