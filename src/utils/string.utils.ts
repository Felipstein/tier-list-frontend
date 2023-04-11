export function formalStringList(words: string[]) {
  if(!words || words.length === 0) {
    return '';
  }

  if(words.length === 1) {
    return words[0];
  }

  if(words.length === 2) {
    return words.join(' e ');
  }

  const wordsClone = [...words];

  const lastWord = wordsClone.pop();
  return `${wordsClone.join(', ')} e ${lastWord}`;
}
