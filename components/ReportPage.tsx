
import React, { useState, useCallback } from 'react';
import { ReportCategory, ReportFormState } from '../types';

const initialFormState: ReportFormState = {
  category: '',
  address: '',
  pincode: '',
  district: '',
  state: '',
  reporterName: '',
  photos: [],
  description: '',
};

type FormErrors = Partial<Record<keyof ReportFormState, string>>;

const ReportPage: React.FC = () => {
  const [formData, setFormData] = useState<ReportFormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [previews, setPreviews] = useState<string[]>([]);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.category) newErrors.category = 'Category is required.';
    if (!formData.address.trim()) newErrors.address = 'Address is required.';
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Pincode must be 6 digits.';
    if (!formData.district.trim()) newErrors.district = 'District is required.';
    if (!formData.state.trim()) newErrors.state = 'State is required.';
    if (!formData.reporterName.trim()) newErrors.reporterName = 'Your name is required.';
    if (formData.photos.length === 0) newErrors.photos = 'At least one photo is required.';
    if (formData.description.trim().length < 20) newErrors.description = 'Description must be at least 20 characters.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const newErrors: FormErrors = {...errors};
      
      // Validation
      // Fix: Explicitly type `file` as `File` to resolve type inference issues.
      const validFiles = files.filter((file: File) => {
          if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
              newErrors.photos = 'Only JPG, PNG, and WEBP files are allowed.';
              return false;
          }
          if (file.size > 5 * 1024 * 1024) { // 5MB limit
              newErrors.photos = 'File size cannot exceed 5MB.';
              return false;
          }
          return true;
      });

      if (Object.keys(newErrors).length > Object.keys(errors).length) {
          setErrors(newErrors);
      } else {
          delete newErrors.photos;
          setErrors(newErrors);
      }

      setFormData(prev => ({ ...prev, photos: [...prev.photos, ...validFiles] }));

      const newPreviews = validFiles.map(file => URL.createObjectURL(file));
      setPreviews(prev => [...prev, ...newPreviews]);
    }
  }, [errors]);
  
  const removeImage = (index: number) => {
    setFormData(prev => ({...prev, photos: prev.photos.filter((_, i) => i !== index)}));
    setPreviews(prev => {
        const newPreviews = prev.filter((_, i) => i !== index);
        URL.revokeObjectURL(prev[index]);
        return newPreviews;
    });
  }


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionStatus('submitting');
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate success/error
      if (Math.random() > 0.1) { // 90% success rate
        setSubmissionStatus('success');
        setFormData(initialFormState);
        setPreviews([]);
      } else {
        setSubmissionStatus('error');
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-brand-dark mb-2">Report a Civic Issue</h2>
      <p className="text-center text-brand-secondary mb-8">Your report can make a difference. Please provide as much detail as possible.</p>
      
      {submissionStatus === 'success' && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
          <p className="font-bold">Success!</p>
          <p>Your report has been submitted successfully. Thank you for your contribution.</p>
        </div>
      )}
      {submissionStatus === 'error' && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
          <p className="font-bold">Submission Failed</p>
          <p>There was an error submitting your report. Please try again later.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <select id="category" name="category" value={formData.category} onChange={handleInputChange} className={`mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-primary focus:border-brand-primary sm:text-sm rounded-md ${errors.category ? 'border-red-500' : ''}`}>
              <option value="" disabled>Select a category</option>
              {Object.values(ReportCategory).map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            {errors.category && <p className="mt-2 text-sm text-red-600">{errors.category}</p>}
          </div>
          
          {/* Address */}
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address / Landmark</label>
            <input type="text" name="address" id="address" value={formData.address} onChange={handleInputChange} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.address ? 'border-red-500' : ''}`} />
            {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address}</p>}
          </div>

          {/* Pincode */}
          <div>
            <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
            <input type="text" name="pincode" id="pincode" value={formData.pincode} onChange={handleInputChange} maxLength={6} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.pincode ? 'border-red-500' : ''}`} />
            {errors.pincode && <p className="mt-2 text-sm text-red-600">{errors.pincode}</p>}
          </div>

          {/* District */}
          <div>
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
            <input type="text" name="district" id="district" value={formData.district} onChange={handleInputChange} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.district ? 'border-red-500' : ''}`} />
            {errors.district && <p className="mt-2 text-sm text-red-600">{errors.district}</p>}
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <input type="text" name="state" id="state" value={formData.state} onChange={handleInputChange} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.state ? 'border-red-500' : ''}`} />
            {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state}</p>}
          </div>

          {/* Reporter Name */}
          <div>
            <label htmlFor="reporterName" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" name="reporterName" id="reporterName" value={formData.reporterName} onChange={handleInputChange} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.reporterName ? 'border-red-500' : ''}`} />
            {errors.reporterName && <p className="mt-2 text-sm text-red-600">{errors.reporterName}</p>}
          </div>
        </div>
        
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <textarea id="description" name="description" rows={4} value={formData.description} onChange={handleInputChange} className={`mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.description ? 'border-red-500' : ''}`} placeholder="Describe the issue in detail..."></textarea>
          {errors.description && <p className="mt-2 text-sm text-red-600">{errors.description}</p>}
        </div>

        {/* Photo Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Photo Proof</label>
          <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 ${errors.photos ? 'border-red-500' : 'border-gray-300'} border-dashed rounded-md`}>
            <div className="space-y-1 text-center">
               <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-brand-primary hover:text-brand-primary-hover focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                  <span>Upload files</span>
                  <input id="file-upload" name="photos" type="file" className="sr-only" multiple onChange={handleFileChange} accept="image/png, image/jpeg, image/webp" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG, WEBP up to 5MB</p>
            </div>
          </div>
          {errors.photos && <p className="mt-2 text-sm text-red-600">{errors.photos}</p>}
        </div>
        
        {/* Previews */}
        {previews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {previews.map((src, index) => (
              <div key={index} className="relative group">
                <img src={src} alt={`Preview ${index + 1}`} className="h-32 w-full object-cover rounded-md" />
                <button type="button" onClick={() => removeImage(index)} className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Submit Button */}
        <div className="text-right">
          <button type="submit" disabled={submissionStatus === 'submitting'} className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary disabled:bg-gray-400 disabled:cursor-not-allowed">
            {submissionStatus === 'submitting' ? (
              <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting...
              </>
            ) : 'Submit Report'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReportPage;