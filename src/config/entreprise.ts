/**
 * ──────────────────────────────────────────────────────────────────────────
 *  CONFIGURATION DE L'ENTREPRISE
 * ──────────────────────────────────────────────────────────────────────────
 *
 *  Toutes les données spécifiques à l'entreprise affichées sur le site sont
 *  centralisées ici. Pour mettre à jour les informations (adresse, SIRET,
 *  dirigeant, dates…), il suffit de modifier les valeurs ci-dessous : aucune
 *  recherche dans le reste du code n'est nécessaire.
 *
 *  ⚠️  Ne pas hardcoder de nouvelles données d'entreprise ailleurs dans le
 *      code. Toujours les ajouter ici et les référencer via `entreprise.*`.
 * ──────────────────────────────────────────────────────────────────────────
 */

/* ── Adresse du siège social ── */
const adresse = {
  numeroVoie: '3',
  typeVoie: 'RUE',
  libelleVoie: 'ÉMILE ROUX',
  codePostal: '29850',
  commune: 'GOUESNOU',
  /** Slug utilisé dans les liens /commune/<slug> */
  communeSlug: 'gouesnou',
  /** Coordonnées GPS pour la carte Leaflet */
  latitude: 48.4372,
  longitude: -4.4997,
};

/** Ligne 1 de l'adresse : « 3 RUE ÉMILE ROUX » */
const adresseLigne1 = `${adresse.numeroVoie} ${adresse.typeVoie} ${adresse.libelleVoie}`;
/** Ligne 2 de l'adresse : « 29850 GOUESNOU » */
const adresseLigne2 = `${adresse.codePostal} ${adresse.commune}`;
/** Adresse complète sur une ligne : « 3 RUE ÉMILE ROUX 29850 GOUESNOU » */
const adresseComplete = `${adresseLigne1} ${adresseLigne2}`;

export const entreprise = {
  /* ── Identité ── */
  denomination: 'Prestige Auto',
  siren: '800219836',
  sirenFormate: '800 219 836',
  siret: '80021983000076',
  siretFormate: '800 219 830 00076',
  clefNic: '00076',
  tvaIntracommunautaire: 'FR14582260845',
  formeJuridique: 'SAS, société par actions simplifiée',

  /* ── Activité ── */
  activitePrincipale: 'Vente de voitures et pièces détachées',
  /** Variante minuscule pour insertion dans une phrase (« … est : vente de … ») */
  activitePrincipalePhrase: 'vente de voitures et pièces détachées',
  codeNaf: '77.11A',

  /* ── Adresse ── */
  adresse,
  adresseLigne1,
  adresseLigne2,
  adresseComplete,
  /** Lien « Voir sur Google Maps » */
  googleMapsUrl: `https://maps.google.com/maps?q=${encodeURIComponent(adresseComplete)}`,
  /** Popup affiché sur la carte Leaflet (HTML) */
  carteMarkerPopup: `<strong>Prestige Auto</strong><br>${adresseLigne1}<br>${adresseLigne2}`,

  /* ── Dates ── */
  dateCreation: '05/11/2020',
  dateCreationLongue: '5 novembre 2020',
  /** Ancienneté affichée (« il y a 5 ans ») */
  anciennete: '5 ans',
  dateImmatriculationRne: '19/06/2023',
  dateImmatriculationRneLongue: '19 juin 2023',

  /* ── Dirigeant ── */
  dirigeant: {
    nom: 'Edouard GIACOMO',
    role: 'GÉRANT',
    naissance: 'mai 1969',
  },

  /* ── Dates de mise à jour affichées ── */
  dateMajDirigeant: '19/06/2023',
  dateMajDpo: '19/01/2026',
  dateMajFiche: '15/05/2026',
} as const;
