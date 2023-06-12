# The Lib Compiler Option

By default `lib` is commented out. And that means it is using the defaults. And by default `lib` includes the DOM.

The `lib` property is used to specify the libraries that should be available in the TypeScript compilation environment.

When you compile TypeScript code, it needs to know about the JavaScript runtime environment it will be running in, including the available built-in objects, functions, and types. The lib property allows you to specify which libraries should be included during the compilation process.

The lib property is an array of strings, where each string represents a library or set of JavaScript features. Some commonly used libraries include:

You can include multiple libraries by listing them as an array, like this:

```
{
  "compilerOptions": {
    "lib": ["DOM", "ES6"]
  }
}
```

By specifying the lib property, you ensure that the TypeScript compiler includes the necessary type definitions for the specified libraries, enabling you to write code that uses the features provided by those libraries.

- ES5 - Core definitions for all ES3 and ES5 functionality
- ES2015/ES6 - Additional APIs available in ES2015 (also known as ES6) - array.find, Promise, Proxy, Symbol, Map, Set, Reflect, etc.
- ES2016/ES7 - Additional APIs available in ES2016 - array.include, etc.
- ES2017 - Additional APIs available in ES2017 - Object.entries, Object.values, Atomics, SharedArrayBuffer, date.formatToParts, typed arrays, etc.
- ES2018 - Additional APIs available in ES2018 - async iterables, promise.finally, Intl.PluralRules, regexp.groups, etc.
- ES2019 - Additional APIs available in ES2019 - array.flat, array.flatMap, Object.fromEntries, string.trimStart, string.trimEnd, etc.
- ES2020 - Additional APIs available in ES2020 - string.matchAll, etc.
- ES2021 - Additional APIs available in ES2021 - promise.any, string.replaceAll etc.
- ES2022 - Additional APIs available in ES2022 - array.at, RegExp.hasIndices, etc.
- ESNext - Additional APIs available in ESNext - This changes as the JavaScript specification evolves
- DOM - DOM definitions - window, document, etc.
- WebWorker - APIs available in WebWorker contexts
- ScriptHost - APIs for the Windows Script Hosting System

---

You can specifically remove all libraries, and it will not know about DOM types like "document" etc.

```
{
  "compilerOptions": {
    "lib": []
  }
}
```

The `lib.dom.d.ts` is the file that contains the DOM Type Declarations

If we look at another file for example:

ES 2021 String Definition Types

https://github.com/microsoft/TypeScript/blob/main/src/lib/es2021.string.d.ts

We see

```
interface String {
    /**
     * Replace all instances of a substring in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
     */
    replaceAll(searchValue: string | RegExp, replaceValue: string): string;

    /**
     * Replace all instances of a substring in a string, using a regular expression or search string.
     * @param searchValue A string to search for.
     * @param replacer A function that returns the replacement text.
     */
    replaceAll(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
}
```

And if we try to use that in our file, it will give us an error message:

```
Property 'replaceAll' does not exist on type '"hello"'. Do you need to change your target library? Try changing the 'lib' compiler option to 'es2021' or later.ts(2550)
```

We could do that with 2 methods, adding to `lib`

```
{
  "compilerOptions": {
    "lib": ["DOM", "ES2021"]
  }
}
```

But what would be better in this situation is to set the `"target": "es2021"`
So TypeScript automatically knows about these Types.
