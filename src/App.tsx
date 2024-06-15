import { useState } from 'react';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {

  return (
    <ChakraProvider>
      <NavBar />
      <Hero />
      <Stats />
      <Footer />
    </ChakraProvider>
  );
}

export default App
