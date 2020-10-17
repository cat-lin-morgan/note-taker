const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//this is the server itself
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
