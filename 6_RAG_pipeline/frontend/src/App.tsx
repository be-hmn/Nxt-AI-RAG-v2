import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { LayoutProvider } from './contexts/LayoutContext';
import { AdminPage } from './pages/AdminPage';
import { ChatPage } from './pages/ChatPage';
import Sidebar from './components/Sidebar';
import './styles/globals.css';

type Page = 'admin' | 'chat';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('admin');

  return (
    <div className="app-layout">
      <Sidebar currentPage={currentPage} onPageChange={setCurrentPage} />
      <main className="app-main-content">
        {currentPage === 'admin' && <AdminPage />}
        {currentPage === 'chat' && <ChatPage />}
      </main>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LayoutProvider>
        <AppContent />
      </LayoutProvider>
    </ThemeProvider>
  );
}

export default App;
