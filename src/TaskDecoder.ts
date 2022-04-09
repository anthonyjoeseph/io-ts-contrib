import * as D from 'io-ts/src/Decoder2'
import * as DE from 'io-ts/src/DecodeError2'
import { Schemable2C, WithUnion2C, WithUnknownContainers2C } from './Schemable'
import { identity } from 'fp-ts/lib/function'

/**
 * @category instances
 * @since 2.2.8
 */
 export const Schemable: S.Schemable2C<URI, unknown> = {
  URI,
  literal,
  string,
  number,
  boolean,
  nullable,
  type,
  struct,
  partial,
  record,
  array,
  tuple: tuple as S.Schemable2C<URI, unknown>['tuple'],
  intersect,
  sum,
  lazy,
  readonly
}

/**
 * @category instances
 * @since 2.2.8
 */
export const WithUnknownContainers: S.WithUnknownContainers2C<URI, unknown> = {
  UnknownArray,
  UnknownRecord
}

/**
 * @category instances
 * @since 2.2.8
 */
export const WithUnion: S.WithUnion2C<URI, unknown> = {
  union: union as S.WithUnion2C<URI, unknown>['union']
}

/**
 * @category instances
 * @since 2.2.8
 */
export const WithRefine: S.WithRefine2C<URI, unknown> = {
  refine: refine as S.WithRefine2C<URI, unknown>['refine']
}