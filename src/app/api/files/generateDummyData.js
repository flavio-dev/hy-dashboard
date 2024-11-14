const EFileType = {
  AUDIO: "audio",
  DOCUMENT: "document",
  SPREADSHEET: "spreadsheet",
  VIDEO: "video",
};

const generateRandomName = () => {
  const fileNames = [
    "Meeting recording",
    "script_from_discussion",
    "annual_report_very_long_file_name_for_testing_purpose",
    "random file name 1",
    "random file name 2",
    "random file name 3",
    "tax_return for the year",
    "Introduction_to_the_world_of_hy",
    "random file name 4",
    "random file name 5",
    "random file name 6",
    "random file name 7",
    "random file name 8",
  ];
  return fileNames[Math.floor(Math.random() * fileNames.length)];
};

const generateRandomType = () => {
  const fileTypes = [
    EFileType.AUDIO,
    EFileType.DOCUMENT,
    EFileType.SPREADSHEET,
    EFileType.VIDEO,
  ];
  return fileTypes[Math.floor(Math.random() * fileTypes.length)];
};

const generateRandomSize = () => {
  return Math.floor(Math.random() * (2000023 - 900 + 1)) + 900; // Random size between 900 and 2000023
};

const generateRandomDate = () => {
  const startDate = new Date(2021, 0, 1);
  const endDate = new Date();
  const randomDate = new Date(
    startDate.getTime() +
      Math.random() * (endDate.getTime() - startDate.getTime())
  );

  const year = randomDate.getFullYear();
  const month = String(randomDate.getMonth() + 1).padStart(2, "0");
  const day = String(randomDate.getDate()).padStart(2, "0");

  return `${year},${month},${day}`;
};

const generateRandomFavorite = () => Math.random() > 0.5; // 50% chance to be a favorite

// Generate the array
export const generateRandomFileData = (numItems) => {
  const fileData = [];

  for (let i = 0; i < numItems; i++) {
    const currId = i + 1;
    const name = `${i}_` + generateRandomName();

    fileData.push({
      id: currId.toString(),
      name: name,
      type: generateRandomType(),
      size: generateRandomSize(),
      date: generateRandomDate(),
      isFavorite: generateRandomFavorite(),
    });
  }

  return fileData;
};
