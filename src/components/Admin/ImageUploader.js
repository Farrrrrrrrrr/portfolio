import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUpload, FaImage, FaTimes } from 'react-icons/fa';
import { uploadFile, deleteFile } from '../../utils/supabaseHelpers';

const UploaderContainer = styled.div`
  margin-bottom: 1rem;
  width: 100%;
`;

const UploadInput = styled.div`
  border: 2px dashed ${props => props.theme.colors.light};
  border-radius: 4px;
  padding: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
  
  input {
    display: none;
  }
`;

const UploadIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const UploadText = styled.p`
  margin-bottom: 0;
  color: ${props => props.theme.colors.text};
`;

const ImagePreview = styled.div`
  position: relative;
  margin-bottom: 1rem;
  border-radius: 4px;
  overflow: hidden;
  max-width: 100%;
  
  img {
    width: 100%;
    display: block;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const ProgressContainer = styled.div`
  margin: 1rem 0;
`;

const ProgressBar = styled.div`
  height: 4px;
  background-color: ${props => props.theme.colors.light};
  border-radius: 2px;
  overflow: hidden;
`;

const ProgressIndicator = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const UploadStatus = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5rem;
  color: ${props => props.success ? 'green' : props.error ? 'red' : props.theme.colors.text};
`;

const ImageUploader = ({ 
  currentImage, 
  onImageUpload, 
  folder = 'projects',
  acceptedTypes = 'image/png, image/jpeg, image/jpg'
}) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [previewImage, setPreviewImage] = useState(currentImage || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('File is too large. Maximum size is 5MB.');
      return;
    }
    
    // Create a preview URL
    const objectUrl = URL.createObjectURL(file);
    setPreviewImage(objectUrl);
    
    // Start upload
    setUploading(true);
    setProgress(10);
    setError('');
    setSuccess('');
    
    try {
      // Simulate progress (real progress would come from Supabase in a production app)
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = prev + 20;
          if (newProgress >= 90) {
            clearInterval(progressInterval);
            return 90;
          }
          return newProgress;
        });
      }, 300);
      
      // Upload to Supabase Storage
      const uploadedUrl = await uploadFile(file, 'projects', folder);
      
      clearInterval(progressInterval);
      
      if (uploadedUrl) {
        setProgress(100);
        setSuccess('Image uploaded successfully');
        
        // Call the parent component's handler
        onImageUpload(uploadedUrl);
        
        // Clean up old image if replacing
        if (currentImage && currentImage !== previewImage) {
          await deleteFile(currentImage, 'projects');
        }
      } else {
        setError('Failed to upload image');
        setProgress(0);
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('An error occurred during upload');
      setProgress(0);
    } finally {
      setUploading(false);
    }
  };
  
  const handleRemoveImage = async () => {
    if (currentImage) {
      try {
        await deleteFile(currentImage, 'projects');
      } catch (err) {
        console.error('Error removing image from storage:', err);
      }
    }
    
    setPreviewImage('');
    onImageUpload('');
  };
  
  return (
    <UploaderContainer>
      {previewImage ? (
        <ImagePreview>
          <img src={previewImage} alt="Preview" />
          <RemoveButton onClick={handleRemoveImage}>
            <FaTimes />
          </RemoveButton>
        </ImagePreview>
      ) : (
        <UploadInput onClick={() => document.getElementById('file-upload').click()}>
          <input
            id="file-upload"
            type="file"
            accept={acceptedTypes}
            onChange={handleFileChange}
            disabled={uploading}
          />
          <UploadIcon>
            {uploading ? <FaUpload /> : <FaImage />}
          </UploadIcon>
          <UploadText>
            {uploading ? 'Uploading...' : 'Click to upload an image'}
          </UploadText>
        </UploadInput>
      )}
      
      {uploading && (
        <ProgressContainer>
          <ProgressBar>
            <ProgressIndicator progress={progress} />
          </ProgressBar>
          <UploadStatus>Uploading: {progress}%</UploadStatus>
        </ProgressContainer>
      )}
      
      {error && <UploadStatus error>{error}</UploadStatus>}
      {success && <UploadStatus success>{success}</UploadStatus>}
    </UploaderContainer>
  );
};

export default ImageUploader;
