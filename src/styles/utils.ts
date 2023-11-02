// NOTE The functionality below (incl. TS types) will soon become part of Contentlayer itself. Please don't mind its existence. 😎

type ConvertUndefined<T> = OrUndefined<{
  [K in keyof T as undefined extends T[K] ? K : never]-?: T[K];
}>;
type OrUndefined<T> = { [K in keyof T]: T[K] | undefined };
type PickRequired<T> = {
  [K in keyof T as undefined extends T[K] ? never : K]: T[K];
};
type ConvertPick<T> = ConvertUndefined<T> & PickRequired<T>;

export const pick = <Obj, Keys extends keyof Obj>(
  obj: Obj,
  keys: Keys[]
): ConvertPick<{ [K in Keys]: Obj[K] }> => {
  return keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {} as any);
};

export const copyText = (text: string) => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
  let succees = false;
  const textArea = document.createElement('textarea');
  textArea.value = text;

  textArea.style.top = '0';
  textArea.style.left = '0';
  textArea.style.position = 'fixed';

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    succees = document.execCommand('copy');
  } catch {
    succees = false;
  } finally {
    document.body.removeChild(textArea);
  }

  if (succees) {
    return Promise.resolve('Copied');
  }
  return Promise.reject('Copy failed');
};

export const slugify = (input: string) => {
  let str = input.replace(/^\s+|\s+$/g, '');
  str = str.toLowerCase();
  const from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;';
  const to = 'aaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

  return str;
};
