import { createNoise3D } from 'simplex-noise';

// Constants
const particleCount = 2000; // Increased particle count for denser effect
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 120; // Increased Y-range for broader particle spread
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.4; // Faster particle movement
const rangeSpeed = 2;
const baseRadius = 2; // Smaller particles for more detail
const rangeRadius = 4;
const baseHue = 200; // Hue for cooler colors
const rangeHue = 200; // Use complementary range for diversity
const noiseSteps = 8;
const xOff = 0.0025; // Faster horizontal movement
const yOff = 0.0025; // Faster vertical movement
const zOff = 0.001; // Faster depth movement
const backgroundColor = '#000000'; // Pure black background
const TAU = Math.PI * 2;

let canvas, ctx, particleProps, center, tick, simplex, animationFrameId;

/**
 * Initializes the ThreeBackground animation.
 */
function ThreeBackground() {
  cleanup(); // Clean up any existing canvases or animations
  setup();
}

function setup() {
  createCanvas();
  resizeCanvas();
  initParticles();
  animate();

  window.addEventListener('resize', resizeCanvas);
}

/**
 * Creates the canvas and attaches it to the container.
 */
function createCanvas() {
  const container = document.querySelector('.content--canvas');
  if (!container) {
    console.error('Container for ThreeBackground not found.');
    return;
  }

  cleanup(); // Ensure no existing canvas

  canvas = document.createElement('canvas');
  canvas.style = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  `;

  container.appendChild(canvas);
  ctx = canvas.getContext('2d');
  center = [];
}

/**
 * Resizes the canvas to match the window size.
 */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  center = [canvas.width / 2, canvas.height / 2];
}

/**
 * Initializes particle properties.
 */
function initParticles() {
  tick = 0;
  simplex = createNoise3D();
  particleProps = new Float32Array(particlePropsLength);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    initParticle(i);
  }
}

/**
 * Initializes a single particle.
 */
function initParticle(i) {
  const x = Math.random() * canvas.width;
  const y = center[1] + (Math.random() - 0.5) * rangeY;
  const vx = 0;
  const vy = 0;
  const life = 0;
  const ttl = baseTTL + Math.random() * rangeTTL;
  const speed = baseSpeed + Math.random() * rangeSpeed;
  const radius = baseRadius + Math.random() * rangeRadius;
  const hue = baseHue + Math.random() * rangeHue;

  particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
}

/**
 * Animation loop for the particles.
 */
function animate() {
  tick++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Set the black background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particlePropsLength; i += particlePropCount) {
    updateParticle(i);
  }

  animationFrameId = requestAnimationFrame(animate);
}

/**
 * Updates a single particle's properties.
 */
function updateParticle(i) {
  const i2 = i + 1;
  const i3 = i + 2;
  const i4 = i + 3;
  const i5 = i + 4;
  const i6 = i + 5;
  const i7 = i + 6;
  const i8 = i + 7;
  const i9 = i + 8;

  const n = simplex(
    particleProps[i] * xOff,
    particleProps[i2] * yOff,
    tick * zOff
  ) * noiseSteps * TAU;

  const vx = lerp(particleProps[i3], Math.cos(n), 0.5);
  const vy = lerp(particleProps[i4], Math.sin(n), 0.5);

  const x = particleProps[i] + vx * particleProps[i7];
  const y = particleProps[i2] + vy * particleProps[i7];

  drawParticle(
    particleProps[i],
    particleProps[i2],
    x,
    y,
    particleProps[i5],
    particleProps[i6],
    particleProps[i8],
    particleProps[i9]
  );

  const life = particleProps[i5] + 1;

  if (life > particleProps[i6] || x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
    initParticle(i);
  } else {
    particleProps.set(
      [x, y, vx, vy, life, particleProps[i6], particleProps[i7], particleProps[i8], particleProps[i9]],
      i
    );
  }
}

/**
 * Draws a single particle on the canvas.
 */
function drawParticle(x, y, x2, y2, life, ttl, radius, hue) {
  ctx.save();
  ctx.lineWidth = radius;
  ctx.strokeStyle = `hsla(${hue}, 100%, 70%, ${fadeInOut(life, ttl)})`; // Brighter particles
  ctx.shadowBlur = 10; // Add glow effect
  ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.8)`; // Glow color
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.restore();
}

/**
 * Smooth fade-in and fade-out effect for particles.
 */
function fadeInOut(t, m) {
  const halfM = 0.5 * m;
  return Math.abs((t + halfM) % m - halfM) / halfM;
}

/**
 * Linear interpolation helper.
 */
function lerp(a, b, alpha) {
  return a + (b - a) * alpha;
}

/**
 * Cleans up any existing canvas or animation.
 */
function cleanup() {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
    animationFrameId = null;
  }

  const existingCanvas = document.querySelector('.content--canvas canvas');
  if (existingCanvas) {
    existingCanvas.remove();
  }
}

export default ThreeBackground;