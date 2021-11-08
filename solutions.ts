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
