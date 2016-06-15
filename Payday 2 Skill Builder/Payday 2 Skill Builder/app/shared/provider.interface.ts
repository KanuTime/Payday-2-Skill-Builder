/** An Interface for anything that creates or returns values of a given type. */
export interface Provider<A> {

    get(): A;

}