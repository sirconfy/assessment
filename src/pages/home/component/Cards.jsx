import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Chip,
    Box,
    Grid,
  } from "@mui/material";
  import { FaStar, FaUser } from "react-icons/fa";
  import { CiHeart } from "react-icons/ci";
  
  const games = [
    {
      title: "BIOMUTANT",
      image: "/images/Biomutant.png",
      rating: 5,
      users: 2464,
      category: "Action",
    },
    {
      title: "DYING LIGHT",
      image: "public/images/DyingLight .png",
      category: "Action",
    },
    {
      title: "ARCADEGEDDON",
      image: "public/images/Arcadegeon.png",
      category: "Action",
    },
  ];
  
  const GameCard = ({ title, image, rating, users, showDetails }) => (
    <Card
      sx={{
        bgcolor: "#151C2F",
        color: "white",
        borderRadius: 3,
        maxWidth: 345,
        position: "relative",
      }}
    >
      <CardMedia component="img" height="180" image={image} alt={title} />
  
      {/* User count */}
      {showDetails && users && (
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            bgcolor: "#202438",
            px: 1,
            py: 0.5,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FaUser style={{ fontSize: 14, marginRight: 4 }} /> {users}
        </Box>
      )}
  
      <CardContent>
        <div className="flex justify-between items-center">
          <Chip label="NEW" color="error" size="small" sx={{ mb: 1 }} />
          <div>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
  
            {/* Star rating */}
            {showDetails && rating && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5  }}>
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} style={{ color: "#facc15", fontSize: 16 }} />
                ))}
              </Box>
            )}
          </div>
          <CiHeart  fontSize={20}/>
        </div>
      </CardContent>
    </Card>
  );
  
  export default function GameGallery() {
    return (
      <Box sx={{ minHeight: "100vh", p: 4, color: "white" }}>
        <Box mb={5}>
          <Typography variant="h6" gutterBottom sx={{fontSize: "14px"}}>
            All Games
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <GameCard {...game} showDetails={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Box>
  
        <Box mb={5}>
        <Typography variant="h6" gutterBottom sx={{fontSize: "14px"}}>
            Action
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, i) => (
              <Grid item xs={12} sm={6} md={4} key={"action" + i}>
                <GameCard {...game} showDetails={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Box>


        <Box mb={5}> 
        <Typography variant="h6" gutterBottom sx={{fontSize: "14px"}}>
            Puzzle
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, i) => (
              <Grid item xs={12} sm={6} md={4} key={"action" + i}>
                <GameCard {...game} showDetails={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={5}>
        <Typography variant="h6" gutterBottom sx={{fontSize: "14px"}}>
            Racing
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, i) => (
              <Grid item xs={12} sm={6} md={4} key={"action" + i}>
                <GameCard {...game} showDetails={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box mb={5}>
        <Typography variant="h6" gutterBottom sx={{fontSize: "14px"}}>
        Adventure
          </Typography>
          <Grid container spacing={3}>
            {games.map((game, i) => (
              <Grid item xs={12} sm={6} md={4} key={"action" + i}>
                <GameCard {...game} showDetails={i === 0} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }
  