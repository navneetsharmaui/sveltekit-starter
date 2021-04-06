export interface IDeserializable<T = unknown> {
	deserialize(input: T): this;
}
