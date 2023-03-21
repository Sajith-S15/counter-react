
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useCount } from "./useCount";


function App(){
  const { count, increase, decrease, reset } = useCount();


  return(
    <div className='App'>
      {count}
      <div>
      <button id ="increase" onClick={increase}> Increase</button>
      <button id ="decrease"onClick={decrease}> Decrease</button>
      <button id ="restart" onClick={reset}> Reset</button>
      </div>


      
    </div>
  );
}
  
export default App;