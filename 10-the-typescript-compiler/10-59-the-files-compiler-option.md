# The Files Compiler Option

Tell TypeScript a subset of files that we want it to touch

(!) It is a TOP LEVEL option, we put it OUTSIDE of the compilerOptions object in the tsconfig.json

"Specifies an allowlist of files to include in the program. An error occurs if any of the files can’t be found."

"This is useful when you only have a small number of files and don’t need to use a glob to reference many files. If you need that then use include."

```
{
  "compilerOptions": {},
  "files": [
    "core.ts",
    "sys.ts",
    "types.ts",
    "scanner.ts",
    "parser.ts",
    "utilities.ts",
    "binder.ts",
    "checker.ts",
    "tsc.ts"
  ]
}
```

`tsc` finds anything in the project and compiles it.
If we do not want that behaviour we can use the "files": [ ] to specify exactly which files we want it to include.
