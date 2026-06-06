import logoRepublique from '../assets/logo_republique_francais.png';
import logoAnnuaire from '../assets/logon_annuaire.png';

interface SiteHeaderProps {
  onSearch?: (query: string) => void;
}

export function SiteHeader({ onSearch }: SiteHeaderProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input') as HTMLInputElement;
    onSearch?.(input.value);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="header-brand" style={{ textDecoration: 'none' }}>
          <img src={logoRepublique} alt="République Française" style={{ height: '74px', objectFit: 'contain', display: 'block' }} />
          <div className="header-sep" style={{ height: '44px' }} />
          <img src={logoAnnuaire} alt="L'Annuaire des Entreprises" style={{ height: '64px', objectFit: 'contain', display: 'block' }} />
        </a>

        <form className="header-search" onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Nom, adresse, n° SIRET/SIREN..."
            aria-label="Rechercher une entreprise"
          />
          <button type="submit" aria-label="Rechercher">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </form>

        <div className="header-right">
          <a href="https://annuaire-entreprises.data.gouv.fr/lp/agent-public">
            <svg className="icon-user" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"
                fill="currentColor"
              />
            </svg>
            Espace agent public
          </a>
        </div>
      </div>
    </header>
  );
}
