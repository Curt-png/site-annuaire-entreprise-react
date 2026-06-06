import { useState, useCallback } from 'react';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';
import { BackToTop } from '../components/BackToTop';

/* ── helpers ── */
function copyToClipboard(text: string) {
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
}

function CopyBtn({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleClick = useCallback(() => {
    copyToClipboard(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [value]);
  return (
    <button
      className={`btn-copy${copied ? ' copied' : ''}`}
      onClick={handleClick}
      title="Copier"
      style={{ marginLeft: '8px', background: 'none', border: '1px solid #c9d3ff', borderRadius: '3px', padding: '2px 6px', color: '#000091', fontSize: '12px', cursor: 'pointer' }}
    >
      Copier
      <span className="copy-tooltip">Copié !</span>
    </button>
  );
}

const EXT_ICON = (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" style={{ marginLeft: '4px' }}>
    <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
  </svg>
);

/* ── Tab content components ── */
function FicheResumeContent({ onNavigate }: { onNavigate?: (page: 'fiche-resume' | 'index-fiche') => void }) {
  return (
    <div id="fiche-resume-content">
      {/* BOX 1.1: INFORMATIONS LÉGALES */}
      <section className="section-legal-v2" id="renseignements">
        <div className="section-legal-v2-header">
          <div className="sl-title">
            <div className="sl-indicator" />
            <h2>Informations légales de Prestige Auto</h2>
          </div>
          <div className="source-logos-v2">
            <span className="sl-logo-text">InseeM</span>
            <div className="sl-logo-vies">
              <span className="vies-stars">★★★</span>
              <span className="vies-text">VIES</span>
            </div>
            <span className="sl-logo-inpi">inpi</span>
          </div>
        </div>

        {/* État des inscriptions */}
        <div className="inscriptions-block">
          <div className="inscriptions-label">
            État des inscriptions
            <span className="info-icon-small">?</span>
          </div>
          <div className="inscriptions-content">
            <div className="ins-row">
              <div className="ins-status">
                <span className="ins-pill">
                  <span className="check-circle-green">✔</span>
                  <span className="ins-text">Inscrite (Insee)</span>
                </span>
                <span className="ins-date">le 05/11/2020</span>
              </div>
            </div>
            <div className="ins-row mt-12">
              <div className="ins-status">
                <span className="ins-pill">
                  <span className="check-circle-green">✔</span>
                  <span className="ins-text">Immatriculée au RNE (INPI)</span>
                </span>
                <span className="ins-date">le 19/06/2023</span>
              </div>
            </div>
          </div>
        </div>

        <table className="data-table-v2">
          <tbody>
            <tr><td>Dénomination</td><td>Prestige Auto</td></tr>
            <tr><td>SIREN</td><td>800 219 836</td></tr>
            <tr><td>SIRET du siège social</td><td>800 219 830 00076</td></tr>
            <tr><td>N° TVA Intracommunautaire</td><td>FR14582260845</td></tr>
            <tr>
              <td>N° EORI <span className="info-icon-small" style={{ marginLeft: '4px' }}>i</span></td>
              <td><span className="italic-gray">Pas de n° EORI valide</span></td>
            </tr>
            <tr><td>Activité principale</td><td>Vente de voitures et pièces détachées</td></tr>
            <tr><td>Date de création</td><td>05/11/2020</td></tr>
          </tbody>
        </table>
      </section>

      {/* BOX 1.2: IMMATRICULATION AU RNE */}
      <section className="section-legal-v2" id="immatriculation-rne" style={{ marginTop: '24px' }}>
        <div className="section-legal-v2-header">
          <div className="sl-title">
            <div className="sl-indicator" />
            <h2>Immatriculation au RNE (INPI)</h2>
          </div>
          <div className="source-logos-v2">
            <span className="sl-logo-inpi">inpi</span>
          </div>
        </div>

        <div style={{ padding: '16px 24px', background: '#f5f5fe', borderLeft: '4px solid #000091', margin: '0 24px 20px', borderRadius: '0 4px 4px 0', fontSize: '13.5px', color: '#3a3a3a', lineHeight: '1.6' }}>
          Ces informations proviennent du Registre National des Entreprises (RNE) géré par l'Institut National de la Propriété Industrielle (INPI). Elles constituent l'équivalent légal de l'extrait Kbis.
          Les informations en <strong>gras</strong> proviennent exclusivement du RNE.
          <div style={{ marginTop: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="#" className="btn-outline-blue" onClick={(e) => e.preventDefault()} style={{ fontSize: '12px', padding: '6px 12px' }}>
              Voir les données brutes de l'INPI {EXT_ICON}
            </a>
          </div>
        </div>

        <table className="data-table-v2">
          <tbody>
            <tr><td>Date d'immatriculation</td><td><strong>19/06/2023</strong></td></tr>
            <tr><td>Date de création de la société</td><td>05/11/2020</td></tr>
            <tr>
              <td>Capital social <span className="info-icon-small" style={{ marginLeft: '4px' }}>i</span></td>
              <td><span className="italic-gray">Non renseigné</span></td>
            </tr>
            <tr><td>Au dernier bilan déposé au RNE</td><td><span className="italic-gray">Non renseigné</span></td></tr>
          </tbody>
        </table>
      </section>

      {/* BOX 1.3: SIÈGE SOCIAL */}
      <section className="section-legal-v2" id="siege" style={{ marginTop: '24px' }}>
        <div className="section-legal-v2-header">
          <div className="sl-title">
            <div className="sl-indicator" />
            <h2>Siège social de Prestige Auto</h2>
          </div>
          <div className="source-logos-v2">
            <span className="sl-logo-text">InseeM</span>
            <span className="sl-logo-inpi">inpi</span>
          </div>
        </div>

        {/* Map placeholder stylisé */}
        <div style={{ height: '180px', background: 'linear-gradient(135deg, #e8f0fe 0%, #f0f4ff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #e0e0e0', position: 'relative', overflow: 'hidden' }}>
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, opacity: 0.25 }} xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#6699cc" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <rect x="0" y="65" width="100%" height="14" fill="#d8e4f0" opacity="0.6" />
            <rect x="40%" y="0" width="12" height="100%" fill="#d8e4f0" opacity="0.6" />
            <rect x="5%" y="10%" width="30%" height="40%" rx="2" fill="#c8d8ec" opacity="0.4" />
            <rect x="55%" y="10%" width="38%" height="40%" rx="2" fill="#c8d8ec" opacity="0.4" />
            <rect x="5%" y="65%" width="30%" height="28%" rx="2" fill="#c8d8ec" opacity="0.4" />
            <rect x="55%" y="65%" width="38%" height="28%" rx="2" fill="#c8d8ec" opacity="0.4" />
          </svg>
          <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '36px', height: '36px', background: '#000091', borderRadius: '50% 50% 50% 0', transform: 'rotate(-45deg)', boxShadow: '0 4px 12px rgba(0,0,145,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '12px', height: '12px', background: '#fff', borderRadius: '50%', transform: 'rotate(45deg)' }} />
            </div>
            <div style={{ background: 'rgba(255,255,255,0.95)', border: '1px solid #e0e0e0', borderRadius: '6px', padding: '8px 14px', fontSize: '13px', fontWeight: 700, color: '#161616', boxShadow: '0 2px 8px rgba(0,0,0,0.1)', textAlign: 'center', maxWidth: '280px', lineHeight: 1.4 }}>
              75 RUE DOURJACQ<br />
              <span style={{ fontWeight: 400, color: '#555' }}>29200 BREST</span>
            </div>
          </div>
        </div>

        <table className="data-table-v2">
          <tbody>
            <tr>
              <td>SIRET</td>
              <td>
                <strong>800 219 830 00076</strong>
                <CopyBtn value="80021983000076" />
              </td>
            </tr>
            <tr>
              <td>Adresse</td>
              <td>
                <strong>75 RUE DOURJACQ<br />29200 BREST</strong>
                <div style={{ marginTop: '6px' }}>
                  <a href="https://maps.google.com/maps?q=75+Rue+Dourjacq+29200+Brest" target="_blank" rel="noopener" className="btn-outline-blue" style={{ fontSize: '12px', padding: '4px 10px' }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style={{ marginRight: '3px' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                    Voir sur Google Maps {EXT_ICON}
                  </a>
                </div>
              </td>
            </tr>
            <tr><td>Activité principale</td><td>Vente de voitures et pièces détachées</td></tr>
            <tr><td>Date de création de l'établissement</td><td>05/11/2020</td></tr>
            <tr><td>Numéro de voie</td><td>75</td></tr>
            <tr><td>Type de voie</td><td>RUE</td></tr>
            <tr><td>Libellé de voie</td><td>DOURJACQ</td></tr>
            <tr><td>Libellé de la commune</td><td>BREST</td></tr>
            <tr><td>Code postal</td><td>29200</td></tr>
          </tbody>
        </table>
      </section>

      {/* BOX 1.4: ÉTABLISSEMENTS */}
      <section className="section-legal-v2" id="etablissements" style={{ marginTop: '24px' }}>
        <div className="section-legal-v2-header" style={{ borderBottom: '1px solid #f0f0f0' }}>
          <div className="sl-title">
            <div className="sl-indicator" />
            <h2>Tous les établissements de Prestige Auto</h2>
          </div>
          <div className="source-logos-v2">
            <span className="sl-logo-text">InseeM</span>
          </div>
        </div>
        <div style={{ padding: 0 }}>
          <table className="etab-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ padding: '16px 24px' }}>SIRET</th>
                <th style={{ padding: '16px 24px' }}>Adresse</th>
                <th style={{ padding: '16px 24px' }}>Type / Activité principale</th>
                <th style={{ padding: '16px 24px' }}>Date de création</th>
                <th style={{ padding: '16px 24px', textAlign: 'center' }}>État</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '16px 24px', verticalAlign: 'top' }}>
                  <a href="#" onClick={(e) => { e.preventDefault(); onNavigate?.('index-fiche'); }} className="siret-link">800 219 830 00076</a>
                </td>
                <td style={{ padding: '16px 24px', verticalAlign: 'top', fontSize: '14px', lineHeight: 1.4 }}>
                  <strong>75 RUE DOURJACQ</strong><br />29200 BREST
                </td>
                <td style={{ padding: '16px 24px', verticalAlign: 'top', fontSize: '14px', lineHeight: 1.4 }}>
                  <span className="badge badge-gray" style={{ fontSize: '10px', marginBottom: '4px', textTransform: 'uppercase' }}>Siège social</span><br />
                  Vente de voitures et pièces détachées
                </td>
                <td style={{ padding: '16px 24px', verticalAlign: 'top', fontSize: '14px' }}>05/11/2020</td>
                <td style={{ padding: '16px 24px', verticalAlign: 'top', textAlign: 'center' }}>
                  <span className="badge badge-green" style={{ fontSize: '11px' }}>En activité</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function DirigeantsSectionContent() {
  return (
    <section className="section-legal-v2" id="dirigeants-section" style={{ borderTop: 'none' }}>
      <div className="section-legal-v2-header" style={{ borderBottom: '1px solid #f0f0f0' }}>
        <div className="sl-title">
          <div className="sl-indicator" />
          <h2>Dirigeants de Prestige Auto</h2>
        </div>
      </div>

      <div style={{ padding: '20px 24px', borderBottom: '1px solid #f0f0f0' }}>
        <p style={{ fontSize: '14px', color: '#3a3a3a', margin: '0 0 8px 0', fontWeight: 600 }}>Informations disponibles sur les dirigeant(s) :</p>
        <ul style={{ fontSize: '14px', color: '#3a3a3a', lineHeight: 2, margin: '0 0 0 20px', padding: 0 }}>
          <li>Liste des dirigeants inscrits au Registre National des Entreprises (RNE)</li>
          <li>Liste des bénéficiaires effectifs</li>
          <li>Délégué à la Protection des Données (DPO)</li>
        </ul>
      </div>

      {/* Bloc Dirigeant(s) */}
      <div className="dirigeant-bloc">
        <div className="dirigeant-bloc-header">
          <h3 className="dirigeant-bloc-title">Dirigeant(s)</h3>
          <span className="sl-logo-inpi">inpi</span>
        </div>
        <div style={{ padding: '14px 24px', fontSize: '13.5px', color: '#3a3a3a', lineHeight: 1.6, borderBottom: '1px solid #f5f5f5' }}>
          Cette entreprise possède 1 dirigeant enregistré au <strong>Registre National des Entreprises (RNE)</strong> tenu par l'<strong>INPI</strong>.
          Pour en savoir plus, vous pouvez consulter <a href="https://www.inpi.fr" target="_blank" rel="noopener" style={{ color: '#000091' }}>la page de l'entreprise</a> sur le site de l'INPI.<br /><br />
          <strong>NB</strong> : si vous êtes agent public, vous pouvez accéder à l'état civil complet (lieu et date de naissance complets) en vous connectant à{' '}
          <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#000091' }}>l'espace agent public</a>.
        </div>
        <table className="dirigeants-table">
          <thead>
            <tr>
              <th>Rôle</th>
              <th>Détails</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="role-cell">GÉRANT</td>
              <td className="details-cell">Edouard GIACOMO, né(e) en mai 1969</td>
              <td className="action-cell">
                <a href="#" onClick={(e) => e.preventDefault()} className="link-arrow">→ voir ses entreprises</a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="dirigeant-bloc-footer">
          <span className="dirigeant-maj">Mise à jour le 19/06/2023</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="source-btn-inpi">
            <span className="sl-logo-inpi" style={{ fontSize: '10px', padding: '1px 4px' }}>inpi</span>
            Source : INPI
          </a>
        </div>
      </div>

      {/* Bloc Bénéficiaires effectifs */}
      <div className="dirigeant-bloc" style={{ marginTop: '16px' }}>
        <div className="dirigeant-bloc-header">
          <h3 className="dirigeant-bloc-title">Bénéficiaire(s) effectif(s)</h3>
        </div>
        <div style={{ margin: '16px 24px', padding: '14px 18px', background: '#fff8e1', border: '1px solid #ffe082', borderRadius: '4px', fontSize: '13.5px', color: '#5a4200', lineHeight: 1.7, display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '17px', flexShrink: 0, marginTop: '1px' }}>⚠</span>
          <span>
            Depuis le 31 juillet 2024, le registre des bénéficiaires effectifs n'est plus accessible sur le site, en application de la{' '}
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#000091' }}>directive européenne 2024/1640 du 31 mai 2024</a>.
            Néanmoins, les personnes en mesure de justifier d'un intérêt légitime peuvent{' '}
            <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#000091' }}>effectuer une demande d'accès</a> au registre auprès de l'INPI.
          </span>
        </div>
      </div>

      {/* Bloc DPO */}
      <div className="dirigeant-bloc" style={{ marginTop: '16px' }}>
        <div className="dirigeant-bloc-header">
          <h3 className="dirigeant-bloc-title">Délégué à la Protection des Données (DPO)</h3>
          <span style={{ fontSize: '12px', fontWeight: 900, color: '#003189', letterSpacing: '0.5px', border: '1px solid #003189', padding: '2px 6px', borderRadius: '3px' }}>CNIL</span>
        </div>
        <div style={{ padding: '20px 24px', fontSize: '14px', color: '#555', fontStyle: 'italic' }}>
          Aucun DPO trouvé pour cette structure.
        </div>
        <div className="dirigeant-bloc-footer">
          <span className="dirigeant-maj">Mise à jour le 19/01/2026</span>
          <a href="#" onClick={(e) => e.preventDefault()} className="source-btn-inpi" style={{ borderColor: '#003189', color: '#003189' }}>
            Source : CNIL
          </a>
        </div>
      </div>
    </section>
  );
}

interface FicheResumePageProps {
  onNavigate?: (page: 'fiche-resume' | 'index-fiche') => void;
}

/* ── Page principale ── */
export function FicheResumePage({ onNavigate }: FicheResumePageProps) {
  const [activeTab, setActiveTab] = useState<'renseignements' | 'dirigeants'>('renseignements');

  const shareLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open('https://www.linkedin.com/sharing/share-offsite/?url=' + url, '_blank', 'width=600,height=500');
  };
  const shareEmail = () => {
    const subject = encodeURIComponent('Fiche résumé — Prestige Auto');
    const body = encodeURIComponent('Consulter la fiche sur : ' + window.location.href);
    window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
  };

  return (
    <div className="fiche-body">
      <SiteHeader />

      <main className="fiche-main">
        <div className="container">

          {/* HERO V2 */}
          <section className="hero-v2">
            <h1 className="hero-title">Prestige Auto</h1>

            <div className="hero-unite-legale-bar">
              <span className="badge-wrapper-ul">
                <span className="badge-icon-ul">
                  <svg className="icon-building-blue" viewBox="0 0 24 24">
                    <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8V9h8v10zm-2-8h-4v2h4v-2zm0 4h-4v2h4v-2z" />
                  </svg>
                </span>
                <span className="badge-label-ul">Unité légale</span>
              </span>
              <span className="ul-arrow">‣</span>
              <span className="ul-siren">800 219 836</span>
              <span className="badge-v2-green">en activité</span>
            </div>

            <div className="hero-etab-tree">
              <span className="tree-line">└─</span>
              <span className="tree-text">
                <a href="#etablissements" style={{ color: 'inherit' }}>1 établissement</a> en activité
              </span>
            </div>

            <div className="hero-actions-right">
              <a href="#" aria-label="LinkedIn" className="action-icon" style={{ fontSize: '16px' }} onClick={shareLinkedIn}>in</a>
              <a href="#" aria-label="Email" className="action-icon" onClick={shareEmail}>
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" /></svg>
              </a>
              <a href="#" aria-label="Imprimer" className="action-icon" onClick={() => window.print()}>
                <svg viewBox="0 0 24 24" width="18" height="18"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z" fill="currentColor" /></svg>
              </a>
            </div>

            <div className="hero-resume-intro" style={{ marginTop: '16px' }}>
              <p>
                La société <strong>Prestige Auto</strong> a été créée le <strong>5 novembre 2020</strong>, il y a 5 ans.
                Son domaine d'activité est : vente de voitures et pièces détachées.
                Elle est immatriculée au RNE depuis le <strong>19 juin 2023</strong>.
              </p>
              <p>
                Son <a href="#siege">siège social</a> est domicilié au <a href="#">75 RUE DOURJACQ 29200 BREST</a>.
                Elle possède <a href="#etablissements">1 établissement</a> en activité.
              </p>
            </div>

            {/* TABS */}
            <div className="tabs-container">
              <button
                className={`tab-item${activeTab === 'renseignements' ? ' active' : ''}`}
                onClick={() => setActiveTab('renseignements')}
                id="tab-resume"
              >
                <span className="tab-label">Fiche<br />résumé</span>
              </button>
              <button
                className={`tab-item${activeTab === 'dirigeants' ? ' active' : ''}`}
                onClick={() => setActiveTab('dirigeants')}
                id="tab-dirigeants"
              >
                <span className="tab-label">Dirigeants</span>
              </button>
            </div>
          </section>

          {/* TAB CONTENT */}
          {activeTab === 'renseignements' ? <FicheResumeContent onNavigate={onNavigate} /> : <DirigeantsSectionContent />}

        </div>

        {/* Bouton Question */}
        <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
          <a href="https://annuaire-entreprises.data.gouv.fr/faq" className="btn-question-v2">
            Une question <span className="q-circle-v2">?</span>
          </a>
        </div>

        <SiteFooter />
      </main>

      <BackToTop />
    </div>
  );
}
