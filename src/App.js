import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const prop = "Hola soy una prop!!"; //! definimos la prop

  return (
    <>
      <Navbar />
      <ItemListContainer prop={prop} /> {/* Mandamos la prop  */}
    </>
  );
}

export default App;
