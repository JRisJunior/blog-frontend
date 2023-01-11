import { useEffect } from 'react'
import axios from "axios"
import { Header } from './Header';
import { Footer } from './Footer';
import { Content } from './Content';

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;