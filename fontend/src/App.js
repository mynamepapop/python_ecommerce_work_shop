// Modules
import { 
  Container 
} from 'react-bootstrap';

// Icon
import logo from './logo.svg';

// Import components
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreens from './screens/HomeScreens';

function App() {
  return (
    <div> 
      <Header/>
      <main className='py-3'>
        <Container>
          <HomeScreens/>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
