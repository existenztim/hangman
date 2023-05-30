export class SecretWord {
    id: number;
    word: string;
    showed: { showed: boolean }[];
  
    constructor(id: number, word: string) {
      this.id = id;
      this.word = word;
      this.showed = Array.from({ length: word.length }, () => ({ showed: false }));
    }
  }