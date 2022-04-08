import * as D from 'io-ts/src/Decoder2'
import * as DE from 'io-ts/src/DecodeError2'
import { Schemable2C, WithUnion2C, WithUnknownContainers2C } from './Schemable'
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
    readonly [URI]: D.Decoder<R, E, A>
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
    literal: D.literal,
    string: D.string,
    number: D.number,
    boolean: D.boolean,
    tuple: D.tuple,
    struct: D.struct as any,
    partial: D.partial as any,
    array: D.array,
    record: D.record,
    nullable: D.nullable,
    intersect: D.intersect,
    lazy: D.lazy,
    sum: D.sum as any,
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
  UnknownArray: D.UnknownArray,
  UnknownRecord: D.UnknownRecord
})

/**
 * @category instances
 * @since 2.2.17
 */
export const getWithUnion = <E = never>(): WithUnion2C<URI, DE.DecodeError<E | DE.BuiltinE>> => ({
  union: D.union as any
})
