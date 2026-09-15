import { mediaSlot } from '../media'
import { mediaKinds, type MediaKind, type Project } from '../types'

export const futureMediaSlots = (Object.keys(mediaKinds) as MediaKind[]).map((kind) =>
  mediaSlot({ id: `future-${kind}`, project: 'Future project', title: mediaKinds[kind], kind }),
)

export const projectTemplate: Project = {
  slug: 'future-project', title: 'Future project', year: null,
  status: 'draft', format: 'case-study', categories: [], disciplines: [],
  summary: '', introduction: '', role: '', services: [], technologies: [],
  hero: futureMediaSlots[0], homeLayout: 'offset',
  chapters: [], archive: [], credits: [], links: [], sources: [],
}
