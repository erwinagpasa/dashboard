export const handleClickOutside = (
  event: MouseEvent,
  avatarRef: React.RefObject<HTMLDivElement>,
  notificationRef: React.RefObject<HTMLDivElement>,
  setAvatarOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setNotificationOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  if (avatarRef.current && !avatarRef.current.contains(event.target as Node)) {
    setAvatarOpen(false);
  }
  if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
    setNotificationOpen(false);
  }
};
