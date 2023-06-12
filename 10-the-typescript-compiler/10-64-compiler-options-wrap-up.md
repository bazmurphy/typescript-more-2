# Other important compiler options:

`lib`

the lib property is used to specify the libraries that should be available in the TypeScript compilation environment.

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

`allowJs`

tells TypeScript that you will allow JavaScript files to be part of your application
You can then import JavaScript files into your TypeScript

`checkJs`

TypeScript will give you error reporting on JavaScript as well

`sourceMap`

Create source maps for you

`noEmit`

It will not compile files for you, it still does the Type checking

`noEmitOnError`

Do not emit files if there is an error
