import { SectionPlaceholder } from '../components/sections/SectionPlaceholder'
import { existingSections } from '../components/sections/existing'
import { newSections } from '../components/sections/new'

const pageSections = [
  { id: 'hero', label: existingSections.hero, kind: 'existing' },
  { id: 'platform', label: existingSections.platform, kind: 'existing' },
  { id: 'workflow', label: newSections.workflow, kind: 'new' },
  { id: 'capabilities', label: existingSections.capabilities, kind: 'existing' },
  { id: 'ai-control', label: newSections.aiControl, kind: 'new' },
  { id: 'use-cases', label: newSections.useCases, kind: 'new' },
  { id: 'audience-adaptation', label: newSections.audienceAdaptation, kind: 'new' },
  { id: 'benefits', label: existingSections.benefits, kind: 'existing' },
  { id: 'team', label: newSections.team, kind: 'new' },
  { id: 'security', label: existingSections.security, kind: 'existing' },
  { id: 'roadmap', label: existingSections.roadmap, kind: 'existing' },
  { id: 'faq', label: existingSections.faq, kind: 'existing' },
  { id: 'final-cta', label: existingSections.finalCta, kind: 'existing' },
] as const

export function LandingPage() {
  return pageSections.map((section) => <SectionPlaceholder key={section.id} {...section} />)
}
