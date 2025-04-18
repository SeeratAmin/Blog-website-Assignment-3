
      // Redirect based on selected interest
      function handleInterestChange(event) {
        const value = event.target.value.toLowerCase();
        if (value === "fashion") {
          window.location.href = "fashion.html";
        } else if (value === "politics") {
          window.location.href = "politics.html";
        } else if (value === "cenima") {
          window.location.href = "cenima.html";
        } else if (value === "other") {
          window.location.href = "other.html";
        }
      }

    