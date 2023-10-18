export function transformToTitleCase(text = '') {
  text = text.split('-').join(' ');
  const transformedText = text.charAt(0).toUpperCase() + text.slice(1);

  return transformedText;
}
