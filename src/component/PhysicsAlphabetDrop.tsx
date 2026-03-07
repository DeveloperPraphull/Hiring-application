// import { useEffect, useRef } from "react";
// import Matter from "matter-js";

// const words = ["SOFTWARE DEVELOPER", "FULL STACK ENGINEER"];

// const InsanePhysicsText = () => {
//   const sceneRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const Engine = Matter.Engine;
//     const Render = Matter.Render;
//     const World = Matter.World;
//     const Bodies = Matter.Bodies;
//     const Runner = Matter.Runner;
//     const Events = Matter.Events;
//     const Body = Matter.Body;

//     const engine = Engine.create();
//     const world = engine.world;
//     world.gravity.y = 1;

//     const width = containerRef.current!.offsetWidth;
//     const height = 500;

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

//     const floor = Bodies.rectangle(width / 2, height, width, 40, {
//       isStatic: true,
//     });

//     World.add(world, floor);

//     const runner = Runner.create();
//     Runner.run(runner, engine);
//     Render.run(render);

//     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//     const bodies: Matter.Body[] = [];
//     const elements: HTMLDivElement[] = [];

//     // 🔥 DROP ALL LETTERS
//     letters.forEach((letter) => {
//       const body = Bodies.circle(
//         Math.random() * width,
//         Math.random() * -500,
//         28,
//         {
//           restitution: 0.9,
//           friction: 0.01,
//         }
//       );

//       World.add(world, body);
//       bodies.push(body);

//       const el = document.createElement("div");
//       el.innerText = letter;
//       el.style.position = "absolute";
//       el.style.width = "56px";
//       el.style.height = "56px";
//       el.style.display = "flex";
//       el.style.alignItems = "center";
//       el.style.justifyContent = "center";
//       el.style.borderRadius = "50%";
//       el.style.background = "white";
//       el.style.fontWeight = "bold";
//       el.style.fontSize = "18px";
//       el.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
//       el.style.transition = "box-shadow 0.4s ease";

//       sceneRef.current?.appendChild(el);
//       elements.push(el);
//     });

//     // Sync DOM with physics
//     Events.on(engine, "afterUpdate", () => {
//       bodies.forEach((body, i) => {
//         elements[i].style.left = body.position.x - 28 + "px";
//         elements[i].style.top = body.position.y - 28 + "px";
//       });
//     });

//     // 🧲 Magnetic Formation
//     const formWord = (word: string) => {
//       engine.world.gravity.y = 0;

//       const startX = width / 2 - word.length * 18;
//       const y = height / 2;

//       word.split("").forEach((char, i) => {
//         const index = letters.indexOf(char);
//         if (index !== -1) {
//           Body.setVelocity(bodies[index], { x: 0, y: 0 });

//           // Smooth magnetic movement
//           Body.setPosition(bodies[index], {
//             x: startX + i * 36,
//             y,
//           });

//           elements[index].style.boxShadow =
//             "0 0 25px rgba(0, 150, 255, 0.8)";
//         }
//       });
//     };

//     // 💥 Explosion Effect
//     const explode = () => {
//       bodies.forEach((body) => {
//         Body.applyForce(body, body.position, {
//           x: (Math.random() - 0.5) * 0.05,
//           y: -Math.random() * 0.05,
//         });
//       });

//       engine.world.gravity.y = 1;

//       elements.forEach((el) => {
//         el.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
//       });
//     };

//     // 🖱 Mouse Interaction
//     containerRef.current?.addEventListener("mousemove", (e) => {
//       const rect = containerRef.current!.getBoundingClientRect();
//       const mouseX = e.clientX - rect.left;
//       const mouseY = e.clientY - rect.top;

//       bodies.forEach((body) => {
//         const dx = body.position.x - mouseX;
//         const dy = body.position.y - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 100) {
//           Body.applyForce(body, body.position, {
//             x: dx * 0.0005,
//             y: dy * 0.0005,
//           });
//         }
//       });
//     });

//     // 🎬 Cinematic Timeline
//     let wordIndex = 0;

//     const cycle = () => {
//       formWord(words[wordIndex]);

//       setTimeout(() => {
//         explode();
//         wordIndex = (wordIndex + 1) % words.length;
//       }, 3500);
//     };

//     const interval = setInterval(cycle, 7000);
//     setTimeout(cycle, 4000);

//     return () => {
//       clearInterval(interval);
//       Render.stop(render);
//       World.clear(world, false);
//       Engine.clear(engine);
//       render.canvas.remove();
//       elements.forEach((el) => el.remove());
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="w-full h-[500px] overflow-hidden relative bg-gradient-to-b from-white to-gray-50"
//     >
//       <div ref={sceneRef} />
//     </div>
//   );
// };

// export default InsanePhysicsText;


import { useEffect, useRef } from "react";
import Matter from "matter-js";

const words = [
  "SOFTWARE DEVELOPER",
  "FULL STACK ENGINEER",
  "FRONTEND ARCHITECT"
];

const GodModeText = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      World,
      Bodies,
      Runner,
      Body,
      Events,
    } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const width = containerRef.current!.offsetWidth;
    const height = 550;

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
      const chars = text.split("");

      chars.forEach((char) => {
        if (char === " ") {
          bodies.push(null as any);
          elements.push(null as any);
          return;
        }

        const body = Bodies.circle(
          Math.random() * width,
          Math.random() * -400,
          28,
          { restitution: 0.9 }
        );

        World.add(world, body);
        bodies.push(body);

        const el = document.createElement("div");
        el.innerText = char;
        el.style.position = "absolute";
        el.style.width = "56px";
        el.style.height = "56px";
        el.style.display = "flex";
        el.style.alignItems = "center";
        el.style.justifyContent = "center";
        el.style.borderRadius = "50%";
        el.style.background = "white";
        el.style.fontWeight = "bold";
        el.style.fontSize = "18px";
        el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
        el.style.transition = "box-shadow 0.4s ease";

        sceneRef.current?.appendChild(el);
        elements.push(el);
      });
    };

    const sync = () => {
      Events.on(engine, "afterUpdate", () => {
        bodies.forEach((body, i) => {
          if (!body || !elements[i]) return;
          elements[i].style.left = body.position.x - 28 + "px";
          elements[i].style.top = body.position.y - 28 + "px";
        });
      });
    };

    const formWord = (text: string) => {
      world.gravity.y = 0;

      const wordsSplit = text.split(" ");
      const totalWidth = wordsSplit
        .map((w) => w.length)
        .reduce((a, b) => a + b, 0);

      let index = 0;
      let startX = width / 2 - totalWidth * 18;
      let y = height / 2 - 40;

      wordsSplit.forEach((word) => {
        word.split("").forEach(() => {
          const body = bodies[index];
          if (body) {
            Body.setVelocity(body, { x: 0, y: 0 });

            // Smooth lerp-like positioning
            Body.setPosition(body, {
              x: startX,
              y,
            });

            elements[index].style.boxShadow =
              "0 0 30px rgba(0, 150, 255, 0.9)";
          }

          startX += 36;
          index++;
        });

        startX += 36; // spacing
      });
    };

    const explode = () => {
      world.gravity.y = 1;

      bodies.forEach((body) => {
        if (!body) return;
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.08,
          y: -Math.random() * 0.08,
        });
      });

      elements.forEach((el) => {
        if (el)
          el.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
      });
    };

    // Mouse magnetic repel
    containerRef.current?.addEventListener("mousemove", (e) => {
      const rect = containerRef.current!.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      bodies.forEach((body) => {
        if (!body) return;
        const dx = body.position.x - mouseX;
        const dy = body.position.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          Body.applyForce(body, body.position, {
            x: dx * 0.0008,
            y: dy * 0.0008,
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
      sync();

      setTimeout(() => {
        formWord(words[wordIndex]);
      }, 4000);

      setTimeout(() => {
        explode();
        wordIndex = (wordIndex + 1) % words.length;
      }, 7500);
    };

    startCycle();
    const interval = setInterval(startCycle, 9000);

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
      className="w-full h-[550px] relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div ref={sceneRef} />
    </div>
  );
};

export default GodModeText;