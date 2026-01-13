"use client";
import { getCurrentUser, logout } from "@/lib/api";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";

const ProfileBtn = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getCurrentUser();
        console.log('User info-profile-btn:', userData);
        setUser(userData);
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await logout();           //clear token
    router.push("/login");    // redirect user
  };

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setOpen(!open);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="profile-container" ref={menuRef}>
      <button
        className="profile-btn"
        onClick={toggleMenu}
      >
        <div className="userDiv">
          <span className="usersName">
            {user?.first_name + " " + user?.last_name}
          </span>
          <span className="userRole">
            {user?.is_from_nepal ? "Explorer" : "Traveler"}
          </span>
        </div>

        <div className="profileImg">
          <img src="/me.webp" alt="Profile" />
        </div>
      </button>

      {open && (
        <div className="profile-dropdown animate-fadeIn">
          <button className="profile-dropdown-btn">
            My Profile
          </button>

          <button className="profile-dropdown-btn">
            Settings
          </button>

          <button
            onClick={handleLogout}
            className="profile-dropdown-btn logout"
          >
            Logout
          </button>
        </div>
      )}
    </div>

  );
};

export default ProfileBtn;
