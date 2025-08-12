import { useRef, useState } from 'react';
import ToggleTheme from './components/ToggleTheme';
import NumberInfo from './components/NumberInfo';
import './App.css';

function App() {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleOnKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (
      !/^[0-9]$/.test(event.key) &&
      event.key !== 'Tab' &&
      event.key !== 'Backspace' &&
      event.key !== 'Delete' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowRight'
    ) {
      event.preventDefault();
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    if (value === '') {
      setNumber(undefined);
      return;
    }
      setNumber(Number(value));
  }

  return (
    <div className='screen'>
      <ToggleTheme />
      <input 
        onChange={handleInputChange}
        onKeyDown={handleOnKeyDown} 
        ref={inputRef} 
        type='text' 
        id='number-input' 
        placeholder='Type a number...'
        maxLength={4}
      />
      {number !== undefined && (
        <NumberInfo number={number} />
      )}
    </div>
  );
}

export default App;
