export function SiteFooter() {
  const extIcon = (
    <svg className="ext-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );

  const partners = [
    { label: 'Agence\nBIO', style: { color: '#4a7c59', fontWeight: 900 } },
    { label: 'ADEME', style: { color: '#005ea5' } },
    { label: 'DILA', style: { color: '#000091' } },
    { label: 'INPI', style: { color: '#003189', fontSize: '9px', fontWeight: 900 } },
    { label: 'InseeM', style: { color: '#000091' } },
    { label: 'VIES', style: { color: '#003399', background: '#fc0', padding: '2px 4px', borderRadius: '2px', fontSize: '9px' } },
    { label: 'ESS\nFrance', style: { color: '#e84b0c', fontSize: '9px' } },
    { label: "Marché de\nl'Inclusion", style: { color: '#7e3b8a', fontSize: '9px', textAlign: 'center' as const, lineHeight: '1.1' } },
    { label: 'info\ngreffe', style: { color: '#1a3c6e', fontSize: '9px' } },
    { label: 'Douanes', style: { color: '#003189', fontSize: '9px' } },
    { label: 'DGFiP', style: { color: '#003189', fontSize: '9px' } },
    { label: 'URSSAF', style: { color: '#e5281b', fontSize: '9px' } },
    { label: 'MSA', style: { color: '#007a53', fontSize: '9px' } },
    { label: 'FNTP', style: { color: '#004494', fontSize: '9px' } },
    { label: 'Qualife-\nlec', style: { color: '#003189', fontSize: '9px' } },
    { label: 'Qualibat', style: { color: '#003189', fontSize: '9px' } },
    { label: 'CIBTP', style: { color: '#e84b0c', fontSize: '9px' } },
    { label: 'CNETP', style: { color: '#003189', fontSize: '9px' } },
    { label: 'PROBTP', style: { color: '#007a53', fontSize: '9px' } },
    { label: 'GIP\nMDS', style: { color: '#003189', fontSize: '9px' } },
    { label: 'Banque\nde France', style: { color: '#003189', fontSize: '9px', textAlign: 'center' as const } },
    { label: 'CNIL', style: { color: '#003189', fontSize: '9px' } },
    { label: 'CNB', style: { color: '#003189', fontSize: '9px', textAlign: 'center' as const } },
  ];

  return (
    <>
      {/* SOCIAL BAR */}
      <div className="social-bar">
        <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <span className="social-text">Retrouvez-nous sur les réseaux sociaux</span>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/dinum" aria-label="LinkedIn" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://github.com/etalab/annuaire-entreprises-site" aria-label="GitHub" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Vérifier les informations légales d'une entreprise ou association</h3>
              <ul>
                <li><a href="#">Entrepreneurs de Spectacles Vivants</a></li>
                <li><a href="#">Entreprises individuelles</a></li>
                <li><a href="#">Entreprises de l'ESS (Economie Sociale et Solidaire)</a></li>
                <li><a href="#">Organismes de formation certifiés Qualiopi</a></li>
              </ul>
              <h3>Vérifier les informations légales d'une administration</h3>
              <ul><li><a href="#">Collectivités territoriales</a></li></ul>
              <h3>Consulter la liste officielle des entreprises françaises</h3>
              <ul><li><a href="#">Entreprises françaises par département</a></li></ul>
              <h3>Répertoire Sirene</h3>
              <ul><li><a href="#">Générer une liste d'établissements (SIRET) au format CSV</a></li></ul>
            </div>

            <div className="footer-col">
              <h3>Développeurs &amp; développeuses</h3>
              <ul>
                <li><a href="#">Réutiliser &amp; partager</a></li>
                <li><a href="#">Code source {extIcon}</a></li>
                <li><a href="#">Sources de données</a></li>
                <li><a href="#">API Recherche d'entreprises &amp; API Entreprise</a></li>
                <li><a href="#">Disponibilité des API</a></li>
              </ul>
              <h3>Autres sites</h3>
              <ul>
                <li><a href="https://entreprises.gouv.fr" target="_blank" rel="noopener">entreprises.gouv.fr {extIcon}</a></li>
                <li><a href="https://entreprendre.service-public.gouv.fr" target="_blank" rel="noopener">entreprendre.service-public.gouv.fr {extIcon}</a></li>
                <li><a href="https://mon-entreprise.urssaf.fr" target="_blank" rel="noopener">mon-entreprise.urssaf.fr {extIcon}</a></li>
                <li><a href="https://formalites.entreprises.gouv.fr" target="_blank" rel="noopener">formalites.entreprises.gouv.fr {extIcon}</a></li>
                <li><a href="https://conseillers-entreprises.service-public.gouv.fr" target="_blank" rel="noopener">conseillers-entreprises.service-public.gouv.fr {extIcon}</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Aide</h3>
              <ul>
                <li><a href="#">Questions fréquentes</a></li>
                <li><a href="#">Définitions</a></li>
                <li><a href="#">Supprimer ses données personnelles</a></li>
              </ul>
              <h3>L'Annuaire des Entreprises</h3>
              <ul>
                <li><a href="#">À propos</a></li>
                <li><a href="#">Administrations partenaires</a></li>
                <li><a href="#">L'espace agent public</a></li>
                <li><a href="#">Statistiques d'usage</a></li>
                <li><a href="#">Budget</a></li>
                <li><a href="#">Équipe</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* SUB-FOOTER */}
      <div className="sub-footer">
        <div className="sub-footer-inner">
          <div className="sub-footer-grid">
            <div className="sub-footer-left">
              <div className="rf-logo-big">
                <svg className="rf-flag-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 54" aria-hidden="true">
                  <rect width="80" height="54" fill="#fff" />
                  <rect width="27" height="54" fill="#002395" />
                  <rect x="53" width="27" height="54" fill="#ED2939" />
                  <rect width="80" height="54" fill="none" stroke="#d8d8d8" strokeWidth="1" />
                </svg>
                <div className="rep-text">RÉPUBLIQUE<br />FRANÇAISE</div>
                <div className="rep-sub">Liberté<br />Égalité<br />Fraternité</div>
              </div>
              <div className="datagouv-badge">
                <svg className="datagouv-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 90" aria-hidden="true">
                  <polygon points="40,2 78,23 40,44 2,23" fill="#3a6fd8" />
                  <polygon points="2,23 40,44 40,88 2,67" fill="#003189" />
                  <polygon points="78,23 40,44 40,88 78,67" fill="#1855c0" />
                  <text x="40" y="72" textAnchor="middle" fontFamily="'Marianne',Arial,sans-serif" fontSize="26" fontWeight="900" fill="white">dg</text>
                </svg>
                <span>Produit de<br />l'écosystème<br />datagouv</span>
              </div>
            </div>

            <div className="sub-footer-right">
              <p>
                Ce site permet de retrouver toutes les données publiques détenues par l'administration sur une entreprise,
                une association ou une administration et <a href="#">en particulier les données contenues dans un extrait KBIS</a> ou de l'extrait D1.
                Il est opéré par la <a href="https://www.numerique.gouv.fr" target="_blank" rel="noopener">Direction Interministérielle du Numérique</a>
                <svg className="ext-icon" viewBox="0 0 24 24" fill="#000091">
                  <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>.
              </p>
              <div className="gov-links">
                {[
                  ['https://legifrance.gouv.fr', 'legifrance.gouv.fr'],
                  ['https://info.gouv.fr', 'info.gouv.fr'],
                  ['https://service-public.gouv.fr', 'service-public.gouv.fr'],
                  ['https://data.gouv.fr', 'data.gouv.fr'],
                ].map(([href, label], i, arr) => (
                  <>
                    <a key={href} href={href} target="_blank" rel="noopener">{label} {extIcon}</a>
                    {i < arr.length - 1 && <span key={`sep-${i}`} className="sep-link">|</span>}
                  </>
                ))}
              </div>
            </div>
          </div>

          {/* Partenaires */}
          <div className="partners-section" style={{ padding: 0, marginTop: '32px' }}>
            <h3>Nos partenaires</h3>
            <div className="partners-grid">
              {partners.map((p) => (
                <div key={p.label} className="partner-logo">
                  <span style={p.style}>{p.label.split('\n').map((line, i) => (
                    <span key={i}>{line}{i < p.label.split('\n').length - 1 && <br />}</span>
                  ))}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="bottom-bar">
            <a href="#">Vie privée &amp; cookies</a>
            <a href="#">Mentions légales</a>
            <a href="#">Modalités d'Utilisation</a>
            <a href="#">Accessibilité : non conforme</a>
            <a href="#">Historique des changements</a>
            <a href="#">Code source</a>
            <div className="license-text">
              Sauf mention contraire, tous les textes de ce site sont sous{' '}
              <a href="https://www.etalab.gouv.fr/licence-ouverte-open-licence" style={{ color: '#000091' }} target="_blank" rel="noopener">
                licence etalab-2.0
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
