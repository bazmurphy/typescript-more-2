# Type Assertions

We can tell TypeScript I know more than you, and I want you to treat this as some OTHER type.

We can use this in situations where TypeScript doesn't have as much information as we do.

`let mystery1 = "Hello World!";`

TypeScript knows this is a string

But if we override this behaviour

`let mystery2: unknown = "Hello World!";`

`const numberOfCharacters = mystery2.length;`

`'mystery2' is of type 'unknown'.ts(18046)`

when we know it WILL be a String, we can override this error using the Type Assertion syntax

`const numberOfCharacters2 = (mystery2 as string).length;`

this variable is equal to the mystery2 variable OF type string

this does NOT CHANGE the type of mystery2

it is STILL unknown, but in this one context, we specified that this is treated as a string

but what if it wasn't a string? but a number?

`let mystery3: unknown = 4;`

`const numberOfCharacters3 = (mystery3 as string).length;`

there is no TypeScript error(!) because we are treating it as a string, and that is all it knows,
it is NOT executing our code, this is PRE-RUNTIME.

This example is contrived, but this is the concept of an Assertion we tell TypeScript I know more than you, treat this as string right here.
