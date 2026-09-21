"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { Play, Pause, Sparkles } from "lucide-react";

interface Flower3DBackgroundProps {
  className?: string;
}

export const Flower3DBackground: React.FC<Flower3DBackgroundProps> = ({ className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const isPlayingRef = useRef(true);

  // Hydration safety mount check
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Keep ref in sync for animation loop
  useEffect(() => {
    isPlayingRef.current = isPlaying;
  }, [isPlaying]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0c, 0.05);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold the entire flower model
    const flowerGroup = new THREE.Group();
    // Tilt flower slightly for optimal 3D perspective preview
    flowerGroup.rotation.x = Math.PI * 0.25;
    scene.add(flowerGroup);

    // Helper function to generate soft glowing particle texture
    const createParticleTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");
      if (!ctx) return null;

      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(0.3, "rgba(200, 130, 255, 0.8)");
      gradient.addColorStop(0.7, "rgba(140, 50, 230, 0.3)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    const particleTexture = createParticleTexture();

    // ==========================================
    // PROCEDURAL 3D FLOWER GENERATION
    // ==========================================
    const flowerPositions: number[] = [];
    const flowerColors: number[] = [];
    const flowerSizes: number[] = [];
    const initialPositions: { x: number; y: number; z: number }[] = [];

    const numPetalLayers = 14;
    const particlesPerLayer = 180;

    // Palette: Luminous Violet & Deep Purple & Cyan accents
    const colorCore = new THREE.Color("#f472b6"); // Pink core highlight
    const colorMid = new THREE.Color("#a855f7");  // Purple mid petal
    const colorOuter = new THREE.Color("#6366f1"); // Indigo outer petal
    const colorEdge = new THREE.Color("#c084fc");  // Bright edge glow

    // Generate Petals Layer by Layer
    for (let layer = 0; layer < numPetalLayers; layer++) {
      const layerProgress = layer / numPetalLayers; // 0 to 1
      const numPetals = 4 + Math.floor(layer * 0.8); // Outer layers have more petals
      const layerRadius = 0.3 + Math.pow(layerProgress, 0.85) * 2.4;
      const layerLift = Math.sin(layerProgress * Math.PI * 0.5) * 1.2 - (1 - layerProgress) * 0.4;

      for (let i = 0; i < particlesPerLayer; i++) {
        const u = i / particlesPerLayer; // Along the petal radially
        const theta = u * Math.PI * 2; // Angle around center

        // Petal shape modulation (sine wave frequency = numPetals)
        const petalShape = Math.abs(Math.sin((theta * numPetals) / 2));
        const petalWidthMod = Math.pow(petalShape, 0.6);

        // Distance from center
        const r = layerRadius * (0.2 + 0.8 * u) * (0.7 + 0.5 * petalWidthMod);

        // 3D coordinates for flower petal curve
        const angle = theta + layer * 0.35; // Rotate layers sequentially
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);

        // Z-height curve (blooming cup shape)
        const heightFactor = Math.pow(u, 1.2) * layerLift;
        const edgeDipping = Math.sin(theta * numPetals) * 0.15 * u;
        const z = heightFactor + edgeDipping + (Math.random() - 0.5) * 0.04;

        flowerPositions.push(x, y, z);
        initialPositions.push({ x, y, z });

        // Color interpolation based on distance & layer
        const tempColor = new THREE.Color();
        if (layerProgress < 0.25) {
          tempColor.copy(colorCore).lerp(colorMid, layerProgress * 4);
        } else if (layerProgress < 0.7) {
          tempColor.copy(colorMid).lerp(colorOuter, (layerProgress - 0.25) * 2.2);
        } else {
          tempColor.copy(colorOuter).lerp(colorEdge, (layerProgress - 0.7) * 3.3);
        }

        // Add subtle variation per point
        tempColor.r += (Math.random() - 0.5) * 0.05;
        tempColor.g += (Math.random() - 0.5) * 0.05;
        tempColor.b += (Math.random() - 0.5) * 0.05;

        flowerColors.push(tempColor.r, tempColor.g, tempColor.b);
        flowerSizes.push(0.04 + Math.random() * 0.05 + (1 - layerProgress) * 0.03);
      }
    }

    // Stem particles going downwards
    const stemParticles = 250;
    for (let i = 0; i < stemParticles; i++) {
      const progress = i / stemParticles;
      const z = -0.4 - progress * 2.5;
      const curve = Math.sin(progress * Math.PI * 1.5) * 0.2;
      const radius = (0.12 * (1 - progress * 0.5)) + (Math.random() - 0.5) * 0.03;
      const theta = Math.random() * Math.PI * 2;

      const x = curve + radius * Math.cos(theta);
      const y = radius * Math.sin(theta);

      flowerPositions.push(x, y, z);
      initialPositions.push({ x, y, z });

      const stemColor = new THREE.Color("#4c1d95").lerp(new THREE.Color("#2e1065"), progress);
      flowerColors.push(stemColor.r, stemColor.g, stemColor.b);
      flowerSizes.push(0.03 + Math.random() * 0.03);
    }

    // Floating pollen cloud around the flower
    const pollenCount = 400;
    for (let i = 0; i < pollenCount; i++) {
      const r = 1.0 + Math.random() * 2.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * Math.PI;

      const x = r * Math.cos(theta) * Math.cos(phi);
      const y = r * Math.sin(theta) * Math.cos(phi);
      const z = r * Math.sin(phi) + 0.5;

      flowerPositions.push(x, y, z);
      initialPositions.push({ x, y, z });

      const pollenColor = new THREE.Color(
        Math.random() > 0.5 ? "#e9d5ff" : "#f472b6"
      );
      flowerColors.push(pollenColor.r, pollenColor.g, pollenColor.b);
      flowerSizes.push(0.02 + Math.random() * 0.04);
    }

    // Build Geometry
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(flowerPositions, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(flowerColors, 3)
    );

    // Build Material
    const material = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      map: particleTexture || undefined,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(geometry, material);
    flowerGroup.add(pointCloud);

    // Optional subtle wireframe mesh petals for extra volumetric depth
    const wireframeGroup = new THREE.Group();
    const petalMeshGeo = new THREE.ConeGeometry(1.8, 1.2, 8, 4, true);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x9333ea,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const wireMesh = new THREE.Mesh(petalMeshGeo, wireframeMat);
    wireMesh.rotation.x = Math.PI;
    wireframeGroup.add(wireMesh);
    flowerGroup.add(wireframeGroup);

    // ==========================================
    // MOUSE PARALLAX & ANIMATION LOOP
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / windowHalfX;
      mouseY = (event.clientY - windowHalfY) / windowHalfY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Clock for smooth procedural breathing & rot
    const clock = new THREE.Clock();
    let animFrameId: number;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (isPlayingRef.current) {
        // Continuous organic rotation
        flowerGroup.rotation.z = elapsedTime * 0.12;

        // Smooth mouse tilt parallax
        targetRotationY = mouseX * 0.4;
        targetRotationX = Math.PI * 0.25 + mouseY * 0.3;

        flowerGroup.rotation.y += (targetRotationY - flowerGroup.rotation.y) * 0.04;
        flowerGroup.rotation.x += (targetRotationX - flowerGroup.rotation.x) * 0.04;

        // Breathing / pulsing effect on flower petals
        const positions = geometry.attributes.position.array as Float32Array;
        const breathScale = 1 + Math.sin(elapsedTime * 1.5) * 0.035;

        for (let i = 0; i < initialPositions.length; i++) {
          const init = initialPositions[i];
          // Apply breathing calculation primarily to flower bloom top (z > -0.3)
          if (init.z > -0.3) {
            positions[i * 3] = init.x * breathScale;
            positions[i * 3 + 1] = init.y * breathScale;
            positions[i * 3 + 2] = init.z + Math.sin(elapsedTime * 2.0 + init.x * 2) * 0.02;
          } else {
            // Subtle sway for stem
            const sway = Math.sin(elapsedTime * 1.2 + init.z) * 0.03;
            positions[i * 3] = init.x + sway;
          }
        }
        geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full h-full min-h-[450px] overflow-hidden ${className}`}>
      {/* 3D Canvas Mount point */}
      <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Interactive Controls Overlay (Matching screenshot pause/play toggle at bottom-left) */}
      <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause 3D Flower animation" : "Play 3D Flower animation"}
          className="p-2.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-purple-500/40 transition-all flex items-center justify-center group pointer-events-auto"
          title={isPlaying ? "Pause Animation" : "Play Animation"}
        >
          {isPlaying ? (
            <Pause className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
          ) : (
            <Play className="w-4 h-4 text-orange-400 group-hover:scale-110 transition-transform ml-0.5" />
          )}
        </button>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-xs text-slate-400 font-mono">
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>3D Particle Flower</span>
        </div>
      </div>
    </div>
  );
};
