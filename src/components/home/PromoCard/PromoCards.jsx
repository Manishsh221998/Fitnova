import React from "react";
import { Box, Container, Grid, Typography, Button, Card } from "@mui/material";
import { Link } from "react-router-dom";

function PromoCards() {
  return (
    <Container maxWidth="lg" sx={{ my: 2 }}>
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 4,
              borderRadius: 3,
              background: "linear-gradient(to right, #BEFFF7, #A6FF96)",
               boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "#1c5b2e" }}
              >
                Medical Info
              </Typography>
              <Typography variant="body1" sx={{ color: "#2d773f" }}>
                Essential medical details.
              </Typography>
              <Typography variant="body1" sx={{ color: "#2d773f" }}>
                Highlighted benefits.
              </Typography>
              <Typography variant="body1" sx={{ color: "#2d773f" }}>
                Advanced features.
              </Typography>
            </Box>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              borderRadius: 3,
              background: "linear-gradient(to right, #89f36b, #5cbf49)",
              boxShadow: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: "#ffffff", mb: 2 }}
            >
              Order Now <br />
              Get 25% Discount & Free Delivery
            </Typography>
            <Link to='/product'><Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#ffffff",
                color: "#5cbf49",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#e0ffe0",
                },
              }}
            >
              Place Order
            </Button></Link>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PromoCards;
