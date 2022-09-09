
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
    {/* title is made here */}
<Navbar title="MyApp" aboutText="About"/>
<div className='container' my-3>
<TextForm heading="UPPERCASE Converter"/>
</div>

    </>
  );
}

export default App;
