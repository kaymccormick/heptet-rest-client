import RestClient from './';

test('RestClient.getAll', () => {
 const c = new RestClient({baseUri: 'http://localhost:7700/cme', logDebug: (arg) =>{}});
 return c.getAll().then(p => {
 expect(p).toMatchSnapshot();
});
});


 