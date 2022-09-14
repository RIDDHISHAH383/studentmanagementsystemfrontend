import logo from './logo.svg';
import './App.css';
import Student from './components/Student';
import StudentList from './components/StudentList';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NavigationBar/>
      <Container>
      <Student/>
      <StudentList/>
      </Container>
      <Footer/>
    </div>
  );
}
export default App;