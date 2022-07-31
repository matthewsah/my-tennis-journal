import {Router} from 'express';
import User from '../models/user.model';

const router = Router();

// Get all users
router.route('/').get( async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

// return status code 200 for good login, something else for bad login
router.route('/login').get( async (req, res) => {
  try {
    const {username, password} = req.body;
    const loginSuccess = await User.find({username, password});
    console.log(loginSuccess);
    if (loginSuccess.length === 1) {
      res.status(200).json("Successfully logged in");
    } else {
      res.status(404).json('Username or Password incorrect');
    }
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
})

// Create a new User
router.route('/').post( async (req, res) => {
  const {username, password} = req.body;

  try {
    const newUser = new User({username, password});
    await newUser.save()
    res.status(200).json('User added!');
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

export default router;