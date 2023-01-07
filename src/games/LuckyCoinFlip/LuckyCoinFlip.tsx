import { Main } from '@/components/Main';
// import classes from './LuckyCoinFlip.module.scss';

const assetsCtx = require.context('./assets', true, /(\.png|\.jpg)$/);

export function LuckyCoinFlip() {
  return <Main background assetsCtx={assetsCtx} />;
}
