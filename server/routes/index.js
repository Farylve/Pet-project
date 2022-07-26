const { Purchase, User } = require("../DB/models")

const router = require("express").Router()
const jwt = require("jsonwebtoken")

router
  .route("/")
  .get(async (req, res) => {
    // const purchases = await Purchase.findAll()
    // console.log(purchases);
    res.sendStatus(200)
  })
  .post(async (req, res) => {
    console.log("method post", req.body)
    const { login, password } = req.body
    let jwtSecretKey = "big_secret"
    if (login && password) {
      const currentUser = await User.findOne({ where: { login } })
      if (currentUser) {
        console.log("currentUser", currentUser.dataValues.password === password)
      }
    }
    // console.log("🚀 ~ file: index.js ~ line 20 ~ .post ~ currentUser", currentUser)
    try {
      let data = {
        time: Date(),
        userType: 1,
      }
      const currentUser = await User.findOne({ where: { login } })
      console.log("🚀 ~ file: index.js ~ line 30 ~ .post ~ currentUser", currentUser)
      if (currentUser.dataValues.password === password) {
        
        // const token = jwt.sign(data, jwtSecretKey)
        
        res.send({ login  })
      } 
    } catch (err) {
    
      res.status(403).send({text: 'Wrong login or password!', status: 101})
    }
  })

module.exports = router
