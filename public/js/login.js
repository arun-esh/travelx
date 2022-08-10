const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    const userName = res.data.data.user.name;

    if (res.data.status === 'success') {
      console.log(`🟢 Login ${userName}: Success`);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(`🔴 Login Error: ${err.response.data.message}`);
    console.log(err.response.data);
  }
};

document.querySelector(`.form`).addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById(`email`).value;
  const password = document.getElementById(`password`).value;
  login(email, password);
});
