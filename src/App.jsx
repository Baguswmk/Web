import Hero from './components/Hero';

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <section className="h-screen z-0"/>
    </main>
  )
}

export default App;