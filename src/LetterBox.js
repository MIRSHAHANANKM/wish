import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const LetterBox = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-center items-center py-10">
      <div className="flex flex-col items-center cursor-pointer">
        <motion.div
          className="bg-purple-500 rounded-xl p-8 transition-all transform"
          onClick={() => setOpened(!opened)}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaEnvelope className="text-white text-6xl" />
        </motion.div>
        {opened && (
          <div className="mt-4 text-center text-white text-xl">
            <p className="font-serif text-lg mt-4">
              <Typewriter
                words={["To my one true love..."]}
                loop={1}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <p className="mt-4">*Happy Birthday, mi amor…*</p>
<p>Across the miles, beneath the same sky,</p>  
<p>I send my heart where yours lies nearby. </p> 
<p>This day is yours, your soul’s sweet song,</p>
<p>The one I’ve waited for all along.</p>

<p>Your first birthday as the one I’ll marry, </p>
<p>A dream so deep, a promise we carry.  </p>
<p>Though I can’t hold you, not just yet,  </p>
<p>My every breath whispers *don’t forget</p>

<p>You are my always, my never-too-far,  </p>
<p>The wish on my heart, my guiding star. </p> 
<p>Each sunrise brings me closer to you,  </p>
<p>To mornings where we share the view.</p>

<p>I miss your voice, your laughter, your touch,</p>  
<p>This distance aches—but not as much  </p>
<p>As a life without you. And soon, I know,  </p>
<p>We’ll have the days where time moves slow.</p>

<p>But for now, mi amor, please feel me near,  </p>
<p>In every word, in every tear.  </p>
<p>May your birthday bloom with joy and light,</p> 
<p>And dreams that dance into the night.</p>

<p>Because soon enough, we’ll write our song,</p>  
<p>Side by side, where we belong.  </p>
<p>Happy birthday, my heart, my peace, my home—</p>  
<p>Until we’re together, you’re never alone.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterBox;
