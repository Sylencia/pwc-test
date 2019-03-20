import { getPriorityAsString } from '.'

it('returns the correct string', () => {
  expect(getPriorityAsString(0)).toEqual('unknown')
  expect(getPriorityAsString(1)).toEqual('high')
  expect(getPriorityAsString(2)).toEqual('medium')
  expect(getPriorityAsString(3)).toEqual('low')
})
