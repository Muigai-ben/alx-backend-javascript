// Define interfaces MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: string;
}

interface MinorCredits {
  credits: number;
  brand: string;
}

// Define function sumMajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Major"
  };
}

// Define function sumMinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "Minor"
  };
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, brand: "A" };
const majorSubject2: MajorCredits = { credits: 4, brand: "B" };

const minorSubject1: MinorCredits = { credits: 2, brand: "X" };
const minorSubject2: MinorCredits = { credits: 1, brand: "Y" };

console.log(sumMajorCredits(majorSubject1, majorSubject2)); // Output: { credits: 7, brand: "Major" }
console.log(sumMinorCredits(minorSubject1, minorSubject2)); // Output: { credits: 3, brand: "Minor" }
