
-- Create storage bucket for portfolio images
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-images', 'portfolio-images', true);

-- Allow public read access
CREATE POLICY "Public read access for portfolio images"
ON storage.objects FOR SELECT
USING (bucket_id = 'portfolio-images');

-- Allow anyone to upload (no auth required for personal portfolio)
CREATE POLICY "Anyone can upload portfolio images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'portfolio-images');

-- Allow anyone to update portfolio images
CREATE POLICY "Anyone can update portfolio images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'portfolio-images');

-- Allow anyone to delete portfolio images
CREATE POLICY "Anyone can delete portfolio images"
ON storage.objects FOR DELETE
USING (bucket_id = 'portfolio-images');
