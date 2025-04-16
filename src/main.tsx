import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './i18n';
import { LanguageProvider } from './contexts/LanguageContext';

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);
