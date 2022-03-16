import logo from './logo.svg';
import './App.css';
import{ Navbar } from "./components/Navbar";
import { Paragraph } from "./components/Paragraph";
import { Input } from "./components/Input";
import {MySelf} from "./components/MySelf";

function App() {
  return(
     <div className='App'>
    <Navbar/>
    <Paragraph/>
    <Input/>
    <MySelf name="Listowel" age={20} gender="male"/>
    <MySelf name="Sarkodie" age={21} gender="female"/>
    <MySelf name="Adu" age={22} gender="male"/>
    <MySelf name="Nobel" age={23} gender="female"/>
    <MySelf name="Laureate" age={24} gender="female"/>
  </div>
  );
};

export default App;
