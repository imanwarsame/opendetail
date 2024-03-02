import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { UserRole } from '../enums/userroles';
import { IDetailObject } from '../types/detailobject';
import { createDetail } from '../data/boilerplate';

export interface State {
	selectedDetail: string | null;
	userRole: UserRole;
	allDetails: IDetailObject[];
}

export interface Reducers {
	setSelectedDetail: (p: string | null) => void;
	setUserRole: (r: UserRole) => void;
	allDetails: (details: IDetailObject[]) => void;
}

export const useDetailStore = create(
	immer<{
		state: State;
		reducers: Reducers;
	}>((set) => {
		const state: State = {
			selectedDetail: null,
			userRole: UserRole.Admin,
			allDetails: [...Array(20)].map(() => createDetail())
		};

		const reducers: Reducers = {
			setSelectedDetail: (p: string | null) => {
				set((store) => {
					store.state.selectedDetail = p;
				});
			},
			setUserRole: (r: UserRole) => {
				set((store) => {
					store.state.userRole = r;
				});
			},
			allDetails: (details: IDetailObject[]) => {
				set((store) => {
					store.state.allDetails = details;
				});
			}
		};

		return { state, reducers };
	})
);

