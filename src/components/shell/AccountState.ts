export const handleLogout = (fn: () => void) => {
  fetch(`http://localhost:3001/user/logout`, {
    method: 'POST',
    credentials: 'include',
  })
    .then((res) => res.json())
    .then(() => {
      fn();
    })
    .catch((err) => console.error(err));
};
