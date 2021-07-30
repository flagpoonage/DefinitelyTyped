import NestedErrorStacks = require('nested-error-stacks');

const error = new NestedErrorStacks('Top level error', new Error('Nested error'));
const message = error.message;
const name = error.name;
const stack = error.stack;
const nested = error.nested;

const nested_stack = nested.stack;
const nested_name = nested.name;
const nested_message = nested.message;
