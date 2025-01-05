// Ensure inputs are valid
function validateInputs(weight, height, age, name, gender) {
  if (!name || !gender) {
    alert("Please enter your name and select your gender.");
    return false;
  }
  if (isNaN(weight) || isNaN(height) || isNaN(age) || weight <= 0 || height <= 0 || age <= 0) {
    alert("Please enter valid numbers for weight, height, and age.");
    return false;
  }
  return true;
}

// Function to calculate BMI
function calculateBMI() {
  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value, 10);
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!validateInputs(weight, height, age, name, gender)) return;

  // Metric system calculation (kg/m^2)
  let bmi = weight / (height * height); 

  const bmiResult = document.getElementById("bmiResult");
  bmiResult.textContent = `${name}, your BMI is: ${bmi.toFixed(2)}`;

  // Reset emoji visibility
  const emojiRating = document.querySelectorAll(".emoji-rating img");
  emojiRating.forEach((emoji) => emoji.classList.remove("active"));

  let category = "";
  let emoji = "";

  // If BMI is below 18.5 (Underweight), or above 25 (Overweight or Obese)
  if (bmi < 18.5) {
    emoji = "sad"; // Sad emoji for underweight
    category = "Underweight: Needs attention.";
  } else if (bmi >= 25) {
    emoji = "sad"; // Sad emoji for overweight or obesity
    category = "Overweight or Obese: Needs attention.";
  }
  // If BMI is between 18.5 and 24.9 (Normal weight)
  else if (bmi >= 18.5 && bmi <= 24.9) {
    emoji = "happy"; // Happy emoji for normal weight
    category = "Normal weight: Healthy range.";
  }

  // Display the corresponding emoji
  if (emoji === "sad") {
    document.getElementById("sadEmoji").classList.add("active");
  } else if (emoji === "happy") {
    document.getElementById("happyEmoji").classList.add("active");
  }

  // Update the category text
  document.getElementById("category").textContent = category;
}

// Add event listener to the calculate button
document.getElementById("calculate").addEventListener("click", calculateBMI);
