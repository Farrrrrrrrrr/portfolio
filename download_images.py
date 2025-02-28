import os
import requests
import shutil
from pathlib import Path

def download_image(url, save_path, filename=None):
    """Download an image from a URL and save it to the given path"""
    if filename is None:
        filename = url.split("/")[-1]
    
    full_path = os.path.join(save_path, filename)
    os.makedirs(save_path, exist_ok=True)
    
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        with open(full_path, 'wb') as out_file:
            shutil.copyfileobj(response.raw, out_file)
            
        print(f"Downloaded: {full_path}")
        return True
    except Exception as e:
        print(f"Error downloading {url}: {e}")
        return False

def main():
    base_dir = "C:/laragon/www/git/portfolio/public/images"
    projects_dir = f"{base_dir}/projects"
    
    # Create directories if they don't exist
    os.makedirs(base_dir, exist_ok=True)
    os.makedirs(projects_dir, exist_ok=True)
    
    # Download project thumbnails
    print("Downloading project thumbnails...")
    for i in range(1, 7):
        download_image(
            f"https://picsum.photos/seed/project{i}/600/400",
            projects_dir,
            f"project{i}.jpg"
        )
    
    # Download project detail images
    print("\nDownloading project detail images...")
    project_ids = ["e-commerce-platform", "data-visualization-dashboard"]
    for project_id in project_ids:
        for i in range(1, 4):
            download_image(
                f"https://picsum.photos/seed/{project_id}-detail{i}/800/600",
                projects_dir,
                f"{project_id}-detail{i}.jpg"
            )
    
    # Download other required images
    print("\nDownloading other required images...")
    other_images = [
        ("https://picsum.photos/seed/profile/500/600", base_dir, "profile.jpg"),
        ("https://picsum.photos/seed/hero/1920/1080", base_dir, "hero-bg.jpg"),
        ("https://picsum.photos/seed/wood-dark/1000/100", base_dir, "wood-texture-dark.png"),
        ("https://picsum.photos/seed/wood-light/1000/100", base_dir, "wood-texture-light.png"),
    ]
    
    for url, path, filename in other_images:
        download_image(url, path, filename)
    
    # Create a simple logo
    logo_path = os.path.join(base_dir, "logo.png")
    print(f"\nFor the logo, please create your own at {logo_path}")
    print("You can use tools like Canva or Figma to create a simple logo")

if __name__ == "__main__":
    print("Starting download of portfolio images...")
    main()
    print("\nDownload complete! Check your 'public/images' folder.")
