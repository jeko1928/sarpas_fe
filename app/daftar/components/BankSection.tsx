"use client";

import { useState } from "react";
import { Building2, CreditCard, User, FileText } from "lucide-react";

export default function BankSection() {
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    accountHolder: "",
    branch: "",
    swiftCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
          <h2 className="text-lg font-semibold text-white">Data Bank</h2>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Bank <span className="text-red-500">*</span>
            </label>
            <select
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
              required
            >
              <option value="">Pilih Bank</option>
              <option value="bca">Bank BCA</option>
              <option value="mandiri">Bank Mandiri</option>
              <option value="bni">Bank BNI</option>
              <option value="bri">Bank BRI</option>
              <option value="btn">Bank BTN</option>
              <option value="cimb">CIMB Niaga</option>
              <option value="danamon">Bank Danamon</option>
              <option value="permata">Bank Permata</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nomor Rekening <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="accountNumber"
                placeholder="Nomor rekening"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Nama Pemilik Rekening <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                name="accountHolder"
                placeholder="Nama pemilik rekening"
                value={formData.accountHolder}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Cabang
            </label>
            <input
              type="text"
              name="branch"
              placeholder="Cabang bank"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">
              Kode SWIFT
            </label>
            <input
              type="text"
              name="swiftCode"
              placeholder="Kode SWIFT"
              value={formData.swiftCode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6b70] focus:border-transparent outline-none transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Upload Buku Rekening <span className="text-red-500">*</span>
          </label>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#0d6b70] transition-colors relative">
            <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
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