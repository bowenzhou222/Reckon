declare namespace testone {
  interface IRangeinfo {
    lower: number;
    upper: number;
  }

  interface IDivisor {
    divisor: number;
    output: string;
  }

  interface IDivisorInfo {
    outputDetails: Array<IDivisor>
  }
}

export = testone;
