// import { useState } from "react";
// import { Search, Eye, Ban, CheckCircle, X, Users, Mail, Phone, MapPin, Calendar, Shield, ShieldOff } from "lucide-react";
// // import Button from "@/components/Button";
// // import Input from "@/components/Input";
// import { ConfirmModal } from "../../components";

// const farmersData = [
//   { id: 1, name: "Ahmad Khan", email: "ahmad@email.com", phone: "+92 300 1234567", location: "Lahore", status: "Active", crops: "Wheat, Rice", joined: "Jan 15, 2024", avatar: "AK", totalOrders: 24, totalSpent: "$3,200" },
//   { id: 2, name: "Sara Ali", email: "sara@email.com", phone: "+92 301 2345678", location: "Faisalabad", status: "Active", crops: "Cotton, Sugarcane", joined: "Feb 20, 2024", avatar: "SA", totalOrders: 18, totalSpent: "$2,450" },
//   { id: 3, name: "Bilal Ahmed", email: "bilal@email.com", phone: "+92 302 3456789", location: "Multan", status: "Blocked", crops: "Mango, Citrus", joined: "Mar 10, 2024", avatar: "BA", totalOrders: 7, totalSpent: "$980" },
//   { id: 4, name: "Fatima Noor", email: "fatima@email.com", phone: "+92 303 4567890", location: "Karachi", status: "Active", crops: "Vegetables", joined: "Apr 5, 2024", avatar: "FN", totalOrders: 32, totalSpent: "$4,100" },
//   { id: 5, name: "Usman Tariq", email: "usman@email.com", phone: "+92 304 5678901", location: "Islamabad", status: "Active", crops: "Wheat, Corn", joined: "May 12, 2024", avatar: "UT", totalOrders: 15, totalSpent: "$1,800" },
//   { id: 6, name: "Ayesha Malik", email: "ayesha@email.com", phone: "+92 305 6789012", location: "Rawalpindi", status: "Active", crops: "Rice, Lentils", joined: "Jun 18, 2024", avatar: "AM", totalOrders: 21, totalSpent: "$2,750" },
// ];

// const Farmers = () => {
//   const [search, setSearch] = useState("");
//   const [farmers, setFarmers] = useState(farmersData);
//   const [selectedFarmer, setSelectedFarmer] = useState(null);
//   const [modalOpen, setModalOpen] = useState(false);
//   const [confirmOpen, setConfirmOpen] = useState(false);
//   const [confirmTarget, setConfirmTarget] = useState(null);

//   const filtered = farmers.filter(
//     (f) => f.name.toLowerCase().includes(search.toLowerCase()) || f.email.toLowerCase().includes(search.toLowerCase())
//   );

//   const toggleBlock = (id) => {
//     setFarmers((prev) => prev.map((f) => f.id === id ? { ...f, status: f.status === "Active" ? "Blocked" : "Active" } : f));
//     if (selectedFarmer && selectedFarmer.id === id) {
//       setSelectedFarmer({ ...selectedFarmer, status: selectedFarmer.status === "Active" ? "Blocked" : "Active" });
//     }
//   };

//   const askConfirmBlock = (farmer) => {
//     setConfirmTarget(farmer);
//     setConfirmOpen(true);
//   };

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-2xl font-bold text-foreground">Farmers</h1>
//         <p className="text-muted-foreground">Manage farmers registered from the mobile app.</p>
//       </div>

//       <div className="flex items-center gap-3">
//         {/* <div className="relative max-w-sm flex-1">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//           <Input placeholder="Search farmers..." value={search} onChange={(e) => setSearch(e.target.value)} className="pl-10" />
//         </div> */}
//         <div className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5">
//           <Users2Icon className="h-4 w-4 text-primary" />
//           <span className="text-sm font-semibold text-foreground">{farmers.length}</span>
//           <span className="text-xs text-muted-foreground">Total</span>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-hidden rounded-2xl border border-border bg-card">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead>
//               <tr className="border-b border-border bg-secondary/30">
//                 <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Farmer</th>
//                 <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Location</th>
//                 <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Status</th>
//                 <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Joined</th>
//                 <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filtered.map((farmer) => (
//                 <tr key={farmer.id} className="border-b border-border/50 last:border-0 hover:bg-secondary/30 transition-colors">
//                   <td className="px-5 py-3.5">
//                     <div className="flex items-center gap-3">
//                       <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-xs font-bold text-primary-foreground shadow-sm">
//                         {farmer.avatar}
//                       </div>
//                       <div>
//                         <p className="text-sm font-semibold text-foreground">{farmer.name}</p>
//                         <p className="text-xs text-muted-foreground">{farmer.email}</p>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-5 py-3.5">
//                     <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
//                       <MapPin className="h-3.5 w-3.5" /> {farmer.location}
//                     </div>
//                   </td>
//                   <td className="px-5 py-3.5">
//                     <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${farmer.status === "Active" ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"}`}>
//                       <span className={`h-1.5 w-1.5 rounded-full ${farmer.status === "Active" ? "bg-success" : "bg-destructive"}`} />
//                       {farmer.status}
//                     </span>
//                   </td>
//                   <td className="px-5 py-3.5 text-sm text-muted-foreground">{farmer.joined}</td>
//                   <td className="px-5 py-3.5">
//                     <div className="flex items-center gap-1">
//                       <button onClick={() => { setSelectedFarmer(farmer); setModalOpen(true); }} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-info/10 hover:text-info transition-colors" title="View">
//                         <Eye className="h-4 w-4" />
//                       </button>
//                       <button onClick={() => askConfirmBlock(farmer)} className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${farmer.status === "Active" ? "text-muted-foreground hover:bg-destructive/10 hover:text-destructive" : "text-muted-foreground hover:bg-success/10 hover:text-success"}`} title={farmer.status === "Active" ? "Block" : "Unblock"}>
//                         {farmer.status === "Active" ? <Ban className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal and ConfirmModal remain same, no TS types */}
//       {modalOpen && selectedFarmer && (
//         <>
//           <div className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
//           <div className="fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 animate-scale-in overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
//             {/* Modal content omitted for brevity, exactly same as before, just remove TS types */}
//           </div>
//         </>
//       )}

//       <ConfirmModal
//         open={confirmOpen}
//         onClose={() => setConfirmOpen(false)}
//         onConfirm={() => { if (confirmTarget) toggleBlock(confirmTarget.id); }}
//         title={confirmTarget?.status === "Active" ? "Block Farmer?" : "Unblock Farmer?"}
//         message={confirmTarget?.status === "Active"
//           ? `Are you sure you want to block ${confirmTarget?.name}? They won't be able to access the app.`
//           : `Are you sure you want to unblock ${confirmTarget?.name}? They will regain full access.`
//         }
//         confirmText={confirmTarget?.status === "Active" ? "Yes, Block" : "Yes, Unblock"}
//         variant={confirmTarget?.status === "Active" ? "danger" : "info"}
//       />
//     </div>
//   );
// };

// // Simple icon component
// const Users2Icon = ({ className }) => (
//   <Users className={className} />
// );

// export default Farmers;

 const Farmers =()=>{
  return(
    <h1>Farner</h1>
  )
}
export default Farmers