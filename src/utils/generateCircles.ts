type Circles = {
  cols: number;
  rows: number;
  spacingX: number;
  spacingY: number;
};

export function generateCircles({ cols, rows, spacingX, spacingY }: Circles) {
  const circles = [];

  for (let row = 0; row < rows; row++) {
    let colsInCurrentRow = row % 2 === 0 ? cols : cols - 1;
    if (row === 0 || row === rows - 1) colsInCurrentRow -= 2;

    const totalWidth = (colsInCurrentRow - 1) * spacingX;
    const totalHeight = (rows - 1) * spacingY;
    const y = -totalHeight / 2 + row * spacingY;
    const rowStartX = -totalWidth / 2;

    for (let col = 0; col < colsInCurrentRow; col++) {
      const x = rowStartX + col * spacingX;
      circles.push({ x, y });
    }
  }

  return circles;
}
