/**
 * Shorten a string to less than maxLen characters without truncating words.
 * example: shorten("The quick brown fox jumps over the lazy dog", 10);
 * will return a string of length <= maxCharLen without a truncated word
 * @param str The string to reduce
 * @param maxCharLen The maximum amount of character that can be kept
 * @param separator Separator where to split default to space
 * @returns {string|*}
 */
exports.shortenString = function (str, maxCharLen, separator = ' ')
{
  if (str.length <= maxCharLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxCharLen));
}

/**
 * Split a string
 * @param str The string to split
 * @param separator Split the given string when it encounter the char = separator
 * @returns {TemplateStringsArray}
 */
exports.splitString = function (str, separator = ' ') {
  return str.split(separator);
}
