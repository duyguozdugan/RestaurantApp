import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer ZLo9dJs-VR3SnQ9XJR7GR79AAzj94mur3ocZPmJkHpJDLgFQxWmwuK9jjUmqm-dVkTd-2ZGLKwTJr8tCocfuLThKEOqhEp7qvQyqTyiofpX6gE8VvM3boBpjBeOXZ3Yx",
  },
});
