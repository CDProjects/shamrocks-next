// src/SponsorData.js

// Helper function to add Cloudinary transformations
// You can customize transformations for different uses (e.g., carousel vs. grid)
// Place this function here or in a general 'utils.js' file and import it.
export const transformCloudinaryUrl = (baseUrl, transformations) => {
  if (!baseUrl || !baseUrl.includes("/image/upload/")) {
    // console.warn("Invalid Cloudinary base URL provided for transformation:", baseUrl);
    return baseUrl; // Return original if not a valid Cloudinary URL structure
  }
  const parts = baseUrl.split("/image/upload/");
  return `${parts[0]}/image/upload/${transformations}/${parts[1]}`;
};

export const sponsors = [
  {
    id: 'ga_telesis',
    name: 'GA Telesis',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091451/GATelesis_rlravb.png',
    url: 'https://gatelesis.com/' 
  },
  {
    id: 'guinness',
    name: 'Guinness',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091453/Guinness_zhzhvy.png',
    url: 'https://www.guinness.com/en' 
  },
  {
    id: 'fiber_highway',
    name: 'Fiber Highway',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091449/Fiber_i5qdv0.png',
    url: 'https://www.fiberhighway.fi/' 
  },
  {
    id: 'faluplast',
    name: 'Faluplast',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091449/Faluplast_s9spcx.png',
    url: 'https://faluplast.se/fi/' 
  },
  {
    id: 'artokima',
    name: 'AR Artokima',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091448/AR_Artokima_jwh7j0.png',
    url: '#' 
  },
  {
    id: 'franklin',
    name: 'Franklin',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091450/Franklin_uz4vpv.png',
    url: 'https://franklinoy.fi/' 
  },
  {
    id: 'rakennusliike_paavilainen',
    name: 'Rakennusliike Tommi Paavilainen',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091459/Tommi_Pavilainen_upcrtb.png',
    url: 'https://www.paavilainenoy.fi/' 
  },
  {
    id: 'flexo_tekniikka',
    name: 'Flexo-Tekniikka',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750256249/Flexo_puzfm7.png',
    url: 'https://flexo-tekniikka.fi/' 
  },
  {
    id: 'signup_print',
    name: 'SignUp Print',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091458/Signup_utwayv.png',
    url: 'https://www.supp.fi/' 
  },
  {
    id: 'rocktape',
    name: 'Rocktape',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091457/Rocktape_bpc04e.png',
    url: 'https://www.rocktape.fi/' 
  },
  {
    id: 'uudenmaan_lukko',
    name: 'Uudenmaan Lukko',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091460/Uudenmaan_qfwrae.jpg', 
    url: 'https://www.uudenmaanlukko.fi/' 
  },
  {
    id: 'marwin',
    name: 'Marwin Taloasennus',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091455/Marwin_rbm86b.png',
    url: '#' 
  },
  {
    id: 'paivi_munter',
    name: 'Päivi Munter',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091457/Paivi_Munter_evah5i.png',
    url: 'https://paivimunter.fi/' 
  },
  {
    id: 'gauchori',
    name: 'Gauchori',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091452/Gauchori_ilzchc.png',
    url: 'https://www.instagram.com/angelenkelifinland?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' 
  },
  {
    id: 'bt_body_tonic',
    name: 'BT Body Tonic',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091449/Body_Tonic_eyidu9.png',
    url: 'https://bodytonic.fi/' 
  },
  {
    id: 'studio_lindell',
    name: 'Studio Lindell',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091624/Studio_Lindell_jswp6n.png',
    url: 'https://www.studiolindell.fi/' 
  },
  {
    id: 'h_sport',
    name: 'H Sport',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091453/HSport_a5sygo.png',
    url: '#' 
  },
  {
    id: 'old_town_public_house',
    name: 'Old Town Public House',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750093952/Old_Town_Pub_pzlpwy.png',
    url: 'https://www.oldtown.fi/' 
  },
  {
    id: 'lindos_elementit',
    name: 'Lindos Elementit',
    logoBaseUrl: 'https://res.cloudinary.com/dscbso60s/image/upload/v1750091454/Lindos_srvg8h.png', 
    url: 'https://lindoselementit.fi/' 
  },
];