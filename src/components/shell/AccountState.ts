import { showNotification } from '@mantine/notifications';
import { Response } from '../../hooks/fetchData';

export const handleLogout = (fn: () => void) => {
  fetch('https://team-lp-project-3.herokuapp.com/user/logout', {
    method: 'POST',
    credentials: 'include',
  })
    .then((res) => res.json())
    .then(() => {
      fn();
    })
    .catch((err) => console.error(err));
};

export const handleChangeEmail = ({
  userId,
  email,
  password,
}: {
  userId: string | undefined;
  email: string;
  password: string;
}) => {
  fetch(
    `https://team-lp-project-3.herokuapp.com/user/changeEmail/${
      userId ? userId : ''
    }`,
    {
      method: 'PUT',
      body: JSON.stringify({
        email,
        password,
      }),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((res: Response) => {
      if (res.message) {
        showNotification({
          title: 'Success!',
          message: res.message,
          color: 'teal',
        });
      } else {
        showNotification({
          title: 'Something went wrong!',
          message: res.error,
          color: 'red',
        });
      }
    })
    .catch((err) => console.error(err));
};

export const handleChangePassword = ({
  userId,
  password,
  newPassword,
  passwordConfirmation,
}: {
  userId: string | undefined;
  password: string;
  newPassword: string;
  passwordConfirmation: string;
}) => {
  fetch(
    `https://team-lp-project-3.herokuapp.com/user/changePassword/${
      userId ? userId : ''
    }`,
    {
      method: 'PUT',
      body: JSON.stringify({
        password,
        newPassword,
        passwordConfirmation,
      }),
      mode: 'cors',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      },
    },
  )
    .then((res) => res.json())
    .then((res: Response) => {
      if (res.message) {
        showNotification({
          title: 'Success!',
          message: res.message,
          color: 'teal',
        });
      } else {
        showNotification({
          title: 'Something went wrong!',
          message: res.error,
          color: 'red',
        });
      }
    })
    .catch((err) => console.error(err));
};
