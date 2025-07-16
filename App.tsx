
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { AppProviders } from './providers/AppProviders';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SwapPage from './pages/SwapPage';
import LaunchpadPage from './pages/LaunchpadPage';
import LaunchpadDetailPage from './pages/LaunchpadDetailPage';
import FarmsPage from './pages/FarmsPage';
import BankPage from './pages/BankPage';
import LiquidityPage from './pages/LiquidityPage';
import B2MPage from './pages/B2MPage';
import QuestsPage from './pages/QuestsPage';
import TokenFactoryPage from './pages/TokenFactoryPage';
import ChatPage from './pages/ChatPage';
import SmartSwapPage from './pages/SmartSwapPage';

const App: React.FC = () => {
  return (
    <AppProviders>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/swap" element={<SwapPage />} />
            <Route path="/launchpad" element={<LaunchpadPage />} />
            <Route path="/launchpad/:projectId" element={<LaunchpadDetailPage />} />
            <Route path="/farms" element={<FarmsPage />} />
            <Route path="/bank" element={<BankPage />} />
            <Route path="/liquidity" element={<LiquidityPage />} />
            <Route path="/b2m" element={<B2MPage />} />
            <Route path="/quests" element={<QuestsPage />} />
            <Route path="/tokenfactory" element={<TokenFactoryPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/smart-swap" element={<SmartSwapPage />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppProviders>
  );
};

export default App;
