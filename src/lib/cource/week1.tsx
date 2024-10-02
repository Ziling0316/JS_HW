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
    {
      name: "Ziling",
      code: `document.write("<table border>")
for(i = 1; i < 10; i++){
document.write("<tr>")
for(j = 1; j < 10; j++){
    document.write("<td>"+i+"*"+j+"="+i * j+"</td>")
}
document.write("</tr>")
}
document.write("</table>")`,
    },
    { name: "Item2", code: "002" },
  ],
  1: [{ name: "Item3", code: "003" }],
};
