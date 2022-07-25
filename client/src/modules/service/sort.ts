
export const compareNumbers = (a: number, b: number) => {
    return a - b;
}

export const compareItem = (a: any, b: any) => {
    if ( a.item < b.item ){
        return -1;
      }
      if ( a.item > b.item ){
        return 1;
      }
      return 0;
}