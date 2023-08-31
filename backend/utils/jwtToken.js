

const sendToken = (user, statusCode, res) => {
  const token = user.getJWTToken();


//   options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 

    //   here this code also works new Date(Date.now() + parseInt(process.env.COOKIE_EXPIRE, 10))

    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;


// const token = user.getJWTToken();

// res.status(201).json({
//   status: "successfully login",
//   token,