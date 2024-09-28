import { main } from './app';

describe('app', () => {
  it('should write to console', () => {
    console.log = jest.fn();

    main();

    expect(console.log).toHaveBeenCalledWith('Running');
  });
});
