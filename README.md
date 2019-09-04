# image-upload-js

- clone this respository in a workspace
- cd into the repo
- RUN `npm install`
- RUN `node index.js`
- On POSTMAN, make a POST http://localhost:8800/upload with body option form-data and fields:
    "image": <file from desktop>
- Alternately you can also use curl to test

`curl -F "image=@/<filePath>" localhost:8800/upload`
replace filePath with image file on desktop
