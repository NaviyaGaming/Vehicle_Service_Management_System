function handleCredentialResponse(response) {
   const token = response.credential;
   
   // Send the token to your backend server
   fetch('/api/auth/google', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ token: token })
   })
   .then(res => res.json())
   .then(data => {
       window.location.href = "/dashboard";
   })
   .catch(error => console.error("Error verifying token:", error));
}