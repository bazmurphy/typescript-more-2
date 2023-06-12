# Configuring the typescript compiler

# TS Config

https://www.typescriptlang.org/tsconfig/

## Lang:

Which language should be used in the editor

- TypeScript
- TypeScript Definitions
- JavaScript

## Target:

Set the JavaScript language version for emitted JavaScript and include compatible library declarations.

- ES3
- ES5
- ES2015
- ES2015
- ES2016
- ES2017
- ES2018
- ES2019
- ES2020
- ES2021
- ES2022
- ESNext
- JSON

## JSX:

Specify what JSX code is generated.

- None
- Preserve
- Reserve
- React
- ReactNative
- ReactJSX
- ReactJSXDev

## Module:

Specify what module code is generated.

- None
- CommonJS
- AMD
- UMD
- System
- ES2015
- ES2020
- ES2022
- ESNext
- Node16
- NodeNext

## Output Formatting

### preserveWatchOutput

Disable wiping the console in watch mode.

### pretty

Enable color and formatting in TypeScript's output to make compiler errors easier to read.

### noErrorTruncation

Disable truncating types in error messages.

---

## Emit

### declaration

Generate .d.ts files from TypeScript and JavaScript files in your project.

### inlineSourceMap

Include sourcemap files inside the emitted JavaScript.

### removeComments

Disable emitting comments.

### importHelpers

Allow importing helper functions from tslib once per project, instead of including them per-file.

### downlevelIteration

Emit more compliant, but verbose and less performant JavaScript for iteration.

### inlineSources

Include source code in the sourcemaps inside the emitted JavaScript.

### stripInternal

Disable emitting declarations that have @internal in their JSDoc comments.

### noEmitHelpers

Disable generating custom helper functions like \_\_extends in compiled output.

### preserveConstEnums

Disable erasing const enum declarations in generated code.

### preserveValueImports

Preserve unused imported values in the JavaScript output that would otherwise be removed.

## Interop Constraints

### isolatedModules

Ensure that each file can be safely transpiled without relying on other imports.

### verbatimModuleSyntax

Do not transform or elide any imports or exports not marked as type-only, ensuring they are written in the output file's format based on the 'module' setting.

### allowSyntheticDefaultImports

Allow 'import x from y' when a module doesn't have a default export.

### esModuleInterop

Emit additional JavaScript to ease support for importing CommonJS modules. This enables

### allowSyntheticDefaultImports

for type compatibility.

---

## Type Checking

### strict

Enable all strict type-checking options.

### noImplicitAny

Enable error reporting for expressions and declarations with an implied any type.

### strictNullChecks

When type checking, take into account null and undefined.

### strictFunctionTypes

When assigning functions, check to ensure parameters and the return values are subtype-compatible.

### strictBindCallApply

Check that the arguments for bind, call, and apply methods match the original function.

### strictPropertyInitialization

Check for class properties that are declared but not set in the constructor.

### noImplicitThis

Enable error reporting when this is given the type any.

### useUnknownInCatchVariables

Default catch clause variables as unknown instead of any.

### alwaysStrict

Ensure 'use strict' is always emitted.

### noUnusedLocals

Enable error reporting when local variables aren't read.

### noUnusedParameters

Raise an error when a function parameter isn't read.

### exactOptionalPropertyTypes

Interpret optional property types as written, rather than adding undefined.

### noImplicitReturns

Enable error reporting for codepaths that do not explicitly return in a function.

### noFallthroughCasesInSwitch

Enable error reporting for fallthrough cases in switch statements.

### noUncheckedIndexedAccess

Add undefined to a type when accessed using an index.

### noImplicitOverride

Ensure overriding members in derived classes are marked with an override modifier.

### noPropertyAccessFromIndexSignature

Enforces using indexed accessors for keys declared using an indexed type.

### allowUnusedLabels

Disable error reporting for unused labels.

### allowUnreachableCode

Disable error reporting for unreachable code.

## Modules

### allowUmdGlobalAccess

Allow accessing UMD globals from modules.

###allowImportingTsExtensions
Allow imports to include TypeScript file extensions.

### resolvePackageJsonExports

Use the package.json 'exports' field when resolving package imports.

### resolvePackageJsonImports

Use the package.json 'imports' field when resolving imports.

### allowArbitraryExtensions

Enable importing files with any extension, provided a declaration file is present.

## Language and Environment

### experimentalDecorators

Enable experimental support for TC39 stage 2 draft decorators.

### emitDecoratorMetadata

Emit design-type metadata for decorated declarations in source files.

### noLib

Disable including any library files, including the default lib.d.ts.

### useDefineForClassFields

Emit ECMAScript-standard-compliant class fields.

## Projects

### disableSourceOfProjectReferenceRedirect

Disable preferring source files instead of declaration files when referencing composite projects.

## Backwards Compatibility

### noImplicitUseStrict

Disable adding 'use strict' directives in emitted JavaScript files.

### suppressExcessPropertyErrors

Disable reporting of excess property errors during the creation of object literals.

### suppressImplicitAnyIndexErrors

Suppress
In TypeScript, when you try to access a property on an object using an index that is not explicitly defined in its type, the compiler raises an error.
By default, TypeScript enforces strictness and raises an error when accessing properties using implicit any index.

### noImplicitAny

errors when indexing objects that lack index signatures.

### noStrictGenericChecks

Disable strict checking of generic signatures in function types.

### keyofStringsOnly

Make keyof only return strings instead of string, numbers or symbols. Legacy option.
