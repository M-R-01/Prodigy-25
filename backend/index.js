import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

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