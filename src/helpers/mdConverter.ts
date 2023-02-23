import { Converter } from 'showdown';
import { promises as fs } from 'fs';

export default class MdConverter {
  convertMarkdownFile = async (filePath: string) => {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log(data);

    const converter = new Converter();
    const html2 = converter.makeHtml('# Line 1\n\nRendered by **marked**.');
    const html = converter.makeHtml('# Line 2\n\nRendered by **marked**.');
  }
}
