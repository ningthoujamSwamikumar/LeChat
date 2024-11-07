// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../styles.css'; // Import your Tailwind CSS styles

const App = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <h1 className="text-4xl text-blue-500">Hello, React + Vite + Tailwind + TypeScript!</h1>
    </div>
  );
};

const rootElement = document.getElementById('app')!;
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
