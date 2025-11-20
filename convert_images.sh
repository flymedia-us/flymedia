#!/bin/bash

cd public/lovable-uploads

for file in *.{jpg,png,jpeg}; do
  if [ -f "$file" ]; then
    filename="${file%.*}"
    echo "Converting $file to $filename.webp"
    ffmpeg -i "$file" -c:v libwebp -q:v 80 "$filename.webp" -y -loglevel error
  fi
done

# Also handle subdirectories if needed, but for now just the main dir
if [ -d "youtube-setup" ]; then
  cd youtube-setup
  for file in *.{jpg,png,jpeg}; do
    if [ -f "$file" ]; then
      filename="${file%.*}"
      echo "Converting youtube-setup/$file to youtube-setup/$filename.webp"
      ffmpeg -i "$file" -c:v libwebp -q:v 80 "$filename.webp" -y -loglevel error
    fi
  done
fi
