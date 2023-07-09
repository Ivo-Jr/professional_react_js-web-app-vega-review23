import React, { useEffect, useState } from 'react';

export const Loading     = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 10));
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="w-3/4 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-blue-500 transition-all duration-200"
        ></div>
      </div>
      <p className="mt-3 text-gray-500 text-center">Carregando...</p>
    </div>
  );
};
