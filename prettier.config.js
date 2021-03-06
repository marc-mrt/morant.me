module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  singleQuote: false,
  semi: true,
  importOrder: [
    "^react(.*)$",
    "^next/(.*)$",
    "^[a-z-]+(/(.*))?$",
    "^(.*)$",
    "^(.*).css$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
