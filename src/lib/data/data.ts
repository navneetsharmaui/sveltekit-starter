import { UserModel } from '$models/classes/user.model';

export const userData: UserModel[] = [
	{
		name: 'Ross',
		job: 'Professor',
		id: 'ross',
	},
	{
		name: 'Chandler',
		job: 'Processor',
		id: 'chandler',
	},
	{
		name: 'Joe',
		job: 'Actor',
		id: 'joe',
	},
	{
		name: 'Rachel',
		job: 'Designer',
		id: 'rachel',
	},
	{
		name: 'Monica',
		job: 'Chef',
		id: 'monica',
	},
	{
		name: 'Phoebe',
		job: 'Masseuse',
		id: 'phoebe',
	},
].map((value) => new UserModel().deserialize(value));
