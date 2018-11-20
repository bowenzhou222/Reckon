declare namespace testtwo {
  interface IText {
    text: string;
  }

  interface ISubText {
    subTexts: Array<string>;
  }

  interface IResult {
    subtext: string;
    result: string;
  }

  interface ISubmitPayload {
    candidate: string;
    text: string;
    results: Array<IResult>;
  }
}

export = testtwo;
