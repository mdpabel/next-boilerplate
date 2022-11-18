# React - The Road To Enterprise boilerplate

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and enhanced with additional config and tools.

## Project Configuration

- Setup directory structure
- Configured absolute path resolving. `@` is configured to point at the `src` directory. You can import files like this: `import styles from "@/styles/Home.module.css"`
- Configured Stylelint and Prettier
- Extended eslint rules to avoid collisions with Prettier
- Added new lint and fix scripts
- Configured [husky](https://typicode.github.io/husky/#/) and [lint-staged](https://github.com/okonet/lint-staged) to lint staged files on commit
- Added `src/api` logic
- Added various PostCSS plugins - see `postcss.config.js` file.
- Configured Cypress with Testing Library
- Configured Jest with Testing Library

## Installed Libraries

### E2E Testing

- cypress
- @testing-library/cypress
- start-server-and-test

### Unit Testing

- jest
- @testing-library/react
- @testing-library/user-event
- @testing-library/react-hooks - Testing hooks
- msw - Mocking APIs

### API

- axios

### Linting and code formatting

- eslint
  - eslint-config-next
  - eslint-config-prettier
- stylelint
  - stylelint-config-css-modules
  - stylelint-config-prettier
  - stylelint-config-recess-order
  - stylelint-config-recommended
  - stylelint-config-standard
  - stylelint-scss
- prettier
- lint-staged
- husky

### PostCSS

- postcss-extend
- postcss-flexbugs-fixes
- postcss-import
- postcss-preset-env
- postcss-reporter
- precss

### Utilities

- clsx
- lodash-es

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
