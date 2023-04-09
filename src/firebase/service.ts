import { Firestore, collection, getDocs, addDoc } from "@firebase/firestore";

/**
 * Get tournamentnames from firestore
 * valueList is array from collection called Tournaments
 * PS! Can only read from colletion called Tournamets
 * */
export async function getTournamentNamesFromFirestore(db: Firestore) {
  const value = collection(db, "Tournaments");
  const valueSnapshot = await getDocs(value);
  const valueList = valueSnapshot.docs.map((doc) => doc.data());
  console.log(valueList);
}

/**
 * posts values to firestore
 *PS! Can only post to colletion called Tournamets
 * */
export async function postTournamentNamesToFirestore(
  db: Firestore,
  Id: number,
  isStarted: boolean,
  TournamentName: string
) {
  const value = collection(db, "Tournaments");
  addDoc(value, {
    Id: Id,
    isStarted: isStarted,
    TournamentName: TournamentName,
  })
    .then((docRef) => {
      console.log("Document written with ID:", docRef.id);
    })
    .catch((error) => {
      console.error("error adding tournament name:", error);
    });
}
