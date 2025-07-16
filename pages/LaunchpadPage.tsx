
import React from 'react';
import { Link } from 'react-router-dom';
import { FireIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

interface LaunchpadProject {
  id: string;
  name: string;
  tokenSymbol: string;
  logoUrl: string;
  descriptionShort: string;
  status: 'active' | 'upcoming' | 'completed';
  targetAmount?: number;
  targetAmountCurrency?: string;
  raisedAmount?: number;
  pricePerToken?: string;
  slug: string;
}

const ProjectCard: React.FC<{ project: LaunchpadProject }> = ({ project }) => {
  const progress = project.targetAmount && project.raisedAmount ?
    (project.raisedAmount / project.targetAmount) * 100 : 0;

  const getStatusBadge = () => {
    switch (project.status) {
      case 'active':
        return <span className="absolute top-3 right-3 text-xs bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full">Live</span>;
      case 'upcoming':
        return <span className="absolute top-3 right-3 text-xs bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">Upcoming</span>;
      case 'completed':
        return <span className="absolute top-3 right-3 text-xs bg-gray-500/20 text-gray-400 px-2 py-0.5 rounded-full">Ended</span>;
      default:
        return null;
    }
  };

  return (
    <Link to={`/launchpad/${project.slug}`} className="block bg-phoenix-bg p-5 rounded-lg shadow-lg border border-phoenix-border hover:border-phoenix-accent transition-all duration-300 transform hover:-translate-y-1 relative">
      {getStatusBadge()}
      <div className="flex items-center mb-4">
        <img src={project.logoUrl} alt={project.name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h3 className="text-lg font-bold text-phoenix-text-primary">{project.name}</h3>
          <p className="text-sm text-phoenix-accent font-semibold">${project.tokenSymbol}</p>
        </div>
      </div>
      <p className="text-sm text-phoenix-text-secondary mb-4 h-10 line-clamp-2">{project.descriptionShort}</p>
      
      {project.status === 'active' && (
        <div>
          <div className="flex justify-between text-xs text-phoenix-text-secondary mb-1">
            <span>Progress</span>
            <span>{progress.toFixed(2)}%</span>
          </div>
          <div className="w-full bg-phoenix-container-bg rounded-full h-2.5">
            <div className="bg-phoenix-accent h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-phoenix-text-secondary mt-1">
            <span>{project.raisedAmount?.toLocaleString()} {project.targetAmountCurrency}</span>
            <span>{project.targetAmount?.toLocaleString()} {project.targetAmountCurrency}</span>
          </div>
        </div>
      )}

      {project.status !== 'active' && project.pricePerToken && (
         <div className="text-sm text-phoenix-text-secondary">
            Price: <span className="font-semibold text-phoenix-text-primary">{project.pricePerToken}</span>
        </div>
      )}
    </Link>
  );
};

const PROJECTS_DATA: LaunchpadProject[] = [
<<<<<<< HEAD
  { id: 'phnx-presale', name: 'Phoenix Token', tokenSymbol: 'PHNX', logoUrl: '/images/logo.png', descriptionShort: 'Revolutionizing DeFi on Solana with innovative trading solutions and a community-driven ecosystem.', status: 'active', targetAmount: 5000, targetAmountCurrency: 'SOL', raisedAmount: 750, pricePerToken: '1 PHNX = 0.005 SOL', slug: 'phnx_initial_sale' },
=======
  { id: 'phnx-presale', name: 'Phoenix Token', tokenSymbol: 'PHNX', logoUrl: 'https://i.imgur.com/RPT9jIh.png', descriptionShort: 'Revolutionizing DeFi on Solana with innovative trading solutions and a community-driven ecosystem.', status: 'active', targetAmount: 5000, targetAmountCurrency: 'SOL', raisedAmount: 750, pricePerToken: '1 PHNX = 0.005 SOL', slug: 'phnx_initial_sale' },
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
];

const LaunchpadPage: React.FC = () => {
    const activeProjects = PROJECTS_DATA.filter(p => p.status === 'active');
    const upcomingProjects = PROJECTS_DATA.filter(p => p.status === 'upcoming');
    const completedProjects = PROJECTS_DATA.filter(p => p.status === 'completed');

    return (
        <div className="flex-1 w-full">
            <div className="text-center mb-10 md:mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-phoenix-text-primary mb-3">Phoenix Launchpad</h1>
                <p className="text-lg text-phoenix-text-secondary max-w-2xl mx-auto">Your gateway to the most promising new projects on Solana.</p>
            </div>
            <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-semibold text-phoenix-text-primary mb-6 flex items-center">
                    <FireIcon className="h-7 w-7 text-red-500 mr-3" />Active Presales
                </h2>
                {activeProjects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeProjects.map(project => ( <ProjectCard key={project.id} project={project} /> ))}
                    </div>
                ) : (
                    <div className="text-center py-6 text-phoenix-text-secondary bg-phoenix-container-bg rounded-lg border border-phoenix-border"><p>No active presales at the moment.</p></div>
                )}
            </div>
            {upcomingProjects.length > 0 && (
                <div className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold text-phoenix-text-primary mb-6 flex items-center">
                        <ClockIcon className="h-7 w-7 text-blue-400 mr-3" />Upcoming Presales
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {upcomingProjects.map(project => ( <ProjectCard key={project.id} project={project} /> ))}
                    </div>
                </div>
            )}
            {completedProjects.length > 0 && (
              <div className="mb-12">
                  <h2 className="text-2xl md:text-3xl font-semibold text-phoenix-text-primary mb-6 flex items-center">
                      <CheckCircleIcon className="h-7 w-7 text-gray-500 mr-3" />Completed Presales
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {completedProjects.map(project => ( <ProjectCard key={project.id} project={project} /> ))}
                  </div>
              </div>
            )}
        </div>
    );
};

<<<<<<< HEAD
export default LaunchpadPage;
=======
export default LaunchpadPage;
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
