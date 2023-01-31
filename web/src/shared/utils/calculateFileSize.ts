export function calculateRawFileSize(file: string) {
  const fileSize = file.length / 1024;

  return fileSize < 1024
    ? `${parseInt(fileSize.toFixed(2))} Kb`
    : `${parseInt((fileSize / 1024).toFixed(2))} Mb`;
}

export function calculateFileSize(bytes: number) {
  const fileSize = bytes / 1024;

  return fileSize < 1024
    ? `${parseInt(fileSize.toFixed(2))} Kb`
    : `${parseInt((fileSize / 1024).toFixed(2))} Mb`;
}
