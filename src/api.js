const url = 'https://fe-school-api.herokuapp.com/api/events';

const request = async (url, method = 'GET', body) => {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: new Headers({
      'Content-type': 'application/json',
    }),
  });

  return await response.json();
};

export const getEvents = () => {
  return request(`${url}`);
};
