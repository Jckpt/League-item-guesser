import { useState } from 'react'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.css'
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
    <div className="spacer layer1 container-fluid min-vh-100 d-flex flex-column p-0">
      <Nav/>
      <Hero/>
    </div>
    </QueryClientProvider>
  )
}

export default App
