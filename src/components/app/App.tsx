import HomePage from '../../pages/main/Main';

type AppProps ={
  offersNumber: number;
}

function App({offersNumber}: AppProps): JSX.Element {
  return(
    <HomePage offersNumber={offersNumber} />
  );
}

export default App;
