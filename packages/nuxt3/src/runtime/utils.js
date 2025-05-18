import { startCase } from 'lodash-es'

/**
 * Converts an array of attribute names into an array of formatted attribute objects.
 * Each object contains a formatted label and the original attribute name.
 *
 * @param {string[]|object[]} attrs - Array of attribute names or objects
 * @returns {object[]} Array of formatted attribute objects
 *
 * Example:
 * Input: ['name', 'email']
 * Output: [
 *   {label: 'Name', name: 'name'},
 *   {label: 'Email', name: 'email'}
 * ]
 */
export const attrSerializer = (attrs) => {
  return attrs.map((item) => {
    if (typeof item == 'string') {
      return {
        label: startCase(item),
        name: item,
      }
    } else {
      // If there is a nested attribute:
      if (item.attrs) {
        item.attrs = attrSerializer(item.attrs)
      }
      return {
        label: startCase(item.name),
        ...item,
      }
    }
  })
}
