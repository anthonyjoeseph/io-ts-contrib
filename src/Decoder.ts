import { Decoder, literal, string, number, boolean, tuple, struct, partial, array, record, nullable, intersect, lazy, sum, union, UnknownArray, UnknownRecord } from 'io-ts/src/Decoder2'
import * as DE from 'io-ts/src/DecodeError2'
import { Schemable2C, WithRefine2C, WithUnion2C, WithUnknownContainers2C } from './Schemable'
import { identity } from 'fp-ts/lib/function'

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
  interface URItoKind3<R, E, A> {
    readonly [URI]: Decoder<R, E, A>
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
    readonly: identity as any
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
