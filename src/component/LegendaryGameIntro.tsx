import { useEffect, useRef } from "react";
import Matter from "matter-js";
import "../index.css"

const words = [
  "SOFTWARE DEVELOPER",
  "FULL STACK ENGINEER",
  "FRONTEND ARCHITECT"
];

const LegendaryGameIntro = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { Engine, Render, World, Bodies, Runner, Body, Events } = Matter;

    const engine = Engine.create();
    const world = engine.world;
    world.gravity.y = 1;

    const width = containerRef.current!.offsetWidth;
    const height = 650;

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
          Math.random() * -600,
          30,
          { restitution: 0.7 }
        );

        World.add(world, body);
        bodies.push(body);

        const el = document.createElement("div");
        el.innerText = char;

        el.className =
          "absolute w-16 h-16 flex items-center justify-center rounded-full font-extrabold text-xl text-yellow-300";

        el.style.background =
          "linear-gradient(145deg,#111827,#1f2937)";
        el.style.border = "1px solid rgba(255,215,0,0.5)";
        el.style.boxShadow = `
          0 0 25px rgba(255,215,0,1),
          0 0 60px rgba(255,140,0,0.8),
          inset 0 0 25px rgba(255,215,0,0.6)
        `;
        el.style.textShadow = "0 0 15px gold";
        el.style.transition = "all 0.3s ease";

        sceneRef.current?.appendChild(el);
        elements.push(el);
      });
    };

    Events.on(engine, "afterUpdate", () => {
      bodies.forEach((body, i) => {
        if (!body || !elements[i]) return;
        elements[i].style.left = body.position.x - 32 + "px";
        elements[i].style.top = body.position.y - 32 + "px";
      });
    });

    /* 🌋 MASSIVE GROUND SHOCKWAVE */
    const groundImpact = () => {
      const wave = document.createElement("div");
      wave.className =
        "absolute left-1/2 bottom-0 border-4 border-yellow-400 rounded-full";
      wave.style.transform = "translateX(-50%)";
      wave.style.animation = "legendShock 1.2s ease-out forwards";
      containerRef.current?.appendChild(wave);

      // Screen quake
      containerRef.current!.animate(
        [
          { transform: "translate(0,0)" },
          { transform: "translate(-15px,8px)" },
          { transform: "translate(15px,-8px)" },
          { transform: "translate(0,0)" },
        ],
        { duration: 600 }
      );

      setTimeout(() => wave.remove(), 1200);
    };

    /* ⚡ Lightning */
    const lightning = () => {
      containerRef.current!.classList.add("brightness-200");
      setTimeout(() => {
        containerRef.current!.classList.remove("brightness-200");
      }, 150);
    };

    /* 🔥 Ember Sparks */
    const spawnSparks = () => {
      for (let i = 0; i < 20; i++) {
        const spark = document.createElement("div");
        spark.className =
          "absolute w-2 h-2 bg-orange-400 rounded-full";
        spark.style.left = width / 2 + "px";
        spark.style.top = height - 80 + "px";
        spark.style.animation = "sparks 1s ease-out forwards";
        containerRef.current?.appendChild(spark);
        setTimeout(() => spark.remove(), 1000);
      }
    };

    const formWord = (text: string) => {
      world.gravity.y = 0;

      const wordsSplit = text.split(" ");
      const totalWidth = wordsSplit
        .map((w) => w.length)
        .reduce((a, b) => a + b, 0);

      let index = 0;
      let startX = width / 2 - totalWidth * 20;
      let y = height / 2 - 80;

      wordsSplit.forEach((word) => {
        word.split("").forEach(() => {
          const body = bodies[index];
          if (body) {
            Body.setVelocity(body, { x: 0, y: 0 });
            Body.setPosition(body, { x: startX, y });
            Body.setStatic(body, true);
          }
          startX += 40;
          index++;
        });
        startX += 40;
      });

      lightning();
      groundImpact();
      spawnSparks();
    };

    const explode = () => {
      world.gravity.y = 1;
      bodies.forEach((body) => {
        if (!body) return;
        Body.setStatic(body, false);
        Body.applyForce(body, body.position, {
          x: (Math.random() - 0.5) * 0.25,
          y: -Math.random() * 0.25,
        });
      });
    };

    let wordIndex = 0;

    const startCycle = () => {
      bodies = [];
      elements = [];
      sceneRef.current!.innerHTML = "";

      createLetters(words[wordIndex]);

      setTimeout(() => formWord(words[wordIndex]), 4000);
      setTimeout(() => {
        explode();
        wordIndex = (wordIndex + 1) % words.length;
      }, 8500);
    };

    startCycle();
    const interval = setInterval(startCycle, 10500);

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
      className="relative w-full h-[650px] overflow-hidden bg-gradient-to-b from-black via-[#111827] to-black transition-all duration-300"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.2),transparent_60%)] animate-pulse"></div>
      <div ref={sceneRef} />
    </div>
  );
};

export default LegendaryGameIntro;