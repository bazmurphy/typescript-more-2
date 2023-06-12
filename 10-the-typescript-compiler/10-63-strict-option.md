# Strict Option

This going to enables a whole bunch of type checks, additional rules and constraints for TypeScript.
It makes your type checks stricter and you have to jump through extra hurdles but you get a stronger end result.

Two important ones within that are:

`"noImplictAny": "true"`

In some cases where no type annotations are present, TypeScript will fall back to a type of `any` for a variable when it cannot infer the type.

`"strictNullChecks": "true"`

When strictNullChecks is false, `null` and `undefined` are effectively ignored by the language. This can lead to unexpected errors at runtime.

When strictNullChecks is true, `null` and `undefined` have their own distinct types and you’ll get a type error if you try to use them where a concrete value is expected.

---

The strict flag enables a wide range of type checking behavior that results in stronger guarantees of program correctness. Turning this on is equivalent to enabling all of the strict mode family options, which are outlined below. You can then turn off individual strict mode family checks as needed.

Future versions of TypeScript may introduce additional stricter checking under this flag, so upgrades of TypeScript might result in new type errors in your program. When appropriate and possible, a corresponding flag will be added to disable that behavior.
