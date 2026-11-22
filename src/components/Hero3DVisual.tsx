import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DVisual: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 500;
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central Icosahedron Wireframe
    const icoGeometry = new THREE.IcosahedronGeometry(4.2, 1);
    const icoWireMaterial = new THREE.MeshBasicMaterial({
      color: 0x4D8DFF,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const icoMesh = new THREE.Mesh(icoGeometry, icoWireMaterial);
    mainGroup.add(icoMesh);

    // 2. Glowing Nodes at vertices of the inner geometry
    const vertexPositions = icoGeometry.getAttribute('position');
    const nodesGroup = new THREE.Group();
    const nodeGeometry = new THREE.SphereGeometry(0.08, 8, 8);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0x00F2FE });

    for (let i = 0; i < vertexPositions.count; i += 3) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(
        vertexPositions.getX(i),
        vertexPositions.getY(i),
        vertexPositions.getZ(i)
      );
      nodesGroup.add(node);
    }
    mainGroup.add(nodesGroup);

    // 3. Inner Violet Dodecahedron Core
    const coreGeometry = new THREE.DodecahedronGeometry(2.4, 0);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x916BFF,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    mainGroup.add(coreMesh);

    // 4. Orbital Ring 1 (Electric Blue)
    const ring1Geo = new THREE.TorusGeometry(6.2, 0.03, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x4D8DFF,
      transparent: true,
      opacity: 0.4,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    // 5. Orbital Ring 2 (Violet / Cyber Cyan)
    const ring2Geo = new THREE.TorusGeometry(7.0, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x916BFF,
      transparent: true,
      opacity: 0.25,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 6. Constellation Particle Cloud
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const radius = 5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      particlePositions[i] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i + 2] = radius * Math.cos(phi);
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xF5F7FF,
      size: 0.07,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Mouse Tracking with smooth interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 0.8;
      targetY = (y / rect.height) * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!mount) return;
      const newWidth = mount.clientWidth;
      const newHeight = mount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.15 + mouseX;
      mainGroup.rotation.x = mouseY + Math.sin(elapsedTime * 0.2) * 0.05;

      // Inner core independent counter-rotation
      coreMesh.rotation.x = -elapsedTime * 0.25;
      coreMesh.rotation.y = elapsedTime * 0.35;

      // Rings rotation
      ring1.rotation.z = elapsedTime * 0.1;
      ring2.rotation.z = -elapsedTime * 0.08;

      // Subtle breathing scale
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.025;
      icoMesh.scale.set(pulse, pulse, pulse);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      icoGeometry.dispose();
      icoWireMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[540px] flex items-center justify-center pointer-events-none select-none">
      {/* Ambient gradient glow behind 3D core */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-brand-blue/20 via-brand-violet/20 to-transparent blur-3xl pointer-events-none" />
      <div ref={mountRef} className="w-full h-full absolute inset-0 flex items-center justify-center pointer-events-auto" />
      {/* Subtle coordinate overlay indicator */}
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-brand-textMuted/60 tracking-wider flex items-center gap-2 pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
        <span>NEURAL_CORE // R-3D.ROT_ACTIVE</span>
      </div>
    </div>
  );
};
