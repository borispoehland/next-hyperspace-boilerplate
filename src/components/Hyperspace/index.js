import React, { useEffect } from 'react';
import $ from 'jquery';

import './style.sass';

let $canvas;
let $body;

const animateHyperspace = () => {
  [$canvas] = $('#hyperspace');
  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;

  $body = $('body');
  $body.addClass('overflow-hidden');

  if ($canvas.getContext) {
    const ctx = $canvas.getContext('2d');
    const w = $canvas.width;
    const h = $canvas.height;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';

    const spawnRadius = 300;
    const speed = spawnRadius / 40;

    const init = [];
    const maxParts = 200;
    for (let i = 0; i < maxParts; i += 1) {
      const initX = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
      const initY = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;

      init.push({
        x: initX,
        y: initY,
        xs: (initX - w / 2) / speed,
        ys: (initY - h / 2) / speed,
        l: Math.random() * 5,
      });
    }

    const particles = [];
    for (let i = 0; i < maxParts; i += 1) {
      particles[i] = init[i];
    }

    const move = () => {
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        p.x += p.xs;
        p.y += p.ys;

        // if particle position exceeds the canvas
        if (p.x < 0 || p.y < 0 || p.x > w || p.y > h) {
          p.x = w / 2 + Math.random() * spawnRadius - spawnRadius / 2;
          p.y = h / 2 + Math.random() * spawnRadius - spawnRadius / 2;
          p.xs = (p.x - w / 2) / speed;
          p.ys = (p.y - h / 2) / speed;
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < particles.length; i += 1) {
        const p = particles[i];
        ctx.strokeStyle = `rgba(255,255,255,${p.l})`;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
        ctx.stroke();
      }
      move();
    };

    setInterval(draw, 30);
  }

  return () => {
    $body.removeClass('overflow-hidden');
  };
};

const HyperSpace = () => {
  useEffect(animateHyperspace, []);

  return (
    <canvas id="hyperspace" />
  );
};

export default HyperSpace;
