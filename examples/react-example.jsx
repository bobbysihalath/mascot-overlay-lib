import { useEffect, useRef } from 'react';
import MascotOverlay from 'mascot-overlay';
import './App.css';

function App() {
  const mascotRef = useRef(null);

  useEffect(() => {
    // Initialize mascot overlay
    mascotRef.current = new MascotOverlay({
      mascotImage: '/assets/mascot.png',
      overlayImage: '/assets/system-details.png',
      overlayWidth: '900px',
      position: { bottom: '5%', right: '30px' }
    });

    // Cleanup on unmount
    return () => {
      if (mascotRef.current) {
        mascotRef.current.destroy();
      }
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + Mascot Overlay</h1>
        <p>Hover over the mascot in the bottom-right corner!</p>
      </header>
    </div>
  );
}

export default App;
