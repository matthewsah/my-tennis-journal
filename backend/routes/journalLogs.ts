import {Router} from 'express';
import User from '../models/user.model';
import JournalLog from '../models/journalLog.model'

const router = Router();

// get all journal logs
// by username
router.route('/').get( async (req, res) => {
  try {
    const { username } = req.body;
    const logs = await JournalLog.find({username});
    res.status(200).json(logs);
  } catch(e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

// add or update a journal log
router.route('/').post( async (req, res) => {
  const {_id, username, date, focusItems, reflection, logComplete} = req.body;
  try {
    const doc = await JournalLog.findOne({ _id });
    if (doc) {
      doc.overwrite({username, date, focusItems, reflection, logComplete});
      await doc.save();
      res.status(200).json('Journal Log updated!')
    } else {
      const newLog = new JournalLog({username, date, focusItems, reflection, logComplete});
      await newLog.save();
      res.status(200).json('Journal Log added!');
    }
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
});

// delete log by id
router.route('/:id').delete( async (req, res) => {
  try {
    await JournalLog.findByIdAndDelete(req.params.id);
    res.status(200).json('Successfully deleted');
  } catch (e) {
    res.status(400).json(`Error: ${e instanceof Error ? e.message : e}`)
  }
})

export default router;