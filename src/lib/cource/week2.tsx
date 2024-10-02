interface HW {
  [index: number]: {
    name: string;
    code: string;
  }[];
}
export const Title = [
  "Greatest Common Divisor (GCD)",
  "'Step' vs. 'Step Into'",
  "Count Down",
];

export const Homework: HW = {
  0: [
    { name: "Item1", code: "001" },
    { name: "Item2", code: "002" },
  ],
  1: [{ name: "Item3", code: "003" }],
};
