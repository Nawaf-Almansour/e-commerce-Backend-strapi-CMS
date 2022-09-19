/**
 * @param {*} text
 */

export const slugify = (text, delimiter = "-") => {
  return text.trim().toLowerCase().replace(/\s+/g, delimiter);
}
