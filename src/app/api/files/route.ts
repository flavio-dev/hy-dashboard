import { EFileType, TFile } from "@/types/file";
import { NextResponse } from "next/server";

const generateFakeData = (): TFile[] => {
  const files: TFile[] = [
    {
      id: "1",
      name: "Meeting recording.wav",
      type: EFileType.AUDIO,
      size: 65000,
      date: "2023,11,19",
      isFavorite: false,
    },
    {
      id: "2",
      name: "script_from_discussion.doc",
      type: EFileType.DOCUMENT,
      size: 1024,
      date: "2022,02,20",
      isFavorite: false,
    },
    {
      id: "3",
      name: "report 2024_very long file name for testing purpose how it wraps.xlsx",
      type: EFileType.SPREADSHEET,
      size: 2048,
      date: "2024,12,20",
      isFavorite: true,
    },
    {
      id: "4",
      name: "zoom_rec_20240520.mp4",
      type: EFileType.VIDEO,
      size: 200078,
      date: "2024,05,20",
      isFavorite: true,
    },
    {
      id: "5",
      name: "Flavian Buteau - CV 2024.pdf",
      type: EFileType.DOCUMENT,
      size: 4321,
      date: "2024,11,02",
      isFavorite: false,
    },
    {
      id: "6",
      name: "Flavian Buteau - Cover Letter 2024.pdf",
      type: EFileType.DOCUMENT,
      size: 5321,
      date: "2024,11,02",
      isFavorite: false,
    },
    {
      id: "7",
      name: "tax return 2021.xlsx",
      type: EFileType.SPREADSHEET,
      size: 960,
      date: "2021,12,31",
      isFavorite: true,
    },
  ];

  return files;
};

// API handler to return the generated fake data as a JSON response
export async function GET() {
  const files = generateFakeData();
  return NextResponse.json(files);
}
