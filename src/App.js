import React from 'react';
import Button from './components/Button';

function App() {
  const onClick = () => {
    alert('You clicked a button');
  };

  return (
    <div className="App">
      <Button typeOf="primary" onClick={onClick}>
        Click me
      </Button>
      <Button typeOf="secondary" onClick={onClick}>
        Click me
      </Button>
      <Button typeOf="outline" onClick={onClick}>
        Click me
      </Button>
      <Button typeOf="succes" onClick={onClick}>
        Click me
      </Button>
      <Button typeOf="disabled" disabled={true} onClick={onClick}>
        Click me
      </Button>
    </div>
  );
}

export default App;
