import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming a Button component exists

export function LoginSignUpPrompt() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000 + Math.random() * 5000); // Show between 5-10 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleDismiss}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="bg-gray-900 text-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4 border border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close prompt"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">Join Event Link</h3>
            <p className="text-base mb-6 text-gray-300">
              Unlock a world of exclusive events and networking opportunities.
              Don't miss out on personalized recommendations tailored just for
              you.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="outline"
                className="flex-1 border- text-[#3498db] hover:text-[#3498db] hover:border-[#3498db] py-2"
                onClick={() =>
                  (window.location.href =
                    "https://event-link.vercel.app/signup")
                }
              >
                Log In
              </Button>
              <Button
                className="flex-1 bg-[#3498db] hover:bg-[#3498db] text-white py-2"
                onClick={() =>
                  (window.location.href =
                    "https://event-link.vercel.app/signup")
                }
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
