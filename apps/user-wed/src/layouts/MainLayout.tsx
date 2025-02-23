"use client";
import PrimaryButton from "@libs/button";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Input,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Footer from "./main/Footer";

const pages = ["Technology", "Book", "Business"];

interface IMainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: IMainLayoutProps) {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorElUser);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
      <AppBar position="fixed" sx={{ bgcolor: "#333" }}>
        <Container maxWidth="xl" sx={{ display: "flex" }}>
          <Toolbar disableGutters>
            <div className="h-[50px] w-[100px]">
              <Image alt="logo" layout="fill" src="/images/neguNguNgu.png" />
            </div>
          </Toolbar>
          <Box sx={{ flexGrow: 2, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              // onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  //    onClick={handleCloseNavMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", xl: "flex", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                //   onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
            <Input
              sx={{ height: 48, width: 300, bgcolor: "#fff", pl: 2 }}
              placeholder="Search..."
              startAdornment={<SearchIcon />}
            />
          </Box>
          <Box
            sx={{ flexGrow: 0, display: "flex", gap: 2, alignItems: "center" }}
          >
            <PrimaryButton href="/post/new" icon="add">
              <Typography>New Post</Typography>
            </PrimaryButton>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleOpen}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              id="basic-menu"
              anchorEl={anchorElUser}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/studio">Studio</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href="/auth">Login</Link>
              </MenuItem>
            </Menu>
          </Box>
        </Container>
      </AppBar>
      <Box
        sx={{
          flexGrow: 1,
          pt: { sx: 8, md: 11 },
          pl: { sx: 8, md: 11 },
          pr: { sx: 8, md: 11 },
          bgcolor: "#fff",
        }}
      >
        {children}
      </Box>
      <Divider />
      <Footer />
    </Box>
  );
}

export default MainLayout;
