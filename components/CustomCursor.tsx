'use client';

import { useEffect, useRef } from 'react';

const INTERACTIVE_SELECTOR = 'a, button, [role="button"], .cursor-hover-target';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);

  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const enabled = hasFinePointer && hasHover && window.innerWidth > 1024;

    if (!enabled) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const onPointerMove = (event: PointerEvent) => {
      cursor.style.opacity = '1';
      cursor.style.transform = `translate3d(${event.clientX - 12}px, ${event.clientY - 12}px, 0) scale(${scaleRef.current})`;
    };

    const onPointerLeave = () => {
      cursor.style.opacity = '0';
    };

    const onPointerOver = (event: PointerEvent) => {
      const isInteractive = event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR));
      scaleRef.current = isInteractive ? 1.12 : 1;
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerover', onPointerOver);
    window.addEventListener('pointerleave', onPointerLeave);
    document.documentElement.classList.add('custom-cursor-enabled');
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerover', onPointerOver);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.documentElement.classList.remove('custom-cursor-enabled');
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        width: '24px',
        height: '24px',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 200,
        pointerEvents: 'none',
        opacity: 0,
        transform: 'translate3d(-100px, -100px, 0)',
        transition: 'opacity 0.12s ease, transform 0.08s linear',
        backgroundImage: 'url(/cursor-main.png)',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        filter: 'var(--cursor-filter, none)',
      }}
    />
  );
};

export default CustomCursor;
