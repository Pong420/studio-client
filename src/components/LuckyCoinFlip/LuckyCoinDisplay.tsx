import { Layout } from '@/components/Layout';
import { LuckyCoin, LuckyCoinProps } from './LuckyCoin/LuckyCoin';

const coins = ['red', 'blue', 'result'].flatMap((v, i) =>
  [1, 4, 16, 32, 100].map<LuckyCoinProps>(m => {
    return { variant: v as LuckyCoinProps['variant'], value: '' + m * (i + 1) };
  })
);

export function LuckyCoinDisplay() {
  return (
    <Layout.Circle>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(5, auto)`,
          alignItems: 'center',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          padding: `10%`,
          gap: `10px`
        }}
      >
        {coins.map((p, i) => (
          <LuckyCoin key={i} {...p} />
        ))}
      </div>
    </Layout.Circle>
  );
}
