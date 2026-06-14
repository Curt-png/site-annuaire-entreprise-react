import { useEffect, useCallback, useState } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BackToTop } from '../components/BackToTop';
import { entreprise } from '../config/entreprise';

/* ── helper copy ── */
function useCopy() {
  const copy = useCallback((text: string) => {
    navigator.clipboard.writeText(text).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    });
  }, []);
  return copy;
}

/* CopyBtn with icon */
function CopyIconBtn({ value, label }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCopy();
  const handleClick = () => {
    copy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      className={`btn-copy${copied ? ' copied' : ''}`}
      onClick={handleClick}
      aria-label={label ?? 'Copier'}
    >
      <svg viewBox="0 0 24 24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
      <span className="copy-tooltip">Copié !</span>
    </button>
  );
}

/* SiretBtn */
function SiretBtn({ value, display }: { value: string; display?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = useCopy();
  const handleClick = () => {
    copy(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button className="btn-siret" onClick={handleClick} title="Copier le SIRET">
      {display ?? value}
      {copied
        ? <span style={{ color: '#18753c', fontSize: '11px', marginLeft: '4px' }}>✓</span>
        : <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
      }
    </button>
  );
}

/* Tooltip wrapper */
function InfoTooltip({ text }: { text: string }) {
  return (
    <span className="tooltip-wrapper" style={{ marginLeft: '4px' }}>
      <span className="info-icon">i</span>
      <span className="tooltip-text">{text}</span>
    </span>
  );
}

/* ── Leaflet map component ── */
function LeafletMap() {
  useEffect(() => {
    // Charge Leaflet CSS dynamiquement si pas encore présent
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet/dist/leaflet.css';
      document.head.appendChild(link);
    }

    let map: import('leaflet').Map | null = null;

    const initMap = async () => {
      // Import leaflet dynamiquement
      const L = (await import('leaflet')).default;

      const container = document.getElementById('leaflet-map');
      if (!container) return;

      // Évite la double initialisation en mode StrictMode
      if ((container as HTMLElement & { _leaflet_id?: number })._leaflet_id) return;

      map = L.map('leaflet-map', { zoomControl: true, attributionControl: false })
        .setView([48.3897, -4.4861], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
      }).addTo(map);

      const blueIcon = L.divIcon({
        className: '',
        html: `<svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
          <path d="M14 0C6.268 0 0 6.268 0 14c0 9.625 14 26 14 26S28 23.625 28 14C28 6.268 21.732 0 14 0z" fill="#000091"/>
          <circle cx="14" cy="14" r="6" fill="white"/>
        </svg>`,
        iconSize: [28, 40],
        iconAnchor: [14, 40],
        popupAnchor: [0, -40],
      });

      L.marker([entreprise.adresse.latitude, entreprise.adresse.longitude], { icon: blueIcon })
        .addTo(map)
        .bindPopup(entreprise.carteMarkerPopup);
    };

    initMap();

    return () => {
      if (map) {
        map.remove();
        map = null;
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div id="leaflet-map" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
    </div>
  );
}

interface IndexFichePageProps {
  onNavigate?: (page: 'fiche-resume' | 'index-fiche') => void;
}

export function IndexFichePage({ onNavigate }: IndexFichePageProps) {
  const shareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, '_blank', 'width=600,height=500');
  };
  const shareEmail = () => {
    const subject = encodeURIComponent(`Fiche établissement — ${entreprise.denomination}`);
    const body = encodeURIComponent('Consulter la fiche sur : ' + window.location.href);
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  };

  const extIcon = (
    <svg className="ext-icon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
    </svg>
  );

  return (
    <div className="fiche-body">
      <SiteHeader />

      <main className="fiche-main">
        <div className="container">

          {/* HERO */}
          <section className="hero">
            <h1>
              Établissement <strong>{entreprise.denomination}</strong> à <a href={`/commune/${entreprise.adresse.communeSlug}`}>{entreprise.adresse.commune}</a>
            </h1>

            <div className="hero-grid">
              {/* Colonne gauche */}
              <div className="hero-left">
                <div className="hero-meta">
                  <SiretBtn value={entreprise.siret} display={entreprise.siret} />
                  <span className="badge badge-green">EN ACTIVITÉ</span>
                </div>

                <div className="ancien-siege-block">
                  <span>Cet établissement est le</span>
                  <span className="badge badge-green">SIÈGE SOCIAL</span>
                  <span>de :</span>
                </div>

                {/* Carte unité légale */}
                <div className="unite-legale-card" style={{ marginTop: '12px' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }} className="card-title">{entreprise.denomination}</a>
                  <div className="card-meta">
                    <svg className="icon-building" viewBox="0 0 24 24" fill="#666">
                      <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" />
                    </svg>
                    <span>Unité légale</span>
                    <span className="sep">·</span>
                    <SiretBtn value={entreprise.siren} display={entreprise.sirenFormate} />
                    <span className="badge badge-green">EN ACTIVITÉ</span>
                  </div>
                  <ul className="card-links">
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }}>Fiche résumé</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }}>Dirigeants</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }}>Documents</a></li>
                  </ul>
                </div>
              </div>

              {/* Carte Leaflet */}
              <LeafletMap />
            </div>

            {/* Actions bar */}
            <div className="actions-bar">
              <button onClick={shareLinkedIn} title="Partager sur LinkedIn" aria-label="Partager sur LinkedIn">
                <svg viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </button>
              <button onClick={shareEmail} title="Partager par e-mail" aria-label="Partager par e-mail">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </button>
              <button onClick={() => window.print()} title="Imprimer" aria-label="Imprimer">
                <svg viewBox="0 0 24 24">
                  <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" />
                </svg>
              </button>
            </div>
          </section>

          {/* DESCRIPTION */}
          <section className="description">
            <p>
              Cet établissement
              <InfoTooltip text="Un établissement est une unité de production géographiquement individualisée, mais juridiquement dépendante de l'unité légale." />,
              immatriculé sous le siret {entreprise.siret}, est <strong>en activité</strong>. Il a été créé le <strong>{entreprise.dateCreationLongue}</strong>, il y a {entreprise.anciennete}.
              C'est le siège social de la société <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }}>{entreprise.denomination}</a>.
            </p>
            <p>Son domaine d'activité est : {entreprise.activitePrincipalePhrase}. Il est domicilié au {entreprise.adresseComplete}.</p>
          </section>

          {/* SECTION INFORMATIONS LÉGALES */}
          <section className="section-legal">
            <div className="section-legal-header">
              <h2>Information légales de l'établissement {entreprise.denomination} à {entreprise.adresse.commune}</h2>
              <div className="source-logos">
                <span className="source-logo insee">InseeM</span>
                <span className="source-logo vies">EU</span>
              </div>
            </div>

            <table className="data-table">
              <tbody>
                {/* Dénomination */}
                <tr>
                  <td>Dénomination de la société</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.denomination}</span>
                      <CopyIconBtn value={entreprise.denomination} label="Copier la dénomination" />
                    </div>
                  </td>
                </tr>
                {/* Type */}
                <tr>
                  <td>Type d'établissement</td>
                  <td>
                    <div className="cell-value" style={{ flexWrap: 'wrap', gap: '8px' }}>
                      <span className="badge badge-green">SIÈGE SOCIAL</span>
                      <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }} style={{ fontSize: '13px' }}>(→ voir la page de la société)</a>
                    </div>
                  </td>
                </tr>
                {/* Nom */}
                <tr>
                  <td>Nom de l'établissement</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.denomination}</span>
                      <CopyIconBtn value={entreprise.denomination} />
                    </div>
                  </td>
                </tr>
                {/* Adresse */}
                <tr>
                  <td>
                    Adresse
                    <a href="/faq/adresse" className="link-faq" style={{ display: 'block' }}>[?]</a>
                  </td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.adresseComplete}</span>
                      <CopyIconBtn value={entreprise.adresseComplete} />
                    </div>
                  </td>
                </tr>
                {/* SIRET */}
                <tr>
                  <td>SIRET</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.siret}</span>
                      <CopyIconBtn value={entreprise.siret} />
                    </div>
                  </td>
                </tr>
                {/* Clef NIC */}
                <tr>
                  <td>Clef NIC</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.clefNic}</span>
                      <CopyIconBtn value={entreprise.clefNic} />
                    </div>
                  </td>
                </tr>
                {/* TVA */}
                <tr>
                  <td>
                    N° TVA Intracommunautaire
                    <a href="/faq/tva" className="link-faq" style={{ display: 'block' }}>[?]</a>
                  </td>
                  <td>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('fiche-resume'); }}>→ voir la page de la société</a>
                  </td>
                </tr>
                {/* NAF société */}
                <tr>
                  <td>Activité principale de la société (NAF/APE)</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.activitePrincipale}</span>
                      <CopyIconBtn value={entreprise.activitePrincipale} />
                    </div>
                  </td>
                </tr>
                {/* NAF établissement */}
                <tr>
                  <td>Activité principale de l'établissement (NAF/APE)</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.activitePrincipale}</span>
                      <CopyIconBtn value={entreprise.activitePrincipale} />
                    </div>
                  </td>
                </tr>
                {/* Code NAF */}
                <tr>
                  <td>Code NAF/APE de l'établissement</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.codeNaf}</span>
                      <CopyIconBtn value={entreprise.codeNaf} />
                    </div>
                  </td>
                </tr>
                {/* NAF 2025 */}
                <tr>
                  <td>
                    Activité principale de l'établissement (NAF 2025)
                    <InfoTooltip text="La nomenclature NAF 2025 est la nouvelle classification des activités économiques entrée en vigueur en 2025." />
                  </td>
                  <td>
                    <div className="cell-value">
                      <span className="val italic-gray">Activité inconnue</span>
                      <CopyIconBtn value="Activité inconnue" />
                    </div>
                  </td>
                </tr>
                {/* Forme juridique */}
                <tr>
                  <td>Forme juridique</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.formeJuridique}</span>
                      <CopyIconBtn value={entreprise.formeJuridique} />
                    </div>
                  </td>
                </tr>
                {/* Date création société */}
                <tr>
                  <td>Date de création de la société</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.dateCreation}</span>
                      <CopyIconBtn value={entreprise.dateCreation} />
                    </div>
                  </td>
                </tr>
                {/* Date création établissement */}
                <tr>
                  <td>Date de création de l'établissement</td>
                  <td>
                    <div className="cell-value">
                      <span className="val">{entreprise.dateCreation}</span>
                      <CopyIconBtn value={entreprise.dateCreation} />
                    </div>
                  </td>
                </tr>
                {/* État */}
                <tr>
                  <td>État de l'établissement</td>
                  <td><span className="italic-gray">En activité</span></td>
                </tr>
                {/* Date fermeture */}
                <tr>
                  <td>Date de fermeture</td>
                  <td>
                    <div className="cell-value">
                      <span className="val italic-gray">Non applicable</span>
                      <CopyIconBtn value="Non applicable" />
                    </div>
                  </td>
                </tr>
                {/* Convention collective */}
                <tr>
                  <td>Convention collective de l'établissement</td>
                  <td><span className="italic-gray">Non renseignée</span></td>
                </tr>
                {/* Justificatifs */}
                <tr>
                  <td>Justificatif(s) d'existence</td>
                  <td>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div>
                        <div style={{ fontSize: '13px', marginBottom: '4px' }}>Avis de situation Insee de cet établissement :</div>
                        <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()} style={{ fontSize: '12px', padding: '5px 10px' }}>
                          Télécharger {extIcon}
                        </a>
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', marginBottom: '4px' }}>Extrait RNE de la société (équivalent KBIS/D1) :</div>
                        <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()} style={{ fontSize: '12px', padding: '5px 10px' }}>
                          Télécharger {extIcon}
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="section-legal-footer">
              <span>Mise à jour le {entreprise.dateMajFiche}</span>
              <a href="/sources">ℹ Sources : INSEE, VIES</a>
            </div>
          </section>

          {/* Pagination dots */}
          <div className="pagination-dots">
            <span className="dot" />
            <span className="dot active" />
            <span className="dot" />
          </div>

        </div>

        {/* Floating question button */}
        <a href="https://annuaire-entreprises.data.gouv.fr/faq" className="btn-question" aria-label="Une question ?">
          Une question
          <span className="q-circle">?</span>
        </a>

        <SiteFooter />
      </main>

      <BackToTop />
    </div>
  );
}
