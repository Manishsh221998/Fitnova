import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (upload file and description)
    console.log('File:', file);
    console.log('Description:', description);
    setOpenSnackbar(true); // Show success message
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };    

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: 'auto', p: 2, border: '1px solid #ccc', borderRadius: 2 }}
    >
      <Typography variant="h6" align="center">File Upload</Typography>
      <input
        accept="*"
        style={{ display: 'none' }}
        id="upload-file"
        type="file"
        onChange={handleFileChange}
       />
      <label htmlFor="upload-file">
        <Button variant="outlined" component="span" fullWidth >
          {file ? file.name : 'Choose File'}
        </Button>
      </label>

      <TextField
        label="Description"
        variant="outlined"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        fullWidth
        multiline
        rows={4}
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>

      <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success">
          File uploaded successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default FileUploadForm;
