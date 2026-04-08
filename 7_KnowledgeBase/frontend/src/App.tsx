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
  const [selectedKBIds, setSelectedKBIds] = useState<string[]>([]);

  return (
    <div className="app-layout">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        selectedKBIds={selectedKBIds}
        onKBSelect={setSelectedKBIds}
      />
      <main className="app-main-content">
        {currentPage === 'admin' && <AdminPage />}
        {currentPage === 'chat' && <ChatPage selectedKBIds={selectedKBIds} />}
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
