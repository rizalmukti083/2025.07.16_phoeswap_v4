
import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { usePresaleStore } from '../stores/usePresaleStore';
import { usePresaleActions } from '../hooks/usePresale';
import Countdown from '../components/Countdown';
import MyMultiButton from '../components/MyMultiButton';
import { FireIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import * as web3 from '@solana/web3.js';

const LaunchpadDetailPage: React.FC = () => {
  const { connected } = useWallet();
  const { saleData, userPurchaseRecord, isLoading } = usePresaleStore();
  const { purchaseTokens, claimTokens, isAdmin, initializeSale, withdrawSol } = usePresaleActions();
  const [purchaseAmount, setPurchaseAmount] = useState('');

  const now = Date.now() / 1000;
  const isSaleActive = saleData && now > saleData.startTime.toNumber() && now < saleData.endTime.toNumber();
  const isSaleUpcoming = saleData && now < saleData.startTime.toNumber();
  const isSaleEnded = saleData && now > saleData.endTime.toNumber();
  const raisedPercentage = saleData ? (saleData.totalRaised.toNumber() / saleData.hardCapLamports.toNumber()) * 100 : 0;
  
  const handlePurchase = () => {
    const amount = parseFloat(purchaseAmount);
    if (!isNaN(amount) && amount > 0) {
      purchaseTokens(amount);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-lg mx-auto bg-phoenix-container-bg p-8 rounded-2xl shadow-2xl border border-phoenix-border animate-pulse">
        <div className="h-8 bg-phoenix-border rounded w-3/4 mx-auto mb-4"></div>
        <div className="h-4 bg-phoenix-border rounded w-1/2 mx-auto mb-8"></div>
        <div className="h-6 bg-phoenix-border rounded w-full mb-2"></div>
        <div className="h-4 bg-phoenix-border rounded w-full"></div>
      </div>
    );
  }

  if (!saleData && isAdmin) {
    return (
      <div className="w-full max-w-lg mx-auto bg-phoenix-container-bg p-8 rounded-2xl shadow-2xl border border-phoenix-border text-center">
        <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
        <p className="mb-6 text-phoenix-text-secondary">No active presale found. As the admin, you can initialize one.</p>
<<<<<<< HEAD
        <button onClick={initializeSale} className="btn-primary-phoenix">Initialize Presale</button>
=======
        <button onClick={initializeSale} className="w-full bg-phoenix-accent text-black font-bold py-3 px-4 rounded-lg hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Initialize Presale</button>
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
      </div>
    )
  }

  if (!saleData) {
     return <div className="text-center p-8 bg-phoenix-container-bg rounded-lg border border-phoenix-border max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-red-500">Presale Not Active</h2>
        <p className="text-gray-400">Please check back later.</p>
      </div>
  }
  
  return (
    <div className="w-full max-w-lg mx-auto bg-phoenix-container-bg p-6 sm:p-8 rounded-2xl shadow-2xl border border-phoenix-border space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">PHNX Token Presale</h1>
        {isSaleActive && <div className="mt-2 inline-flex items-center gap-2 text-green-400"><FireIcon className="h-5 w-5"/>LIVE</div>}
        {isSaleUpcoming && <div className="mt-2 inline-flex items-center gap-2 text-blue-400"><ClockIcon className="h-5 w-5"/>UPCOMING</div>}
        {isSaleEnded && <div className="mt-2 inline-flex items-center gap-2 text-gray-400"><CheckCircleIcon className="h-5 w-5"/>ENDED</div>}
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1 text-gray-300">
           <span>Progress</span>
           <span className="font-bold text-phoenix-text-primary">{(saleData.totalRaised.toNumber() / web3.LAMPORTS_PER_SOL).toFixed(2)} / {(saleData.hardCapLamports.toNumber() / web3.LAMPORTS_PER_SOL).toFixed(0)} SOL</span>
        </div>
        <div className="w-full bg-phoenix-bg rounded-full h-4 border border-phoenix-border overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-full rounded-full transition-all duration-500" style={{ width: `${raisedPercentage}%` }}></div>
        </div>
      </div>

      <div className="text-center">
        {isSaleActive && <Countdown endTime={saleData.endTime.toNumber()} />}
        {isSaleUpcoming && <Countdown endTime={saleData.startTime.toNumber()} prefix="Starts In:"/>}
      </div>

      {connected ? (
        <div className="space-y-4">
          {isSaleActive && (
             <div>
                <input type="number" value={purchaseAmount} onChange={(e) => setPurchaseAmount(e.target.value)} placeholder="Enter SOL amount" className="w-full p-3 bg-phoenix-bg border border-phoenix-border rounded-lg text-white outline-none focus:border-orange-500"/>
<<<<<<< HEAD
                 <button onClick={handlePurchase} className="w-full mt-3 btn-primary-phoenix" disabled={!purchaseAmount || parseFloat(purchaseAmount) <= 0}>Buy PHNX</button>
=======
                 <button onClick={handlePurchase} className="w-full mt-3 bg-phoenix-accent text-black font-bold py-3 px-4 rounded-lg hover:bg-orange-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={!purchaseAmount || parseFloat(purchaseAmount) <= 0}>Buy PHNX</button>
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
            </div>
          )}
          {userPurchaseRecord && (
            <div className="bg-phoenix-bg p-4 rounded-lg border border-phoenix-border">
              <h3 className="font-semibold text-white mb-2">Your Contribution</h3>
              <p className="text-sm text-gray-300">SOL Contributed: {(userPurchaseRecord.amountSpent.toNumber() / web3.LAMPORTS_PER_SOL).toFixed(4)}</p>
              <p className="text-sm text-gray-300">Claimed: {userPurchaseRecord.claimed ? <span className="text-green-400">Yes</span> : 'No'}</p>
            </div>
          )}
          {isSaleEnded && userPurchaseRecord && !userPurchaseRecord.claimed && (
<<<<<<< HEAD
            <button onClick={claimTokens} className="btn-primary-phoenix bg-green-500 hover:bg-green-600">Claim Your PHNX</button>
          )}
          {isAdmin && isSaleEnded && (
             <button onClick={withdrawSol} className="w-full mt-4 btn-secondary-phoenix">Admin: Withdraw SOL</button>
=======
            <button onClick={claimTokens} className="w-full bg-green-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-green-600 transition-colors">Claim Your PHNX</button>
          )}
          {isAdmin && isSaleEnded && (
             <button onClick={withdrawSol} className="w-full mt-4 bg-phoenix-border text-white font-bold py-3 px-4 rounded-lg hover:bg-phoenix-border/70 transition-colors">Admin: Withdraw SOL</button>
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
          )}
        </div>
      ) : (
         <div className="text-center py-4">
            <p className="mb-4 text-gray-400">Connect your wallet to participate.</p>
            <MyMultiButton className="!w-full !h-12 !text-base" />
        </div>
      )}
    </div>
  );
};

<<<<<<< HEAD
export default LaunchpadDetailPage;
=======
export default LaunchpadDetailPage;
>>>>>>> 2159ef1c79b15ebe65f713f30fc425982661d7c2
