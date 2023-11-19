import express, { Request, Response } from "express";
import {
  QuickSort,
  MergeSort,
  HeapSort,
  RadixSort,
  CountingSort,
} from "../sortingAlgorithms";

const router = express.Router();

// QuickSort
router.post("/quickSort", (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const unsortedArray: number[] = req.body.array;

    if (!unsortedArray || !Array.isArray(unsortedArray)) {
      return res.status(400).json({ error: "Invalid array format." });
    }

    const sortedArray = QuickSort(unsortedArray);

    res.json({ sortedArray });
  } catch (error) {
    console.error("Error sorting array:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//MergeSort
router.post("/mergeSort", (req: Request, res: Response) => {
  try {
    const unsortedArray: number[] = req.body.array;

    if (!unsortedArray || !Array.isArray(unsortedArray)) {
      return res.status(400).json({ error: "Invalid array format." });
    }

    const sortedArray = MergeSort(unsortedArray);

    res.json({ sortedArray });
  } catch (error) {
    console.error("Error sorting array:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//HeapSort,
router.post("/heapSort", (req: Request, res: Response) => {
  try {
    const unsortedArray: number[] = req.body.array;

    if (!unsortedArray || !Array.isArray(unsortedArray)) {
      return res.status(400).json({ error: "Invalid array format." });
    }

    const sortedArray = HeapSort(unsortedArray);

    res.json({ sortedArray });
  } catch (error) {
    console.error("Error sorting array:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//RadixSort,
router.post("/radixSort", (req: Request, res: Response) => {
  try {
    const unsortedArray: number[] = req.body.array;

    if (!unsortedArray || !Array.isArray(unsortedArray)) {
      return res.status(400).json({ error: "Invalid array format." });
    }

    const sortedArray = RadixSort(unsortedArray);

    res.json({ sortedArray });
  } catch (error) {
    console.error("Error sorting array:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//CountingSort,
router.post("/countingSort", (req: Request, res: Response) => {
  try {
    const unsortedArray: number[] = req.body.array;

    if (!unsortedArray || !Array.isArray(unsortedArray)) {
      return res.status(400).json({ error: "Invalid array format." });
    }

    const sortedArray = CountingSort(unsortedArray);

    res.json({ sortedArray });
  } catch (error) {
    console.error("Error sorting array:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
