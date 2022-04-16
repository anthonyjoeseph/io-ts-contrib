import { Decoder, literal, string, number, boolean, tuple, struct, partial, array, record, nullable, intersect, lazy, sum, union, readonly, refine, UnknownArray, UnknownRecord } from 'io-ts/src/Decoder'
import * as DE from 'io-ts/src/DecodeError'
import { Schemable2C, WithRefine2C, WithUnion2C, WithUnknownContainers2C } from './Schemable'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.2.7
 */
export const URI = 'io-ts/ToDecoder'

/**
* @category instances
* @since 2.2.7
*/
export type URI = typeof URI
 
declare module 'fp-ts/lib/HKT' {
  interface URItoKind2<E, A> {
    readonly [URI]: Decoder<unknown, E, A>
  }
}

/**
 * @category instances
 * @since 2.2.17
 */
export const getSchemable = <E = never>(): Schemable2C<URI, DE.DecodeError<E | DE.BuiltinE>> => {
  return {
    URI: URI,
    _E: undefined as any,
    literal,
    string,
    number,
    boolean,
    tuple,
    struct: struct as any,
    partial: partial as any,
    array,
    record,
    nullable,
    intersect,
    lazy,
    sum: sum as any,
    readonly,
  }
}

/**
 * @category instances
 * @since 2.2.17
 */
export const getWithUnknownContainers = <E = never>(): WithUnknownContainers2C<
  URI,
  DE.DecodeError<E | DE.BuiltinE>
> => ({
  UnknownArray,
  UnknownRecord
})

/**
 * @category instances
 * @since 2.2.17
 */
export const getWithUnion = <E = never>(): WithUnion2C<URI, DE.DecodeError<E | DE.BuiltinE>> => ({
  union: union as any
})


/**
 * @category instances
 * @since 2.2.17
 */
 export const getWithRefine = <E = never>(): WithRefine2C<URI, DE.DecodeError<E | DE.BuiltinE>> => ({
  refine: refine as any
})
