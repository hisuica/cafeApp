export class ImageSnippet {
  constructor(src: string, file: File) {
    this.src = src;
    this.file = file;
    this.type = file.type.split('/').pop();
  }
  src: string;
  file: File;
  type: string;
  fileName: string;
}
