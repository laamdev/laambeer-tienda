import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { styleType } from './styleType'
import { beerType } from './beerType'
import { breweryType } from './breweryType'
import { tapType } from './tapType'
import { foodType } from './foodType'
import { eventType } from './eventType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    styleType,
    beerType,
    breweryType,
    tapType,
    foodType,
    eventType
  ]
}
