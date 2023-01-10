import { preloadAssets } from '@ct/common-component';
import { useEffect, useState } from 'react';

export interface UsePreloadAssetsOption {}

export function usePreloadAssets(_ctxs?: __WebpackModuleApi.RequireContext | __WebpackModuleApi.RequireContext[]) {
  const [ctxs] = useState(_ctxs ? (Array.isArray(_ctxs) ? _ctxs : [_ctxs]) : []);
  const [progress, setProgress] = useState(ctxs.length ? 0 : 100);

  useEffect(() => {
    preloadAssets(ctxs, progress => {
      setProgress(progress);
    }).catch(() => {
      alert('Loading assets failure, Please check network connection and refresh the page');
    });
  }, [ctxs]);

  return { progress, done: progress === 100 };
}
