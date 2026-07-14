"use client";

import { useState } from "react";
import { Users, Calendar, FileText, Building2, User, Phone, Mail, MapPin } from "lucide-react";

export default function CooperativeSection() {
  const [formData, setFormData] = useState({
    cooperativeName: "",
    cooperativeNumber: "",
    establishmentYear: "",
    chairmanName: "",
    chairmanPhone: "",
    chairmanEmail: "",
    memberCount: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="bg-[#0d6b70] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <Users className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-white">Data Koperasi</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Koperasi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="cooperativeName"
                placeholder="Nama koperasi"
                value={formData.cooperativeName}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nomor Koperasi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="cooperativeNumber"
                placeholder="Nomor koperasi"
                value={formData.cooperativeNumber}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Tahun Berdiri <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                name="establishmentYear"
                placeholder="Tahun"
                value={formData.establishmentYear}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Jumlah Anggota <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="number"
                name="memberCount"
                placeholder="Jumlah anggota"
                value={formData.memberCount}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Ketua <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="chairmanName"
                placeholder="Nama ketua"
                value={formData.chairmanName}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              No. HP Ketua <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                name="chairmanPhone"
                placeholder="08123456789"
                value={formData.chairmanPhone}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email Ketua <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="chairmanEmail"
                placeholder="ketua@email.com"
                value={formData.chairmanEmail}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Alamat Koperasi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <textarea
                name="address"
                placeholder="Alamat lengkap koperasi"
                rows={2}
                value={formData.address}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition resize-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Kota/Kabupaten <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              placeholder="Kota/Kabupaten"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Provinsi <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="province"
              placeholder="Provinsi"
              value={formData.province}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Kode Pos
            </label>
            <input
              type="text"
              name="postalCode"
              placeholder="Kode Pos"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Upload Akta Koperasi <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#0d6b70] transition-colors relative">
              <FileText className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-xs text-gray-600">
                <span className="font-medium text-[#0d6b70]">Klik upload</span>
              </p>
              <p className="text-xs text-gray-400">PDF, Max. 10MB</p>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept=".pdf"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Upload SK Pengurus <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-[#0d6b70] transition-colors relative">
              <FileText className="w-6 h-6 text-gray-400 mx-auto mb-1" />
              <p className="text-xs text-gray-600">
                <span className="font-medium text-[#0d6b70]">Klik upload</span>
              </p>
              <p className="text-xs text-gray-400">PDF, Max. 10MB</p>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                accept=".pdf"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}