# TypeScript Notes
## On Transpilation to Javascript
You can run `tsc index.ts` to compile from ts to js or you could create a `tsconfig.json` file to configure the compiler.
Create a `tsconfig.json` file with `tsc --init`

You can then update the following options:
- `target`: to tell the compiler to compile to different version of JS e.g., `ES2022`
- `rootdir`: specify a root directory for your source files.
- `sourceMap`: for debugging purposes
- `outdir`: directory to store the compiled JS code into e.g., `dist`.
- `removeComments`: true
- `noEmitOnError`: will not generate a JS file if there are errors in the TS file. (what's not to love!)

With these configuration you can just run `tsc` and it will transpile the ts code into js into the `dist` directory.

## Run the Code with
```
node dist/index.js
```