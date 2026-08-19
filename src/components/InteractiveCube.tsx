import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const InteractiveCube: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 320;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 4.8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group for combined rotations
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    // 1. Inner Glowing Glassy Core Cube
    const coreGeometry = new THREE.BoxGeometry(1.4, 1.4, 1.4);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x927b97,
      emissive: 0x49384d,
      emissiveIntensity: 0.6,
      roughness: 0.1,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
    });
    const coreCube = new THREE.Mesh(coreGeometry, coreMaterial);
    cubeGroup.add(coreCube);

    // 2. Outer Wireframe Holographic Cube
    const wireGeometry = new THREE.BoxGeometry(1.85, 1.85, 1.85);
    const edges = new THREE.EdgesGeometry(wireGeometry);
    const wireMaterial = new THREE.LineBasicMaterial({
      color: 0xdad0dc,
      linewidth: 2,
      transparent: true,
      opacity: 0.8,
    });
    const wireframe = new THREE.LineSegments(edges, wireMaterial);
    cubeGroup.add(wireframe);

    // 3. Orbital Particles
    const particlesCount = 80;
    const particlesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      const radius = 1.9 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      positions[i] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xae98b3,
      size: 0.045,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    cubeGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xf5f3f6, 1.2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xd896ff, 3, 50);
    pointLight1.position.set(3, 4, 3);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x64dfdf, 2, 50);
    pointLight2.position.set(-3, -3, -2);
    scene.add(pointLight2);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 2;
      targetY = (y / rect.height) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation towards mouse
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      cubeGroup.rotation.y = elapsedTime * 0.4 + mouseX * 0.8;
      cubeGroup.rotation.x = Math.sin(elapsedTime * 0.3) * 0.2 + mouseY * 0.6;
      cubeGroup.rotation.z = Math.cos(elapsedTime * 0.2) * 0.15;

      // Pulse the core cube slightly
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.04;
      coreCube.scale.set(scale, scale, scale);

      // Rotate particles counter-clockwise
      particles.rotation.y = -elapsedTime * 0.2;
      particles.rotation.x = elapsedTime * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        minHeight: '340px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-label="Interactive 3D Skillpath Hologram Cube"
    />
  );
};
