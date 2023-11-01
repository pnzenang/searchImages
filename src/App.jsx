import { Gallery, SearchForm, ThemeToggle } from "./components";
import { AppProvider } from "./context";

const App = () => {
  return (
    <>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </>
  );
};
export default App;
