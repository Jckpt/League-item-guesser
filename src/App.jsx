import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'
import { useDarkreader } from 'react-darkreader';
function App() {
  const [isDark, { toggle }] = useDarkreader(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })
  console.log(isDark);
  return (
    <QueryClientProvider client={queryClient}>
    <div className={"spacer container-fluid min-vh-100 d-flex flex-column p-0 " + (isDark?"layerDark":"layerLight")}>
      <Nav isDark={isDark} toggle={toggle}/>
      <Hero/>
    </div>
    </QueryClientProvider>
  )
}

export default App
