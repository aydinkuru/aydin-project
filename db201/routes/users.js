var express = require("express");
var router = express.Router();

var users = [
  { name: "armagan", age: 36 },
  { name: "Steve", age: 21 },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  let result = users;

  if (req.query.name) {
    result = users.filter((user) => user.name == req.query.name);
  }

  res.send(result);
});

router.get('/:userId', function (req, res, next) {
  const user = users[req.params.userId]
  if (user) res.send(user)
  else res.sendStatus(404)
})



module.exports = router;
