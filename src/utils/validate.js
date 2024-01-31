export const validateName = (name) => {
  if (!name.trim()) return "Name is required";
  if (!/^[a-zA-Z]+$/.test(name)) return "Name can only contain letters";

  return null;
};

export const validateEmail = (email) => {
  if (!email.trim()) return "Email address is required";
  if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email))
    return "Invalid email format. Please enter a valid email address.";

  return null;
};

export const validatePassword = (password) => {
  if (!password.trim()) return "Password is required";

  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  if (!/[A-Z]/.test(password)) {
    return "Password must contain at least one uppercase letter.";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain at least one lowercase letter.";
  }

  if (!/\d/.test(password)) {
    return "Password must contain at least one digit.";
  }

  if (!/[@$!%*?&]/.test(password)) {
    return "Password must contain at least one special character (e.g., @$!%*?&).";
  }

  return null;
};
