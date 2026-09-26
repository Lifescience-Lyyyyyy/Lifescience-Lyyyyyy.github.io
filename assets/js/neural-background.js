(() => {
  const canvas = document.getElementById("neural-background-canvas");
  if (!canvas) return;

  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return;

  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const pointer = { x: -1000, y: -1000 };
  const bursts = [];
  const brainOutline = new Path2D(
    "M500 264 C475 266 452 247 453 218 C430 205 422 180 434 157 C423 134 431 111 450 101 C451 78 471 61 493 64 C510 42 541 43 559 60 C579 42 610 45 624 66 C649 64 668 83 666 107 C684 120 689 144 677 163 C689 185 680 211 658 221 C659 244 640 260 617 258 C598 273 576 271 559 256 C541 274 515 273 500 264 Z"
  );
  const brainFolds = new Path2D(
    "M559 60 C549 86 557 110 561 132 C566 162 553 188 559 211 C564 231 555 247 559 256 M493 64 C479 86 489 103 502 111 M450 101 C472 103 486 116 484 137 M434 157 C455 145 471 152 481 167 M453 218 C471 207 488 212 499 227 M510 102 C530 90 546 99 551 114 M498 146 C519 134 537 143 543 159 M494 192 C514 183 536 193 539 211 M624 66 C614 86 619 99 637 108 M666 107 C643 106 632 118 628 138 M677 163 C651 154 638 164 629 180 M658 221 C633 212 621 219 611 239 M588 104 C603 87 621 93 627 105 M581 153 C598 140 615 151 619 165 M580 205 C597 193 613 202 616 218"
  );

  let width = 0;
  let height = 0;
  let nodes = [];
  let links = [];
  let frame = 0;
  let lastFrame = 0;

  function makeRandom(seed) {
    return () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
  }

  function buildNetwork() {
    const random = makeRandom(2026 + width * 17 + height);
    const spacing = width < 600 ? 112 : 136;
    nodes = [];
    links = [];

    for (let y = -spacing / 2; y < height + spacing; y += spacing) {
      for (let x = -spacing / 2; x < width + spacing; x += spacing) {
        if (random() < 0.08) continue;
        nodes.push({
          x: x + (random() - 0.5) * spacing * 0.7,
          y: y + (random() - 0.5) * spacing * 0.7,
          phase: random() * Math.PI * 2,
          size: 1.8 + random() * 1.8,
        });
      }
    }

    nodes.forEach((node, index) => {
      const nearest = [];
      for (let other = index + 1; other < nodes.length; other += 1) {
        const distance = Math.hypot(node.x - nodes[other].x, node.y - nodes[other].y);
        if (distance < spacing * 1.8) nearest.push({ other, distance });
      }
      nearest.sort((a, b) => a.distance - b.distance);
      nearest.slice(0, 3).forEach(({ other }) => {
        links.push({ from: index, to: other, phase: random() });
      });
    });
  }

  function palette() {
    const dark = document.documentElement.dataset.theme === "dark";
    return dark
      ? {
          line: "rgba(113, 201, 207, 0.17)",
          activeLine: "rgba(113, 201, 207, 0.52)",
          node: "rgba(129, 212, 217, 0.43)",
          activeNode: "rgba(156, 238, 226, 0.85)",
          signal: "rgba(156, 238, 226, 0.72)",
          brain: "rgba(113, 201, 207, 0.16)",
        }
      : {
          line: "rgba(95, 80, 150, 0.13)",
          activeLine: "rgba(66, 155, 160, 0.43)",
          node: "rgba(95, 80, 150, 0.36)",
          activeNode: "rgba(46, 142, 150, 0.82)",
          signal: "rgba(49, 158, 159, 0.65)",
          brain: "rgba(95, 80, 150, 0.12)",
        };
  }

  function drawBrain(colors) {
    const scale = Math.min(width / 670, height / 440, 1.45);
    context.save();
    context.translate(width * 0.76, height * 0.54);
    context.scale(scale, scale);
    context.translate(-559, -160);
    context.strokeStyle = colors.brain;
    context.lineWidth = 2;
    context.stroke(brainOutline);
    context.lineWidth = 1.4;
    context.stroke(brainFolds);
    context.restore();
  }

  function draw(time) {
    const colors = palette();
    const still = motionPreference.matches;
    context.clearRect(0, 0, width, height);
    drawBrain(colors);

    const positions = nodes.map((node) => {
      let x = node.x + (still ? 0 : Math.sin(time * 0.00035 + node.phase) * 4);
      let y = node.y + (still ? 0 : Math.cos(time * 0.00029 + node.phase) * 4);
      const distance = Math.hypot(x - pointer.x, y - pointer.y);
      const activity = Math.max(0, 1 - distance / 150);
      if (activity && distance > 0) {
        x += ((x - pointer.x) / distance) * activity * 12;
        y += ((y - pointer.y) / distance) * activity * 12;
      }
      return { x, y, activity };
    });

    links.forEach((link, index) => {
      const from = positions[link.from];
      const to = positions[link.to];
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.strokeStyle = Math.max(from.activity, to.activity) > 0.15 ? colors.activeLine : colors.line;
      context.lineWidth = 1;
      context.stroke();

      if (!still && index % 8 === 0) {
        const progress = (time * 0.00012 + link.phase) % 1;
        context.beginPath();
        context.arc(from.x + (to.x - from.x) * progress, from.y + (to.y - from.y) * progress, 2.2, 0, Math.PI * 2);
        context.fillStyle = colors.signal;
        context.fill();
      }
    });

    positions.forEach((position, index) => {
      context.beginPath();
      context.arc(position.x, position.y, nodes[index].size + position.activity * 2.8, 0, Math.PI * 2);
      context.fillStyle = position.activity > 0.1 ? colors.activeNode : colors.node;
      context.fill();
    });

    for (let index = bursts.length - 1; index >= 0; index -= 1) {
      const burst = bursts[index];
      const age = time - burst.time;
      if (age > 900 || still) {
        bursts.splice(index, 1);
        continue;
      }
      context.beginPath();
      context.arc(burst.x, burst.y, 15 + age * 0.22, 0, Math.PI * 2);
      context.strokeStyle = colors.activeLine;
      context.globalAlpha = 1 - age / 900;
      context.lineWidth = 1.5;
      context.stroke();
      context.globalAlpha = 1;
    }
  }

  function tick(time) {
    if (time - lastFrame >= 32) {
      draw(time);
      lastFrame = time;
    }
    frame = requestAnimationFrame(tick);
  }

  function updateMotion() {
    cancelAnimationFrame(frame);
    frame = 0;
    if (motionPreference.matches) draw(performance.now());
    else if (!document.hidden) frame = requestAnimationFrame(tick);
  }

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    buildNetwork();
    draw(performance.now());
  }

  window.addEventListener("resize", resize);
  window.addEventListener(
    "pointermove",
    (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      if (motionPreference.matches) draw(performance.now());
    },
    { passive: true }
  );
  window.addEventListener("pointerout", (event) => {
    if (event.relatedTarget) return;
    pointer.x = -1000;
    pointer.y = -1000;
    if (motionPreference.matches) draw(performance.now());
  });
  window.addEventListener(
    "pointerdown",
    (event) => {
      if (!motionPreference.matches) {
        bursts.push({ x: event.clientX, y: event.clientY, time: performance.now() });
        if (bursts.length > 5) bursts.shift();
      }
    },
    { passive: true }
  );
  document.addEventListener("visibilitychange", updateMotion);
  motionPreference.addEventListener("change", updateMotion);
  new MutationObserver(() => draw(performance.now())).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  resize();
  updateMotion();
})();
