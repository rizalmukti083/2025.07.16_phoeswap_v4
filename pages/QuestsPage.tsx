
import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { ArchiveBoxXMarkIcon } from '@heroicons/react/24/outline';

interface Quest {
  id: number;
  title: string;
  description: string;
  rewardAmount: number;
  rewardToken: 'PHNX';
  imageUrl: string;
  points: number;
  slug: string;
  status: 'active' | 'completed' | 'upcoming';
}

const QUESTS_DATA: Quest[] = [
<<<<<<< HEAD
    { id: 0, title: 'Rise Together', description: 'Join The Phoenix World in its first year of launch!', points: 10, rewardAmount: 100, rewardToken: 'PHNX', imageUrl: '/images/quests/quest-0.webp', slug: 'rise-together', status: 'upcoming' },
    { id: 1, title: 'Spread the Flame', description: 'Join a tribe to unite with the community.', points: 5, rewardAmount: 50, rewardToken: 'PHNX', imageUrl: '/images/quests/quest-1.webp', slug: 'spread-the-flame', status: 'upcoming' },
    { id: 2, title: 'Ancient Archives', description: 'Read The Phoenix World storyline.', points: 5, rewardAmount: 50, rewardToken: 'PHNX', imageUrl: '/images/quests/quest-2.webp', slug: 'ancient-archives', status: 'upcoming' },
=======
    { id: 0, title: 'Rise Together', description: 'Join The Phoenix World in its first year of launch!', points: 10, rewardAmount: 100, rewardToken: 'PHNX', imageUrl: 'https://picsum.photos/400/600?random=1', slug: 'rise-together', status: 'upcoming' },
    { id: 1, title: 'Spread the Flame', description: 'Join a tribe to unite with the community.', points: 5, rewardAmount: 50, rewardToken: 'PHNX', imageUrl: 'https://picsum.photos/400/600?random=2', slug: 'spread-the-flame', status: 'upcoming' },
    { id: 2, title: 'Ancient Archives', description: 'Read The Phoenix World storyline.', points: 5, rewardAmount: 50, rewardToken: 'PHNX', imageUrl: 'https://picsum.photos/400/600?random=3', slug: 'ancient-archives', status: 'upcoming' },
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
];

const QuestCard: React.FC<{ quest: Quest; connected: boolean }> = ({ quest, connected }) => {
  const isButtonDisabled = !connected || quest.status !== 'active';
  
  return (
    <div className="border border-phoenix-border bg-phoenix-container-bg rounded-xl overflow-hidden shadow-lg transition-all duration-300 flex flex-col group">
      <div className="relative w-full h-64"> 
        <img 
            src={quest.imageUrl} 
            alt={quest.title} 
            className="transition-transform duration-300 group-hover:scale-105 object-cover w-full h-full"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-phoenix-text-primary mb-2">{quest.title}</h3>
        <p className="text-sm text-phoenix-text-secondary mb-4 flex-grow h-10 line-clamp-2">{quest.description}</p>
        <div className="flex justify-between items-center text-xs text-phoenix-text-secondary mb-5 pt-4 border-t border-phoenix-border">
            <span className="font-semibold text-phoenix-highlight">Reward: {quest.rewardAmount} ${quest.rewardToken}</span>
            <span className="font-semibold text-phoenix-text-primary">{quest.points} Points</span>
        </div>
        <button
            disabled={isButtonDisabled}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-phoenix-accent focus-visible:ring-offset-phoenix-bg h-9 px-4 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
            style={{ 
                backgroundColor: quest.status === 'active' ? 'var(--phoenix-accent)' : '#27272A',
                color: quest.status === 'active' ? 'black' : 'var(--phoenix-text-secondary)'
            }}
        >
          {quest.status === 'completed' ? 'Completed' : quest.status === 'upcoming' ? 'Coming Soon' : 'Start Quest'}
        </button>
      </div>
    </div>
  );
};

const QuestsPage: React.FC = () => {
    const { connected } = useWallet();
    const [filter, setFilter] = useState<'active' | 'upcoming' | 'completed'>('upcoming');
    const filteredQuests = QUESTS_DATA.filter(quest => quest.status === filter);
    
    return (
        <div className="flex-1 w-full py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <section className="text-center mb-10 md:mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-phoenix-text-primary mb-3">Quest Board</h1>
                    <p className="text-lg text-phoenix-text-secondary max-w-2xl mx-auto">Engage with the Phoenix ecosystem, complete tasks, and earn exclusive rewards and points.</p>
                </section>
                <section className="mb-8">
                    <div className="flex justify-center items-center bg-phoenix-container-bg p-1.5 rounded-lg max-w-xs mx-auto">
                        <button onClick={() => setFilter('active')} className={`px-6 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === 'active' ? 'bg-phoenix-accent text-black shadow-md' : 'text-phoenix-text-secondary hover:bg-phoenix-bg'}`}>
                            Active
                        </button>
                        <button onClick={() => setFilter('upcoming')} className={`px-6 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === 'upcoming' ? 'bg-phoenix-accent text-black shadow-md' : 'text-phoenix-text-secondary hover:bg-phoenix-bg'}`}>
                            Upcoming
                        </button>
                        <button onClick={() => setFilter('completed')} className={`px-6 py-1.5 rounded-md text-sm font-medium transition-colors ${filter === 'completed' ? 'bg-phoenix-accent text-black shadow-md' : 'text-phoenix-text-secondary hover:bg-phoenix-bg'}`}>
                            Completed
                        </button>
                    </div>
                </section>
                <section>
                    {filteredQuests.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredQuests.map(quest => (
                                <QuestCard key={quest.id} quest={quest} connected={connected} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 text-phoenix-text-secondary bg-phoenix-container-bg rounded-lg border border-phoenix-border">
                            <ArchiveBoxXMarkIcon className="h-12 w-12 mx-auto mb-2 text-gray-500" />
                            <p className="text-lg">No {filter} quests to display at this time.</p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

<<<<<<< HEAD
export default QuestsPage;
=======
export default QuestsPage;
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
