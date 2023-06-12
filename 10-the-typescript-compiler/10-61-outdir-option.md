# Out Dir

We specify where typescript should spit out the compiled javascript files.

A common name for that folder is `dist`

`"outDir": "./dist",`

If specified, .js (as well as .d.ts, .js.map, etc.) files will be emitted into this directory. The directory structure of the original source files is preserved; see rootDir if the computed root is not what you intended.

If not specified, .js files will be emitted in the same directory as the .ts files they were generated from:

```
$ tsc
example
├── index.js
└── index.ts
```

With a tsconfig.json like this:

```
{
  "compilerOptions": {
    "outDir": "dist"
  }
}
```

Running tsc with these settings moves the files into the specified dist folder:

```
$ tsc
example
├── dist
│   └── index.js
├── index.ts
└── tsconfig.json
```
