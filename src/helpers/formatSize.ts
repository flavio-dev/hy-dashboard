const formatFileSize = (valueInBb: number) => {
  if (valueInBb < 1024) {
    return `${valueInBb} KB`; // If less than 1024 KB, return KB
  } else if (valueInBb < 1024 * 1024) {
    // If between 1024 KB and 1 MB (1024 * 1024 KB)
    return `${(valueInBb / 1024).toFixed(2)} MB`;
  } else {
    // If greater than or equal to 1 MB, return GB
    return `${(valueInBb / (1024 * 1024)).toFixed(2)} GB`;
  }
};

export default formatFileSize;
