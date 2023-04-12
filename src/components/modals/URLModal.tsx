import { ReactNode, MouseEventHandler } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

type URLModalProps = {
  children: ReactNode;
};

const URLModal = ({ children }: URLModalProps) => {
  const navigate = useNavigate();

  const onClick: MouseEventHandler = e => {
    if (e.target === e.currentTarget) {
      navigate("./");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed w-full h-full left-0 top-0 bg-black/50 flex justify-center items-center z-10 p-4"
        onClick={onClick}
      >
        <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          exit={{ y: 10 }}
          transition={{
            type: "tween",
          }}
          className="min-w-[200px] max-w-[600px] w-full rounded-lg bg-white dark:bg-slate-800 border p-4"
        >
          {children}
        </motion.div>
      </motion.div>
    </>
  );
};

export default URLModal;
