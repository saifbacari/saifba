import Navbar from './components/Navbar/Navbar'

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
    </div>
  )
}

export default App
