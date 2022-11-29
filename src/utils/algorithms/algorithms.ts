const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**Insert sort */
export const insert_sort = async (
  vals: HTMLElement[],
  delay: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  for (let i = 0; i < vals.length; i++) {
    for (let j = i; j > 0; j--) {
      if (
        parseInt(`${vals[j].style.height}`) <
        parseInt(`${vals[j - 1].style.height}`)
      ) {
        vals[j - 1].style.backgroundColor = SECONDARY;
        let temp = vals[j].style.height;

        vals[j].style.height = vals[j - 1].style.height;

        vals[j - 1].style.height = temp;

        await sleep(delay);
        vals[j - 1].style.backgroundColor = PRIMARY;
      } else {
        vals[j - 1].style.backgroundColor = "white";
        break;
      }
    }

    await sleep(delay);
  }
};

/**
 * Quick sort.
 */

const get_median = (
  items: HTMLElement[],
  left: number,
  right: number
): number => {
  return parseInt(items[Math.floor((right + left) / 2)].style.height);
};

const swap = (
  items: HTMLElement[],
  left: number,
  right: number,
  delay: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  let temp = items[left].style.height;
  items[left].style.height = items[right].style.height;

  items[right].style.height = temp;
};

const partition = async (
  items: HTMLElement[],
  left: number,
  right: number,

  PRIMARY: string,
  SECONDARY: string,
  delay: number
) => {
  let pivot = get_median(items, left, right);
  let i: number = left;
  let j: number = right;
  while (i <= j) {
    while (parseInt(`${items[i].style.height}`) < pivot) {
      i++;
      items[i].style.backgroundColor = SECONDARY;
      await sleep(delay);
      items[i].style.backgroundColor = PRIMARY;
    }

    while (parseInt(`${items[j].style.height}`) > pivot) {
      j--;
      items[j].style.backgroundColor = SECONDARY;
      await sleep(delay);
      items[j].style.backgroundColor = PRIMARY;
    }
    if (i <= j) {
      swap(items, i, j, delay, PRIMARY, SECONDARY);
      await sleep(delay * 1.5);
      i++;
      j--;
    }
  }
  return i;
};

export const quick_sort = async (
  items: HTMLElement[],
  delay: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  await _quick_sort(items, 0, items.length - 1, PRIMARY, SECONDARY, delay);
};

const _quick_sort = async (
  items: HTMLElement[],
  left: number,
  right: number,
  PRIMARY: string,
  SECONDARY: string,
  delay: number
) => {
  let index: number;

  if (items.length > 1) {
    index = await partition(items, left, right, PRIMARY, SECONDARY, delay);
    if (left < index - 1) {
      await _quick_sort(items, left, index - 1, PRIMARY, SECONDARY, delay);
    }

    if (index < right) {
      await _quick_sort(items, index, right, PRIMARY, SECONDARY, delay);
    }
  }
};
