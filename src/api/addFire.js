// import { db } from "./firebase-config";
// import { doc, setDoc } from "firebase/firestore";

// export const ajouterCentreDansFirebase = async () => {
//   const centreData = {
//     nom: "Peau d'Or",
//     description: [
//       "Peau d'Or est un centre de bien-être spécialisé dans l'amincissement, le bronzage et une gamme de services de beauté.",
//       "Notre équipe d'expertes qualifiées propose des services d'amincissement personnalisés pour vous aider à atteindre vos objectifs de tonification du corps.",
//       "En plus de nos services d'amincissement, nous proposons également des séances de bronzage pour vous donner un teint doré et naturel toute l'année.",
//       "Chez Peau d'Or, nous comprenons que la beauté ne se limite pas seulement à la silhouette et au bronzage.",
//       "Nous sommes dévoués à votre bien-être et votre satisfaction."
//     ],
//     horaires: {
//       lundi: "09:00 - 19:00",
//       mardi: "09:00 - 18:00",
//       mercredi: "09:00 - 19:00",
//       jeudi: "Fermé",
//       vendredi: "10:00 - 20:00",
//       samedi: "09:00 - 14:00 (sur RDV)",
//       dimanche: "10:00 - 12:00 (sur RDV)"
//     },
//     adresse: {
//       rue: "15 Grand Rue",
//       ville: "Jebsheim",
//       code_postal: "68320"
//     },
//     contact: {
//       telephone: "09 81 34 02 67"
//     }
//   };

//   try {
//     await setDoc(doc(db, "centres", "peau-dor"), centreData);
//     console.log("Données ajoutées avec succès !");
//   } catch (error) {
//     console.error("Erreur lors de l'ajout des données :", error);
//   }
// };

// // Appel de la fonction
// ajouterCentreDansFirebase();
