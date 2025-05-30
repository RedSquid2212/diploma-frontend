import React, { useState, useEffect, useRef } from 'react';

type Obstacle = {
  id: number;
  x: number;
  width: number;
  height: number;
  speed: number;
};

const GeometryRunner: React.FC = () => {
  const [playerY, setPlayerY] = useState(250);
  const [isJumping, setIsJumping] = useState(false);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [score, setScore] = useState(0);
  const [gameSpeed, setGameSpeed] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const nextObstacleId = useRef(0);

  const handleJump = () => {
    if (!isJumping && !isGameOver) {
      setIsJumping(true);
      setPlayerY(150);
      setTimeout(() => {
        setPlayerY(250);
        setIsJumping(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (isGameOver) return;

    const obstacleInterval = setInterval(() => {
      const newObstacle: Obstacle = {
        id: nextObstacleId.current++,
        x: 800,
        width: 30 + Math.random() * 20,
        height: 30 + Math.random() * 50,
        speed: gameSpeed
      };
      
      setObstacles(prev => [...prev, newObstacle]);
    }, 1500 - gameSpeed * 50);

    return () => clearInterval(obstacleInterval);
  }, [gameSpeed, isGameOver]);

  useEffect(() => {
    if (isGameOver) return;

    const gameLoop = setInterval(() => {
      setScore(prev => prev + 1);
      
      setObstacles(prev => 
        prev.map(obs => ({
          ...obs,
          x: obs.x - obs.speed
        })).filter(obs => obs.x > -obs.width)
      );

      const playerRect = { x: 100, y: playerY, width: 30, height: 30 };
      const collision = obstacles.some(obs => (
        playerRect.x < obs.x + obs.width &&
        playerRect.x + playerRect.width > obs.x &&
        playerRect.y < 300 - obs.height &&
        playerRect.y + playerRect.height > 300 - obs.height
      ));

      if (collision) {
        setIsGameOver(true);
      }
    }, 16);

    return () => clearInterval(gameLoop);
  }, [obstacles, playerY, isGameOver]);

  useEffect(() => {
    const difficultyInterval = setInterval(() => {
      setGameSpeed(prev => Math.min(prev + 0.25, 15));
    }, 10000);

    return () => clearInterval(difficultyInterval);
  }, []);

  const restartGame = () => {
    setObstacles([]);
    setScore(0);
    setGameSpeed(5);
    setIsGameOver(false);
    setPlayerY(250);
  };

  return (
    <div 
      onClick={handleJump}
      style={{ 
        width: '800px',
        height: '300px',
        backgroundColor: '#1a1a2e',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer'
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '100px',
          top: `${playerY}px`,
          width: '30px',
          height: '30px',
          backgroundColor: '#FF5733',
          transition: isJumping ? 'top 0.3s ease-out' : 'top 0.3s ease-in'
        }}
      />
      {obstacles.map(obs => (
        <div
          key={obs.id}
          style={{
            position: 'absolute',
            left: `${obs.x}px`,
            bottom: '0',
            width: `${obs.width}px`,
            height: `${obs.height}px`,
            backgroundColor: '#2ECC71'
          }}
        />
      ))}
      <div style={{ 
        position: 'absolute',
        top: '10px',
        left: '10px',
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '20px'
      }}>
        Score: {score}
      </div>

      {isGameOver && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2>Game Over!</h2>
          <p>Your score: {score}</p>
          <button 
            onClick={restartGame}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#FF5733',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
};

export default GeometryRunner;