import { Prism } from "prism-react-renderer"

Prism.languages.mips = {
  comment: [
    {
      pattern: /#.*/,
      greedy: true,
      alias: 'comment',
      inside: {
        'comment-keyword': {
          pattern: /(\b(?:TODO|FIXME|NOTE|BUG)\b)/,
          alias: 'important',
        },
      },
    },
  ],
  directive: {
    pattern: /\.\w+/,
    alias: 'directive',
  },
  keyword: [
    // Using case-insensitive regex to match instructions
    {
      pattern: /\b(?:ADD|ADDI|SUB|OR|AND|SLT|SLTI|BEQ|BNE|LW|SW|J|JR|JAL|CALL|MUL|DIV|MFHI|MFLO|SLL|SRL|PUSH|POP)\b/i,
      alias: 'keyword',
    },
  ],
  number: {
    pattern: /\b(?:0x[0-9a-fA-F]+|0b[01]+|\d+)\b/,
    alias: 'number',
  },
  register: {
    pattern: /\b(?:\$[a-z0-9]+)\b/,
    alias: 'variable',
  },
  operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  punctuation: /[{}[\];(),.:]/,
};

// Additional syntax highlighting for custom tokens
Prism.languages.insertBefore('mips', 'comment', {
  'directive': {
    pattern: /\.\w+/,
    alias: 'keyword',
  },
});