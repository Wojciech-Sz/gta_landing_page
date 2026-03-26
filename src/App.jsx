import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main className='app'>
      <h1 className='text-4xl font-bold'>Hello World</h1>
    </main>
  );
};

export default App;
