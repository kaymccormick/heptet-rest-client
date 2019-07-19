import axios from 'axios';
jest.mock('axios', () => ({ "get": () => Promise.resolve({ data: {success: true,projects: [{'id': 1, 'name': 'foo'}]}})}));

import RestClient from './';

test('RestClient.getProjects', () => {
 const c = new RestClient({baseUri: '', logDebug: console.log});
 console.log(Object.keys(c));
 return c.getProjects().then(p => {
 expect(p).toMatchSnapshot();
});
});


 