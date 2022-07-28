import {Link,Outlet} from 'react-router-dom';
import { useState } from 'react';
function App() {
  const [state, setState] = useState({});
  return (
    <div className="App">
      <h1>Bookkeeper!</h1>
      <h2>{ state.img.so}</h2>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        <Link to="invoices">Invoices</Link>
        <Link to="expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
