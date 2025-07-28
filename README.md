# boop-templates

My own personal starter templates, for the way I like to build things.

Typically use `yarn` or `pnpm` to install dependencies.

Vue based templates include auto import of `vue` and `pinia` packages.

## Templates

| Template Name  | Description                                                            |
| -------------- | ---------------------------------------------------------------------- |
| `yarn`         | New project with `yarn` package manager, using the node-modules linker |
| `vue-vite`     | Vue + Vite project with auto imports                                 |
| `vue-tailwind` | Vue + Vite project with Tailwind CSS                                |
| `quasar-vite`  | Vue + Quasar + Vite project with auto imports                      |

## Using another package manager instead of `yarn`

Most of these templates use `yarn` as the package manager, but you can use any other package manager instead by:

- Remove the `yarn.lock` file and `.yarn` directory
- Remove the `packageManager` field from `package.json`
- Run the install command for your package manager of choice, e.g. `npm install` or `pnpm install`
