"use client";

import { useState } from "react";
import { Building2, User, Mail, Phone, MapPin, Globe, FileText, Upload } from "lucide-react";

export default function ProfileSection() {
  const [formData, setFormData] = useState({
    institutionName: "",
    institutionType: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    phone: "",
    email: "",
    website: "",
    contactPerson: "",
    contactPhone: "",
    institutionProfile: "",
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
            <Building2 className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-lg font-semibold text-white">Profile Lembaga</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Lembaga <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="institutionName"
                placeholder="Masukkan nama lembaga"
                value={formData.institutionName}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Jenis Lembaga <span className="text-red-500">*</span>
            </label>
            <select
              name="institutionType"
              value={formData.institutionType}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
              required
            >
              <option value="">Pilih jenis lembaga</option>
              <option value="koperasi">Koperasi</option>
              <option value="petani">Kelompok Tani</option>
              <option value="perusahaan">Perusahaan</option>
              <option value="yayasan">Yayasan</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Alamat <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
              <textarea
                name="address"
                placeholder="Masukkan alamat lengkap"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nomor Telepon <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                name="phone"
                placeholder="08123456789"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                placeholder="lembaga@email.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Website
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="url"
                name="website"
                placeholder="www.website.com"
                value={formData.website}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Contact Person <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="contactPerson"
                placeholder="Nama contact person"
                value={formData.contactPerson}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              No. HP Contact Person <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="tel"
                name="contactPhone"
                placeholder="08123456789"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Profile Lembaga <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
            <textarea
              name="institutionProfile"
              placeholder="Deskripsikan profile lembaga Anda"
              rows={3}
              value={formData.institutionProfile}
              onChange={handleChange}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition resize-none"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Dokumen Pendukung <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#0d6b70] transition-colors relative">
            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-sm text-gray-600">
              <span className="font-medium text-[#0d6b70]">Klik untuk upload</span> atau drag and drop
            </p>
            <p className="text-xs text-gray-400 mt-1">PDF, PNG, JPG (Max. 10MB)</p>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
              accept=".pdf,.png,.jpg,.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}