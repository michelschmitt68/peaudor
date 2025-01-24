import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const getTeam = async () => {
    const docRef = doc(db, "team", "HunhtOyBx2twbS0vo5JP");
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
        return docSnapshot.data();
    } else {
        console.log("Aucun document trouvé !");
        return null;
    }
}

export const setTeam = async (newTeamData) => {
    const docRef = doc(db, "team", "HunhtOyBx2twbS0vo5JP");
    try {
        await updateDoc(docRef, newTeamData);
        console.log("Données mises à jour avec succès !");
    } catch (error) {
        console.error("Erreur lors de la mise à jour des données :", error);
    }
}
