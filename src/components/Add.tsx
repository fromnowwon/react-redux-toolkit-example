import { useRef } from 'react';

const Add = () => {
  const name = useRef<string>('');

  return (
    <form>
      <label htmlFor="/">Person Name:</label>
      <input onChange={(e) => (name.current = e.target.value)} />
      <button>Add</button>
    </form>
  );
};

export default Add;
