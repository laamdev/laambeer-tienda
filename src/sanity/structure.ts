import type { StructureResolver } from 'sanity/structure'

import { COMPANY_NAME } from '@/lib/constants'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = S =>
  S.list()
    .title(COMPANY_NAME)
    .items([
      S.documentTypeListItem('beer').title('Beers'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        item => item.getId() && !['beer'].includes(item.getId()!)
      )
    ])
