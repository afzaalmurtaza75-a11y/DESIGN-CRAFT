import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { DesignersPage } from './pages/DesignersPage';
import { DesignerProfilePage } from './pages/DesignerProfilePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { AuthPage } from './pages/AuthPage';
import { ClientDashboard } from './pages/ClientDashboard';
import { DesignerDashboard } from './pages/DesignerDashboard';

// Modals & UI
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';
import { HireModal } from './components/modals/HireModal';
import { StartProjectModal } from './components/modals/StartProjectModal';
import { ToastContainer } from './components/ui/ToastContainer';

const AppContent: React.FC = () => {
  const { currentView } = useApp();

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomePage />;
      case 'explore':
        return <ExplorePage />;
      case 'designers':
        return <DesignersPage />;
      case 'designer-profile':
        return <DesignerProfilePage />;
      case 'services':
        return <ServicesPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'login':
        return <AuthPage initialMode="login" />;
      case 'signup':
        return <AuthPage initialMode="signup" />;
      case 'client-dashboard':
        return <ClientDashboard />;
      case 'designer-dashboard':
        return <DesignerDashboard />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-indigo-500 selection:text-white transition-colors duration-200">
      {/* Global Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Global Footer (shown on all pages except auth for maximum focus) */}
      {currentView !== 'login' && currentView !== 'signup' && <Footer />}

      {/* Global Modals */}
      <ProjectDetailModal />
      <HireModal />
      <StartProjectModal />

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
