import express from "express";
import sortRoute from "./routes/sortRoute";
import {
  QuickSort,
  MergeSort,
  HeapSort,
  RadixSort,
  CountingSort,
} from "./sortingAlgorithms";

const app = express();
const port = 3000;
app.use(express.json());
app.use("/api/sort", sortRoute);

const htmlResponseMain = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>AocAPI</title>
    </head>
    <body>
      <h1>Welcome to AocAPI!</h1>
      <p>
        AocAPI is your dedicated companion for Advent of Code challenges.
        Whether you're a beginner or an experienced coder, this API is designed
        to simplify your coding experience. Explore sorting algorithms, submit
        solutions, and elevate your problem-solving skills.
      </p>
      <p>
        Ready to embark on a coding adventure? Start by exploring the various
        features AocAPI has to offer. Conquer challenges, track your progress,
        and stay tuned for exciting updates on additional functionalities.
      </p>
      <p>Happy coding!</p>
    </body>
    </html>
  `;

app.get("/", (req, res) => {
  const numArr: number[] = [45, 153, 89, 78, 786, 2, 4868, 52];
  res.send(htmlResponseMain);
});

app.get("/api/example", (req, res) => {
  const numArr: number[] = [45, 153, 89, 78, 786, 2, 4868, 52];
  res.send(
    `<div>
      <h1>Array Before Sorting:</h1>
      <p>${JSON.stringify(numArr)}</p>
  
      <h1>Array After Sorting:</h1>
      <p>${JSON.stringify(HeapSort(numArr))}</p>
    </div>`
  );
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
