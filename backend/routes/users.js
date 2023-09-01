import {Router} from 'express';
import User from '../models/user.model.js';

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
  console.log(`Attempting to log in user: ${req.query.username}`)
  try {
    const {username, password} = req.query;
    const loginSuccess = await User.find({username, password});
    if (loginSuccess.length === 1) {
      console.log('Successfully logged in')
      res.status(200).json("Successfully logged in");
    } else {
      console.log("Username or Password is incorrect");
      res.status(404).json('Username or Password incorrect');
    }
  } catch (e) {
    console.log("Error trying to log in");
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
})

// Create a new User
router.route('/').post( async (req, res) => {
  const {username, password, firstName, lastName} = req.body;

  try {
    const newUser = new User({username, password, firstName, lastName});
    await newUser.save()
    res.status(200).json('User added!');
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

router.route('/:id').delete( async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('Successfully deleted');
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
})

export default router;