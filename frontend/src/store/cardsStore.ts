import axios from 'axios';
import { StateCreator } from 'zustand';
import { Card } from '@/types/card.ts';
//import { api } from './authVar.ts';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { CARDS_DATA } from '@/lib/mockCards';

//const beUrl = import.meta.env.VITE_BACKEND_URL;

//const API_CARDS_URL = import.meta.env.MODE === 'development' ? beUrl + '/api/cards' : '/api/cards';

axios.defaults.withCredentials = true;

interface ValidationError {
	message: string;
	response?: string;
	errors: Record<string, string[]>;
}

type CardsState = {
	cards: Card[];
	isLoading: boolean,
	error: any,
};

type CardsActions = {
	reset: () => void;
	fetchCardsList: () => void;
	setCardsList: (data:any) => void;
};

export type CardsSlice = CardsState & CardsActions;

const initialState: CardsState = {
	isLoading: false,
	error: null,
	cards: [],
};


const createCardsSlice: StateCreator<
	CardsSlice,
	[['zustand/immer', never]],
	[],
	CardsSlice
> = (set) => ({
	...initialState,
	reset: () => set(() => initialState),
	fetchCardsList: async () => {
		try {
			//const response = await axios.get(`${API_CARDS_URL}${api.list}`);
			const response = await axios.get(`cardsJson.json`);
			//.log(response);
			
			set({
				//cards: response.data.data
				//cards: response.data
				cards: CARDS_DATA
			});
			return response;
		} catch (error) {
			if (axios.isAxiosError<ValidationError, Record<string, unknown>>(error)) {
				console.log(error.status);
				console.error(error.response);
				if (error?.response?.data?.message) {
					toast.error(error.response.data.message);
				}
				set({
					isLoading: false,
					error: error?.response?.data.message,
				});
				throw error;
			} else {
				console.error(error);
			}
		}
	},
	setCardsList: (data) => set(() => ({ cards: data }))
	
});

type cardsStore = CardsSlice


export const useCardsStore = create<cardsStore>()(
	devtools(
			subscribeWithSelector(
				immer((...a) => ({
					...createCardsSlice(...a),
				}))
			)
	)
);


