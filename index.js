//1.Palindrome
function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the characters from the beginning and end of the string
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false; // Characters don't match, not a palindrome
        }
    }

    return true; // All characters match, it's a palindrome
}


// 2. anagram.

function areAnagrams(str1, str2) {
    // Convert the strings to lowercase and remove non-alphanumeric characters
    str1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    str2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the strings have the same length
    if (str1.length !== str2.length) {
        return false; // Different lengths, not anagrams
    }

    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};

    // Populate character frequency maps
    for (let char of str1) {
        charMap1[char] = (charMap1[char] || 0) + 1;
    }

    for (let char of str2) {
        charMap2[char] = (charMap2[char] || 0) + 1;
    }

    // Compare character frequency maps
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false; // Different frequencies, not anagrams
        }
    }

    return true; // Same character frequencies, they are anagrams
}

const str1 = "abcd";
const str2 = "dabc";

if (areAnagrams(str1, str2)) {
    console.log(`${str1} and ${str2} are anagrams.`);
} else {
    console.log(`${str1} and ${str2} are not anagrams.`);
}


// 3. Blank or Not.
function isBlank(str) {
    // Remove whitespace characters from the beginning and end of the string
    str = str.trim();

    // Check if the resulting string is empty
    return str.length === 0;
}

const inputString = "    ";
if (isBlank(inputString)) {
    console.log("The string is blank.");
} else {
    console.log("The string is not blank.");
}



// 4. 

function protect_email(email) {
    // Split the email address into local part and domain part
    const [localPart, domainPart] = email.split("@");

    // Get the first three characters of the local part
    const firstThreeChars = localPart.slice(0, 3);

    // Create a masked local part with dots
    const maskedLocalPart = `${firstThreeChars}...`;

    // Concatenate the masked local part with the domain part
    const protectedEmail = `${maskedLocalPart}@${domainPart}`;

    return protectedEmail;
}

const email = "robin_singh@example.com";
console.log(protect_email(email));

// 5. Reverse words in a string

function reverseWords(str) {
    // Split the string into an array of words
    const words = str.split(" ");

    // Reverse each word in the array
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });

    // Join the reversed words back into a string
    const reversedString = reversedWords.join(" ");

    return reversedString;
}

console.log(reverseWords("abc"));
console.log(reverseWords("JavaScript Exercises"));
console.log(reverseWords(1234));