import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { getLeaderboard, addEntry } from './leaderboard.js';


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})

app.get('/', (req, res) => {
    const data = {
        Events: [["Event1", "29th Jan", "Barn Hall", "Lorem Ipsum"],
                ["Event2", "30th Jan", "Main Hall", "Dolor Sit Amet"],
                ["Event3", "31st Jan", "Auditorium", "Consectetur Adipiscing"],
                ["Event4", "32nd Jan", "Ground", "Dolor Sit Amet"]],
        Workshops: [["Workshops1", "29th Jan", "Barn Hall", "Lorem Ipsum"],
                    ["Workshops2", "30th Jan", "Main Hall", "Dolor Sit Amet"],
                    ["Workshops3", "31st Jan", "Auditorium", "Consectetur Adipiscing"],
                    ["Workshops4", "32nd Jan", "Ground", "Dolor Sit Amet"]],
        GuestLectures: [["GL1", "29th Jan", "Barn Hall", "Lorem Ipsum"],
                        ["GL2", "30th Jan", "Main Hall", "Dolor Sit Amet"],
                        ["GL3", "31st Jan", "Auditorium", "Consectetur Adipiscing"],
                        ["GL4", "32nd Jan", "Ground", "Dolor Sit Amet"]],
    }

    res.json(data);
})

app.get('/leaderboard', async (req, res) => {
    try {
      const data = await getLeaderboard();
      data.sort((a, b) => b.score - a.score);
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch leaderboard' });
    }
  });
  
  app.post('/leaderboard', async (req, res) => {
    try {
        const { name, score, college_name } = req.body;
        await addEntry(name, score, college_name);
        res.status(201).json({ message: 'Entry added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add entry' });
    }
});
