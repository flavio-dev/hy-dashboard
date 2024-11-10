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
      name: "report 2024.xlsx",
      type: EFileType.SPREADSHEET,
      size: 2048,
      date: "2024,12,20",
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
