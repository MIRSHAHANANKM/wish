import React, { useState } from "react";
import { FaGift } from "react-icons/fa";
import { motion } from "framer-motion";

const GiftBox = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-center items-center py-10">
      <motion.div
        className={`bg-blue-500 rounded-xl p-8 cursor-pointer transition-all transform ${
          opened ? "scale-110" : "scale-100"
        }`}
        onClick={() => setOpened(!opened)}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="flex items-center justify-center">
          <FaGift className="text-white text-6xl" />
        </div>
        {opened && (
          <div className="mt-4 text-center text-white text-xl">
            <p>Here's a special gift for you, my love!</p>
            <p className="mt-4">Love always, forever and beyond!</p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default GiftBox;
