export const urlParam = new URLSearchParams(window.location.search);

export const vid = urlParam.get('vid') || 'H001';
