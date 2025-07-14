// components/FadeIn.tsx
import { motion } from "framer-motion";
import React from "react";

const FadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >  
    {children}
  </motion.div>
);

export default FadeIn;
