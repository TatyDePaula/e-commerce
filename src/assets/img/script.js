import { readdir, rename } from 'node:fs/promises';

const folderDir = './assets/img';

try {
  const files = await readdir(folderDir);

  const images = files.filter(filename => filename.includes('.jpg'));
  images.map((file, idx) =>
    rename(`${folderDir}/${file}`, `${folderDir}/product-${idx + 1}.jpg`)
  );
} catch (err) {
  console.error(err);
}
