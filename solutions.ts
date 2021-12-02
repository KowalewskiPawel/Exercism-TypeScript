// Hello World

export function hello(): string {
  return "Hello, World!";
}

// Two Fer

export function twoFer(name: string = "you"): string {
  return `One for ${name}, one for me.`;
}

// Resistor Color Duo

export function decodedValue(colors: string[]): number {
  interface Numbers {
    [index: string]: number;
  }

  const numbers: Numbers = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  };

  const colorOne: string = colors[0].toLowerCase();
  const colorTwo: string = colors[1].toLowerCase();

  return Number(String(numbers[colorOne]) + String(numbers[colorTwo]));
}

// Leap

export function isLeap(year: number): boolean {
  const isCentury: boolean = String(year).includes("00");

  if (isCentury) {
    const leapOrNot: number = year % 400;
    return leapOrNot === 0 ? true : false;
  }

  return year % 4 === 0 ? true : false;
}

// Resistor Color

export const COLORS: string[] = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export const colorCode = (color: string): number => {
  return COLORS.indexOf(color);
};

// Rna Transcription

export function toRna(DNA: string): string {
  const dna: string[] = ["G", "C", "T", "A"];
  const rna: string[] = ["C", "G", "A", "U"];
  const inputDNA: string[] = DNA.split("");

  let outputDNA: string[] = [];

  if (inputDNA.some((letter: string) => !dna.includes(letter))) {
    throw new Error("Invalid input DNA.");
  }

  inputDNA.forEach((letter) => {
    const tempIndexOfRna: number = dna.indexOf(letter);
    outputDNA.push(rna[tempIndexOfRna]);
  });

  return outputDNA.join("");
}

// Space Age

export function age(planet: string, seconds: number): number {
  interface Planets {
    [index: string]: number;
  }

  const planets: Planets = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  return Math.round((seconds / (31557600 * planets[planet])) * 100) / 100;
}

// Pangram

export function isPangram(word: string): boolean {
  const alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".split("");
  const letters: string[] = word.toLowerCase().split("");
  const pangramLetters: string[] = [];
  let pangram: boolean = false;

  letters.forEach((letter: string) => {
    if (alphabet.includes(letter) && !pangramLetters.includes(letter)) {
      pangramLetters.push(letter);
    }
  });

  return alphabet.length === pangramLetters.length;
}

// Bob

export function hey(message: string): string {
  const messageArray: string[] = message.trim().split("");

  const alphanumericRegex: RegExp = /[a-z0-9]+$/i;
  const lettersRegex: RegExp = /[a-z]+/i;

  if (
    message.toUpperCase() === message &&
    messageArray[messageArray.length - 1] === "?" &&
    lettersRegex.test(message)
  ) {
    return "Calm down, I know what I'm doing!";
  }

  if (messageArray[messageArray.length - 1] === "?") {
    return "Sure.";
  }

  if (message.toUpperCase() === message && lettersRegex.test(message)) {
    return "Whoa, chill out!";
  }

  if (
    messageArray[messageArray.length - 1] === "." ||
    messageArray[messageArray.length - 1] === "!" ||
    lettersRegex.test(message) ||
    alphanumericRegex.test(message)
  ) {
    return "Whatever.";
  }

  return "Fine. Be that way!";
}

// DnD Character

export class DnDCharacter {
  strength = DnDCharacter.generateAbilityScore();
  dexterity = DnDCharacter.generateAbilityScore();
  constitution = DnDCharacter.generateAbilityScore();
  intelligence = DnDCharacter.generateAbilityScore();
  wisdom = DnDCharacter.generateAbilityScore();
  charisma = DnDCharacter.generateAbilityScore();
  hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);

  private static getRandomNumber(): number {
    return Math.floor(Math.random() * 6 + 1);
  }

  public static generateAbilityScore(): number {
    const randomNumbersArray: number[] = [
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
      this.getRandomNumber(),
    ];
    randomNumbersArray.sort();
    randomNumbersArray.shift();
    const reducer = (previousValue: number, currentValue: number) =>
      previousValue + currentValue;
    return randomNumbersArray.reduce(reducer, 0);
  }
  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}

// Matrix

export class Matrix {
  readonly matrixArray: number[][];

  constructor(matrix: string) {
    this.matrixArray = matrix.split("\n").map((numbers: string) => {
      const tempNumbers = numbers
        .split(" ")
        .map((item) => Number(item))
        .flat();

      return tempNumbers;
    });
  }

  get rows(): number[][] {
    return this.matrixArray;
  }

  get columns(): number[][] {
    const columnsArray: number[][] = [];

    for (let i = 0; i < this.matrixArray.length; i++) {
      const tempArray: number[] = this.matrixArray.map((item) => item[i]);

      columnsArray.push(tempArray);
    }

    return columnsArray;
  }
}

// Robot Name

export class Robot {
  currentName: string;

  constructor() {
    this.currentName = "";
  }

  public get name(): string {
    if (this.currentName === "") {
      const tempName: string = `${String.fromCharCode(
        Math.floor(Math.random() * (65 - 90)) + 65
      )}${String.fromCharCode(
        Math.floor(Math.random() * (65 - 90)) + 65
      )}${Math.floor(Math.random() * 10)}${Math.floor(
        Math.random() * 10
      )}${Math.floor(Math.random() * 10)}`;
      this.currentName = tempName;
    }

    return this.currentName;
  }

  public resetName(): void {
    this.currentName = "";
  }

  public static releaseNames(): void {}
}

// Word Count

export function count(phrase: string): Map<string, number> {
  const allWords = new Map<string, number>();

  const regex: RegExp = /\s+/;

  const words: string[] = phrase
    .trim()
    .split(regex)
    .map((word) => word.toLowerCase());

  words.forEach((word: string) => {
    const tempValue: number = words.filter((item) => item === word).length;

    allWords.set(word, tempValue);
  });

  return allWords;
}
