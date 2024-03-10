import { BASE_API } from "../.env";
import xAuth from "../utils/xAuth";

const DEFAULT_OPTIONS = {
  method: "POST",
  headers: {
    "Content-Type": "application/json;",
    "X-Auth": xAuth(),
  },
};

class Items {
  async getIds(offset = 0, limit = 50) {
    try {
      const response = await fetch(BASE_API, {
        method: DEFAULT_OPTIONS.method,
        headers: DEFAULT_OPTIONS.headers,
        body: JSON.stringify({
          action: "get_ids",
          params: {
            offset,
            limit,
          },
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getItems(id) {
    try {
      const response = await fetch(BASE_API, {
        method: DEFAULT_OPTIONS.method,
        headers: DEFAULT_OPTIONS.headers,
        body: JSON.stringify({
          action: "get_items",
          params: {
            ids: id,
          },
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getFields(field) {
    try {
      const response = await fetch(BASE_API, {
        method: DEFAULT_OPTIONS.method,
        headers: DEFAULT_OPTIONS.headers,
        body: JSON.stringify({
          action: "get_fields",
          params: {
            field,
          },
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getItemsByFilter(field, value, offset = 0, limit = 50) {
    try {
      const response = await fetch(BASE_API, {
        method: DEFAULT_OPTIONS.method,
        headers: DEFAULT_OPTIONS.headers,

        body: JSON.stringify({
          action: "filter",
          params: {
            [`${field}`]: value,
            offset,
            limit,
          },
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllIds() {
    try {
      const response = await fetch(BASE_API, {
        method: DEFAULT_OPTIONS.method,
        headers: DEFAULT_OPTIONS.headers,

        body: JSON.stringify({
          action: "get_ids",
        }),
      });
      const data = await response.json();

      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const itemsAPI = new Items();
