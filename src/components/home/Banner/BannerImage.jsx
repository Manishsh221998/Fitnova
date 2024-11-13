import { Grid, Box } from '@mui/material';

function BannerImage() {
  const images = [
    'https://img8.hkrtcdn.com/35978/bnr_3597767_o.jpg',
    'https://img2.hkrtcdn.com/35983/bnr_3598221_o.jpg',
    'https://img4.hkrtcdn.com/35900/bnr_3589913_o.jpg',
    'https://img4.hkrtcdn.com/35798/bnr_3579733_o.jpg',
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2}>
        {images.map((src, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              component="img"
              src={src}
              alt={`Image ${index + 1}`}
              sx={{
                width: '100%',
                height: 'auto',
                maxWidth: '312px', // Maintains the intrinsic size
                maxHeight: '436px',
                borderRadius: 2,  // Optional: rounded corners
                boxShadow: 3      // Optional: add some shadow for depth
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default BannerImage;
