import React, { useState } from 'react'
import { AddBtn, DashboardText, Searchbar } from '../../components'
import { Pencil, Trash2 } from 'lucide-react';

const adsData= [
  { id: 1, title: "Premium Fertilizer Sale", description: "Get 30% off on all organic fertilizers this season", image: "", targetUrl: "", status: "Active", clicks: 1240, impressions: 8500, createdAt: "Jan 10, 2024" },
  { id: 2, title: "New Tractor Models", description: "Explore latest tractor models with easy EMI options", image: "", targetUrl: "", status: "Active", clicks: 890, impressions: 6200, createdAt: "Feb 15, 2024" },
  { id: 3, title: "Seed Discount Week", description: "Buy 2 get 1 free on all hybrid seeds", image: "", targetUrl: "", status: "Inactive", clicks: 560, impressions: 3400, createdAt: "Mar 5, 2024" },
  { id: 4, title: "Irrigation Equipment", description: "Modern drip irrigation systems at wholesale prices", image: "", targetUrl: "", status: "Active", clicks: 2100, impressions: 12000, createdAt: "Apr 20, 2024" },
];
const ADSManagement = () => {
    const [search, setSearch] = useState("");
  const [ads, setAds] = useState(adsData);
  const [formOpen, setFormOpen] = useState(false);
  const [editingAd, setEditingAd] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    targetUrl: "",
    status: "Active", // Active or Inactive
  });
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, id: null });

  // Filter ads based on search
  const filtered = ads.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  // Open Add form
  const openAdd = () => {
    setEditingAd(null);
    setForm({ title: "", description: "", targetUrl: "", status: "Active" });
    setFormOpen(true);
  };

  // Open Edit form
  const openEdit = (ad) => {
    setEditingAd(ad);
    setForm({
      title: ad.title,
      description: ad.description,
      targetUrl: ad.targetUrl,
      status: ad.status,
    });
    setFormOpen(true);
  };

  // Save new or edited ad
  const handleSave = () => {
    if (!form.title.trim()) return;

    if (editingAd) {
      setAds((prev) =>
        prev.map((a) => (a.id === editingAd.id ? { ...a, ...form } : a))
      );
    } else {
      setAds((prev) => [
        ...prev,
        {
          id: Date.now(),
          title: form.title,
          description: form.description,
          image: "",
          targetUrl: form.targetUrl,
          status: form.status,
          clicks: 0,
          impressions: 0,
          createdAt: new Date().toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          }),
        },
      ]);
    }

    setFormOpen(false);
  };

  // Delete ad
  const handleDelete = (id) => {
    setAds((prev) => prev.filter((a) => a.id !== id));
  };
  return (
        <div className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <DashboardText text="ADS Management" para="Create and manage advertisements"/>
          <AddBtn/>
      </div>
      <Searchbar/>

       <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div className="border-b border-border p-5">
          <h2 className="text-lg font-bold text-foreground">All Ads Overview</h2>
        </div>
      
      </div>
          </div>

  )
}

export default ADSManagement