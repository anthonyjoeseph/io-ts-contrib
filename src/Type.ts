import { Type, literal, string, number, boolean, nullable, struct, partial, record, array, tuple, intersect, sum, lazy, readonly, UnknownArray, UnknownRecord, union, refine } from 'io-ts/src/Type'
import * as S from './Schemable'

// -------------------------------------------------------------------------------------
// instances
// -------------------------------------------------------------------------------------

/**
 * @category instances
 * @since 2.2.3
 */
 export const URI = 'io-ts/Type'

 /**
  * @category instances
  * @since 2.2.3
  */
 export type URI = typeof URI
 
 declare module 'fp-ts/lib/HKT' {
   interface URItoKind<A> {
     readonly [URI]: Type<A>
   }
 }
 
 /**
  * @category instances
  * @since 2.2.8
  */
 export const Schemable: S.Schemable1<URI> = {
   URI,
   literal: literal as any,
   string,
   number,
   boolean,
   nullable,
   struct,
   partial,
   record,
   array,
   tuple: tuple as S.Schemable1<URI>['tuple'],
   intersect,
   sum,
   lazy,
   readonly
 }
 
 /**
  * @category instances
  * @since 2.2.8
  */
 export const WithUnknownContainers: S.WithUnknownContainers1<URI> = {
   UnknownArray,
   UnknownRecord
 }
 
 /**
  * @category instances
  * @since 2.2.8
  */
 export const WithUnion: S.WithUnion1<URI> = {
   union: union as S.WithUnion1<URI>['union']
 }
 
 /**
  * @category instances
  * @since 2.2.8
  */
 export const WithRefine: S.WithRefine1<URI> = {
   refine: refine as S.WithRefine1<URI>['refine']
 }
 