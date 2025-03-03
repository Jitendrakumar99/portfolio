import  { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => {
        setDotPosition({ x: e.clientX, y: e.clientY });
      }, 50);
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
        }}
      />
      <div
        className="cursor-dot"
        style={{
          transform: `translate(${dotPosition.x - 2}px, ${dotPosition.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor; 