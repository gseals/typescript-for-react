import React from 'react';
import './App.css';

// Conventional props
function Heading({ title }: { title: string }) {
  return (
    <h1>{title}</h1>
  )
}

function App() {
  return (
    <div>
      <Heading title="Hello there" />
    </div>
  );
}

export default App;
