import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About';

const App: React.FC = () => {
  const links = [
    {name:'1. About',url:''},
    {name:'2. Experience',url:''},
    {name:'3. Work',url:''},
    {name:'4. Contact',url:''},
    {name:'Resume',url:''},
  ];
  return (
    <div className="App">
        <Navbar links={links}/>
        <Hero />
        <About />
    </div>
  )
}

export default App
