# Studio Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). If you are not new to `CRA`, you may skip below steps to [features sections](#features)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Features

### Auto code formatting and checking before commit

When you commit the source code. The staged files will be

- format by [preitter](https://prettier.io/)
- apply `eslint` and `type checking` if they are js or ts. The commit will be aborted if not pass the checking

Related library: [husky](https://github.com/typicode/husky), [lint-staged](https://github.com/okonet/lint-staged)

### Import paths

You could import module under `/src` directory using `@/`

```tsx
import { Spine } from '@/components/Spine';
import { SpinePlayer, useSpine, UseSpineOption } from '@/hooks/useSpine';
```

### Sass Prepend

You could

- Add sass shared variables inside the `src/styles/sass/variables.scss`.
- Create sass files and write down the shared mixins or functions inside `src/styles/sass` directory. Then `@forward` them in the `src/styles/sass/index.scss` file

The below content will be prepended into each `.sass` file before compilation. So you can use the variables directly.

```scss
@use 'src/styles/sass/variables' as vars;
@use 'src/styles/sass/index.scss' as *;
```

This feature controlled in `app.config.js` which is an option of [sass-loder](https://webpack.js.org/loaders/sass-loader/)

### Preload Images

Define the assets context and assgin to the `Layout` Component

```tsx
const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

export function LuckyCoinFlip() {
  return <Layout background assetsCtx={assetsCtx} />;
}
```

### Spine

Put all spine files into `/public/spine` directory

```bash
public/spine/
├── spineboy-pro.json
├── spineboy.atlas
└── spineboy.png
```

Define a spine component

- Use the `Spine` component. It accepct any props of a `div` element. So you can assgin `className` and `style` to it

  ```tsx
  import { Spine, SpinePlayer } from '@/components/Spine.tsx';
  import classes from './SpineAniamtion.module.scss';

  function SpineAnimation() {
    const playerRef = useRef<SpinePlayer>(null);

    useEffect(() => {
      const player = playerRef.current;
      if (!player) return;
      // do some thing you need
    }, []);

    return (
      <Spine
        className={classes.root}
        jsonUrl="spine/spineboy-pro.json"
        atlasUrl="spine/spineboy.atlas"
        animation="walk"
        ref={playerRef}
      />
    );
  }
  ```

- You may also use the `useSpine` hook

  ```tsx
  import { useSpine } from '@/hooks/useSpine.tsx';
  import classes from './SpineAniamtion.module.scss';

  function SpineAnimation() {
    const [spinRef, player] = useSpine({
      jsonUrl: 'spine/spineboy-pro.json',
      atlasUrl: 'spine/spineboy.atlas',
      animation: 'walk'
    });

    useEffect(() => {
      if (!player) return;
      // do some thing you need
    }, [player]);

    return <div className={classes.root} ref={spinRef}></div>;
  }
  ```
