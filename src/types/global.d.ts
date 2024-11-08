export {};

declare global {
  export type TFile = {
    id: string;
    name: string;
    type: "audio" | "document" | "spreadsheet";
    size: number;
    date: string;
  };
}
