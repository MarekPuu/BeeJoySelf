import type { ISourceOptions } from "tsparticles-engine";

export const options: ISourceOptions = {
  background: {
    color: "inherit",
  },
  fullScreen: {
    zIndex: -1,
  },
  particles: {
    number: {
      value: 150,
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      speed: { min: 0.4, max: 0.5 },
    },
    color: {
      value: ["FEC90B", "ffffff", "BA435D", "FE9100"],
    },
    opacity: {
      value: 0.8,
    },
    collisions: {
      enable: true,
      mode: "bounce",
    },
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      repulse: {
        distance: 300,
        duration: 0.4,
      },
      bubble: {
        distance: 200,
        size: 0,
        opacity: 0,
        duration: 2,
      },
    },
  },
};
