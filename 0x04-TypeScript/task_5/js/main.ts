// task_5/js/main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: string;
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: string;
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCreditsSum", // Unique identifier for major credits
  };
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCreditsSum", // Unique identifier for minor credits
  };
}

// Example usage:

const majorSubject1: MajorCredits = { credits: 3, brand: "MajorSubject1" };
const majorSubject2: MajorCredits = { credits: 4, brand: "MajorSubject2" };

const minorSubject1: MinorCredits = { credits: 2, brand: "MinorSubject1" };
const minorSubject2: MinorCredits = { credits: 1, brand: "MinorSubject2" };

const sumOfMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
console.log("Sum of Major Credits:", sumOfMajorCredits);

const sumOfMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
console.log("Sum of Minor Credits:", sumOfMinorCredits);
