import { useState } from "react";
import { del, get, post, put } from "../api/apiClient";

const useAds = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const CreateAds = async (data) => {
    console.log(data);
    setError(null);
    setLoading(true);
    try {
      const response = await post("ads/create", data);
      return response;
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const getAds = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await get("ads/all");
      return response;
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const updateAd = async (id, data) => {
    setError(null);
    setLoading(true);
    try {
      const response = await put(`ads/update/${id}`, data);
      return response;
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };
  const deleteAd = async (id) => {
    setError(null);
    setLoading(true);
    try {
      const response = await del(`ads/delete/${id}`);
      return response;
    } catch (err) {
      setError(err.response?.data?.detail || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    CreateAds,
    getAds,
    updateAd,
    deleteAd,
  };
};

export default useAds;
