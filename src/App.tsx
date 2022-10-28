import './app.css';
import { NavBar } from './components/navBar';

function App() {
  return (
    <div className="flex min-h-screen">
      <NavBar />
      <ContentArea />
    </div>
  );
}


const ContentArea = () => {
  return <div className="bg-gray-400 flex-grow">Content Area</div>;
};

export default App;
