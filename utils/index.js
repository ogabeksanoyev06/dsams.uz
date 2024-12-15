export const clearSpaces = (text) => {
  return text.replaceAll(" ", "");
};

export const removePhonePrefix = (phone) => {
  const formattedPhone = String(phone || "");
  return clearSpaces(formattedPhone.startsWith("998") ? formattedPhone.slice(3) : formattedPhone);
};

const validPhones = ["90", "91", "33", "50", "93", "94", "88", "95", "97", "98", "99", "77", "20"];

export const isValidPhone = () => {
  const phone = val.replace(/[\s)(-]/g, "");
  return phone.length === 9 && validPhones.includes(phone.substring(0, 2));
};

export const getInitials = (firstName, lastName) => {
  const firstInitial = firstName ? firstName.charAt(0).toUpperCase() : "";
  const lastInitial = lastName ? lastName.charAt(0).toUpperCase() : "";
  return firstInitial + lastInitial;
};
export const getUserRole = (role) => {
  if (role === "user") {
    return "Oddiy foydalanuvchi";
  } else if (role === "export") {
    return "Eksport";
  } else {
    return "Noma'lum rol";
  }
};

export const downloadFiles = (files) => {
  files.forEach((file) => {
    const { file: fileUrl } = file;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", fileUrl.split("/").pop());
    link.setAttribute("target", "_blank");
    link.click();
    link.remove();
  });
};

const timeouts = {};

const cTimeout = (key = "key") => {
  if (timeouts[key]) {
    clearTimeout(timeouts[key]);
    timeouts[key] = undefined;
  }
};

export const debounce = (key = "key", fn = () => {}, timeout = 500) => {
  const sTimeout = (key, fn, timeout) => {
    cTimeout(key);
    timeouts[key] = setTimeout(() => {
      try {
        fn();
      } catch (e) {}
      timeouts[key] = undefined;
    }, timeout);
  };
  return sTimeout(key, fn, timeout);
};
