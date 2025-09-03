import React from "react";
import { Button, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import InventoryIcon from "@mui/icons-material/Inventory";
import UpdateIcon from "@mui/icons-material/Update";

export default function Beranda() {
  // Featured Auction Items
  const items = [
    { id: 1, title: "Vintage Watch", price: "$250", img: "https://via.placeholder.com/400x250?text=Watch" },
    { id: 2, title: "Antique Vase", price: "$480", img: "https://via.placeholder.com/400x250?text=Vase" },
    { id: 3, title: "Rare Comic Book", price: "$120", img: "https://via.placeholder.com/400x250?text=Comic" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-500 to-blue-600 text-white py-32 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Welcome to Auction Website</h1>
        <p className="text-xl md:text-2xl mb-8">
          Bid on unique items, collectibles, and rare finds.
        </p>
        <Button
          variant="contained"
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          Start Bidding
        </Button>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 container mx-auto text-center">
        <Typography variant="h4" className="mb-12 font-bold">Why Choose Us</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[{
            icon: <SecurityIcon fontSize="large" className="text-blue-600 mb-2" />,
            title: "Secure Bidding",
            desc: "All transactions are encrypted and safe."
          },{
            icon: <InventoryIcon fontSize="large" className="text-blue-600 mb-2" />,
            title: "Variety of Items",
            desc: "Collectibles, gadgets, antiques, and more."
          },{
            icon: <UpdateIcon fontSize="large" className="text-blue-600 mb-2" />,
            title: "Real-time Updates",
            desc: "Track bids live and never miss out."
          }].map((f, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Card className="p-6 shadow-lg hover:shadow-2xl transition">
                {f.icon}
                <Typography variant="h6" className="font-semibold mb-2">{f.title}</Typography>
                <Typography>{f.desc}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </section>



      {/* TESTIMONIALS */}
      <section className="py-24 bg-gray-100 text-center">
        <Typography variant="h4" className="mb-12 font-bold">Testimonials</Typography>
        <Card className="max-w-xl mx-auto p-6 shadow-md">
          <CardContent>
            <Typography>
              "This is the best auction site I have ever used! Fast, secure, and reliable." – User A
            </Typography>
          </CardContent>
        </Card>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center  text-black">
        © {new Date().getFullYear()} Auction Website. All rights reserved.
      </footer>
    </div>
  );
}
