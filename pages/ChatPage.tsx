
import React from 'react';
import { Link } from 'react-router-dom';

export default function PhoenixAiChatPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="navbar bg-phoenix-container-bg/50 rounded-xl mb-4">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
            Back
          </Link>
        </div>
        <div className="flex-none">
          <h1 className="text-xl font-bold">Phoenix AI Chat</h1>
        </div>
      </div>

      <div className="hero rounded-xl bg-phoenix-container-bg/80">
        <div className="hero-content text-center py-16">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold text-phoenix-accent mb-4">Welcome to Phoenix AI Chat!</h2>
            <p className="py-6 text-phoenix-text-secondary">
              This is where your advanced AI assistant will soon reside. It will help with market analysis, answer questions, and support your investment decisions in the Solana ecosystem.
            </p>
            <p className="font-bold">Coming Soon! 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
}
