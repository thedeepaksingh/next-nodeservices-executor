export const get_user_details = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = process.env.PROFILE_SERVICE_URL || "";
      if (apiUrl === "") {
        const users_resp = await fetch(apiUrl + "api/users/all");
        if (!users_resp.ok) return new Error("Failed to fetch users");
        resolve(users_resp);
      } else {
        reject("Api url blank");
      }
    } catch (err) {
      reject(err);
    }
  });
};
