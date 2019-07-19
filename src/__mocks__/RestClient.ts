import {Map }from 'immutable';

//Map<string, Map<number, any>>()));

export const mockGetAll = jest.fn(() => Promise.resolve({}));

const mock = jest.fn().mockImplementation(() => {
return { getAll: mockGetAll };
});
export default mock;
