import React from 'react';
import Navbar from "./Navbar"
import Form from "./Form"
import PageContent from "./PageContent"
import { LanguageProvider} from "./contexts/LanguageContext";
import { ThemeProvider} from "./contexts/ThemeContext";

function App() {
  return (
    <>
    <LanguageProvider>
    <ThemeProvider>
    <PageContent>
    <Navbar />
    <Form />
    </PageContent>
    </ThemeProvider>
    </LanguageProvider>
    </>

  );
}

export default App;

