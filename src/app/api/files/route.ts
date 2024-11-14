import { NextResponse } from "next/server";
import { generateRandomFileData } from "./generateDummyData";

const generateFakeData = (): any => {
  // DUMMY DATA TO TEST WITH
  // const files = [
  //   {
  //     id: "1",
  //     name: "Meeting recording.wav",
  //     type: "audio",
  //     size: 65000,
  //     date: "2023,11,19",
  //     isFavorite: false,
  //   },
  //   {
  //     id: "2",
  //     name: "script_from_discussion.doc",
  //     type: "document",
  //     size: 1024,
  //     date: "2022,02,20",
  //     isFavorite: false,
  //   },
  //   {
  //     id: "3",
  //     name: "report 2024_very long file name for testing purpose how it wraps.xlsx",
  //     type: "spreadsheet",
  //     size: 2048,
  //     date: "2024,12,20",
  //     isFavorite: true,
  //   },
  //   {
  //     id: "4",
  //     name: "zoom_rec_20240520.mp4",
  //     type: "video",
  //     size: 2000023,
  //     date: "2024,05,20",
  //     isFavorite: true,
  //   },
  //   {
  //     id: "5",
  //     name: "Flavian Buteau - CV 2024.pdf",
  //     type: "document",
  //     size: 4321,
  //     date: "2024,11,02",
  //     isFavorite: false,
  //   },
  //   {
  //     id: "6",
  //     name: "Flavian Buteau - Cover Letter 2024.pdf",
  //     type: "document",
  //     size: 5321,
  //     date: "2024,11,02",
  //     isFavorite: false,
  //   },
  //   {
  //     id: "7",
  //     name: "tax return 2021.xlsx",
  //     type: "spreadsheet",
  //     size: 960,
  //     date: "2021,12,31",
  //     isFavorite: true,
  //   },
  //   {
  //     id: "8",
  //     name: "Introduction to the world of hy.mov",
  //     type: "video",
  //     size: 200078,
  //     date: "2023,02,02",
  //     isFavorite: true,
  //   },
  // ];

  // GENERATING DUMMY DATA FOR BIGGER NUMBER OF FILES

  const files = generateRandomFileData(1000);

  return files;
};

// API handler to return the generated fake data as a JSON response
export async function GET() {
  const files = generateFakeData();
  return NextResponse.json(files);
}
