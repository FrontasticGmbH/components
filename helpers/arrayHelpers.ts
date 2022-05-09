export class ArrayHelpers {
  static chunk = <Element>(input: Element[], size: number): Element[][] => {
    return input.reduce((array, item, index) => {
      return index % size === 0 ? [...array, [item]] : [...array.slice(0, -1), [...array.slice(-1)[0], item]];
    }, []);
  };
}
