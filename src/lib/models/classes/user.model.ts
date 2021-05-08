import type { IUser } from '$models/interfaces/iuser.interface';
import type { IDeserializable } from '$models/interfaces/ideserializable.interface';

export class UserModel implements IDeserializable<IUser>, IUser {
	public name: string;
	public job: string;
	public id: string;

	deserialize(input: IUser): this {
		Object.assign(this, input);
		return this;
	}
}
