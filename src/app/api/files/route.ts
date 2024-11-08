import { NextResponse } from "next/server";

const generateFakeData = (): TFile[] => {
  const files: TFile[] = [
    {
      id: "1",
      name: "Meeting recording.wav",
      type: "audio",
      size: 65000,
      date: "2023,11,19",
    },
    {
      id: "2",
      name: "script_from_discussion.doc",
      type: "document",
      size: 1024,
      date: "2022,02,20",
    },
    {
      id: "3",
      name: "report 2024.xlsx",
      type: "spreadsheet",
      size: 2048,
      date: "2024,12,20",
    },
  ];

  return files;
};

// API handler to return the generated fake data as a JSON response
export async function GET() {
  const files = generateFakeData();
  return NextResponse.json(files);
}
