// Function to format a date in a specific way
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Example usage
const currentDate = new Date();
const formattedDate = formatDate(currentDate);
console.log(`Formatted Date: ${formattedDate}`);
