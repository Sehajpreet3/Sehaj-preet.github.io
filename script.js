<script>
    function confirmSubmission(event) {
        event.preventDefault();  
        const confirmYes = document.getElementById("confirmYes").checked;
        
        if (!confirmYes) {
            document.getElementById("message").innerText = "Please confirm before submitting.";
            return false;
        }

        if (confirm("Are you sure you want to submit?")) {
            document.getElementById("message").innerText = "Form submitted!";
        } else {
            document.getElementById("message").innerText = "Submission canceled.";
        }
    }
</script>
