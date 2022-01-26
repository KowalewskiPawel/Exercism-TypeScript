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

  public static alphabet: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  public static releasedNames: Set<string> = new Set();

  public static generateRandomName(): string {
    return `${Robot.alphabet[Math.floor(Math.random() * 26)]}${
      Robot.alphabet[Math.floor(Math.random() * 26)]
    }${Math.floor(Math.random() * 10)}${Math.floor(
      Math.random() * 10
    )}${Math.floor(Math.random() * 10)}`;
  }

  public get name(): string {
    if (this.currentName === "") {
      let tempName: string = Robot.generateRandomName();
      Robot.releasedNames.add(tempName);

      for (let i: number = 0; i < Robot.releasedNames.size; i++) {
        if (Robot.releasedNames.has(tempName)) {
          tempName = Robot.generateRandomName();
          Robot.releasedNames.add(tempName);
        }
      }

      this.currentName = tempName;
    }

    return this.currentName;
  }

  public resetName(): void {
    this.currentName = "";
  }

  public static releaseNames(): void {
    Robot.releasedNames.clear();
  }
}

// Grade School

export class GradeSchool {
  readonly grades: {
    [index: number]: string[];
  };
  constructor() {
    this.grades = {};
  }

  roster(): any {
    const tempObject: any = JSON.stringify(this.grades);
    return JSON.parse(tempObject);
  }

  public add(learner: string, learnersGrade: number): void {
    const tempGrades: string[] = this.grades[learnersGrade]
      ? [...this.grades[learnersGrade]]
      : [];

    let studentAlreadyRegistered: boolean = false;

    for (let students in this.grades) {
      if (this.grades[students].includes(learner)) {
        this.grades[students] = this.grades[students].filter(
          (item) => item !== learner
        );
      }
    }

    if (tempGrades.includes(learner)) {
      return;
    }

    this.grades[learnersGrade] = [...tempGrades, learner].sort();
  }

  grade(studentsGrade: number): string[] {
    const tempObject: any = JSON.parse(JSON.stringify(this.grades));
    return tempObject[studentsGrade] ? tempObject[studentsGrade] : [];
  }
}

// Clock

export class Clock {
  hours: number;
  minutes?: number;

  constructor(hour: number, minute?: number) {
    this.hours = hour % 24;
    this.minutes = minute;
  }

  public toString(): string {
    let tempMinutes: number = this.minutes ? this.minutes : 0;
    let tempHours: number = this.hours;

    if (tempMinutes >= 60) {
      tempHours = this.hours + (tempMinutes % 60);
    }

    let stringHours: string = String(tempHours);
    let stringMinutes: string = String(tempMinutes);

    if (stringHours.length < 2) {
      stringHours = `0${stringHours}`;
    }

    if (stringMinutes.length < 2) {
      stringMinutes = `0${stringMinutes}`;
    }

    return `${stringHours}:${stringMinutes}`;
  }

  public plus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public minus(minutes: unknown): Clock {
    throw new Error("Remove this statement and implement this function");
  }

  public equals(other: unknown): unknown {
    throw new Error("Remove this statement and implement this function");
  }
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

// Secret Handshake

export function commands(command: number): string[] {
  const commands: string[] = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
  ];

  const intToBin: string[] = Number(command).toString(2).split("").reverse();

  const result: string[] = [];

  intToBin.forEach((binary: string, index: number) => {
    switch (index) {
      case 0:
        if (binary === "1") result.push(commands[0]);

        break;

      case 1:
        if (binary === "1") result.push(commands[1]);

        break;

      case 2:
        if (binary === "1") result.push(commands[2]);

        break;

      case 3:
        if (binary === "1") result.push(commands[3]);

        break;

      case 4:
        if (binary === "1") result.reverse();

        break;

      default:
        break;
    }
  });

  return result;
}

// Binary Search

export function find(haystack: number[], needle: number): number | never {
  const indexNumber: number = haystack.indexOf(needle);

  if (indexNumber > -1) {
    return indexNumber;
  }

  throw new Error("Value not in array");
}

// Reverse String

export function reverse(phraseToReverse: string): string {
  return phraseToReverse.split("").reverse().join("");
}

// Linked List

export class LinkedList<TElement> {

  constructor() {
  }

  private linkedList: Set<TElement> = new Set();
  
  public push(element: TElement): void {
    this.linkedList.add(element);
  }

  public pop(): any {
    
    const tempArr: TElement[] = [...this.linkedList];
    const lastElement = tempArr.pop();
    this.linkedList = new Set(tempArr);
    return lastElement;
    
  }

  public shift(): any {

    const tempArr: TElement[] = [...this.linkedList];
    const lastElement = tempArr.shift();
    this.linkedList = new Set(tempArr);
    return lastElement;
  }

  public unshift(element: TElement) {
    const tempArr: TElement[] = [...this.linkedList];
    tempArr.unshift(element);
    this.linkedList = new Set(tempArr);
  }

  public delete(element: TElement): void {
    this.linkedList.delete(element);
  }

  public count(): number {
    return this.linkedList.size;
  }
}
