import Header from "@/components/Header";
import Hero from "@/components/HeroSection";
import Stat from "@/components/StatsSection";
import Temoignage from "@/components/TestimonialSection";
import Rejoidre from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

export default function App(){
  return(
    <div>
      <Header/>
      <Hero/>
      <Stat/>
      <Temoignage/>
      <Rejoidre/>
      <Footer/>
    </div>
  )
}
















// // src/App.tsx

// import * as Dialog from '@radix-ui/react-dialog';
// import './accueil.css'; // Nous allons créer ce fichier pour le style

// function App() {
//   return (
//     <div className="App">
//       <Dialog.Root>
//         <Dialog.Trigger asChild>
//           <button className="Button violet">Ouvrir la modale</button>
//         </Dialog.Trigger>

//         <Dialog.Portal>
//           <Dialog.Overlay className="DialogOverlay" />
//           <Dialog.Content className="DialogContent">
//             <Dialog.Title className="DialogTitle">Mon titre de modale</Dialog.Title>
//             <Dialog.Description className="DialogDescription">
//               Ceci est une description de la modale.
//             </Dialog.Description>
            
//             <p>Le contenu de votre modale va ici.</p>

//             <div className='bouton-fermer' >
//               <Dialog.Close asChild>
//                 <button className="Button green">Fermer</button>
//               </Dialog.Close>
//             </div>
            
//             <Dialog.Close asChild>
//               <button className="IconButton" aria-label="Close">
//                 {/* Icone de croix pour fermer la modale */}
//                 &times;
//               </button>
//             </Dialog.Close>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog.Root>
//     </div>
//   );
// }

// export default App;