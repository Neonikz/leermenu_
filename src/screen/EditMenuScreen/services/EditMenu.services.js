
// Le pido a la db por el Menu del usuario
const getUserData = async (profileObj) => {
  const url = `http://localhost:3600/db/user/${profileObj.googleId}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

const postUserData = async (profileObj) => {
  const rawResponse = await fetch(`http://localhost:3600/db/user/${profileObj.googleId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: profileObj.name, menu: {}})
  });
  const content = await rawResponse.json();

  return content;
};

export {getUserData, postUserData};
