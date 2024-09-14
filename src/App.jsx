import "./App.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

function App() {
  const [stageOne, setStageOne] = useState(false);
  const [stageTwo, setStageTwo] = useState(false);
  const [stageThree, setStageThree] = useState(false);
  const [stageFour, setStageFour] = useState(false);

  const { width } = useWindowSize();

  const isMobile = width <= 767;

  return (
    <div className="w-[100vw] h-[100vh] overflow-clip relative z-10 bg-white grid grid-cols-1 md:grid-cols-2 gap-2">
      <div className="w-full h-full relative">
        <motion.div
          onClick={() => setStageOne(!stageOne)}
          initial={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          animate={{
            width: stageOne ? "100vw" : "100%",
            height: stageOne ? "100vh" : "100%",
            borderRadius: stageOne ? "" : "8px",
            position: stageOne ? "absolute" : "relative",
            zIndex: stageOne ? 9990 : "",
            top: 0,
            left: 0,
            backgroundColor: stageOne ? "white" : "",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-full hover:bg-slate-600/10"
        >
          <motion.ul
            initial={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 25,
            }}
            animate={{
              width: stageOne ? "100vw" : "100%",
              height: stageOne ? "100vh" : "100%",
              display: stageOne ? "grid" : "flex",
              gridTemplateColumns: stageOne ? "repeat(2, 1fr)" : "",
              gridTemplateRows: stageOne ? "repeat(2, 50vh)" : "",
              gap: stageOne ? "4px" : "",
              justifyContent: stageOne ? "" : "center",
              alignItems: stageOne ? "" : "center",
            }}
            transition={{
              delay: 0.7,
              duration: 0.2,
              ease: "linear",
            }}
            className="w-24 h-24 relative overflow-y-scroll"
          >
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "4deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageOne ? "0" : "4deg",
                width: stageOne ? "100%" : "6rem",
                height: stageOne ? "100%" : "6rem",
                position: stageOne ? "relative" : "absolute",
                right: stageOne ? 0 : "",
                bottom: stageOne ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="a1.jpg"
                alt="halloween art work"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "14deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageOne ? "0" : "14deg",
                width: stageOne ? "100%" : "6rem",
                height: stageOne ? "100%" : "6rem",
                position: stageOne ? "relative" : "absolute",
                left: stageOne ? 0 : "",
                bottom: stageOne ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="a2.jpg"
                alt="halloween art work"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "24deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageOne ? "0" : "24deg",
                width: stageOne ? "100%" : "6rem",
                height: stageOne ? "100%" : "6rem",
                position: stageOne ? "relative" : "absolute",
                right: stageOne ? 0 : "",
                top: stageOne ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="a3.jpg"
                alt="halloween art work"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "34deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageOne ? "0" : "34deg",
                width: stageOne ? "100%" : "6rem",
                height: stageOne ? "100%" : "6rem",
                position: stageOne ? "relative" : "absolute",
                right: stageOne ? 0 : "",
                top: stageOne ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="a4.jpg"
                alt="halloween art work"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <div className="w-full h-full relative">
        <motion.div
          onClick={() => setStageTwo(!stageTwo)}
          initial={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            x: 0,
            y: 0,
          }}
          animate={{
            width: stageTwo ? "100vw" : "100%",
            height: stageTwo ? "100vh" : "100%",
            borderRadius: stageTwo ? "" : "8px",
            position: stageTwo ? "absolute" : "relative",
            zIndex: stageTwo ? 9990 : "",
            top: 0,
            left: 0,
            backgroundColor: stageTwo ? "white" : "",
            x:
              isMobile && stageTwo
                ? "-0%"
                : !isMobile && stageTwo
                ? "-50.25% "
                : 0,
            y: isMobile && stageTwo ? "-25.5%" : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-full hover:bg-slate-600/10"
        >
          <motion.ul
            initial={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 25,
            }}
            animate={{
              width: stageTwo ? "100vw" : "100%",
              height: stageTwo ? "100vh" : "100%",
              display: stageTwo ? "grid" : "flex",
              gridTemplateColumns: stageTwo ? "repeat(2, 1fr)" : "",
              gridTemplateRows: stageTwo ? "repeat(2, 50vh)" : "",
              gap: stageTwo ? "4px" : "",
              justifyContent: stageTwo ? "" : "center",
              alignItems: stageTwo ? "" : "center",
            }}
            transition={{
              delay: 0.7,
              duration: 0.2,
              ease: "linear",
            }}
            className="w-24 h-24 relative overflow-y-scroll"
          >
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "4deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageTwo ? "0" : "4deg",
                width: stageTwo ? "100%" : "6rem",
                height: stageTwo ? "100%" : "6rem",
                position: stageTwo ? "relative" : "absolute",
                right: stageTwo ? 0 : "",
                bottom: stageTwo ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="p1.jpg"
                alt="perfume image"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "14deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageTwo ? "0" : "14deg",
                width: stageTwo ? "100%" : "6rem",
                height: stageTwo ? "100%" : "6rem",
                position: stageTwo ? "relative" : "absolute",
                left: stageTwo ? 0 : "",
                bottom: stageTwo ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="p2.jpg"
                alt="perfume image"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "24deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageTwo ? "0" : "24deg",
                width: stageTwo ? "100%" : "6rem",
                height: stageTwo ? "100%" : "6rem",
                position: stageTwo ? "relative" : "absolute",
                right: stageTwo ? 0 : "",
                top: stageTwo ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="p3.jpg"
                alt="perfume image"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "34deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageTwo ? "0" : "34deg",
                width: stageTwo ? "100%" : "6rem",
                height: stageTwo ? "100%" : "6rem",
                position: stageTwo ? "relative" : "absolute",
                right: stageTwo ? 0 : "",
                top: stageTwo ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="p4.jpg"
                alt="perfume image"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <div className="w-full h-full relative">
        <motion.div
          onClick={() => setStageThree(!stageThree)}
          initial={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            y: 0,
          }}
          animate={{
            width: stageThree ? "100vw" : "100%",
            height: stageThree ? "100vh" : "100%",
            borderRadius: stageThree ? "" : "8px",
            position: stageThree ? "absolute" : "relative",
            zIndex: stageThree ? 9990 : "",
            top: 0,
            left: 0,
            backgroundColor: stageThree ? "white" : "",
            y: stageThree ? "-50.55% " : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-full hover:bg-slate-600/10"
        >
          <motion.ul
            initial={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 25,
            }}
            animate={{
              width: stageThree ? "100vw" : "100%",
              height: stageThree ? "100vh" : "100%",
              display: stageThree ? "grid" : "flex",
              gridTemplateColumns: stageThree ? "repeat(2, 1fr)" : "",
              gridTemplateRows: stageThree ? "repeat(2, 50vh)" : "",
              gap: stageThree ? "4px" : "",
              justifyContent: stageThree ? "" : "center",
              alignItems: stageThree ? "" : "center",
            }}
            transition={{
              delay: 0.7,
              duration: 0.2,
              ease: "linear",
            }}
            className="w-24 h-24 relative overflow-y-scroll"
          >
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "4deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageThree ? "0" : "4deg",
                width: stageThree ? "100%" : "6rem",
                height: stageThree ? "100%" : "6rem",
                position: stageThree ? "relative" : "absolute",
                right: stageThree ? 0 : "",
                bottom: stageThree ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="h1.jpg"
                alt="an image of a tall building"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "14deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageThree ? "0" : "14deg",
                width: stageThree ? "100%" : "6rem",
                height: stageThree ? "100%" : "6rem",
                position: stageThree ? "relative" : "absolute",
                left: stageThree ? 0 : "",
                bottom: stageThree ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="h2.jpg"
                alt="an image of a tall building"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "24deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageThree ? "0" : "24deg",
                width: stageThree ? "100%" : "6rem",
                height: stageThree ? "100%" : "6rem",
                position: stageThree ? "relative" : "absolute",
                right: stageThree ? 0 : "",
                top: stageThree ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="h3.jpg"
                alt="an image of a tall building"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "34deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageThree ? "0" : "34deg",
                width: stageThree ? "100%" : "6rem",
                height: stageThree ? "100%" : "6rem",
                position: stageThree ? "relative" : "absolute",
                right: stageThree ? 0 : "",
                top: stageThree ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
            >
              <img
                src="h4.jpg"
                alt="an image of a tall building"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
      <div className="w-full h-full relative">
        <motion.div
          onClick={() => setStageFour(!stageFour)}
          initial={{
            width: "100%",
            height: "100%",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            x: 0,
            y: 0,
          }}
          animate={{
            width: stageFour ? "100vw" : "100%",
            height: stageFour ? "100vh" : "100%",
            borderRadius: stageFour ? "" : "8px",
            position: stageFour ? "absolute" : "relative",
            zIndex: stageFour ? 9990 : "",
            top: 0,
            left: 0,
            backgroundColor: stageFour ? "white" : "",
            x:
              isMobile && stageFour
                ? "-0%"
                : !isMobile && stageFour
                ? "-50.3% "
                : 0,
            y:
              isMobile && stageFour
                ? "-75.8%"
                : !isMobile && stageFour
                ? "-50.55% "
                : 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="w-full h-full hover:bg-slate-600/10"
        >
          <motion.ul
            initial={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              zIndex: 25,
            }}
            animate={{
              width: stageFour ? "100vw" : "100%",
              height: stageFour ? "100vh" : "100%",
              display: stageFour ? "grid" : "flex",
              gridTemplateColumns: stageFour ? "repeat(2, 1fr)" : "",
              gridTemplateRows: stageFour ? "repeat(2, 50vh)" : "",
              gap: stageFour ? "4px" : "",
              justifyContent: stageFour ? "" : "center",
              alignItems: stageFour ? "" : "center",
            }}
            transition={{
              delay: 0.7,
              duration: 0.2,
              ease: "linear",
            }}
            className="w-24 h-24 relative overflow-y-scroll"
          >
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "4deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageFour ? "0" : "4deg",
                width: stageFour ? "100%" : "6rem",
                height: stageFour ? "100%" : "6rem",
                position: stageFour ? "relative" : "absolute",
                right: stageFour ? 0 : "",
                bottom: stageFour ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="z1.jpg"
                alt="an image of an animal"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "14deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageFour ? "0" : "14deg",
                width: stageFour ? "100%" : "6rem",
                height: stageFour ? "100%" : "6rem",
                position: stageFour ? "relative" : "absolute",
                left: stageFour ? 0 : "",
                bottom: stageFour ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="z2.jpg"
                alt="an image of an animal"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "24deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageFour ? "0" : "24deg",
                width: stageFour ? "100%" : "6rem",
                height: stageFour ? "100%" : "6rem",
                position: stageFour ? "relative" : "absolute",
                right: stageFour ? 0 : "",
                top: stageFour ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="z3.jpg"
                alt="an image of an animal"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
            <motion.li
              initial={{
                width: "6rem",
                height: "6rem",
                rotate: "34deg",
                position: "absolute",
                zIndex: "20",
              }}
              animate={{
                rotate: stageFour ? "0" : "34deg",
                width: stageFour ? "100%" : "6rem",
                height: stageFour ? "100%" : "6rem",
                position: stageFour ? "relative" : "absolute",
                right: stageFour ? 0 : "",
                top: stageFour ? 0 : "",
              }}
              transition={{
                delay: 0.8,
                ease: "easeOut",
              }}
              className="overflow-clip"
            >
              <img
                src="z4.jpg"
                alt="an image of an animal"
                className="w-full h-full object-fill md:object-cover"
              />
            </motion.li>
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
