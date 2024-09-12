import { useState } from "react";

const messages = [
  "Apprendre le React",
  "Créer des Applications Mobiles avec React Native",
  "Pour avoir + de Compétences",
];

export default function App() {
  // 1er Valeur l'état actuel , 2ème valeur MAJ
  const [etape, setEtape] = useState(1);

  //Fenetre
  const [FenetreOuvert , setFenetreOuvert] = useState(true)

  //BTN TOUCHES
  function touchePrécédent() {
    if (etape > 1)  setEtape(etape - 1);
  }
  function toucheSuivant() {
    if (etape < 3)  setEtape(etape + 1);
}

  return ( 
    <div>
      <button className="close" onClick={()=>setFenetreOuvert(!FenetreOuvert)}>&times;</button>

    {FenetreOuvert && (
      <div className="steps"> 
        <div className="numbers">
          <div className={etape >= 1 ? "active" : ""}> 1 </div>
          <div className={etape >= 2 ? "active" : ""}> 2 </div>
          <div className={etape >= 3 ? "active" : ""}> 3 </div>
      </div>

      <p className="message">
        Etape {etape}: {messages[etape - 1]}
      </p>

    <div className="buttons">
          <button style={{backgroundColor: "#7950F2" , color: "#fff"}} 
                  onClick={(touchePrécédent)}> 
            Précedent 
          </button>

          <button style={{backgroundColor: "#7950F2" , color: "#fff"}}
                  onClick={(toucheSuivant)}> 
            Suivant
          </button>
    </div>
  
  
  </div>
    )}
  </div>
  );
}