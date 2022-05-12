# <p align="center">📦Nekkeun</p>

A clean NEXT.js starter for universal project, use it without worrying about the boilerplate.


## Setup

To setup a NEXT.js app with this template, run the following command:

```bash
npx create-next-app my-app -e https://github.com/rizkimcitra/nekkeun
```

The above command will download files from this repository and install all the dependencies immediately after.

>The `my-app` argument is the project name, consider change to your projects' name like this one, for example:

```bash
npx create-next-app volatile-fn -e https://github.com/rizkimcitra/nekkeun
```

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
