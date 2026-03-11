import { useEffect, useState } from "react";

// import ConfirmModal from "../../components/UI/ConfirmModal";
// import Input from "../../components/UI/Input";
// import Button from "../../components/UI/Button";
// import AdsModal from "../../components/UI/AdsModal";
import {
  Image,
  LayoutGrid,
  List,
  Pencil,
  Plus,
  Search,
  ToggleLeft,
  ToggleRight,
  Trash2,
} from "lucide-react";
import { adSchema } from "../../services/validation/adSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useAds from "../../hooks/useAds";
import { uploadToCloudinary } from "../../services/Cloudnairy/uploadImage";
import {  AdCard, AdsModal, Button, ContentLoader, EmptyState } from "../../components";
import Input from "../../components/UI/Input";
// import ContentLoader from "../../components/UI/Contentloader";
// import EmptyState from "../../components/UI/EmptyState";


const AdsManagement = () => {
  const [search, setSearch] = useState("");
  const [ads, setAds] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [editingAd, setEditingAd] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState({ open: false, id: null });
  const [activeTab, setActiveTab] = useState("cards");

  const { loading, error, CreateAds, getAds } = useAds();

  const filtered = ads.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase()),
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(adSchema),
    defaultValues: {
      title: "",
      description: "",
      image: null,
      status: "Active",
    },
  });

  const openAdd = () => {
    setEditingAd(null);
    reset({
      title: "",
      description: "",
      image: null,
      status: "Active",
    });
    setFormOpen(true);
  };
  const openEdit = (ad) => {
    setEditingAd(ad);

    reset({
      title: ad.title,
      description: ad.description,
      image: ad.image,
      status: ad.status,
    });

    setFormOpen(true);
  };
  const handleSave = async (data) => {
    console.log(data);
    const imageUrl = await uploadToCloudinary(data.image);
    await CreateAds({
      ...data,
      image: imageUrl,
    });
  };
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const fetchAds = async () => {
      try {
        const data = await getAds();
        setAds(data);
      } catch (error) {
        console.error("Failed to fetch ads:", error);
      }
    };

    fetchAds();
  }, []);
  console.log(ads);
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">ADS Management</h1>
          <p className="text-muted-foreground">
            Create and manage advertisements.
          </p>
        </div>
        <Button
          onClick={openAdd}
          className="flex items-center gap-2 px-5 py-2.5"
        >
          <Plus className="h-4 w-4" /> Add New Ad
        </Button>
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="relative max-w-sm flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search ads..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="pl-10"
          />
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
          {ads.filter((a) => a.status === "Active").length} Active
        </span>
        <span className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
          {ads.filter((a) => a.status === "Inactive").length} Inactive
        </span>
        <div className="ml-auto flex items-center rounded-lg border border-border bg-secondary/30 p-1">
          <button
            onClick={() => handleTabChange("cards")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${activeTab === "cards" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <LayoutGrid className="h-4 w-4" /> Cards
          </button>
          <button
            onClick={() => handleTabChange("table")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${activeTab === "table" ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`}
          >
            <List className="h-4 w-4" /> Table
          </button>
        </div>
      </div>

      {activeTab === "cards" ? (
        loading ? (
          <ContentLoader variant="cards" count={6} />
        ) : filtered.length === 0 ? (
          <EmptyState
            title="No Ads Found"
            description="Create your first advertisement to get started."
          />
        ) : (
          <AdCard
            openEdit={openEdit}
            setDeleteConfirm={setDeleteConfirm}
            ads={filtered}
          />
        )
      ) : loading ? (
        <ContentLoader variant="table" count={6} columns={4} />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No Ads Found"
          description="Create your first advertisement to get started."
        />
      ) : (
        <AdTable
          openEdit={openEdit}
          setDeleteConfirm={setDeleteConfirm}
          ads={filtered}
        />
      )}

      {formOpen && (
        <AdsModal
          setFormOpen={setFormOpen}
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          handleSave={handleSave}
          editingAd={editingAd}
          setValue={setValue}
          watch={watch}
        />
      )}
      {/* <ConfirmModal
        open={deleteConfirm.open}
        onClose={() => setDeleteConfirm({ open: false, id: null })}
        // onConfirm={() => {
        //   if (deleteConfirm.id) handleDelete(deleteConfirm.id);
        // }}
        title="Delete Ad?"
        message="Are you sure you want to delete this advertisement? This action cannot be undone."
        confirmText="Yes, Delete"
        variant="danger"
      /> */}
    </div>
  );
};

export default AdsManagement;




