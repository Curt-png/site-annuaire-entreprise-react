import { useState } from 'react';
import './styles/fiche.css';
import { FicheResumePage } from './pages/FicheResumePage';
import { IndexFichePage } from './pages/IndexFichePage';

type Page = 'fiche-resume' | 'index-fiche';

function App() {
  const [page, setPage] = useState<Page>('index-fiche');

  return (
    <>
      {page === 'index-fiche' && <IndexFichePage onNavigate={setPage} />}
      {page === 'fiche-resume' && <FicheResumePage onNavigate={setPage} />}
    </>
  );
}

export default App;
