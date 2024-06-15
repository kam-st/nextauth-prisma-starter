// import { db } from "@/lib/db";

import accessUrlJSON from "@/data/access-url-data.json";

export const getAccessUrlByRole = (role?: string) => {
  try {
    const accessUrls = accessUrlJSON;

    const filteredData = accessUrls.filter((data) => data.role === role);

    return filteredData;
  } catch (e) {
    console.log(e);
    return [];
  }
};
