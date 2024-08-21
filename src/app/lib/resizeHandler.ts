export const handleResize = (
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (window.innerWidth >= 1024) {
    setSidebarOpen(true); // Show sidebar on larger screens
  } else {
    setSidebarOpen(false); // Hide sidebar on smaller screens
  }
};
