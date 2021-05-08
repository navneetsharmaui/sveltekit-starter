export interface IDeserializable<T> {
	deserialize(input: T): this;
}
