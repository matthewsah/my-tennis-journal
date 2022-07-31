import {Router} from 'express';
import User from '../models/user.model';

const router = Router();

router.route('/').get( async (req, res) => {
  console.log('made get request')
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

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