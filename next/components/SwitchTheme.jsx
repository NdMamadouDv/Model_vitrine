import React, { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { motion } from "framer-motion";
function SwitchTheme() {
  const [theme, setTheme] = useState("corporate");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "corporate" : "dark");
  };

  useEffect(() => {
    themeChange(false);
    const body = document.body;
    body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="border rounded-full w-12 h-5 flex items-center justify-center"
    >
      {theme === "dark" ? (
        <motion.span className="" animate={{ x: 10, opacity: 1 }}>
          <MdOutlineNightlight className="h-auto w-4" />
        </motion.span>
      ) : (
        <motion.span className="" animate={{ x: -10, opacity: 1 }}>
          <MdOutlineLightMode className="h-auto w-4" />
        </motion.span>
      )}
    </button>
  );
}

export default SwitchTheme;
