import Text from './Text/Text'
import Number from './Number/Number'
import Select from './Select/Select'

export type FieldTypes = 'text' | 'number' | 'select'

export default {
  text: Text,
  number: Number,
  select: Select,
} as Record<FieldTypes, typeof Text | typeof Select>
