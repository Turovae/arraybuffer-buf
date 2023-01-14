import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('test ArrayBufferConverter', () => {
  const bufferConverter = new ArrayBufferConverter();
  bufferConverter.load(getBuffer());
  expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
