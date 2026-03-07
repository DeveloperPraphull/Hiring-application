// import { useEffect, useRef } from "react";
// import Matter from "matter-js";
// import "../App.css"

// const words = [
//   "SOFTWARE DEVELOPER",
//   "FULL STACK ENGINEER",
//   "FRONTEND ARCHITECT"
// ];

// const GodModeGamingText = () => {
//   const sceneRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const { Engine, Render, World, Bodies, Runner, Body, Events } = Matter;

//     const engine = Engine.create();
//     const world = engine.world;
//     world.gravity.y = 1;

//     const width = containerRef.current!.offsetWidth;
//     const height = 550;

//     const render = Render.create({
//       element: sceneRef.current!,
//       engine,
//       options: {
//         width,
//         height,
//         wireframes: false,
//         background: "transparent",
//       },
//     });

//     const floor = Bodies.rectangle(width / 2, height, width, 60, {
//       isStatic: true,
//     });

//     World.add(world, floor);

//     const runner = Runner.create();
//     Runner.run(runner, engine);
//     Render.run(render);

//     let bodies: Matter.Body[] = [];
//     let elements: HTMLDivElement[] = [];

//     const createLetters = (text: string) => {
//       const chars = text.split("");

//       chars.forEach((char) => {
//         if (char === " ") {
//           bodies.push(null as any);
//           elements.push(null as any);
//           return;
//         }

//         const body = Bodies.circle(
//           Math.random() * width,
//           Math.random() * -400,
//           28,
//           { restitution: 0.9 }
//         );

//         World.add(world, body);
//         bodies.push(body);

//         const el = document.createElement("div");
//         el.innerText = char;

//         // 🎮 Neon Gaming Style
//         el.className =
//           "absolute w-14 h-14 flex items-center justify-center rounded-full font-extrabold text-lg text-cyan-300";

//         el.style.background =
//           "linear-gradient(145deg,#0f172a,#1e293b)";
//         el.style.border = "1px solid rgba(0,255,255,0.3)";
//         el.style.boxShadow = `
//           0 0 15px rgba(0,255,255,0.7),
//           0 0 30px rgba(0,255,255,0.5),
//           inset 0 0 15px rgba(0,255,255,0.4)
//         `;
//         el.style.textShadow = "0 0 10px #00f5ff";
//         el.style.transition = "all 0.4s ease";

//         sceneRef.current?.appendChild(el);
//         elements.push(el);
//       });
//     };

//     Events.on(engine, "afterUpdate", () => {
//       bodies.forEach((body, i) => {
//         if (!body || !elements[i]) return;
//         elements[i].style.left = body.position.x - 28 + "px";
//         elements[i].style.top = body.position.y - 28 + "px";
//       });
//     });

//     const formWord = (text: string) => {
//       world.gravity.y = 0;

//       const wordsSplit = text.split(" ");
//       const totalWidth = wordsSplit
//         .map((w) => w.length)
//         .reduce((a, b) => a + b, 0);

//       let index = 0;
//       let startX = width / 2 - totalWidth * 18;
//       let y = height / 2 - 40;

//       wordsSplit.forEach((word) => {
//         word.split("").forEach(() => {
//           const body = bodies[index];
//           if (body) {
//             Body.setVelocity(body, { x: 0, y: 0 });
//             Body.setPosition(body, { x: startX, y });
//             Body.setStatic(body, true);

//             elements[index].style.boxShadow =
//               "0 0 30px rgba(0,255,255,1), 0 0 60px rgba(0,255,255,0.8)";
//           }

//           startX += 36;
//           index++;
//         });

//         startX += 36;
//       });

//       // 💥 Shockwave
//       const shock = document.createElement("div");
//       shock.className =
//         "absolute left-1/2 top-1/2 border border-cyan-400 rounded-full";
//       shock.style.transform = "translate(-50%,-50%)";
//       shock.style.animation = "shockwave 1s ease-out forwards";
//       containerRef.current?.appendChild(shock);

//       setTimeout(() => shock.remove(), 1000);
//     };

//     const explode = () => {
//       world.gravity.y = 1;

//       bodies.forEach((body) => {
//         if (!body) return;
//         Body.setStatic(body, false);
//         Body.applyForce(body, body.position, {
//           x: (Math.random() - 0.5) * 0.15,
//           y: -Math.random() * 0.15,
//         });
//       });

//       // ⚡ Screen flash
//       containerRef.current!.classList.add("bg-cyan-900");
//       setTimeout(() => {
//         containerRef.current!.classList.remove("bg-cyan-900");
//       }, 200);
//     };

//     // 🖱 Magnetic mouse repel
//     containerRef.current?.addEventListener("mousemove", (e) => {
//       const rect = containerRef.current!.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       bodies.forEach((body) => {
//         if (!body) return;
//         const dx = body.position.x - mouseX;
//         const dy = body.position.y - mouseY;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 120) {
//           Body.applyForce(body, body.position, {
//             x: dx * 0.001,
//             y: dy * 0.001,
//           });
//         }
//       });
//     });

//     let wordIndex = 0;

//     const startCycle = () => {
//       bodies = [];
//       elements = [];
//       sceneRef.current!.innerHTML = "";

//       createLetters(words[wordIndex]);

//       setTimeout(() => {
//         formWord(words[wordIndex]);
//       }, 3500);

//       setTimeout(() => {
//         explode();
//         wordIndex = (wordIndex + 1) % words.length;
//       }, 7000);
//     };

//     startCycle();
//     const interval = setInterval(startCycle, 9000);

//     return () => {
//       clearInterval(interval);
//       Render.stop(render);
//       World.clear(world, false);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-full h-[550px] overflow-hidden bg-gradient-to-b from-[#020617] via-[#0f172a] to-black"
//     >
//       {/* Glow background */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)] animate-pulse"></div>

//       <div ref={sceneRef} />
//     </div>
//   );
// };

// export default GodModeGamingText;


import { useEffect, useRef } from "react";
import Matter from "matter-js";

const words = [
  "SOFTWARE DEVELOPER",
  "FULL STACK ENGINEER",
  "FRONTEND ARCHITECT"
];

const AAAGameIntro = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner, Body, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const width = containerRef.current!.offsetWidth;
    const height = 600;

    const render = Render.create({
      element: sceneRef.current!,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    const floor = Bodies.rectangle(width / 2, height, width, 60, {
      isStatic: true,
    });

    World.add(world, floor);

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    let bodies: Matter.Body[] = [];
    let elements: HTMLDivElement[] = [];

    const createLetters = (text: string) => {
      text.split("").forEach((char) => {
        if (char === " ") {
          bodies.push(null as any);
          elements.push(null as any);
          return;
        }

        const body = Bodies.circle(
          Math.random() * width,
          Math.random() * -500,
          28,
          { restitution: 0.8 }
        );

        World.add(world, body);
        bodies.push(body);

        const el = document.createElement("div");
        el.innerText = char;

        el.className =
          "absolute w-14 h-14 flex items-center justify-center rounded-full font-extrabold text-lg text-cyan-300";

        el.style.background =
          "linear-gradient(145deg,#0f172a,#1e293b)";
        el.style.border = "1px solid rgba(0,255,255,0.4)";
        el.style.boxShadow = `
          0 0 20px rgba(0,255,255,0.9),
          0 0 60px rgba(0,255,255,0.7),
          inset 0 0 25px rgba(0,255,255,0.5)
        `;
        el.style.textShadow = "0 0 12px #00f5ff";
        el.style.transition = "all 0.3s ease";

        sceneRef.current?.appendChild(el);
        elements.push(el);
      });
    };

    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body, i) => {
        if (!body || !elements[i]) return;
        elements[i].style.left = body.position.x - 28 + "px";
        elements[i].style.top = body.position.y - 28 + "px";
      });
    });

    const lightningFlash = () => {
      containerRef.current!.classList.add("brightness-200");
      setTimeout(() => {
        containerRef.current!.classList.remove("brightness-200");
      }, 120);
    };

    const cameraShake = () => {
      containerRef.current!.animate(
        [
          { transform: "translate(0px,0px)" },
          { transform: "translate(-10px,5px)" },
          { transform: "translate(10px,-5px)" },
          { transform: "translate(0px,0px)" },
        ],
        { duration: 400 }
      );
    };

    const shockwave = () => {
      const wave = document.createElement("div");
      wave.className =
        "absolute left-1/2 top-1/2 border-2 border-cyan-400 rounded-full";
      wave.style.transform = "translate(-50%,-50%)";
      wave.style.animation = "shockwave 1s ease-out forwards";
      containerRef.current?.appendChild(wave);
      setTimeout(() => wave.remove(), 1000);
    };

    const formWord = (text: string) => {
      world.gravity.y = 0;

      const wordsSplit = text.split(" ");
      const totalWidth = wordsSplit
        .map((w) => w.length)
        .reduce((a, b) => a + b, 0);

      let index = 0;
      let startX = width / 2 - totalWidth * 18;
      let y = height / 2 - 60;

      wordsSplit.forEach((word) => {
        word.split("").forEach(() => {
          const body = bodies[index];
          if (body) {
            Body.setVelocity(body, { x: 0, y: 0 });
            Body.setPosition(body, { x: startX, y });
            Body.setStatic(body, true);
          }
          startX += 36;
          index++;
        });
        startX += 36;
      });

      lightningFlash();
      shockwave();
      cameraShake();
    };

    const explode = () => {
      world.gravity.y = 1;

      bodies.forEach((body) => {
        if (!body) return;
        Body.setStatic(body, false);
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.2,
          y: -Math.random() * 0.2,
        });
      });
    };

    // 🧲 Mouse repel
    containerRef.current?.addEventListener("mousemove", (e) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      bodies.forEach((body) => {
        if (!body) return;
        const dx = body.position.x - mouseX;
        const dy = body.position.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          Body.applyForce(body, body.position, {
            x: dx * 0.0012,
            y: dy * 0.0012,
          });
        }
      });
    });

    let wordIndex = 0;

    const startCycle = () => {
      bodies = [];
      elements = [];
      sceneRef.current!.innerHTML = "";

      createLetters(words[wordIndex]);

      setTimeout(() => formWord(words[wordIndex]), 3500);
      setTimeout(() => {
        explode();
        wordIndex = (wordIndex + 1) % words.length;
      }, 7500);
    };

    startCycle();
    const interval = setInterval(startCycle, 9500);

    return () => {
      clearInterval(interval);
      Render.stop(render);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] overflow-hidden bg-gradient-to-b from-black via-[#0f172a] to-black transition-all duration-300"
    >
      {/* Energy Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.2),transparent_60%)] animate-pulse"></div>
      <div ref={sceneRef} />
    </div>
  );
};

export default AAAGameIntro;