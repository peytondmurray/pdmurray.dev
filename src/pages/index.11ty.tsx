import h from 'vhtml';

export const data = {
  title: 'Hello world',
};

export function render() {
  return <h1>{data.title}</h1>;
}
