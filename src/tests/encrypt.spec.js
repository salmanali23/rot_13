const { RotationService } = require('../services')

describe("Text Encription", () => {
  const testInput = "ABCD abcd # EFGH efgh $ IJKL ijkl ^ MNOP mnop % QRST qrst * UVWX uvwx & YZ yz";
  const expectedOutput = "NOPQ nopq # RSTU rstu $ VWXY vwxy ^ ZABC zabc % DEFG defg * HIJK hijk & LM lm";

  beforeEach(async () => {
    const isInputString = typeof testInput === 'string'
    expect(isInputString).toEqual(true);
  });

  it("encrypting text to rot13 cypher", async () => {

    const cypher = RotationService.encrypt(testInput);
    expect(cypher).toEqual(expectedOutput);
  });
});
