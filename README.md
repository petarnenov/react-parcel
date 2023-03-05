# Want to create React library with Typescript, SASS and Parcel

## Add to .env

```bash
SASS_PATH="./src/assets/styles"
```

## Add custom components in src/components

## Check custom components with parcel

```bash
npm run watch
```

open Chrome on port 1234 or another browser

## Build and export 'componenrs' folder

```bash
npm run build
npm version patch
npm publish --access=public
```

## Add to React project

```bash
npm i -S @petar.nenov/react-parcel
```

then import it:

```ts
import {Button} from "@petar.nenov/react-parcel"

...

<Button>Click Me</Button>

...
```

Happy coding ...
