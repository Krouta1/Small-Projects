import React, { useState } from "react";
import FlashcardList from './FlashcardList';
import './App.css'


function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARD)

  return (
    <div>
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

const SAMPLE_FLASHCARD = [
  {
    id:1,
    question:'What is 2+2?',
    answer:'4',
    options:['2','3','4','5']
  },
  {
    id:2,
    question:'asdjhaskd?',
    answer:'a',
    options:['asdasd','a','adsa','bbbbbb']
  }
]

export default App;
