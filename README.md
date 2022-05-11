# <p align="center">📦Nekkeun</p>

A clean NEXT.js starter for universal project, use it without worrying about the boilerplate.

## Development Server

To run the development server, run the following command:

```bash
yarn dev
```

or

```bash
npm run dev
```

See `http://localhost:3000` in your browser to preview the project.

> If you're willing to use NPM instead of YARN, consider removing `yarn.lock` file from the root directory.

## Husky, Lint Staged, And Commitizen

More docs soon...

## Absolute Import

rather than using this way:

```ts
import Component from '../../../components/Component'
```

use this way instead:

```ts
import Component from '@/components/Component'
```

> Configure the path yourself, see `tsconfig.json` file to change the absolute import configuration.

Deps:

- Added Soon

devDeps:

- Added Soon
