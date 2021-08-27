import React from "react";
import { Link } from "react-router-dom";
import styles from "./Creations.module.css";

function Creations() {
  return (
    <div className={styles.container}>
      <Link to="/creations" className="header-link-default">
        <h1 className="header-1-default">Creazioni</h1>
      </Link>
      <div className={styles.creation}>
        <h2 className="header-2-default">Rituali degli elementi</h2>

        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1512269720274-5aaaed900ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
          alt=""
        />

        <p className="paragraph-default">
          Un rituale è allineare gesto, azione, attenzione e intenzione. Già
          solo questo crea una armonia, un senso di completezza. Come potrebbe
          essere danzando, cantando, facendo sport o facendo l&#39;amore. Un
          rituale con gli elementi è per armonizzare se stessi e come si intende
          nello sciamanesimo con &quot;tutte le nostre relazioni&quot;. Gli
          elementi sono gli &quot;Ingredienti&quot; di tutto. Scoprire come ne
          siamo fatti, come reagiamo, quali forze e intelligenze condividiamo ci
          aiuta a conoscere e apprezzare meglio. Quale terra sei? Cosa scorre in
          te come acqua? Cosa ti accende e brucia? Quale respiro ti concedi?
          Ogni rituale degli elementi può essere fatto come pratica personale o
          di gruppo, un solo elemento oppure un percorso con tutti.
        </p>
        <button className="button-default">Prenota</button>
      </div>
      <div className={styles.creation}>
        <h2 className="header-2-default">Rituali di passaggio</h2>
        <img
          className="img-fluid"
          src="https://images.unsplash.com/photo-1516945409304-707a6fa79a02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2550&q=80"
          alt=""
        />
        <p className="paragraph-default">
          Ci sono momenti con una fondamentale valenza fisica: nascita, cambio
          della dentizione, primo sangue e seme, esperienza sessuale, menopausa
          e andropausa, morte. Tutti questi eventi li riconosciamo come riti di
          passaggio qualsiasi sia il nostro contesto culturale. Cambia molto i
          modi in cui viverli personalmente e nel nostro spazio di relazioni
          Anche il periodo dell’adolescenza, il ruolo e lavoro che scegliamo
          nella società, i “ lutti&quot; che viviamo alla fine di amicizie e
          relazioni di coppia sono riti di passaggio che in modo più o meno
          consapevole viviamo nell’arco della vita. Possiamo facilmente sentire
          la mancanza di uno o più di questi passaggi. Sono molto felice di
          vedere come esseri umani luminosi si stiano prendendo cura di aiutare
          questi passaggi in diversi ambiti e tradizioni. Trovo fondamentale che
          si possa fare questi riti per il nostro percorso personale e sociale.
          I rituali che propongo hanno delle caratteristiche chiave ma hanno una
          preparazione particolare per ogni singola persona, proprio per
          evidenziare l’unicità di ognuno. Contemporaneamente alle risorse
          preziose delle sue relazioni. Non siamo mai soli nei passi della vita.
          Gli strumenti che metto a disposizione sono quelli della mediazione
          guidata, il viaggio sciamanico dedicato ad animali, piante, Antenati
          ed Elementi, la divinazione con Tarocchi, Rune, Astrologia e non
          ultimo la guida in cerchi di parola. Secondo le affinità che possono
          essere messe in risalto ad arricchire la bellezza e profondità del
          rituale che si verrà a creare.
        </p>
        <button className="button-default">Prenota</button>
      </div>
    </div>
  );
}

// const PayPalPayment = () => {
//   const [currency, setCurrency] = useState("USD");

//   function CurrencySelect() {
//       const [{ options }, dispatch] = usePayPalScriptReducer();

//       function onCurrencyChange(event: ChangeEvent<HTMLSelectElement>) {
//           setCurrency(event.target.value);
//           dispatch({
//               type: DISPATCH_ACTION.RESET_OPTIONS,
//               value: {
//                   ...options,
//                   currency: event.target.value,
//               },
//           });
//       }

//       return (
//           <select
//               value={currency}
//               onChange={onCurrencyChange}
//               name="currency"
//               id="currency"
//               style={{ marginBottom: "20px" }}
//           >
//               <option value="USD">United States dollar</option>
//               <option value="EUR">Euro</option>
//               <option value="CAD">Canadian dollar</option>
//           </select>
//       );
//   }

//   function createOrder(
//       data: Record<string, unknown>,
//       actions: CreateOrderActions
//   ) {
//       return actions.order.create({
//           purchase_units: [
//               {
//                   amount: {
//                       value: "88.44",
//                       currency_code: currency,
//                   },
//               },
//           ],
//       });
//   }

//   return (
//       <div style={{ minHeight: "300px" }}>
//           <PayPalScriptProvider
//               options={{
//                   ...scriptProviderOptions,
//                   "data-namespace": "currency_example",
//               }}
//           >
//               <CurrencySelect />
//               <PayPalButtons createOrder={createOrder} />
//           </PayPalScriptProvider>
//       </div>
//   );
// }
// client id: ASIBbvvUc7zNUjBYMrmU07bf68RN1bWR2R-LoTigexQg7g8teOoywXL8k9ykbVwWuaozlv4cKu-1genp
// client secret: EE89eNTUmWGtoxnvRGf0PXHCxVW8g5BtU3TifFYG1NKYZtgIK5Bv1C9gDw7D-DV6TfTCMdmmPWOJBfTs
export default Creations;
