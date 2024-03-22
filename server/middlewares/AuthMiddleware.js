const { verify } = require('jsonwebtoken')

const validateToken = (req, res, next) => {
  const accessToken = req.header("accessToken")
  console.log(accessToken)
  if (!accessToken) {
    console.log(accessToken + "hehehehhaha")
    return res.json({error: "User not logged in"})
  } else {
    try {
      const validToken = verify(accessToken, "sekreto")
      console.log(validToken)
      req.user = validToken
        if (validToken) {
          return next()
        }
    } catch (err) {
      return res.json({error: err})
    }
  }
}

module.exports = { validateToken }