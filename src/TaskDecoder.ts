import { Applicative1 } from 'fp-ts/lib/Applicative'
import * as T from 'fp-ts/lib/Task'
import { Ord } from 'fp-ts/lib/Ord'
import {TaskDecoder,literal,string,number,boolean,nullable,struct,partial,record,array,tuple,intersect,sum,lazy,readonly,UnknownArray, UnknownRecord,union,refine} from 'io-ts/src/TaskDecoder'
import { Schemable2C, WithRefine2C, WithUnion2C, WithUnknownContainers2C } from './Schemable'
 
// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.2.7
 */
 export const URI = 'io-ts/ToTaskDecoder'

 /**
 * @category instances
 * @since 2.2.7
 */
 export type URI = typeof URI
  
 declare module 'fp-ts/lib/HKT' {
   interface URItoKind2<E, A> {
     readonly [URI]: TaskDecoder<unknown, E, A>
   }
 }

/**
 * @category instances
 * @since 2.2.8
 */
 export const getSchemable = (Ord: Ord<string>) => (applicative: Applicative1<T.URI>): Schemable2C<URI, unknown> => ({
  URI,
  _E: undefined as any,
  literal,
  string,
  number,
  boolean,
  nullable,
  struct: struct(Ord)(applicative),
  partial: partial(Ord)(applicative),
  record: record(Ord)(applicative),
  array: array(applicative),
  tuple: tuple(applicative),
  intersect: intersect as Schemable2C<URI, unknown>['intersect'],
  sum: sum(applicative),
  lazy,
  readonly
})

/**
 * @category instances
 * @since 2.2.8
 */
export const WithUnknownContainers: WithUnknownContainers2C<URI, unknown> = {
  UnknownArray,
  UnknownRecord
}

/**
 * @category instances
 * @since 2.2.8
 */
export const getWithUnion = (applicative: Applicative1<T.URI>): WithUnion2C<URI, unknown> => ({
  union: union(applicative) as WithUnion2C<URI, unknown>['union']
})

/**
 * @category instances
 * @since 2.2.8
 */
export const WithRefine: WithRefine2C<URI, unknown> = {
  refine: refine as WithRefine2C<URI, unknown>['refine']
}