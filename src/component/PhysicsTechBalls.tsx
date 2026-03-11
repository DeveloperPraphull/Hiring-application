import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiRubyonrails,
  SiDocker,
  SiMongodb,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiMysql,
} from "react-icons/si";
import { createRoot } from "react-dom/client";

const icons = [
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiRubyonrails,
  SiDocker,
  SiMongodb,
  SiAngular,
  SiDjango,
  SiFastapi,
  SiMysql
];

const PhysicsTechBalls = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // 👇 Detect section visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 👇 Physics Engine Start/Stop based on scroll
  useEffect(() => {
    if (!isVisible) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Runner = Matter.Runner;

    const engine = Engine.create();
    const world = engine.world;

    const width = containerRef.current!.offsetWidth;
    const height = 400;

    const render = Render.create({
      element: sceneRef.current!,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Floor
    const floor = Bodies.rectangle(width / 2, height, width, 40, {
      isStatic: true,
      render: { fillStyle: "transparent" },
    });

    World.add(world, floor);

    const ballElements: HTMLDivElement[] = [];

    icons.forEach((Icon) => {
      const ball = Bodies.circle(
        Math.random() * width,
        Math.random() * -300,
        35,
        {
          restitution: 0.9,
          friction: 0.01,
          render: { fillStyle: "#ffffff" },
        }
      );

      World.add(world, ball);

      const ballEl = document.createElement("div");
      ballEl.style.position = "absolute";
      ballEl.style.width = "70px";
      ballEl.style.height = "70px";
      ballEl.style.display = "flex";
      ballEl.style.alignItems = "center";
      ballEl.style.justifyContent = "center";
      ballEl.style.borderRadius = "50%";
      ballEl.style.background = "white";
      ballEl.style.boxShadow = "0 10px 25px rgba(0,0,0,0.15)";
      ballEl.style.transition = "transform 0.1s linear";

      const root = createRoot(ballEl);
      root.render(<Icon size={30} />);

      sceneRef.current?.appendChild(ballEl);
      ballElements.push(ballEl);

      Matter.Events.on(engine, "afterUpdate", () => {
        ballEl.style.left = ball.position.x - 35 + "px";
        ballEl.style.top = ball.position.y - 35 + "px";
      });
    });

    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    // Cleanup when scroll leaves section
    return () => {
      Render.stop(render);
      World.clear(world, false);
      Engine.clear(engine);
      render.canvas.remove();
      ballElements.forEach((el) => el.remove());
    };
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      className="w-full h-[400px] overflow-hidden relative"
    >
      <div ref={sceneRef} />
    </div>
  );
};

export default PhysicsTechBalls;