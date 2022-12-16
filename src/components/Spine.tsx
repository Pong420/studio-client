import { forwardRef, Ref, useImperativeHandle } from 'react';
import { SpinePlayer, useSpine, UseSpineOption } from '@/hooks/useSpine';

export type { SpinePlayer };

export interface SpineComponentProps extends UseSpineOption {}

function SpineComponent(
  { jsonUrl, atlasUrl, animation, config }: SpineComponentProps,
  ref: Ref<SpinePlayer | undefined>
) {
  const [nodeRef, spine] = useSpine({ jsonUrl, atlasUrl, animation, config });
  useImperativeHandle(ref, () => spine, [spine]);
  return <div ref={nodeRef} />;
}

export const Spine = forwardRef(SpineComponent);
