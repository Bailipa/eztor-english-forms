import { describe, expect, it } from 'vitest'
import { getAlternateStems, getFormHint, getIrregularForms, isCorrectAnswer } from '../src/irregularForms.js'

describe('English form helpers', () => {
  it('returns irregular verb forms', () => expect(getIrregularForms('write')).toContain('written'))
  it('accepts irregular and regular derived answers', () => {
    expect(isCorrectAnswer('written', 'write')).toBe(true)
    expect(isCorrectAnswer('writing', 'write')).toBe(true)
  })
  it('recognizes plural and tense hints', () => {
    expect(getFormHint('children')).toBe('(复数)')
    expect(getFormHint('walked')).toBe('(过去式)')
  })
  it('generates useful alternate stems', () => {
    expect(getAlternateStems('studies')).toContain('study')
    expect(getAlternateStems('knives')).toContain('kniv')
  })
})
