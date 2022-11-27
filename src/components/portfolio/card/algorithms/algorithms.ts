const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

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
