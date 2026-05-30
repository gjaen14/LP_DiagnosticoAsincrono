/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "motion/react";
import { BrandLogo } from "./BrandLogo";
import { ArrowRight } from "lucide-react";

interface HeaderHeroProps {
  onOrderClick: () => void;
  onLearnMoreClick: () => void;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({
  onOrderClick,
  onLearnMoreClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Dimensions
    let width = container.clientWidth;
    let height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x181514, 0.015);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.set(0, 15, 30);
    camera.lookAt(0, 5, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle Weave (Alta Costura Digital)
    const columns = 65;
    const rows = 45;
    const count = columns * rows;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    const baseColorArr = [
      new THREE.Color(0xb39e8c), // Accent Taupe
      new THREE.Color(0x251e1a), // Deep Warm Brown
      new THREE.Color(0xfafafa), // Pure Neutral Light
    ];

    let index = 0;
    for (let c = 0; c < columns; c++) {
      for (let r = 0; r < rows; r++) {
        // Grid layout stretching outward
        const x = (c - columns / 2) * 1.2;
        const z = (r - rows / 2) * 1.2;
        const y = 0;

        positions[index * 3] = x;
        positions[index * 3 + 1] = y;
        positions[index * 3 + 2] = z;

        // Color interpolation based on position for fine luxury shades
        const mixRatio = (c / columns + r / rows) / 2;
        const col = new THREE.Color().copy(baseColorArr[0]).lerp(baseColorArr[1], mixRatio);
        
        colors[index * 3] = col.r;
        colors[index * 3 + 1] = col.g;
        colors[index * 3 + 2] = col.b;

        // Varying sizes for a starry mesh feeling
        sizes[index] = Math.random() * 1.5 + 0.5;

        index++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom shader shader material for smooth premium particles
    const vertexShader = `
      attribute float size;
      attribute vec3 color;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z) * 0.4;
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        // Soft circular smooth dots instead of rigid squares
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = smoothstep(0.5, 0.2, dist);
        // Add a slight golden bloom look
        gl_FragColor = vec4(vColor, alpha * 0.85);
      }
    `;

    // Assign sizes custom attribute
    const sizesAttribute = new THREE.BufferAttribute(sizes, 1);
    geometry.setAttribute("size", sizesAttribute);

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // Floating Sparkles (Brillo / Chispa) representing exclusivity and boutique detail
    const sparkCount = 45;
    const sparkGeometry = new THREE.BufferGeometry();
    const sparkPositions = new Float32Array(sparkCount * 3);
    const sparkVelocities: number[] = [];
    const sparkOffsets: number[] = [];

    for (let i = 0; i < sparkCount; i++) {
      // Random coordinates in space
      sparkPositions[i * 3] = (Math.random() - 0.5) * 60;
      sparkPositions[i * 3 + 1] = Math.random() * 20 - 5;
      sparkPositions[i * 3 + 2] = (Math.random() - 0.5) * 50;

      sparkVelocities.push(0.01 + Math.random() * 0.02);
      sparkOffsets.push(Math.random() * Math.PI * 2);
    }

    sparkGeometry.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));

    const sparkMaterial = new THREE.PointsMaterial({
      color: 0xb39e8c,
      size: 1.8,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const sparkles = new THREE.Points(sparkGeometry, sparkMaterial);
    scene.add(sparkles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x181514, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xb39e8c, 0.8, 100);
    pointLight.position.set(0, 10, 15);
    scene.add(pointLight);

    // Mouse Tracking setup
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetX = x * 8;
      targetY = y * 4;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clock
    const clock = new THREE.Clock();

    // Animation Loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow dynamic wave interpolation for the particle weave
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      let pIdx = 0;
      for (let c = 0; c < columns; c++) {
        for (let r = 0; r < rows; r++) {
          const x = posAttr.getX(pIdx);
          const z = posAttr.getZ(pIdx);

          // Double waves for silk/ribbon luxurious feeling
          const y =
            Math.sin(x * 0.12 + elapsedTime * 0.4) * Math.cos(z * 0.1 + elapsedTime * 0.3) * 2.5 +
            Math.sin((x + z) * 0.05 + elapsedTime * 0.2) * 1.5;

          posAttr.setY(pIdx, y - 4); // Position below main text elements
          pIdx++;
        }
      }
      posAttr.needsUpdate = true;

      // Float sparkles upwards with sinusoidal sway
      const sparkPosAttr = sparkGeometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < sparkCount; i++) {
        let y = sparkPosAttr.getY(i);
        let x = sparkPosAttr.getX(i);
        
        y += sparkVelocities[i];
        x += Math.sin(elapsedTime * 0.5 + sparkOffsets[i]) * 0.01;

        // Reset if float out of bounds
        if (y > 25) {
          y = -10;
          x = (Math.random() - 0.5) * 60;
        }

        sparkPosAttr.setY(i, y);
        sparkPosAttr.setX(i, x);
      }
      sparkPosAttr.needsUpdate = true;

      // Smooth camera interpolation based on mouse coordinates (luxury inertia damping)
      camera.position.x += (targetX - camera.position.x) * 0.035;
      camera.position.y += (15 + targetY - camera.position.y) * 0.035;
      camera.lookAt(0, -1, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer for perfect Responsive styling without window resize flickering
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        width = entry.contentRect.width;
        height = entry.contentRect.height;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      }
    });
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationId);
      geometry.dispose();
      material.dispose();
      sparkGeometry.dispose();
      sparkMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="hero-section"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-brand-primary border-b border-brand-secondary selection:bg-brand-accent selection:text-brand-primary"
    >
      {/* Three.js Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Decorative ultra-fine geometric luxury overlay grids (Micro-alineacion) */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-15">
        <div className="absolute left-6 md:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-brand-neutral/20" />
        <div className="absolute right-6 md:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-brand-neutral/20" />
        <div className="absolute left-0 right-0 top-32 h-[1px] bg-brand-neutral/20" />
      </div>

      {/* 1. Header (Navigation Hub) */}
      <header className="relative w-full z-30 px-6 md:px-12 lg:px-24 pt-8 pb-4 flex items-center justify-between">
        <BrandLogo variant="dark" showTagline={false} />

        <div className="hidden md:flex items-center gap-12 text-xs uppercase tracking-[0.25em] text-brand-white/80 font-sans">
          <button
            onClick={onLearnMoreClick}
            className="hover:text-brand-accent transition-colors duration-300 relative group cursor-pointer"
          >
            El Servicio
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
          <span className="text-brand-accent/40">•</span>
          <button
            onClick={onOrderClick}
            className="hover:text-brand-accent transition-colors duration-300 relative group cursor-pointer"
          >
            Agendar Diagnóstico
            <span className="absolute bottom-[-4px] left-0 w-0 h-[1.5px] bg-brand-accent transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        <div>
          <button
            onClick={onOrderClick}
            className="relative px-5 py-2.5 overflow-hidden group rounded-sm border border-brand-accent/50 text-brand-accent uppercase tracking-[0.2em] text-[10px] font-medium transition-all duration-500 hover:border-brand-white bg-transparent cursor-pointer z-40"
          >
            <span className="absolute inset-0 w-full h-full bg-brand-accent/10 transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100" />
            Sesión de Autoridad
          </button>
        </div>
      </header>

      {/* 2. Hero Body */}
      <main className="relative z-20 flex-grow flex items-center px-6 md:px-12 lg:px-24 py-16 md:py-24">
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          {/* Subtle Label with luxury stars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="w-8 h-[1px] bg-brand-accent/60" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-accent font-sans font-medium flex items-center gap-1.5">
              Alta Boutique Digital ✦ Exclusividad Técnica
            </span>
            <span className="w-8 h-[1px] bg-brand-accent/60" />
          </motion.div>

          {/* Primary Editorial Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-serif text-brand-white leading-[1.1] tracking-tight mb-8"
          >
            Estás pagando el
            <br />
            <span className="italic font-normal text-brand-neutral pr-1">impuesto invisible</span>
            de la desconfianza.
          </motion.h1>

          {/* Elegant Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-brand-neutral/80 font-sans font-light max-w-2xl leading-relaxed tracking-wide mb-12"
          >
            Operas a nivel <strong className="font-sans font-normal text-brand-white">Senior</strong>, pero tu ecosistema digital se ve <strong className="font-sans font-normal text-brand-accent">Junior</strong>. Es por eso que tus clientes corporativos te regatean o prefieren irse con competidores menos calificados.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 justify-center w-full sm:w-auto"
          >
            <button
              onClick={onOrderClick}
              className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-white text-brand-primary font-sans font-medium text-xs uppercase tracking-[0.25em] rounded-sm transition-all duration-500 shadow-xl hover:shadow-brand-accent/20 flex items-center justify-center gap-2 cursor-pointer relative group overflow-hidden"
            >
              <span className="absolute inset-0 bg-brand-white transform translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
              <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-primary text-brand-primary font-bold">
                Agendar Diagnóstico <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={onLearnMoreClick}
              className="w-full sm:w-auto px-8 py-4 border border-brand-neutral/30 hover:border-brand-accent text-brand-white font-sans text-xs uppercase tracking-[0.25em] rounded-sm transition-colors duration-500 text-center flex items-center justify-center gap-2 cursor-pointer hover:bg-brand-secondary/40"
            >
              Conocer El Producto
            </button>
          </motion.div>
        </div>
      </main>

      {/* 3. Hero Secondary Bar */}
      <footer className="relative z-20 px-6 md:px-12 lg:px-24 py-8 border-t border-brand-secondary/50 bg-brand-primary/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs uppercase tracking-[0.25em] text-brand-neutral/60 font-sans">
          <div className="flex items-center gap-3">
            <span className="text-brand-accent font-bold">01/03</span>
            <span className="h-[1px] w-6 bg-brand-accent" />
            <span>EXCLUSIVO PARA DIRECTORES Y CEOs</span>
          </div>

          <div className="flex gap-8">
            <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Cupos Limitados (Solo 3 por semana)</span>
          </div>

          <button
            onClick={onLearnMoreClick}
            className="group flex items-center gap-2 hover:text-brand-accent transition-colors duration-300 text-[10px]"
          >
            <span>Deslizar para descubrir</span>
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <span className="text-brand-accent font-bold">↓</span>
            </motion.div>
          </button>
        </div>
      </footer>
    </div>
  );
};
