/*
 * 用户登录退出
 */
const {Router} = require('express');

const router = Router();
const register = require('./register');
const login = require('./login');
const loginUser = require('./loginUser');
const logout = require('./logout');
router.post('/register', register);
router.post('/login', login);
router.get('/loginUser', loginUser);
router.post('/logout', logout);

module.exports = router;