// global.d.ts
import type { Container, Engine } from "tsparticles-engine";

declare global {
  interface Window {
    particlesInit?: (engine: Engine) => Promise<void>;
    particlesLoaded?: (container: Container) => void;
  }
}

export {};
