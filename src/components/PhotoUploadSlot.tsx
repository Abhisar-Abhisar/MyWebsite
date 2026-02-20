import { useState, useEffect } from 'react';
import { Upload, User, Image } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface PhotoUploadSlotProps {
  type?: 'profile' | 'experience' | 'project';
  className?: string;
  label?: string;
  storageKey?: string;
}

const PhotoUploadSlot = ({ type = 'experience', className = '', label, storageKey }: PhotoUploadSlotProps) => {
  const [image, setImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const key = storageKey || label?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'default';
  const filePath = `${key}.jpg`;

  useEffect(() => {
    // Load existing image from storage
    const { data } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(filePath);

    // Check if file exists by fetching it
    fetch(data.publicUrl, { method: 'HEAD' })
      .then(res => {
        if (res.ok) {
          setImage(`${data.publicUrl}?t=${Date.now()}`);
        }
      })
      .catch(() => {});
  }, [filePath]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    console.log('Uploading to path:', filePath, 'key:', key);
    try {
      const { error } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file, { upsert: true });

      if (error) {
        console.error('Upload error for', filePath, error);
        throw error;
      }

      console.log('Upload success:', filePath);
      const { data } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);

      setImage(`${data.publicUrl}?t=${Date.now()}`);
    } catch (err) {
      console.error('Upload failed:', filePath, err);
      // Fallback to local preview
      const reader = new FileReader();
      reader.onloadend = () => setImage(reader.result as string);
      reader.readAsDataURL(file);
    } finally {
      setUploading(false);
    }
  };

  const getDefaultSize = () => {
    switch (type) {
      case 'profile': return 'w-32 h-32 md:w-40 md:h-40';
      case 'project': return 'w-full aspect-video';
      default: return 'w-full h-48';
    }
  };

  const getIcon = () => {
    switch (type) {
      case 'profile': return <User className="w-12 h-12 text-muted-foreground/50" />;
      default: return <Image className="w-8 h-8 text-muted-foreground/50" />;
    }
  };

  return (
    <label className={`photo-upload-slot cursor-pointer ${getDefaultSize()} ${className} ${type === 'profile' ? 'rounded-full' : ''}`}>
      <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
      {image ? (
        <img
          src={image}
          alt={label || 'Uploaded photo'}
          className={`w-full h-full object-cover ${type === 'profile' ? 'rounded-full' : 'rounded-2xl'}`}
        />
      ) : (
        <div className="photo-upload-slot-content flex flex-col items-center gap-2">
          {getIcon()}
          <div className="flex items-center gap-1 text-sm">
            {uploading ? (
              <span>Uploading...</span>
            ) : (
              <>
                <Upload className="w-4 h-4" />
                <span>{label || 'Upload Photo'}</span>
              </>
            )}
          </div>
        </div>
      )}
    </label>
  );
};

export default PhotoUploadSlot;
