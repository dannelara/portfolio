const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**Insert sort */
export const insert_sort = async (
  vals: HTMLElement[],
  cnt: number,
  delay: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  for (let i = 0; i < cnt; i++) {
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
  vals: HTMLElement[],
  left: number,
  right: number
): number => {
  const center = (left + right) / 2;
  return center;
};

export const quick_sort = async (
  vals: HTMLElement[],
  cnt: number,
  delay: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  _quick_sort(vals, 0, vals.length - 1, PRIMARY, SECONDARY);
};

const _quick_sort = (
  vals: HTMLElement[],
  left: number,
  right: number,
  PRIMARY: string,
  SECONDARY: string
) => {
  const pivot = get_median(vals, left, right);

  let i = left;
  let j = right - 1;

  while (true) {
    i++;
    while (parseInt(`${vals[i].style.height}`) < pivot) {
      i++;
    }
    j--;
    while (parseInt(`${vals[j].style.height}`) > pivot) {
      j--;
    }

    if (i < j) {
      vals[j - 1].style.backgroundColor = SECONDARY;
      let temp = vals[j].style.height;

      vals[j].style.height = vals[j - 1].style.height;

      vals[j - 1].style.height = temp;
    } else {
      break;
    }
  }

  // while (true) {
  //   i++;
  //   while (parseInt(`${vals[i].style.height}`) < pivot) {
  //     i++;
  //   }

  //   while (parseInt(`${vals[j].style.height}`) > pivot) {
  //     j--;
  //   }

  //   if (i < j) {
  //     vals[j - 1].style.backgroundColor = SECONDARY;
  //     let temp = vals[j].style.height;

  //     vals[j].style.height = vals[j - 1].style.height;

  //     vals[j - 1].style.height = temp;
  //   } else {
  //     break;
  //   }
  // }

  _quick_sort(vals, left, i, PRIMARY, SECONDARY);
  _quick_sort(vals, i, right, PRIMARY, SECONDARY);
};
