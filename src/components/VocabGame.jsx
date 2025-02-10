import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star, LightbulbIcon } from 'lucide-react';

const VocabGame = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [spellingInput, setSpellingInput] = useState('');
  const [showCorrection, setShowCorrection] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [stars, setStars] = useState(0);
  const [lives, setLives] = useState(3);
  const [hintsUsed, setHintsUsed] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [perfectStreak, setPerfectStreak] = useState(true);

  const words = [
    { 
      swedish: 'dörr', english: 'door',
      hint: 'Du går igenom den när du ska in i ett rum',
      emoji: '🚪'
    },
    { 
      swedish: 'golv', english: 'floor',
      hint: 'Du står på den',
      emoji: '⬜'
    },
    { 
      swedish: 'tak', english: 'roof',
      hint: 'Den skyddar huset från regn',
      emoji: '🏠'
    },
    { 
      swedish: 'vägg', english: 'wall',
      hint: 'Du kan hänga tavlor på den',
      emoji: '🧱'
    },
    { 
      swedish: 'trappa', english: 'stairs',
      hint: 'Du går uppför och nedför på den',
      emoji: '🪜'
    },
    { 
      swedish: 'kök', english: 'kitchen',
      hint: 'Här lagar du mat',
      emoji: '🍳'
    },
    { 
      swedish: 'badrum', english: 'bathroom',
      hint: 'Här borstar du tänderna',
      emoji: '🚽'
    },
    { 
      swedish: 'sovrum', english: 'bedroom',
      hint: 'Här sover du',
      emoji: '🛏️'
    },
    { 
      swedish: 'soffa', english: 'couch',
      hint: 'Du sitter och tittar på TV i den',
      emoji: '🛋️'
    },
    { 
      swedish: 'huvud', english: 'head',
      hint: 'Här sitter din hjärna',
      emoji: '🤔'
    },
    { 
      swedish: 'arm', english: 'arm',
      hint: 'Du kan vinka med den',
      emoji: '💪'
    },
    { 
      swedish: 'ben', english: 'leg',
      hint: 'Du springer med dem',
      emoji: '🦵'
    },
    { 
      swedish: 'hand', english: 'hand',
      hint: 'Du kan klappa med den',
      emoji: '👋'
    },
    { 
      swedish: 'mun', english: 'mouth',
      hint: 'Du äter med den',
      emoji: '👄'
    },
    { 
      swedish: 'fot', english: 'foot',
      hint: 'Du har skor på den',
      emoji: '🦶'
    },
    { 
      swedish: 'öga', english: 'eye',
      hint: 'Du ser med den',
      emoji: '👁️'
    },
    { 
      swedish: 'öra', english: 'ear',
      hint: 'Du hör med den',
      emoji: '👂'
    },
    { 
      swedish: 'näsa', english: 'nose',
      hint: 'Du luktar med den',
      emoji: '👃'
    },
    { 
      swedish: 'hjärta', english: 'heart',
      hint: 'Den pumpar blod i kroppen',
      emoji: '❤️'
    },
    { 
      swedish: 'sked', english: 'spoon',
      hint: 'Du äter soppa med den',
      emoji: '🥄'
    },
    { 
      swedish: 'gaffel', english: 'fork',
      hint: 'Du äter pasta med den',
      emoji: '🍴'
    },
    { 
      swedish: 'kniv', english: 'knife',
      hint: 'Du skär maten med den',
      emoji: '🔪'
    },
    { 
      swedish: 'tallrik', english: 'plate',
      hint: 'Du lägger maten på den',
      emoji: '🍽️'
    },
    { 
      swedish: 'kopp', english: 'cup',
      hint: 'Du dricker varm choklad ur den',
      emoji: '☕'
    },
    { 
      swedish: 'stekpanna', english: 'pan',
      hint: 'Du steker pannkakor i den',
      emoji: '🍳'
    },
    { 
      swedish: 'kastrull', english: 'pot',
      hint: 'Du kokar pasta i den',
      emoji: '🥘'
    },
    { 
      swedish: 'skål', english: 'bowl',
      hint: 'Du äter frukostflingor ur den',
      emoji: '🥣'
    },
    { 
      swedish: 'glas', english: 'glass',
      hint: 'Du dricker juice ur den',
      emoji: '🥤'
    },
    { 
      swedish: 'ugn', english: 'oven',
      hint: 'Du bakar kakor i den',
      emoji: '🎂'
    }
  ];

  const currentWord = words[currentWordIndex];

  const checkSpelling = () => {
    if (spellingInput.toLowerCase().trim() === currentWord.english) {
      // Öka score
      setScore(prev => prev + 1);
      
      // Öka streak
      const newStreak = streak + 1;
      setStreak(newStreak);

      // Bonus för var tredje rätt
      if (newStreak % 3 === 0) {
        setStars(prev => prev + 2);
      } else if (!showHint) {
        // Normal stjärna om ingen ledtråd användes
        setStars(prev => prev + 1);
      }

      // Gå vidare till nästa ord
      setTimeout(() => {
        if (currentWordIndex < words.length - 1) {
          setCurrentWordIndex(prev => prev + 1);
          setSpellingInput('');
          setShowCorrection(false);
          setShowHint(false);
        } else {
          // Spelslut med extra bonus för perfekt streak
          if (perfectStreak && !showHint) {
            setStars(prev => prev + 10);
          }
          setGameOver(true);
        }
      }, 500);
    } else {
      setPerfectStreak(false);
      setLives(prev => prev - 1);
      setStreak(0);
      setShowCorrection(true);
      if (lives <= 1) {
        setGameOver(true);
      }
    }
  };

  const restart = () => {
    setCurrentWordIndex(0);
    setSpellingInput('');
    setShowCorrection(false);
    setShowHint(false);
    setScore(0);
    setStreak(0);
    setStars(0);
    setLives(3);
    setHintsUsed(0);
    setGameOver(false);
    setPerfectStreak(true);
  };

  if (gameOver) {
    const isPerfect = perfectStreak && score === words.length;
    
    return (
      <div className="max-w-md mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="relative text-center space-y-6">
            <div className="absolute inset-0 z-0">
              {[...Array(isPerfect ? 24 : 12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                >
                  {['🎉', '⭐', '🎨', '🎯', '✨', '🌟'][Math.floor(Math.random() * (isPerfect ? 6 : 4))]}
                </div>
              ))}
            </div>

            <div className="relative z-10">
              <div className="text-6xl mb-4 animate-bounce">
                {isPerfect ? '👑' : (score === words.length ? '🏆' : '🌟')}
              </div>

              <h2 className="text-3xl font-bold mb-4">
                {isPerfect ? 'PERFEKT SPEL! 🎉' : 
                 (score === words.length ? 'FANTASTISKT! 🎉' : 'Bra jobbat! 🌟')}
              </h2>

              <div className="space-y-2 mb-6">
                <p className="text-2xl">{score} av {words.length} rätt!</p>
                <p className="text-xl">Du samlade {stars} ⭐</p>
                {isPerfect && (
                  <div className="mt-4 space-y-2 text-lg">
                    <p className="text-purple-600 font-bold animate-pulse">
                      PERFEKT STREAK! +10 BONUSSTJÄRNOR! ⭐
                    </p>
                    <p className="text-blue-500">
                      Du klarade alla ord utan ett enda fel! 🏆
                    </p>
                  </div>
                )}
                {score === words.length && !isPerfect && (
                  <p className="text-xl text-purple-600 animate-pulse">
                    Du är en superstjärna! ✨
                  </p>
                )}
              </div>

              <Button 
                onClick={restart}
                className={`w-full text-lg ${
                  isPerfect 
                    ? 'bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 hover:from-yellow-500 hover:via-purple-600 hover:to-pink-600' 
                    : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
                } text-white`}
              >
                Spela igen! 🎮
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2">
          {[...Array(lives)].map((_, i) => (
            <Heart 
              key={i} 
              className="w-6 h-6 text-red-500"
              fill={i < lives ? "red" : "none"}
            />
          ))}
        </div>
        <div className="flex items-center gap-1">
          <Star className="w-6 h-6 text-yellow-500" fill="yellow" />
          <span className="text-lg font-bold">{stars}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <h2 className="text-3xl font-bold">
              {currentWord.swedish}
            </h2>
            <span className="text-4xl animate-pulse">
              {currentWord.emoji}
            </span>
          </div>

          {streak > 0 && (
            <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded-full inline-block">
              {streak} i rad! 🔥
            </div>
          )}

          {(streak + 1) % 3 === 0 && streak > 0 && (
            <p className="text-blue-500 text-sm animate-bounce">
              Ett till rätt ger dig extra stjärnor! ⭐⭐
            </p>
          )}

          <div className="space-y-4">
            <input
              type="text"
              value={spellingInput}
              onChange={(e) => setSpellingInput(e.target.value)}
              placeholder="Skriv ordet på engelska..."
              className="w-full text-center text-lg p-2 border rounded"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  checkSpelling();
                }
              }}
            />

            <div className="flex gap-2">
              <Button 
                onClick={() => {
                  setShowHint(true);
                  setHintsUsed(h => h + 1);
                  setPerfectStreak(false);
                }}
                variant="outline"
                className="flex-1"
                disabled={showHint}
              >
                <LightbulbIcon className="w-4 h-4 mr-2" />
                Ledtråd
              </Button>
              <Button 
                onClick={checkSpelling}
                className="flex-1"
              >
                Kontrollera
              </Button>
            </div>
          </div>

          {showHint && (
            <div className="mt-2 text-blue-600 text-sm p-2 bg-blue-50 rounded-lg">
              <span className="inline-block animate-bounce mr-1">💡</span>
              {currentWord.hint}
            </div>
          )}

          {showCorrection && (
            <div className="mt-4 space-y-2">
              <p className="text-red-500">
                Inte riktigt rätt. Rätt stavning är:
              </p>
              <p className="text-2xl font-bold text-green-600">
                {currentWord.english}
              </p>
              <Button 
                onClick={() => {
                  if (currentWordIndex < words.length - 1) {
                    setCurrentWordIndex(prev => prev + 1);
                    setSpellingInput('');
                    setShowCorrection(false);
                    setShowHint(false);
                  } else {
                    setGameOver(true);
                  }
                }}
                className="w-full"
              >
                Nästa ord
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VocabGame