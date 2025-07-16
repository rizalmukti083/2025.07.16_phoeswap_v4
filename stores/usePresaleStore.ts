
import { create } from 'zustand';
import { SaleData, PurchaseRecord } from '../types';

interface PresaleState {
  saleData: SaleData | null;
  userPurchaseRecord: PurchaseRecord | null;
  isLoading: boolean;
  setSaleData: (data: SaleData | null) => void;
  setUserPurchaseRecord: (record: PurchaseRecord | null) => void;
  setIsLoading: (loading: boolean) => void;
}

export const usePresaleStore = create<PresaleState>((set) => ({
  saleData: null,
  userPurchaseRecord: null,
  isLoading: true,
  setSaleData: (data) => set({ saleData: data }),
  setUserPurchaseRecord: (record) => set({ userPurchaseRecord: record }),
  setIsLoading: (loading) => set({ isLoading: loading }),
}));
