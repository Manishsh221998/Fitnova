import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../redux/productSlice/ProductSlice";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SortIcon from '@mui/icons-material/Sort';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Pagination,
  Stack,
  IconButton,
  Typography,
  Tooltip,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const AllProduct = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]); // Original product data
  const [filteredData, setFilteredData] = useState([]); // Filtered and sorted data
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortType, setSortType] = useState("");
  const itemsPerPage = 12;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct())
      .then((res) => {
        const products = res?.payload || [];
        setData(products);
        setFilteredData(products);

        // Extract unique categories
        const uniqueCategories = [
          ...new Set(products.map((product) => product?.product_category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, [dispatch]);

  useEffect(() => {
    setPage(1); // Reset to the first page on any data change
  }, [filteredData]);

  // Filter by category
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    const filtered = category
      ? data.filter((product) => product?.product_category === category)
      : data;

    setFilteredData(filtered);
  };

  // Sort products
  const handleSortChange = (event) => {
    const type = event.target.value;
    setSortType(type);

    const sorted = [...filteredData];
    if (type === "name") {
      sorted.sort((a, b) => a.product_name.localeCompare(b.product_name));
    } else if (type === "priceLowToHigh") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "priceHighToLow") {
      sorted.sort((a, b) => b.price - a.price);
    }
    setFilteredData(sorted);
  };

  // Handle page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Paginate data
  const paginatedData = filteredData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <FormControl sx={{ minWidth: 150 }} size="small">
          <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            sx={{borderRadius:5}}
          >
            <MenuItem value="">
              <em>All Categories</em>
            </MenuItem>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 150 }} size="small" >

          <Select  value={sortType} onChange={handleSortChange} displayEmpty sx={{borderRadius:5}}
             > 
         
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {paginatedData.length > 0 ? (
        <Grid container spacing={2} marginTop={2}>
          {paginatedData.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{ p: 1, boxShadow: 1, m: 1, "&:hover": { boxShadow: 5 } }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={product.prodImage}
                  alt={product.brand}
                  sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": { transform: "scale(1.1)" },
                    p:4
                  }}
                />
                <Divider />
                <CardContent sx={{ textAlign: "start" }}>
                  <Typography sx={{fontSize:'1.2rem'}}>{product.brand}</Typography>
                  <Typography
                    sx={{ fontSize: "0.9rem", color: "GrayText" }}
                  >
                    ({product.product_name})
                  </Typography>
                  <Typography
                    sx={{ color: "#23120B", fontWeight: 600 }}
                  >
                    ₹{product.price}{" "}
                    <span style={{ color: "tomato", fontSize: "0.9rem" }}>
                      {product?.discount}% off
                    </span>
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Link to={`singleProduct/${product.id}`}>
                    <Button variant="outlined" color="warning">
                      View More
                    </Button>
                  </Link>
                  <Tooltip title="Add to Cart">
                    <IconButton>
                      <ShoppingCartIcon sx={{ color: "turquoise" }} />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h6"
          color="textSecondary"
          align="center"
          marginTop={4}
        >
          No products found.
        </Typography>
      )}

      <Stack spacing={2} alignItems="center" marginY={4}>
        <Pagination
          count={Math.ceil(filteredData.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
};

export default AllProduct;
