function keySort<T>(
  /**
   * Array a ser ordenado.
  */
  array: T[],
  /**
   * Função que seleciona o critério de ordenação.
  */
  getKey: (item: T) => number | string | boolean,
  /**
   * Permite que seja retornada a ordem inversa.
  */
  reverse = false
): T[] {
  const reorder = reverse ? -1 : 1;

  const reorderedArray = array.sort((a, b) => {
    const [aKey, bKey] = [a, b].map(getKey);

    switch (typeof aKey) {
      case 'string':
        return aKey.localeCompare(bKey as string) * reorder;
      case 'number':
        return aKey > bKey ? reorder : aKey < bKey ? -reorder : 0;
      case 'boolean':
        return aKey === bKey ? 0 : aKey ? -reorder : reorder;
      default:
        return 0;
    }
  });

  return reorderedArray;
}

export default keySort;
