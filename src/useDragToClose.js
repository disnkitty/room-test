import { useRef, useEffect } from 'react';

export function useDragToClose(onClose, threshold = 80) {
  const startY = useRef(null);

  const onPointerDown = (e) => {
    startY.current = e.touches?.[0]?.clientY ?? e.clientY;

    const handleMouseUp = (ev) => {
      if (startY.current === null) return;
      const delta = ev.clientY - startY.current;
      if (delta > threshold) onClose();
      startY.current = null;
      window.removeEventListener('mouseup', handleMouseUp);
    };

    if (!e.touches) {
      window.addEventListener('mouseup', handleMouseUp);
    }
  };

  const onTouchEnd = (e) => {
    if (startY.current === null) return;
    const endY = e.changedTouches[0].clientY;
    const delta = endY - startY.current;
    if (delta > threshold) onClose();
    startY.current = null;
  };

  return { onPointerDown, onTouchEnd };
}